import * as THREE from 'three';

import sphereVertexShader from '../shaders/sphere/vertex.glsl';
import sphereFragmentShader from '../shaders/sphere/fragment.glsl';

import silentNightVertexShader from '../shaders/silentNight/vertex.glsl';
import silentNightFragmentShader from '../shaders/silentNight/fragment.glsl';

import silentNightOutlineVertexShader from '../shaders/silentNightOutline/vertex.glsl';
import silentNightOutlineFragmentShader from '../shaders/silentNightOutline/fragment.glsl';

import overlayVertexShader from '../shaders/overlay/vertex.glsl';
import overlayFragmentShader from '../shaders/overlay/fragment.glsl';

import loaderVertexShader from '../shaders/loader/vertex.glsl';
import loaderFragmentShader from '../shaders/loader/fragment.glsl';

const playButton = document.querySelector('.start');
playButton.innerHTML = 'LOADING';

/* Loading */
export const loadingManager = new THREE.LoadingManager(() => {
  playButton.innerHTML = 'PLAY';
});

/* Loaders */
const textureLoader = new THREE.TextureLoader(loadingManager);

/* Textures */
const ballTexture = textureLoader.load('./texture/texture.png');
ballTexture.generateMipmaps = false;
ballTexture.magFilter = THREE.NearestFilter;
// ballTexture.encoding = sRGBEncoding;

const silentTexture = textureLoader.load('./texture/Silent.png');
silentTexture.generateMipmaps = false;
silentTexture.magFilter = THREE.NearestFilter;

const silentOutlineTexture = textureLoader.load('./texture/SilentOutline.png');
silentTexture.generateMipmaps = false;
silentTexture.magFilter = THREE.NearestFilter;

const nightTexture = textureLoader.load('./texture/Night.png');
nightTexture.generateMipmaps = false;
nightTexture.magFilter = THREE.NearestFilter;

const nightOutlineTexture = textureLoader.load('./texture/NightOutline.png');
nightTexture.generateMipmaps = false;
nightTexture.magFilter = THREE.NearestFilter;

/*  Objects */
const overlayGeometry = new THREE.CircleGeometry(0.01, 64, 64);
const sphereGeometry = new THREE.SphereGeometry(30, 512, 512);
const silentNightGeometry = new THREE.PlaneGeometry(25, 25, 1, 1);
const silentNightOverlayGeometry = new THREE.PlaneGeometry(180, 180, 1, 1);

/* Material controls */
const uniformSphereDefault = {
  uTexture: { value: ballTexture },
  uRepeat: { value: 2 },
  uTime: { value: 0 },
  uDistortionFrequency: { value: 0 },
  uDistortionStrength: { value: 0 },
  uSpeed: { value: 1.0 },
  uNoiseDensity: { value: 1.0 },
  uNoiseStrength: { value: 1.0 },
};

const silentUniformDefault = {
  uTexture: { value: silentTexture },
  uPositionX: { value: -15 },
  uPositionY: { value: -3 },
  uPositionZ: { value: 0 },
};

const silentOutlineUniformDefault = {
  uTexture: { value: silentOutlineTexture },
  uPositionX: { value: -15 },
  uRotationX: { value: 0 },
  uPositionY: { value: -9 },
  uPositionZ: { value: 0 },
  uAlpha: { value: 0.01 },
  uRotationAxisX: { value: 1 },
};

const nightUniformDefault = {
  uTexture: { value: nightTexture },
  uPositionX: { value: 15 },
  uPositionY: { value: -9 },
  uPositionZ: { value: 0 },
};

const nightOutlineUniformDefault = {
  uTexture: { value: nightOutlineTexture },
  uPositionX: { value: 15 },
  uPositionY: { value: -3 },
  uPositionZ: { value: 0 },
  uAlpha: { value: 0.01 },
  uRotationAxisX: { value: -1 },
};

const silentNightOverlayUniformDefault = {
  uBackgroundColor: { value: new THREE.Vector3(0.784, 0.235, 0.2) },
  uPositionX: { value: 0 },
  uPositionY: { value: 0 },
  uPositionZ: { value: -5 },
  uRotation: { value: 0.5 },
  uAlpha: { value: 1 },
};

const ratio = window.innerWidth / window.innerHeight;
const overlayUniformDefault = {
  uBackgroundColor: { value: new THREE.Vector3(0.784, 0.235, 0.2) },
  uAlpha: { value: 1.0 },
  uRatio: { value: ratio },
};

/* shaders */
const sphereMaterial = new THREE.ShaderMaterial({
  uniforms: uniformSphereDefault,
  vertexShader: sphereVertexShader,
  fragmentShader: sphereFragmentShader,
});

const silentMaterial = new THREE.ShaderMaterial({
  uniforms: silentUniformDefault,
  vertexShader: silentNightVertexShader,
  fragmentShader: silentNightFragmentShader,
  transparent: true,
});

const silentOutlineMaterial = new THREE.ShaderMaterial({
  uniforms: silentOutlineUniformDefault,
  vertexShader: silentNightOutlineVertexShader,
  fragmentShader: silentNightOutlineFragmentShader,
  transparent: true,
});

const nightMaterial = new THREE.ShaderMaterial({
  uniforms: nightUniformDefault,
  vertexShader: silentNightVertexShader,
  fragmentShader: silentNightFragmentShader,
  transparent: true,
});

const nightOutlineMaterial = new THREE.ShaderMaterial({
  uniforms: nightOutlineUniformDefault,
  vertexShader: silentNightOutlineVertexShader,
  fragmentShader: silentNightOutlineFragmentShader,
  transparent: true,
});

const silentNightOverlayMaterial = new THREE.ShaderMaterial({
  uniforms: silentNightOverlayUniformDefault,
  vertexShader: overlayVertexShader,
  fragmentShader: overlayFragmentShader,
});

const overlayMaterial = new THREE.ShaderMaterial({
  uniforms: overlayUniformDefault,
  vertexShader: loaderVertexShader,
  fragmentShader: loaderFragmentShader,
  transparent: true,
});

/* Mesh */
const overlay = new THREE.Mesh(overlayGeometry, overlayMaterial);
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.rotation.z = 4.31;
sphere.rotation.x = -9.29;
sphere.rotation.y = 1.18;

const silent = new THREE.Mesh(silentNightGeometry, silentMaterial);
const silentOutline = new THREE.Mesh(
  silentNightGeometry,
  silentOutlineMaterial
);
const night = new THREE.Mesh(silentNightGeometry, nightMaterial);
const nightOutline = new THREE.Mesh(silentNightGeometry, nightOutlineMaterial);
const silentNightOverlay = new THREE.Mesh(
  silentNightOverlayGeometry,
  silentNightOverlayMaterial
);

const silentNightOverlayRight = new THREE.Mesh(
  silentNightOverlayGeometry,
  silentNightOverlayMaterial
);

/* exports */
export const meshControls = {
  uniformSphereDefault,
  silentUniformDefault,
  silentOutlineUniformDefault,
  nightUniformDefault,
  nightOutlineUniformDefault,
  silentNightOverlayUniformDefault,
  overlayUniformDefault,
};

export const meshes = {
  overlay,
  sphere,
  silent,
  silentOutline,
  night,
  nightOutline,
  silentNightOverlay,
  silentNightOverlayRight,
};
