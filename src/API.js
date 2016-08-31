import axios from 'axios';
import ServerActions from './actions/ServerActions';


const API = {
  getAllImages(){
    axios.get('/api/images')
      .then(res => res.data)
      .then(ServerActions.receiveImages)
      .catch(console.error);
  },
  createImage(file) {
    let data = new FormData();
    data.append('image', file);
    axios.post('/api/images', data)
      .then(res => res.data)
      .then(ServerActions.receiveOneImage)
      .catch(console.error);
  },
  deleteImage(id) {
    axios.delete(`/api/images/${id}`)
      .then(this.getAllImages())
      .catch(console.error);
  }
}

export default API;
