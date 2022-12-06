export const disposeMesh = (meshes, scene) => {
  for (let i = 0; i < meshes.length; i++) {
    const currentMesh = meshes[i];
    currentMesh.geometry.dispose();
    currentMesh.material.dispose();
    scene.remove(currentMesh);
  }
};
