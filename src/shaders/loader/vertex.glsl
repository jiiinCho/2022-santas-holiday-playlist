uniform float uRatio;
void main()
{
   gl_Position =  modelMatrix *  vec4(position.x, position.y * uRatio, position.z, 1.0);
}
