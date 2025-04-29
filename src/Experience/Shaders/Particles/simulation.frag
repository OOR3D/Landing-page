uniform float uTime;
uniform sampler2D uTextureA;
uniform sampler2D uTextureB;
varying vec2 vUv;

void main() {
    vec4 positionInfo = texture2D(uTextureA, vUv);
    vec3 position = positionInfo.xyz;
    
    // Simple particle movement
    position.x += sin(uTime * 0.5 + position.y * 2.0) * 0.01;
    position.y += cos(uTime * 0.5 + position.x * 2.0) * 0.01;
    position.z += sin(uTime * 0.3) * 0.01;
    
    gl_FragColor = vec4(position, 1.0);
} 