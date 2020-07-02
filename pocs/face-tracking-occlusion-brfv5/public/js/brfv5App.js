import {
  brfv5,
  loadBRFv5Model,
} from '/js/vendor/brfv5/brfv5__init.js'

import {
  configureCameraInput,
  configureFaceTracking,
  configureNumFacesToTrack,
} from '/js/vendor/brfv5/brfv5__configure.js'

import { startCamera } from '/js/vendor/brfv5/utils__camera.js'

import {
  drawInputMirrored,
  drawCircles,
  drawRect,
  drawRects,
} from '/js/vendor/brfv5/utils__canvas.js'

import {
  toDegree,
  toRadian,
} from '/js/vendor/brfv5/utils__geom.js'

window.brfv5App = {
  brfv5,
  loadBRFv5Model,

  configureCameraInput,
  configureFaceTracking,
  configureNumFacesToTrack,

  startCamera,

  drawInputMirrored,
  drawCircles,
  drawRect,
  drawRects,

  toDegree,
  toRadian,
}
