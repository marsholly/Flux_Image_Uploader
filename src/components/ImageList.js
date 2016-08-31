import React, { Component } from 'react';
import ImageAction from '../actions/ImageAction';
import moment from 'moment';

export default class ImageList extends Component {
  constructor(props){
    super(props);
    this.deleteImage=this.deleteImage.bind(this);
  }

  deleteImage(id){
    ImageAction.deleteImage(id);
  }

  render() {
    let { _id, name, url, createAt }  = this.props;
    return(
        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <img src={url}/>
            <div className="caption">
              <h3>{name}</h3>
              <p>create at: {moment({createAt}).format('lll')}</p>
              <p><button className="btn btn-primary" role="button" onClick={()=>this.deleteImage(_id)}>Delete</button></p>
            </div>
          </div>
        </div>
    )
  }
}
