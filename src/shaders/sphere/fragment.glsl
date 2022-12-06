uniform sampler2D uTexture;
varying vec2 vUv;

uniform float uRepeat;
uniform float uTime;

void main()
{
    vec2 uv2 = fract(vUv * vec2(uRepeat, uRepeat)+ uTime);
   gl_FragColor = texture2D(uTexture, uv2);
}