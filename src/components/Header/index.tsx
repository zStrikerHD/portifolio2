import { useEffect, useRef } from "react";

type Disposable = {
  dispose: () => void;
};

type CameraLike = {
  aspect: number;
  position: {
    set: (x: number, y: number, z: number) => void;
  };
  updateProjectionMatrix: () => void;
};

type RendererLike = {
  domElement: HTMLCanvasElement;
  setPixelRatio: (value: number) => void;
  setSize: (width: number, height: number) => void;
  render: (scene: unknown, camera: CameraLike) => void;
  dispose: () => void;
};

type MeshLike = {
  position: {
    x: number;
    y: number;
    z: number;
  };
  rotation: {
    x: number;
    y: number;
  };
  scale: {
    set: (x: number, y: number, z: number) => void;
  };
};

type PointsLike = {
  rotation: {
    y: number;
  };
  geometry: Disposable;
  material: Disposable;
};

type BufferGeometryLike = Disposable & {
  computeVertexNormals: () => void;
  getAttribute: (name: string) => PositionAttributeLike;
  setAttribute: (name: string, attribute: unknown) => void;
};

type PositionAttributeLike = {
  array: Float32Array;
  needsUpdate: boolean;
};

type SphereEntry = {
  basePositions: Float32Array;
  geometry: BufferGeometryLike;
  mesh: MeshLike;
  phase: number;
  positionAttribute: PositionAttributeLike;
};

type ThreeModule = {
  Scene: new () => {
    background: unknown;
    fog: unknown;
    add: (object: unknown) => void;
  };
  Color: new (value: number) => unknown;
  Fog: new (color: number, near: number, far: number) => unknown;
  PerspectiveCamera: new (
    fov: number,
    aspect: number,
    near: number,
    far: number,
  ) => CameraLike;
  WebGLRenderer: new (options: { antialias: boolean }) => RendererLike;
  SphereGeometry: new (
    radius: number,
    widthSegments: number,
    heightSegments: number,
  ) => BufferGeometryLike;
  MeshStandardMaterial: new (options: {
    color: number;
    emissive: number;
    metalness: number;
    roughness: number;
  }) => Disposable;
  Mesh: new (geometry: Disposable, material: Disposable) => MeshLike;
  AmbientLight: new (color: number, intensity: number) => unknown;
  DirectionalLight: new (color: number, intensity: number) => {
    position: {
      set: (x: number, y: number, z: number) => void;
    };
  };
  PointLight: new (color: number, intensity: number, distance: number) => {
    position: {
      set: (x: number, y: number, z: number) => void;
    };
  };
  BufferGeometry: new () => BufferGeometryLike;
  BufferAttribute: new (array: Float32Array, itemSize: number) => unknown;
  PointsMaterial: new (options: { color: number; size: number }) => Disposable;
  Points: new (
    geometry: BufferGeometryLike,
    material: Disposable,
  ) => PointsLike;
};

declare global {
  interface Window {
    THREE?: ThreeModule;
  }
}

const THREE_CDN =
  "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";

const titleWrapStyle = {
  position: "absolute",
  top: "2rem",
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.35rem",
  pointerEvents: "none",
  zIndex: 2,
} as const;

const titleStyle = {
  color: "#f4f7ff",
  fontSize: "0.95rem",
  letterSpacing: "0.42em",
  textTransform: "uppercase",
  textShadow: "0 0 18px rgba(255,255,255,0.18)",
} as const;

const subtitleStyle = {
  color: "#d9dee5",
  fontSize: "1.6rem",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  textShadow: "0 0 24px rgba(180,195,230,0.22)",
} as const;

const SPHERE_MATERIALS = [
  {
    color: 0xd9dee5,
    emissive: 0x1f232a,
    metalness: 0.95,
    roughness: 0.08,
  },
  {
    color: 0xfa2a12,
    emissive: 0x5c130d,
    metalness: 0.68,
    roughness: 0.18,
  },
  {
    color: 0xfa0ce2,
    emissive: 0x550a4e,
    metalness: 0.72,
    roughness: 0.16,
  },
  {
    color: 0x2000fa,
    emissive: 0x151052,
    metalness: 0.78,
    roughness: 0.14,
  },
  {
    color: 0x0afaeb,
    emissive: 0x0d4d52,
    metalness: 0.74,
    roughness: 0.16,
  },
] as const;

