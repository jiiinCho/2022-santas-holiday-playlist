uniform vec3 uBackgroundColor;
uniform float uAlpha;

void main()
{
    gl_FragColor = vec4(uBackgroundColor, uAlpha);
}