uniform sampler2D uTexture;
uniform float uAlpha;
varying vec2 vUv;

void main()
  {
    vec4 tex = texture2D(uTexture, vUv).rgba;
    gl_FragColor = vec4(tex.r, tex.g, tex.b, tex.a - uAlpha);
  }