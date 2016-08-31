import React, { Component } from 'react';
import ImageStore from '../stores/ImageStore';
import ImageList from './ImageList';
import ImageAction from '../actions/ImageAction';


export default class AllImage extends Component {
  constructor(props){
    super(props);

    this.state = {
      images: []
    }

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    ImageAction.getAllImages();
    ImageStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    ImageStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      images: ImageStore.getAll()
    });
  }

  render() {
    console.log('this.state:', this.state)
    let {images} = this.state;
    const listImages = images.map(image => {
      return (
        <ImageList key={image._id} {...image} />
      )
    })

    return (
      <div className="container">
        <div className="row">
          {listImages}
        </div>
      </div>
    )
  }
}
