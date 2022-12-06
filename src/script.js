import './style.css';
import * as THREE from 'three';
import { Howl } from 'howler';
import { meshes, meshControls } from './meshes/meshes.js';

import { alphabetIncrements, alphabetUnicode } from './consts/alphabet';
import { ease } from './utils/ease.js';
import { disposeMesh } from './utils/disposeMesh';
import { calculateUnicode } from './utils/calcuateUnicode';

/* HTML Elements */
const body = document.querySelector('body');
const canvas = document.querySelector('canvas.webgl');
const loading1 = document.querySelector('#loader1');
const loading2 = document.querySelector('#loader2');
const loading3 = document.querySelector('#loader3');
const audioButton = document.querySelector('.audio');
const playButton = document.querySelector('.start');
const copyRight = document.querySelector('.copyright');

// Scene
const scene = new THREE.Scene();

/* Sizes */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener('resize', () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/* Camera */
const camera = new THREE.PerspectiveCamera(
  400,
  sizes.width / sizes.height,
  0.1,
  1000
);
camera.position.set(1, 1, 60);
scene.add(camera);

/* Renderer */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
THREE.ColorManagement.legacyMode = false;
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.toneMapping = THREE.NoToneMapping;

/* sound */
let playBackgroundMusic = false;
let id1;
const sound = new Howl({
  src: ['/music/sample4.mp3'],
  loop: true,
  autoplay: false,
  volume: 0.1,
});

/* Meshes and controls */
const {
  uniformSphereDefault,
  silentOutlineUniformDefault,
  nightUniformDefault,
  nightOutlineUniformDefault,
  overlayUniformDefault,
} = meshControls;

const {
  overlay,
  sphere,
  silent,
  silentOutline,
  night,
  nightOutline,
  silentNightOverlay,
  silentNightOverlayRight,
} = meshes;

/* Ease */
const { easeOutElastic, easeInExpo } = ease;

/* TODO */
scene.add(overlay);
silentNightOverlay.position.x = -20;
silentNightOverlayRight.position.x = 20;

/* Cursor */
let zoomY = 0;
let moveSphereUp = false;
let stopAudioModification = true;
let disableWheelEvent = true;
let startScene = false;
playButton.addEventListener('click', () => {
  id1 = sound.play();
  playBackgroundMusic = true;
  startScene = true;
});

audioButton.addEventListener('click', () => {
  if (playBackgroundMusic) {
    audioButton.classList.add('disabled');
    sound.pause(id1);
    playBackgroundMusic = false;
  } else {
    audioButton.classList.remove('disabled');
    sound.play();
    playBackgroundMusic = true;
  }
});

canvas.addEventListener('wheel', (event) => {
  if (!disableWheelEvent) {
    const scale = event.deltaY * 0.1;
    zoomY = Math.min(Math.max(0.9, scale), 1) * Math.sign(scale);
    camera.position.z += zoomY;
    if (camera.position.z > 140) {
      camera.position.z = 140;
      scene.add(silent);
      scene.add(silentOutline);
      scene.add(night);
      scene.add(nightOutline);
      scene.add(silentNightOverlay);
      scene.add(silentNightOverlayRight);
      stopAudioModification = true;
      if (!moveSphereUp) {
        moveSphereUp = true;
      }
    }
  }
});

const cursor = { x: 0, y: 0 };
canvas.addEventListener('mousemove', (event) => {
  const ratioX = event.clientX / sizes.width;
  const ratioY = event.clientY / sizes.height;
  cursor.x = ratioX - 0.5;
  cursor.y = ratioY - 0.5;
  const soundFactor = (ratioX + 0.5) * (ratioY + 0.5);
  if (id1) {
    if (!stopAudioModification) {
      sound.rate(soundFactor, id1);
    } else {
      sound.rate(1, id1);
    }
  }
});

/* Utils */
const addWhiteBackground = () => {
  body.classList.remove('primaryBackground');
  body.classList.add('lightBackground');
};

const addPrimaryBackground = () => {
  body.classList.remove('lightBackground');
  body.classList.add('primaryBackground');
};

const removePlayButton = () => {
  playButton.remove();
};

const changeColorThemeToLight = () => {
  loader1.classList.remove('primaryColor');
  loader1.classList.add('lightColor');
  loader2.classList.remove('primaryColor');
  loader2.classList.add('lightColor');
  loader3.classList.remove('primaryColor');
  loader3.classList.add('lightColor');
  copyRight.classList.remove('primaryColor');
  copyRight.classList.add('lightColor');
};

const showSoundWave = () => {
  audioButton.classList.add('play');
};

/* Animate */
const clock = new THREE.Clock();
const f = 1.5;
let silentPositionYDefault = 0;
let startSilentTypoMotion = false;
let runDestroySphere = false;
let isSphereDestroyed = false;
let offID1 = false;
let cameraPosZ = 0;
let setCameraDefault = false;
let apartSilentNight = false;
let motionVariable = 0;

let loadingSIncrement = 33;
let loadingaIncrement = 33;
let loadingnIncrement = 33;
let loadingtIncrement = 33;
let loadingsIncrement = 33;
let loadinghIncrement = 33;
let loadingoIncrement = 33;
let loadinglIncrement = 33;
let loadingiIncrement = 33;
let loadingdIncrement = 33;
let loadingyIncrement = 33;
let loadingpIncrement = 33;
let loadingUpperstropheIncrement = 33;
let renderLoading = true;
let hideStartButton = false;

let scaleFactor = 0;
let disposeOverlay = false;

const {
  SIncrement,
  aIncrement,
  nIncrement,
  tIncrement,
  sIncrement,
  hIncrement,
  oIncrement,
  lIncrement,
  iIncrement,
  dIncrement,
  yIncrement,
  pIncrement,
  upperstropheIncrement,
} = alphabetIncrements;

const {
  unicodeS,
  unicodea,
  unicoden,
  unicodet,
  unicodes,
  unicodeh,
  unicodeo,
  unicodel,
  unicodei,
  unicoded,
  unicodey,
  unicodep,
  unicodeUpperstrophe,
} = alphabetUnicode;

const { getCharacter } = calculateUnicode;
const tick = () => {
  const elapsedTime = clock.getElapsedTime();
  uniformSphereDefault.uTime.value = elapsedTime * 0.075;

  // Loading typo
  if (renderLoading) {
    loadingSIncrement += SIncrement;
    loadingaIncrement += aIncrement;
    loadingnIncrement += nIncrement;
    loadingtIncrement += tIncrement;
    loadingsIncrement += sIncrement;
    loadinghIncrement += hIncrement;
    loadingoIncrement += oIncrement;
    loadinglIncrement += lIncrement;
    loadingiIncrement += iIncrement;
    loadingdIncrement += dIncrement;
    loadingyIncrement += yIncrement;
    loadingpIncrement += pIncrement;
    loadingUpperstropheIncrement += upperstropheIncrement;

    if (loadingyIncrement === unicodey) {
      renderLoading = false;
    }
    const santas = [
      getCharacter(loadingSIncrement, unicodeS),
      getCharacter(loadingaIncrement, unicodea),
      getCharacter(loadingnIncrement, unicoden),
      getCharacter(loadingtIncrement, unicodet),
      getCharacter(loadingaIncrement, unicodea),
      getCharacter(loadingUpperstropheIncrement, unicodeUpperstrophe),
      getCharacter(loadingsIncrement, unicodes),
    ];

    const holiday = [
      getCharacter(loadinghIncrement, unicodeh),
      getCharacter(loadingoIncrement, unicodeo),
      getCharacter(loadinglIncrement, unicodel),
      getCharacter(loadingiIncrement, unicodei),
      getCharacter(loadingdIncrement, unicoded),
      getCharacter(loadingaIncrement, unicodea),
      getCharacter(loadingyIncrement, unicodey),
    ];

    const playlist = [
      getCharacter(loadingpIncrement, unicodep),
      getCharacter(loadinglIncrement, unicodel),
      getCharacter(loadingaIncrement, unicodea),
      getCharacter(loadingyIncrement, unicodey),
      getCharacter(loadinglIncrement, unicodel),
      getCharacter(loadingiIncrement, unicodei),
      getCharacter(loadingsIncrement, unicodes),
      getCharacter(loadingtIncrement, unicodet),
    ];

    loading1.innerHTML = santas.toString().replaceAll(',', '');
    loading2.innerHTML = holiday.toString().replaceAll(',', '');
    loading3.innerHTML = playlist.toString().replaceAll(',', '');
  }

  // expand circle
  if (startScene) {
    changeColorThemeToLight();
    scaleFactor += 1.0;
    overlay.scale.set(scaleFactor, scaleFactor, 1.0);

    if (scaleFactor > 185 && !hideStartButton) {
      playButton.classList.add('hide');
      hideStartButton = true;
    }

    if (scaleFactor > 220) {
      scene.add(sphere);
      scaleFactor = 0;
      disposeOverlay = true;
      stopAudioModification = false;
      addPrimaryBackground();
      removePlayButton();
      showSoundWave();
      startScene = false;
    }
  }

  if (disposeOverlay) {
    scaleFactor += 0.01;
    overlayUniformDefault.uAlpha.value = 1 - Math.min(scaleFactor, 0.99);
    if (scaleFactor > 1) {
      disableWheelEvent = false;
      stopAudioModification = false;
      disposeMesh([overlay], scene);
      disposeOverlay = false;
    }
  }

  // rotate sphere
  if (!moveSphereUp && !isSphereDestroyed) {
    const parallaxX = -cursor.x;
    const parallaxY = cursor.y;

    sphere.rotation.x = -9.29 + parallaxY * 3;
    sphere.rotation.y = 1.18 + parallaxX * 3;
    sphere.rotation.z = 4.31 + (parallaxY + parallaxX) * 0.5;
  }

  // disappear sphere
  if (moveSphereUp && !isSphereDestroyed) {
    motionVariable += 0.05;
    sphere.rotation.x =
      motionVariable * motionVariable * (3.0 * f - 2.0 * f * motionVariable);
    sphere.rotation.z = motionVariable * motionVariable * 2;
    const positionFactor = motionVariable * 0.5;
    sphere.position.y += positionFactor * (4 * f - 6 * f * positionFactor);

    if (sphere.position.y < -sizes.height) {
      motionVariable = 0;
      runDestroySphere = true;
      moveSphereUp = false;
    }
  }

  if (!isSphereDestroyed && runDestroySphere) {
    disposeMesh([sphere], scene);
    isSphereDestroyed = true;
    startSilentTypoMotion = true;
  }

  // silent night
  if (startSilentTypoMotion && isSphereDestroyed && !apartSilentNight) {
    silentPositionYDefault += 0.02;
    const silentOutlinePosY = easeOutElastic(silentPositionYDefault) * 1.75;
    silentOutlineUniformDefault.uPositionY.value = -9 - silentOutlinePosY;
    nightOutlineUniformDefault.uPositionY.value = -3 + silentOutlinePosY;
    if (silentOutlinePosY > 5) {
      const outlineFaded = Math.min(
        easeInExpo(silentPositionYDefault) * 1.25,
        1
      );
      silentOutlineUniformDefault.uAlpha.value = outlineFaded;
      nightOutlineUniformDefault.uAlpha.value = outlineFaded;

      if (silentPositionYDefault >= 1.5 && !apartSilentNight) {
        motionVariable += 0.5;
        nightUniformDefault.uPositionY.value = -9 + Math.min(motionVariable, 6);
        if (motionVariable > 37.5) {
          motionVariable = 0;
          addWhiteBackground();
          apartSilentNight = true;
        }
      }
    }
  }

  if (apartSilentNight && !offID1 && motionVariable === 0) {
    offID1 = true;
  }

  if (apartSilentNight) {
    motionVariable += 0.005;
    const motionRange = easeOutElastic(motionVariable);
    silent.position.x -= motionRange;
    night.position.x += motionRange;

    silentNightOverlay.position.x -= motionRange * 0.85;
    silentNightOverlayRight.position.x += motionRange * 0.85;

    if (motionRange > 60) {
      motionVariable = 0;
      startSilentTypoMotion = false;
      disposeMesh(
        [
          silent,
          silentOutline,
          night,
          nightOutline,
          silentNightOverlay,
          silentNightOverlayRight,
        ],
        scene
      );
      setCameraDefault = true;
      apartSilentNight = false;
    }
  }

  if (offID1 && id1) {
    sound.fade(0.1, 0, 4000, id1);
    offID1 = false;
  }

  if (setCameraDefault) {
    motionVariable += 0.001;
    cameraPosZ += 5;
    const cameraPosZVar = 140 - cameraPosZ;
    camera.position.z = Math.max(cameraPosZVar, 60);
    if (cameraPosZVar < 60) {
      setCameraDefault = false;
    }
  }

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();

/* GUIs */
// export const gui = new dat.GUI({ width: 340 });

// gui
//   .add(circleUniformDefault.uPositionZ, 'value')
//   .min(-60)
//   .max(60)
//   .step(0.1)
//   .name('circleUniformDefault.uPositionZ');
