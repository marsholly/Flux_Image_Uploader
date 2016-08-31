import React, {Component} from 'react';

export default class FileUploader extends Component {
  constructor(){
    super();
    this.state = {
      file: '',
      imagePreviewUrl: ''
    };

    this._onInputChange = this._onInputChange.bind(this);
    this._onSubmit = this._onSubmit.bind(this);

  }

  _onSubmit(e){
    e.preventDefault();
    this.props.submitFile(this.state.file);
  }

  _onInputChange(e){
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file,
        imagePreviewUrl: reader.result
      })
    };
    reader.readAsDataURL(file);
  }

  render(){
    let {imagePreviewUrl} = this.state;
    let ImagePreview = imagePreviewUrl && <img src={imagePreviewUrl} />
    return(
      <form onSubmit={this._onSubmit}>
        <input type="file" id="imageInputFile" onChange={this._onInputChange}/>
        <button className='btn btn-primary'>Upload</button>
      </form>
    )
  }
}
