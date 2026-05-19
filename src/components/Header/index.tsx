import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  sphereLabelStyle,
  containerStyle,
  subtitleStyle,
  titleStyle,
  titleWrapStyle,
  instructionStyle,
} from "./style";

type HeaderSection = {
  accent: string;
  label: string;
  path: string;
  title: string;
};

type Disposable = { dispose: () => void };
type TextureLike = Disposable;

type CameraLike = {
  aspect: number;
  position: { x: number; y: number; z: number; set: (x: number, y: number, z: number) => void };
  lookAt: (x: number, y: number, z: number) => void;
  updateProjectionMatrix: () => void;
};

type RendererLike = {
  domElement: HTMLCanvasElement;
  setPixelRatio: (v: number) => void;
  setSize: (w: number, h: number) => void;
  render: (s: unknown, c: CameraLike) => void;
  dispose: () => void;
};

type MeshLike = {
  position: { x: number; y: number; z: number };
  rotation: { x: number; y: number };
  scale: { set: (x: number, y: number, z: number) => void };
  material: { emissiveIntensity?: number };
};

type PointsLike = {
  rotation: { y: number };
  geometry: Disposable;
  material: Disposable;
};

type PositionAttributeLike = { array: Float32Array; needsUpdate: boolean };

type BufferGeometryLike = Disposable & {
  computeVertexNormals: () => void;
  getAttribute: (n: string) => PositionAttributeLike;
  setAttribute: (n: string, a: unknown) => void;
};

type RaycastIntersectionLike = { object: MeshLike };
type RaycasterLike = {
  intersectObjects: (o: MeshLike[]) => RaycastIntersectionLike[];
  setFromCamera: (p: Vector2Like, c: CameraLike) => void;
};
type Vector2Like = { set: (x: number, y: number) => void };

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
  accentHex: number;
};

type ThreeModule = {
  AmbientLight: new (c: number, i: number) => unknown;
  BufferAttribute: new (a: Float32Array, s: number) => unknown;
  BufferGeometry: new () => BufferGeometryLike;
  CanvasTexture: new (c: HTMLCanvasElement) => TextureLike;
  Color: new (v: number) => unknown;
  DirectionalLight: new (c: number, i: number) => { position: { set: (x: number, y: number, z: number) => void } };
  Fog: new (c: number, n: number, f: number) => unknown;
  Mesh: new (g: Disposable, m: Disposable) => MeshLike;
  MeshStandardMaterial: new (o: Record<string, number>) => Disposable & { emissiveIntensity: number };
  PerspectiveCamera: new (f: number, a: number, n: number, fa: number) => CameraLike;
  PointLight: new (c: number, i: number, d: number) => { position: { set: (x: number, y: number, z: number) => void } };
  Points: new (g: BufferGeometryLike, m: Disposable) => PointsLike;
  PointsMaterial: new (o: Record<string, unknown>) => Disposable;
  Raycaster: new () => RaycasterLike;
  Scene: new () => { add: (o: unknown) => void; background: unknown; fog: unknown };
  SphereGeometry: new (r: number, w: number, h: number) => BufferGeometryLike;
  Vector2: new (x?: number, y?: number) => Vector2Like;
  WebGLRenderer: new (o: { antialias: boolean; alpha?: boolean }) => RendererLike;
};

declare global {
  interface Window { THREE?: ThreeModule }
}

const THREE_CDN = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";

const SPHERE_MATERIALS = [
  { color: 0xd9dee5, emissive: 0x2a3040, metalness: 0.92, roughness: 0.06 },
  { color: 0xfa2a12, emissive: 0x6c1a10, metalness: 0.65, roughness: 0.14 },
  { color: 0xfa0ce2, emissive: 0x60105a, metalness: 0.70, roughness: 0.12 },
  { color: 0x3520ff, emissive: 0x1a1060, metalness: 0.75, roughness: 0.10 },
  { color: 0x0afaeb, emissive: 0x106058, metalness: 0.72, roughness: 0.12 },
] as const;

