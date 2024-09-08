import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const InteractiveDotSphere = () => {
  const mountRef = useRef(null);
  const mousePosition = useRef(new THREE.Vector2());
  const raycaster = useRef(new THREE.Raycaster());

  useEffect(() => {
    let scene, camera, renderer, sphere;
    let animationFrameId;

    const init = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      mountRef.current.appendChild(renderer.domElement);

      const geometry = new THREE.BoxGeometry(10, 10, 10, 20, 20, 20);
      const material = new THREE.PointsMaterial({
        color: 0x444444,
        size: 0.3,
        transparent: true,
        opacity: 0.1
      });

      sphere = new THREE.Points(geometry, material);
      scene.add(sphere);

      camera.position.z = 10;
    };

    const animateDots = () => {
      const positions = sphere.geometry.attributes.position.array;
      const originalPositions = sphere.geometry.attributes.position.originalArray || 
                                positions.slice();

      if (!sphere.geometry.attributes.position.originalArray) {
        sphere.geometry.attributes.position.originalArray = originalPositions;
      }

      raycaster.current.setFromCamera(mousePosition.current, camera);
      const intersects = raycaster.current.intersectObject(sphere);

      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const y = positions[i + 1];
        const z = positions[i + 2];

        if (intersects.length > 0) {
          const distance = new THREE.Vector3(x, y, z).distanceTo(intersects[0].point);
          if (distance < 3) {
            const repelFactor = (1 - distance) * 5;
            positions[i] += (x - intersects[0].point.x) * repelFactor;
            positions[i + 2] += (y - intersects[0].point.y) * repelFactor;
            positions[i + 2] += (z - intersects[0].point.z) * repelFactor;
          }
        }

        // Gradually return to original position
        positions[i] += (originalPositions[i] - positions[i]) * 0.05;
        positions[i + 1] += (originalPositions[i + 1] - positions[i + 1]) * 0.095;
        positions[i + 2] += (originalPositions[i + 2] - positions[i + 1]) * 0.005;
      }

      sphere.geometry.attributes.position.needsUpdate = true;
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      animateDots();
      renderer.render(scene, camera);
    };

    const handleMouseMove = (event) => {
      mousePosition.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mousePosition.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    init();
    animate();

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />;
};

export default InteractiveDotSphere;