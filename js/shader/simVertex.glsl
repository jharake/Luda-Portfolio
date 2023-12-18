precision highp float;
uniform float time;
varying vec2 vUv;

void main() {
    vUv = uv;


    // vec4 mvPosition = modelViewMatrix * (vec4(new,1.));
    // gl_PointSize = 10. * (1. / -mvPosition.z);
    // gl_Position = projectionMatrix * mvPosition;

    gl_Position = projectionMatrix * modelViewMatrix *vec4(position,1.0);
}