const loadThree = () =>
  new Promise<ThreeModule>((resolve, reject) => {
    if (window.THREE) { resolve(window.THREE); return; }
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${THREE_CDN}"]`);
    if (existing) {
      existing.addEventListener("load", () => { window.THREE ? resolve(window.THREE) : reject(new Error("THREE missing")); }, { once: true });
      existing.addEventListener("error", () => reject(new Error("Failed to load three.js")), { once: true });
      return;
    }
    const script = document.createElement("script");
    script.src = THREE_CDN;
    script.async = true;
    script.onload = () => { window.THREE ? resolve(window.THREE) : reject(new Error("THREE missing")); };
    script.onerror = () => reject(new Error("Failed to load three.js"));
    document.body.appendChild(script);
  });

type HeaderProps = { sections: readonly HeaderSection[] };

const Header = ({ sections }: HeaderProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId = 0;
    let resetTimeoutId = 0;
    let renderer: RendererLike | undefined;
    let geometries: BufferGeometryLike[] = [];
    let materials: Disposable[] = [];
    let starTexture: TextureLike | undefined;
    let stars: PointsLike | undefined;
    let stars2: PointsLike | undefined;
    let disposed = false;

    const setupScene = async () => {
      const THREE = await loadThree();
      if (disposed) return;

      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x00010d);
      scene.fog = new THREE.Fog(0x00010d, 14, 42);

      const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.set(0, 0, 12);

      const renderInstance = new THREE.WebGLRenderer({ antialias: true });
      renderer = renderInstance;
      renderInstance.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderInstance.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderInstance.domElement);

      const sphereCount = Math.min(sections.length, SPHERE_MATERIALS.length);
      const ringRadius = 4.8;
      const sphereEntries: SphereEntry[] = [];
      const meshToIdx = new Map<MeshLike, number>();
      const sphereMaterials = SPHERE_MATERIALS.slice(0, sphereCount).map(c => new THREE.MeshStandardMaterial(c));
      materials = sphereMaterials;

      const labelLayer = document.createElement("div");
      Object.assign(labelLayer.style, { position: "absolute", inset: "0", pointerEvents: "none", zIndex: "1" });
      container.appendChild(labelLayer);

      for (let i = 0; i < sphereCount; i++) {
        const geo = new THREE.SphereGeometry(1.1, 128, 128);
        const posAttr = geo.getAttribute("position");
        const basePos = new Float32Array(posAttr.array);
        const mesh = new THREE.Mesh(geo, sphereMaterials[i]);
        const label = document.createElement("div");
        const sec = sections[i];

        Object.assign(label.style, sphereLabelStyle);
        label.textContent = sec.title;
        labelLayer.appendChild(label);

        scene.add(mesh);
        sphereEntries.push({
          basePositions: basePos, geometry: geo, labelElement: label, mesh, phase: i * 0.9,
          positionAttribute: posAttr, sectionLabel: sec.label, sectionPath: sec.path,
          sectionTitle: sec.title, accentHex: SPHERE_MATERIALS[i].color,
        });
        meshToIdx.set(mesh, i);
      }
      geometries = sphereEntries.map(e => e.geometry);

      // Lighting — cosmic deep space palette
      scene.add(new THREE.AmbientLight(0xb0c0ff, 0.35));
      const key = new THREE.DirectionalLight(0xe0e8ff, 3.2);
      key.position.set(5, 7, 10);
      scene.add(key);
      const fill = new THREE.PointLight(0x4040cc, 7, 32);
      fill.position.set(-6, -5, 3);
      scene.add(fill);
      const rim = new THREE.PointLight(0x8060ff, 16, 40);
      rim.position.set(-7, -1, -6);
      scene.add(rim);
      // Nebula tint from below
      const nebula = new THREE.PointLight(0x200080, 5, 30);
      nebula.position.set(0, -8, -4);
      scene.add(nebula);

      // Dynamic accent light that follows front sphere
      const accentLight = new THREE.PointLight(0xffffff, 0, 20);
      accentLight.position.set(0, 0, 6);
      scene.add(accentLight);

      // Stars - Layer 1
      const makeStars = (count: number, spread: number, size: number) => {
        const geo = new THREE.BufferGeometry();
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count * 3; i += 3) {
          pos[i] = (Math.random() - 0.5) * spread;
          pos[i + 1] = (Math.random() - 0.5) * spread;
          pos[i + 2] = (Math.random() - 0.5) * spread;
        }
        geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
        const canvas = document.createElement("canvas");
        canvas.width = 64; canvas.height = 64;
        const ctx = canvas.getContext("2d")!;
        const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        grad.addColorStop(0, "rgba(255,255,255,1)");
        grad.addColorStop(0.6, "rgba(255,255,255,0.9)");
        grad.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = grad;
        ctx.beginPath(); ctx.arc(32, 32, 32, 0, Math.PI * 2); ctx.fill();
        const tex = new THREE.CanvasTexture(canvas);
        const mat = new THREE.PointsMaterial({ alphaTest: 0.06, color: 0xffffff, depthWrite: false, map: tex, size, transparent: true });
        return { points: new THREE.Points(geo, mat), texture: tex };
      };

      const s1 = makeStars(4500, 70, 0.028);
      const s2 = makeStars(2000, 80, 0.048);
      const s3 = makeStars(800,  55, 0.07);
      stars = s1.points; stars2 = s2.points;
      starTexture = s1.texture;
      scene.add(s1.points); scene.add(s2.points); scene.add(s3.points);

      // Raycaster
      const raycaster = new THREE.Raycaster();
      const pointer = new THREE.Vector2();

      const getClickedIdx = (cx: number, cy: number) => {
        const rect = renderInstance.domElement.getBoundingClientRect();
        pointer.set(((cx - rect.left) / rect.width) * 2 - 1, -(((cy - rect.top) / rect.height) * 2 - 1));
        raycaster.setFromCamera(pointer, camera);
        const hits = raycaster.intersectObjects(sphereEntries.map(e => e.mesh));
        if (!hits.length) return null;
        return meshToIdx.get(hits[0].object) ?? null;
      };

      const handleResize = () => {
        if (!renderer) return;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      // State
      let currentRot = Math.PI / 2;
      let targetRot = Math.PI / 2;
      let velocity = 0;
      let isDragging = false;
      let totalDragX = 0;
      let pStartX = 0;
      let pStartY = 0;
      let dragDist = 0;
      let frontIdx = 0;
      let selectedIdx: number | null = null;
      let zoomStart = 0;
      let hasNav = false;
      const rotStep = (Math.PI * 2) / sphereEntries.length;

      // Mouse parallax
      let mouseX = 0;
      let mouseY = 0;

      const beginZoom = (idx: number) => {
        if (selectedIdx !== null) return;
        selectedIdx = idx;
        zoomStart = performance.now();
        hasNav = false;
        window.clearTimeout(resetTimeoutId);
        resetTimeoutId = window.setTimeout(() => {
          selectedIdx = null;
          hasNav = false;
        }, 1700);
      };

      const handleMouseDown = (e: MouseEvent) => {
        if (e.button !== 0 || selectedIdx !== null) return;
        isDragging = true;
        totalDragX = 0; pStartX = e.clientX; pStartY = e.clientY; dragDist = 0;
        container.style.cursor = "grabbing";
      };

      const handleMouseMove = (e: MouseEvent) => {
        // Parallax
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
        if (!isDragging || selectedIdx !== null) return;
        const dx = e.clientX - pStartX;
        const dy = e.clientY - pStartY;
        totalDragX = dx;
        dragDist = Math.max(dragDist, Math.abs(dx) + Math.abs(dy));
      };

      const handleMouseUp = (e: MouseEvent) => {
        if (!isDragging) return;
        isDragging = false;
        container.style.cursor = selectedIdx === null ? "grab" : "default";
        if (dragDist < 8 && selectedIdx === null) {
          const idx = getClickedIdx(e.clientX, e.clientY);
          if (idx !== null && idx === frontIdx) beginZoom(idx);
          return;
        }
        if (Math.abs(totalDragX) >= 24) {
          velocity = totalDragX < 0 ? rotStep : -rotStep;
          targetRot += velocity;
        }
      };

      // Touch support
      let touchStartX = 0;
      let touchStartY = 0;
      let touchDragDist = 0;

      const handleTouchStart = (e: TouchEvent) => {
        if (selectedIdx !== null || !e.touches.length) return;
        isDragging = true;
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        pStartX = touchStartX;
        totalDragX = 0;
        touchDragDist = 0;
      };

      const handleTouchMove = (e: TouchEvent) => {
        if (!isDragging || selectedIdx !== null || !e.touches.length) return;
        e.preventDefault();
        const dx = e.touches[0].clientX - pStartX;
        const dy = e.touches[0].clientY - touchStartY;
        totalDragX = dx;
        touchDragDist = Math.max(touchDragDist, Math.abs(dx) + Math.abs(dy));
        mouseX = (e.touches[0].clientX / window.innerWidth - 0.5) * 2;
        mouseY = (e.touches[0].clientY / window.innerHeight - 0.5) * 2;
      };

      const handleTouchEnd = (e: TouchEvent) => {
        if (!isDragging) return;
        isDragging = false;
        if (touchDragDist < 12 && selectedIdx === null && e.changedTouches.length) {
          const t = e.changedTouches[0];
          const idx = getClickedIdx(t.clientX, t.clientY);
          if (idx !== null && idx === frontIdx) beginZoom(idx);
          return;
        }
        if (Math.abs(totalDragX) >= 24) {
          targetRot += totalDragX < 0 ? rotStep : -rotStep;
        }
      };

      window.addEventListener("resize", handleResize);
      window.addEventListener("mouseup", handleMouseUp);
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mousedown", handleMouseDown);
      container.addEventListener("touchstart", handleTouchStart, { passive: true });
      container.addEventListener("touchmove", handleTouchMove, { passive: false });
      container.addEventListener("touchend", handleTouchEnd);
      container.style.cursor = "grab";

      const animate = () => {
        animationFrameId = window.requestAnimationFrame(animate);
        const now = performance.now();
        const t = now * 0.001;
        const zoomP = selectedIdx === null ? 0 : Math.min((now - zoomStart) / 700, 1);
        const easeZ = 1 - Math.pow(1 - zoomP, 3);

        // Smooth rotation with slight inertia
        currentRot += (targetRot - currentRot) * 0.07;

        // Camera parallax
        const camTargetX = mouseX * 0.4;
        const camTargetY = -mouseY * 0.3;
        const camZ = 12 - easeZ * 4.2;
        camera.position.x += (camTargetX - camera.position.x) * 0.04;
        camera.position.y += (camTargetY - camera.position.y) * 0.04;
        camera.position.z = camZ;
        camera.lookAt(0, 0, 0);

        let fIdx = -1;
        let fZ = -Infinity;

        for (let i = 0; i < sphereEntries.length; i++) {
          const e = sphereEntries[i];
          const angle = (i / sphereEntries.length) * Math.PI * 2 + currentRot;
          const arr = e.positionAttribute.array;
          const driftY = Math.cos(t * 0.8 + e.phase) * 0.2;
          const sx = 1 + Math.sin(t * 1.3 + e.phase) * 0.04;
          const sy = 1 + Math.cos(t * 1.0 + e.phase) * 0.06;
          const sz = 1 + Math.sin(t * 1.6 + 0.8 + e.phase) * 0.045;

          // Enhanced organic deformation
          for (let v = 0; v < arr.length; v += 3) {
            const bx = e.basePositions[v];
            const by = e.basePositions[v + 1];
            const bz = e.basePositions[v + 2];
            const w1 = Math.sin(by * 3.5 + t * 1.6 + e.phase) * 0.08 +
                       Math.cos(bz * 4.0 - t * 1.1 + e.phase) * 0.05;
            const w2 = Math.sin((bx + bz) * 5.0 - t * 1.35 + e.phase) * 0.04;
            const w3 = Math.cos(bx * 2.8 + by * 3.2 + t * 0.9 + e.phase) * 0.025;
            const relief = 1 + w1 + w2 + w3;
            arr[v] = bx * relief;
            arr[v + 1] = by * relief;
            arr[v + 2] = bz * relief;
          }

          const bX = Math.cos(angle) * ringRadius;
          const bZ = Math.sin(angle) * ringRadius;
          const isSel = i === selectedIdx;
          const scaleB = isSel ? 1 + easeZ * 5.6 : 1 - easeZ * 0.35;

          e.mesh.position.x = isSel ? bX + (0 - bX) * easeZ : bX;
          e.mesh.position.y = isSel ? driftY + (0 - driftY) * easeZ : driftY;
          e.mesh.position.z = isSel ? bZ + (5 - bZ) * easeZ : bZ;
          e.mesh.rotation.x = Math.sin(t * 0.4 + e.phase) * 0.2;
          e.mesh.rotation.y += isSel ? 0.005 : 0.0025;
          e.mesh.scale.set(sx * scaleB, sy * scaleB, sz * scaleB);

          if (e.mesh.position.z > fZ) { fZ = e.mesh.position.z; fIdx = i; }

          e.positionAttribute.needsUpdate = true;
          e.geometry.computeVertexNormals();
        }

        frontIdx = fIdx;

        // Update accent light to follow front sphere
        if (fIdx >= 0) {
          const fe = sphereEntries[fIdx];
          (accentLight as unknown as { color: { setHex: (h: number) => void } }).color.setHex(fe.accentHex);
          (accentLight as unknown as { intensity: number }).intensity = 4 + Math.sin(t * 2) * 1;
          (accentLight as unknown as { position: { x: number; y: number; z: number } }).position.x = fe.mesh.position.x;
          (accentLight as unknown as { position: { x: number; y: number; z: number } }).position.y = fe.mesh.position.y;
          (accentLight as unknown as { position: { x: number; y: number; z: number } }).position.z = fe.mesh.position.z + 2;
        }

        // Labels
        for (let i = 0; i < sphereEntries.length; i++) {
          const e = sphereEntries[i];
          if (i !== fIdx) { e.labelElement.style.opacity = "0"; continue; }
          const px = (e.mesh.position.x / camera.position.z) * window.innerHeight * 0.5;
          const py = (e.mesh.position.y / camera.position.z) * window.innerHeight * 0.5;
          e.labelElement.style.opacity = "1";
          e.labelElement.style.transform = `translate(-50%, -50%) translate(calc(50vw + ${px}px), calc(50vh + ${py - 110}px))`;
        }

        // Navigation trigger
        if (selectedIdx !== null && !hasNav && easeZ >= 0.82) {
          navigate(sphereEntries[selectedIdx].sectionPath);
          hasNav = true;
        }

        // Stars rotation — slow galactic drift
        s1.points.rotation.y += 0.00025;
        s1.points.rotation.x += 0.00008;
        s2.points.rotation.y -= 0.00012;
        s2.points.rotation.z += 0.00005;
        s3.points.rotation.y += 0.00018;
        s3.points.rotation.x -= 0.00006;

        renderInstance.render(scene, camera);
      };

      animate();

      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("mouseup", handleMouseUp);
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mousedown", handleMouseDown);
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchmove", handleTouchMove);
        container.removeEventListener("touchend", handleTouchEnd);
        window.clearTimeout(resetTimeoutId);
        labelLayer.remove();
      };
    };

    let cleanup: (() => void) | undefined;
    setupScene().then(c => { cleanup = c; }).catch(console.error);

    return () => {
      disposed = true;
      window.cancelAnimationFrame(animationFrameId);
      window.clearTimeout(resetTimeoutId);
      cleanup?.();
      geometries.forEach(g => g.dispose());
      materials.forEach(m => m.dispose());
      stars?.geometry?.dispose?.(); stars?.material?.dispose?.();
      stars2?.geometry?.dispose?.(); stars2?.material?.dispose?.();
      starTexture?.dispose?.();
      renderer?.dispose?.();
      if (renderer?.domElement && container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
    };
  }, [navigate, sections]);

  return (
    <div ref={containerRef} style={containerStyle}>
      <div style={titleWrapStyle}>
        <div style={titleStyle}>PORTFOLIO</div>
        <div style={subtitleStyle}>GIOVANI SANCHEZ</div>
      </div>
      <div style={instructionStyle}>
        arrastar para girar · clique para entrar
      </div>
    </div>
  );
};

export default Header;
