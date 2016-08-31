import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _images = [];

class ImageStore extends EventEmitter {
  constructor(){
    super();

    AppDispatcher.register(action =>{
      switch (action.type) {
        case 'RECEIVE_IMAGES':
          _images = action.images;
          this.emit('CHANGE');
          break;
        case 'RECEIVE_ONE_IMAGE':
          var { image } = action;
          _images.push(image);
          this.emit('CHANGE');
          break;
      }
    })
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getAll() {
    return _images;
  }
}

export default new ImageStore();
