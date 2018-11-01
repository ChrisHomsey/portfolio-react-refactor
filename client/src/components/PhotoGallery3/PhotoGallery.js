import React, { Component } from 'react';
import PhotoData from '../../common';
import PhotoModal from '../../components/PhotoModal';

export default class PhotoGallery3 extends Component {

    state = {
        photos: PhotoData,
    }
        
    render(props) {

        //The goal is to spread the PhotoData array consecutively into 4 arrays- each representing the contents of column elements

        // Declare the current column and initialize the empty column arrays
        let columnIndex = 0;
        let photoColumns = [[],[],[],[]];

        // Loop for every photo of the PhotoData array
        for (var photo of this.state.photos) {

            //Declares the newImage element to be pushed
            let newImage = <PhotoModal key={photo.id} photoid={photo.id} title={photo.title} description={photo.description} />;
            
            // Targets the appropriate photoColumn subarray and pushes the newImage into it's array
            photoColumns[columnIndex].push(newImage);

            // Recursively increments the columnIndex and resets to 0 if it reaches > 3
            columnIndex++;
            if (columnIndex > 3) columnIndex = 0;            
        }

        return (
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
        )
    }

}    

