import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import { Image } from 'semantic-ui-react';
import PhotoData from '../../common';
import 'react-image-lightbox/style.css';
 
export default class PhotoGallery extends Component {
 
    state = {
      photoIndex: 0,
      isOpen: false,
      photos: PhotoData
    };
 
  render(props) {
    const { isOpen } = this.state;

        //The goal is to spread the PhotoData array consecutively into 4 arrays- each representing the contents of column elements

        // Declare the current column and initialize the empty column arrays
        let columnIndex = 0;
        let photoColumns = [[],[],[],[]];

        // Loop for every photo of the PhotoData array
        for (let photo of this.state.photos) {

            //Declares the newImage element to be pushed
            let newImage = <Image key={photo.id} src={`/img/photography/thumbnails/thumb-${photo.id}.jpg`} onClick={() => this.setState({ isOpen: true, photoIndex: photo.id })} />;
            
            // Targets the appropriate photoColumn subarray and pushes the newImage into it's array
            photoColumns[columnIndex].push(newImage);

            // Recursively increments the columnIndex and resets to 0 if it reaches > 3
            columnIndex++;
            if (columnIndex > 3) columnIndex = 0;            
        }
 
    return (
      <div>

        <div className="photo-grid">
            <div className="photo-column">
                {photoColumns[0]}
            </div>
            <div className="photo-column">
                {photoColumns[1]}
            </div> 
            <div className="photo-column">
                {photoColumns[2]}
            </div>
            <div className="photo-column">
                {photoColumns[3]}
            </div>
        </div>
 
        {isOpen && (
            <Lightbox
                mainSrc={`/img/photography/photography-${this.state.photos[this.state.photoIndex].id}.jpg`}
                nextSrc={`/img/photography/photography-` + this.state.photos[(this.state.photoIndex + 1) % this.state.photos.length]}
                prevSrc={`/img/photography/photography-` + this.state.photos[(this.state.photoIndex + this.state.photos.length - 1) % this.state.photos.length]}
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                this.setState({
                    photoIndex: (this.state.photoIndex + this.state.photos.length - 1) % this.state.photos.length,
                })
                }
                onMoveNextRequest={() =>
                this.setState({
                    photoIndex: (this.state.photoIndex + 1) % this.state.photos.length,
                })
                }
                // discourageDownloads
            />
        )}
      </div>
    );
  }
}