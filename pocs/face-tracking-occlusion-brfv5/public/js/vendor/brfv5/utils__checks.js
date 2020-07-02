// import  { error } from './utils__logging.js'

export const isVideo = (video, errorMsg) => {

  if(!video || !video.play) {

    console.error(errorMsg)

    return false
  }

  return true
}

export const isImage = (image, errorMsg) => {

  if(!image || !video.naturalWidth) {

    console.error(errorMsg)

    return false
  }

  return true
}

export const isCanvas = (canvas, errorMsg) => {

  if (!canvas || !canvas.getContext) {

    console.error(errorMsg)

    return false
  }

  return true
}

export default { isVideo, isImage, isCanvas }
