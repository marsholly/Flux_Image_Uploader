import React, { Component } from 'react';
import FileUploader from './FileUploader';
import ImageAction from '../actions/ImageAction';
import AllImage from './AllImage';




export default class App extends Component {
  constructor(){
    super();
    this._submitFile = this._submitFile.bind(this);
  }

  _submitFile(file){
    ImageAction.createImage(file);
  }


  render() {
    return (
      <div className="container">
        <h1 className="text-center">Flux Image Uploader</h1>
        <div className="row">
          <div className="col-md-3">
            <FileUploader submitFile={this._submitFile}/>
          </div>
          <div className="col-md-9">
            <AllImage />
          </div>
        </div>
      </div>
    )
  }
}


// _submitFile(file){
//   let data = new FormData();
//   data.append('image', file)  //image is key, file is value;
//   axios.post('/api/images', data)
//     .then(res =>{
//       console.log('res:', res)
//     })
//     .catch(console.error);
// }
