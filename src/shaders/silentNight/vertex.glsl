varying vec2 vUv;
uniform float uPositionX;
uniform float uPositionY;
uniform float uPositionZ;
void main()
{
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    modelPosition.x += uPositionX;
    modelPosition.y += uPositionY;
    modelPosition.z += uPositionZ;
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;
    vUv = uv; 
}