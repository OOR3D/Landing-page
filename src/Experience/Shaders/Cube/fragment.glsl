varying vec2 vUv;
uniform sampler2D uTexture;
uniform float uTime;

void main()
{
    float strength = distance(gl_PointCoord, vec2(0.5));
    strength = 1.0 - strength;
    strength = pow(strength, 10.0);

    vec3 color = vec3(strength);

    gl_FragColor = vec4(color, strength);
} 