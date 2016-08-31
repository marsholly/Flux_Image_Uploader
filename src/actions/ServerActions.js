import AppDispatcher from '../AppDispatcher';

const ServerActions = {
  receiveImages(images) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_IMAGES',
      images
    })
  },
  receiveOneImage(image) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_ONE_IMAGE',
      image
    })
  },

}

export default ServerActions;
