import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  sphereLabelStyle,
  containerStyle,
  subtitleStyle,
  titleStyle,
  titleWrapStyle,
} from "./style";

type HeaderSection = {
  accent: string;
  label: string;
  path: string;
  title: string;
};

type Disposable = {
  dispose: () => void;
};

type TextureLike = Disposable;

type CameraLike = {
  aspect: number;
  position: {
    z: number;
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

type PositionAttributeLike = {
  array: Float32Array;
  needsUpdate: boolean;
};

type BufferGeometryLike = Disposable & {
  computeVertexNormals: () => void;
  getAttribute: (name: string) => PositionAttributeLike;
  setAttribute: (name: string, attribute: unknown) => void;
};

type RaycastIntersectionLike = {
  object: MeshLike;
};

type RaycasterLike = {
  intersectObjects: (objects: MeshLike[]) => RaycastIntersectionLike[];
  setFromCamera: (pointer: Vector2Like, camera: CameraLike) => void;
};

type Vector2Like = {
  set: (x: number, y: number) => void;
};

type SphereEntry = {
  basePositions: Float32Array;
  geometry: BufferGeometryLike;
  labelElement: HTMLDivElement;
  mesh: MeshLike;
  phase: number;
  positionAttribute: PositionAttributeLike;
  sectionLabel: string;
  sectionPath: string;
  sectionTitle: string;
};

type ThreeModule = {
  AmbientLight: new (color: number, intensity: number) => unknown;
  BufferAttribute: new (array: Float32Array, itemSize: number) => unknown;
  BufferGeometry: new () => BufferGeometryLike;
  CanvasTexture: new (canvas: HTMLCanvasElement) => TextureLike;
  Color: new (value: number) => unknown;
  DirectionalLight: new (color: number, intensity: number) => {
    position: {
      set: (x: number, y: number, z: number) => void;
    };
  };
  Fog: new (color: number, near: number, far: number) => unknown;
  Mesh: new (geometry: Disposable, material: Disposable) => MeshLike;
  MeshStandardMaterial: new (options: {
    color: number;
    emissive: number;
    metalness: number;
    roughness: number;
  }) => Disposable;
  PerspectiveCamera: new (
    fov: number,
    aspect: number,
    near: number,
    far: number,
  ) => CameraLike;
  PointLight: new (color: number, intensity: number, distance: number) => {
    position: {
      set: (x: number, y: number, z: number) => void;
    };
  };
  Points: new (
    geometry: BufferGeometryLike,
    material: Disposable,
  ) => PointsLike;
  PointsMaterial: new (options: {
    alphaTest?: number;
    color: number;
    depthWrite?: boolean;
    map?: TextureLike;
    size: number;
    transparent?: boolean;
  }) => Disposable;
  Raycaster: new () => RaycasterLike;
  Scene: new () => {
    add: (object: unknown) => void;
    background: unknown;
    fog: unknown;
  };
  SphereGeometry: new (
    radius: number,
    widthSegments: number,
    heightSegments: number,
  ) => BufferGeometryLike;
  Vector2: new (x?: number, y?: number) => Vector2Like;
  WebGLRenderer: new (options: { antialias: boolean }) => RendererLike;
};

declare global {
  interface Window {
    THREE?: ThreeModule;
  }
}

const THREE_CDN =
  "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";

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
        { once: true },
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

type HeaderProps = {
  sections: readonly HeaderSection[];
};

const Header = ({ sections }: HeaderProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    let animationFrameId = 0;
    let resetTransitionTimeoutId = 0;
    let renderer: RendererLike | undefined;
    let geometries: BufferGeometryLike[] = [];
    let materials: Disposable[] = [];
    let starTexture: TextureLike | undefined;
    let stars: PointsLike | undefined;
    let disposed = false;

    const setupScene = async () => {
      const THREE = await loadThree();

      if (disposed) {
        return;
      }

      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x02040a);
      scene.fog = new THREE.Fog(0x02040a, 10, 30);

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

      const sphereCount = Math.min(
        sections.length,
        SPHERE_MATERIALS.length,
      );
      const ringRadius = 4.6;
      const sphereEntries: SphereEntry[] = [];
      const meshToSphereIndex = new Map<MeshLike, number>();
      const sphereMaterials = SPHERE_MATERIALS.slice(0, sphereCount).map(
        (materialConfig) => new THREE.MeshStandardMaterial(materialConfig),
      );
      materials = sphereMaterials;
      const labelLayer = document.createElement("div");
      labelLayer.style.position = "absolute";
      labelLayer.style.inset = "0";
      labelLayer.style.pointerEvents = "none";
      labelLayer.style.zIndex = "1";
      container.appendChild(labelLayer);

      for (let index = 0; index < sphereCount; index += 1) {
        const geometryInstance = new THREE.SphereGeometry(1.05, 96, 96);
        const positionAttribute = geometryInstance.getAttribute("position");
        const basePositions = new Float32Array(positionAttribute.array);
        const mesh = new THREE.Mesh(geometryInstance, sphereMaterials[index]);
        const labelElement = document.createElement("div");
        const section = sections[index];

        Object.assign(labelElement.style, sphereLabelStyle);
        labelElement.textContent = section.title;
        labelLayer.appendChild(labelElement);

        scene.add(mesh);
        sphereEntries.push({
          basePositions,
          geometry: geometryInstance,
          labelElement,
          mesh,
          phase: index * 0.9,
          positionAttribute,
          sectionLabel: section.label,
          sectionPath: section.path,
          sectionTitle: section.title,
        });
        meshToSphereIndex.set(mesh, index);
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

      const starCanvas = document.createElement("canvas");
      starCanvas.width = 64;
      starCanvas.height = 64;
      const starContext = starCanvas.getContext("2d");

      if (!starContext) {
        throw new Error("Nao foi possivel criar o contexto das estrelas");
      }

      const starGradient = starContext.createRadialGradient(32, 32, 0, 32, 32, 32);
      starGradient.addColorStop(0, "rgba(255,255,255,1)");
      starGradient.addColorStop(0.7, "rgba(255,255,255,0.95)");
      starGradient.addColorStop(1, "rgba(255,255,255,0)");
      starContext.fillStyle = starGradient;
      starContext.beginPath();
      starContext.arc(32, 32, 32, 0, Math.PI * 2);
      starContext.fill();

      starTexture = new THREE.CanvasTexture(starCanvas);
      const starMaterial = new THREE.PointsMaterial({
        alphaTest: 0.08,
        color: 0xffffff,
        depthWrite: false,
        map: starTexture,
        size: 0.035,
        transparent: true,
      });

      const starField = new THREE.Points(starGeometry, starMaterial);
      stars = starField;
      scene.add(starField);

      const raycaster = new THREE.Raycaster();
      const pointer = new THREE.Vector2();

      const getClickedSphereIndex = (
        clientX: number,
        clientY: number,
      ) => {
        const rect = renderInstance.domElement.getBoundingClientRect();
        pointer.set(
          ((clientX - rect.left) / rect.width) * 2 - 1,
          -(((clientY - rect.top) / rect.height) * 2 - 1),
        );
        raycaster.setFromCamera(pointer, camera);

        const intersections = raycaster.intersectObjects(
          sphereEntries.map((entry) => entry.mesh),
        );

        if (intersections.length === 0) {
          return null;
        }

        const hitIndex = meshToSphereIndex.get(intersections[0].object);
        return hitIndex ?? null;
      };

      const handleResize = () => {
        if (!renderer) {
          return;
        }

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      let currentRotation = Math.PI / 2;
      let targetRotation = Math.PI / 2;
      let isDragging = false;
      let totalDragX = 0;
      let pointerStartX = 0;
      let pointerStartY = 0;
      let draggedDistance = 0;
      let currentFrontSphereIndex = 0;
      let selectedSphereIndex: number | null = null;
      let zoomStartedAt = 0;
      let hasNavigated = false;
      const rotationStep = (Math.PI * 2) / sphereEntries.length;

      const beginZoom = (sphereIndex: number) => {
        if (selectedSphereIndex !== null) {
          return;
        }

        selectedSphereIndex = sphereIndex;
        zoomStartedAt = performance.now();
        hasNavigated = false;

        window.clearTimeout(resetTransitionTimeoutId);
        resetTransitionTimeoutId = window.setTimeout(() => {
          selectedSphereIndex = null;
          hasNavigated = false;
          camera.position.set(0, 0, 11);
        }, 1700);
      };

      const handleMouseDown = (event: MouseEvent) => {
        if (event.button !== 0 || selectedSphereIndex !== null) {
          return;
        }

        isDragging = true;
        totalDragX = 0;
        pointerStartX = event.clientX;
        pointerStartY = event.clientY;
        draggedDistance = 0;
        container.style.cursor = "grabbing";
      };

      const handleMouseMove = (event: MouseEvent) => {
        if (!isDragging || selectedSphereIndex !== null) {
          return;
        }

        const deltaX = event.clientX - pointerStartX;
        const deltaY = event.clientY - pointerStartY;
        totalDragX = deltaX;
        draggedDistance = Math.max(
          draggedDistance,
          Math.abs(deltaX) + Math.abs(deltaY),
        );
      };

      const handleMouseUp = (event: MouseEvent) => {
        if (!isDragging) {
          return;
        }

        isDragging = false;
        container.style.cursor = selectedSphereIndex === null ? "grab" : "default";

        if (draggedDistance < 8 && selectedSphereIndex === null) {
          const sphereIndex = getClickedSphereIndex(event.clientX, event.clientY);

          if (
            sphereIndex !== null &&
            sphereIndex === currentFrontSphereIndex
          ) {
            beginZoom(sphereIndex);
          }
          return;
        }

        if (Math.abs(totalDragX) >= 24) {
          if (totalDragX < 0) {
            targetRotation += rotationStep;
          } else {
            targetRotation -= rotationStep;
          }
        }
      };

      window.addEventListener("resize", handleResize);
      window.addEventListener("mouseup", handleMouseUp);
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mousedown", handleMouseDown);
      container.style.cursor = "grab";

      const animate = () => {
        animationFrameId = window.requestAnimationFrame(animate);
        const now = performance.now();
        const time = now * 0.001;
        const zoomProgress =
          selectedSphereIndex === null
            ? 0
            : Math.min((now - zoomStartedAt) / 700, 1);
        const easedZoom =
          1 - Math.pow(1 - zoomProgress, 3);

        currentRotation += (targetRotation - currentRotation) * 0.08;
        camera.position.set(0, 0, 11 - easedZoom * 3.8);

        let frontSphereIndex = -1;
        let frontSphereZ = Number.NEGATIVE_INFINITY;

        for (let index = 0; index < sphereEntries.length; index += 1) {
          const entry = sphereEntries[index];
          const angle =
            (index / sphereEntries.length) * Math.PI * 2 + currentRotation;
          const reliefArray = entry.positionAttribute.array;
          const driftY = Math.cos(time * 0.9 + entry.phase) * 0.18;
          const stretchX = 1 + Math.sin(time * 1.4 + entry.phase) * 0.035;
          const stretchY = 1 + Math.cos(time * 1.1 + entry.phase) * 0.055;
          const stretchZ = 1 + Math.sin(time * 1.7 + 0.8 + entry.phase) * 0.04;

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

          const baseX = Math.cos(angle) * ringRadius;
          const baseZ = Math.sin(angle) * ringRadius;
          const isSelected = index === selectedSphereIndex;
          const targetX = 0;
          const targetY = 0;
          const targetZ = 4.6;
          const scaleBoost = isSelected ? 1 + easedZoom * 5.6 : 1 - easedZoom * 0.35;

          entry.mesh.position.x = isSelected
            ? baseX + (targetX - baseX) * easedZoom
            : baseX;
          entry.mesh.position.y = isSelected
            ? driftY + (targetY - driftY) * easedZoom
            : driftY;
          entry.mesh.position.z = isSelected
            ? baseZ + (targetZ - baseZ) * easedZoom
            : baseZ;
          entry.mesh.rotation.x = Math.sin(time * 0.45 + entry.phase) * 0.18;
          entry.mesh.rotation.y += isSelected ? 0.004 : 0.0021;
          entry.mesh.scale.set(
            stretchX * scaleBoost,
            stretchY * scaleBoost,
            stretchZ * scaleBoost,
          );

          if (entry.mesh.position.z > frontSphereZ) {
            frontSphereZ = entry.mesh.position.z;
            frontSphereIndex = index;
          }

          entry.positionAttribute.needsUpdate = true;
          entry.geometry.computeVertexNormals();
        }

        currentFrontSphereIndex = frontSphereIndex;

        for (let index = 0; index < sphereEntries.length; index += 1) {
          const entry = sphereEntries[index];

          if (index !== frontSphereIndex) {
            entry.labelElement.style.opacity = "0";
            continue;
          }

          const projectedX =
            (entry.mesh.position.x / camera.position.z) * window.innerHeight * 0.52;
          const projectedY =
            (entry.mesh.position.y / camera.position.z) * window.innerHeight * 0.52;

          entry.labelElement.style.opacity = "1";
          entry.labelElement.style.transform = `translate(-50%, -50%) translate(calc(50vw + ${projectedX}px), calc(50vh + ${projectedY - 104}px)) scale(1)`;
        }

        if (
          selectedSphereIndex !== null &&
          !hasNavigated &&
          easedZoom >= 0.82
        ) {
          const targetPath = sphereEntries[selectedSphereIndex].sectionPath;
          navigate(targetPath);
          hasNavigated = true;
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
        window.clearTimeout(resetTransitionTimeoutId);
        labelLayer.remove();
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
      window.clearTimeout(resetTransitionTimeoutId);
      removeResizeListener?.();
      geometries.forEach((entry) => entry.dispose());
      materials.forEach((entry) => entry.dispose());
      stars?.geometry?.dispose?.();
      stars?.material?.dispose?.();
      starTexture?.dispose?.();
      renderer?.dispose?.();

      if (renderer?.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [navigate, sections]);

  return (
    <div ref={containerRef} style={containerStyle}>
      <div style={titleWrapStyle}>
        <div style={titleStyle}>PORTIFOLIO</div>
        <div style={subtitleStyle}>GIOVANI SANCHEZ</div>
      </div>
    </div>
  );
};

export default Header;