const loadThree = () =>
  new Promise<ThreeModule>((resolve, reject) => {
    if (window.THREE) {
      resolve(window.THREE);
      return;
    }

    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${THREE_CDN}"]`,
    );

    if (existingScript) {
      existingScript.addEventListener(
        "load",
        () => {
          if (window.THREE) {
            resolve(window.THREE);
            return;
          }

          reject(new Error("three.js carregou sem expor window.THREE"));
        },
        {
          once: true,
        },
      );
      existingScript.addEventListener(
        "error",
        () => reject(new Error("Falha ao carregar three.js")),
        { once: true },
      );
      return;
    }

    const script = document.createElement("script");
    script.src = THREE_CDN;
    script.async = true;
    script.onload = () => {
      if (window.THREE) {
        resolve(window.THREE);
        return;
      }

      reject(new Error("three.js carregou sem expor window.THREE"));
    };
    script.onerror = () => reject(new Error("Falha ao carregar three.js"));
    document.body.appendChild(script);
  });

const Header = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    let animationFrameId = 0;
    let renderer: RendererLike | undefined;
    let geometries: BufferGeometryLike[] = [];
    let materials: Disposable[] = [];
    let stars: PointsLike | undefined;
    let disposed = false;

    const setupScene = async () => {
      const THREE = await loadThree();

      if (disposed) {
        return;
      }

      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x02040a);
      scene.fog = new THREE.Fog(0x02040a, 10, 28);

      const camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        1000,
      );
      camera.position.set(0, 0, 11);

      const renderInstance = new THREE.WebGLRenderer({ antialias: true });
      renderer = renderInstance;
      renderInstance.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderInstance.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderInstance.domElement);

      const sphereCount = 5;
      const ringRadius = 4.6;
      const sphereEntries: SphereEntry[] = [];
      const sphereMaterials = SPHERE_MATERIALS.map(
        (materialConfig) => new THREE.MeshStandardMaterial(materialConfig),
      );
      materials = sphereMaterials;

      for (let index = 0; index < sphereCount; index += 1) {
        const geometryInstance = new THREE.SphereGeometry(1.05, 96, 96);
        const positionAttribute = geometryInstance.getAttribute("position");
        const basePositions = new Float32Array(positionAttribute.array);
        const mesh = new THREE.Mesh(geometryInstance, sphereMaterials[index]);

        scene.add(mesh);
        sphereEntries.push({
          basePositions,
          geometry: geometryInstance,
          mesh,
          phase: index * 0.9,
          positionAttribute,
        });
      }

      geometries = sphereEntries.map((entry) => entry.geometry);

      const ambientLight = new THREE.AmbientLight(0xe9eef7, 0.4);
      scene.add(ambientLight);

      const keyLight = new THREE.DirectionalLight(0xffffff, 3.2);
      keyLight.position.set(5, 6, 9);
      scene.add(keyLight);

      const fillLight = new THREE.PointLight(0x6e7c93, 5, 26);
      fillLight.position.set(-5, -4, 2);
      scene.add(fillLight);

      const rimLight = new THREE.PointLight(0xf7fbff, 12, 30);
      rimLight.position.set(-6, -1, -5);
      scene.add(rimLight);

      const starGeometry = new THREE.BufferGeometry();
      const starCount = 2500;
      const starPositions = new Float32Array(starCount * 3);

      for (let index = 0; index < starCount * 3; index += 3) {
        starPositions[index] = (Math.random() - 0.5) * 45;
        starPositions[index + 1] = (Math.random() - 0.5) * 45;
        starPositions[index + 2] = (Math.random() - 0.5) * 45;
      }

      starGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(starPositions, 3),
      );

      const starMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.035,
      });

      const starField = new THREE.Points(starGeometry, starMaterial);
      stars = starField;
      scene.add(starField);

      const handleResize = () => {
        if (!renderer) {
          return;
        }

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      let currentRotation = 0;
      let targetRotation = 0;
      let isDragging = false;
      let lastPointerX = 0;

      const handleMouseDown = (event: MouseEvent) => {
        isDragging = true;
        lastPointerX = event.clientX;
        container.style.cursor = "grabbing";
      };

      const handleMouseMove = (event: MouseEvent) => {
        if (!isDragging) {
          return;
        }

        const deltaX = event.clientX - lastPointerX;
        lastPointerX = event.clientX;
        targetRotation -= deltaX * 0.0085;
      };

      const handleMouseUp = () => {
        isDragging = false;
        container.style.cursor = "grab";
      };

      window.addEventListener("resize", handleResize);
      window.addEventListener("mouseup", handleMouseUp);
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mousedown", handleMouseDown);
      container.style.cursor = "grab";

      const animate = () => {
        animationFrameId = window.requestAnimationFrame(animate);
        const time = performance.now() * 0.001;
        currentRotation += (targetRotation - currentRotation) * 0.08;

        for (let index = 0; index < sphereEntries.length; index += 1) {
          const entry = sphereEntries[index];
          const angle =
            (index / sphereEntries.length) * Math.PI * 2 + currentRotation;
          const reliefArray = entry.positionAttribute.array;
          const driftY = Math.cos(time * 0.9 + entry.phase) * 0.18;
          const stretchX =
            1 + Math.sin(time * 1.4 + entry.phase) * 0.035;
          const stretchY =
            1 + Math.cos(time * 1.1 + entry.phase) * 0.055;
          const stretchZ =
            1 + Math.sin(time * 1.7 + 0.8 + entry.phase) * 0.04;

          for (let vertexIndex = 0; vertexIndex < reliefArray.length; vertexIndex += 3) {
            const baseX = entry.basePositions[vertexIndex];
            const baseY = entry.basePositions[vertexIndex + 1];
            const baseZ = entry.basePositions[vertexIndex + 2];
            const waveA =
              Math.sin(baseY * 3.8 + time * 1.7 + entry.phase) * 0.075 +
              Math.cos(baseZ * 4.4 - time * 1.2 + entry.phase) * 0.045;
            const waveB =
              Math.sin((baseX + baseZ) * 5.2 - time * 1.45 + entry.phase) * 0.035;
            const relief = 1 + waveA + waveB;

            reliefArray[vertexIndex] = baseX * relief;
            reliefArray[vertexIndex + 1] = baseY * relief;
            reliefArray[vertexIndex + 2] = baseZ * relief;
          }

          entry.mesh.position.x = Math.cos(angle) * ringRadius;
          entry.mesh.position.y = driftY;
          entry.mesh.position.z = Math.sin(angle) * ringRadius;
          entry.mesh.rotation.x = Math.sin(time * 0.45 + entry.phase) * 0.18;
          entry.mesh.rotation.y += 0.0021;
          entry.mesh.scale.set(stretchX, stretchY, stretchZ);
          entry.positionAttribute.needsUpdate = true;
          entry.geometry.computeVertexNormals();
        }

        starField.rotation.y += 0.00035;

        renderInstance.render(scene, camera);
      };

      animate();

      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("mouseup", handleMouseUp);
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mousedown", handleMouseDown);
      };
    };

    let removeResizeListener: (() => void) | undefined;

    setupScene()
      .then((cleanup) => {
        removeResizeListener = cleanup;
      })
      .catch((error) => {
        console.error(error);
      });

    return () => {
      disposed = true;
      window.cancelAnimationFrame(animationFrameId);
      removeResizeListener?.();
      geometries.forEach((entry) => entry.dispose());
      materials.forEach((entry) => entry.dispose());
      stars?.geometry?.dispose?.();
      stars?.material?.dispose?.();
      renderer?.dispose?.();

      if (renderer?.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ position: "relative", width: "100vw", height: "100vh" }}
    >
      <div style={titleWrapStyle}>
        <div style={titleStyle}>PORTIFOLIO</div>
        <div style={subtitleStyle}>GIOVANI SANCHEZ</div>
      </div>
    </div>
  );
};

export default Header;
