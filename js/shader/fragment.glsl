precision highp float;
varying vec2 vUv;

varying vec2 vColor;

void main(){

    //distance from center of particle

    float dist = length(gl_PointCoord - vec2(0.5,0.5));
    
    float alpha =1.0 - smoothstep(0.1,0.5,dist);

    gl_FragColor = vec4(abs(vColor.x),0.3,abs(vColor.y),alpha);    
}
