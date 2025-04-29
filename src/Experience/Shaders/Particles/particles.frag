void main()
{
    float strength = distance(gl_PointCoord, vec2(0.5));
    strength = 1.0 - strength;
    strength = pow(strength, 3.0);

    vec3 color = vec3(0.8, 0.2, 1.0);
    gl_FragColor = vec4(color, strength);
} 