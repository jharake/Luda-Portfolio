precision highp float;

uniform float time;
varying vec2 vUv;
uniform sampler2D uPositions;

varying vec2 vColor;

void main() {
    vUv = uv;

    vec4 pos = texture2D(uPositions,uv);

    float ting = atan(pos.y,pos.x);

    vColor = vec2(cos(ting+time)*0.5+0.5, -cos(ting+time)*0.5+0.5);

    vec4 mvPosition = modelViewMatrix * (vec4(pos.xy,0.0,1.));
    gl_PointSize = 8. * (1. / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;

    // gl_Position = projectionMatrix * modelViewMatrix *vec4(position,1.0);
}