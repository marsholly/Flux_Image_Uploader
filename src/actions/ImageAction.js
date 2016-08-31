import API from '../API';

const ImageActions = {
  getAllImages: API.getAllImages,
  createImage(file) {
    API.createImage(file);
  },
  deleteImage(id){
    API.deleteImage(id);
  }
}

export default ImageActions;
