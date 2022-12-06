varying vec2 vUv;
uniform float uPositionX;
uniform float uPositionY;
uniform float uPositionZ;
uniform float uRotationX;
uniform float uRotationAxisX;

mat4 rotation3d(vec3 axis, float angle) {
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;
  
    return mat4(
      oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
      oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
      oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
      0.0,                                0.0,                                0.0,                                1.0
    );
}
    void main()
    {
      //   vec4 modelPosition = modelMatrix * vec4(position, 1.0);
      //   modelPosition.x += uPositionX;
      //   modelPosition.y += uPositionY;
      //   modelPosition.z += uPositionZ;
      //  vec4 pos = rotation3d(vec3(uRotationAxisX, 0.0, 0.0), uRotationX) * modelPosition;    
      //   gl_Position =  projectionMatrix * modelViewMatrix * pos;
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

            modelPosition.x += uPositionX;
        modelPosition.y += uPositionY;
        modelPosition.z += uPositionZ;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;

          vUv = uv; 
    }