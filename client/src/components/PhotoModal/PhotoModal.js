import React, { Component } from 'react';
import {Modal, Image} from "semantic-ui-react";

export default class PhotoModal extends Component {

    render(props) {

        return(
            <Modal basic centered size="large" closeIcon trigger={<Image src={`/img/photography/${this.props.photoid}.jpg`} className='photo-thumb' />}>
                <Modal.Header>{this.props.title}</Modal.Header>
                <Modal.Content><Image src={`/img/photography/${this.props.photoid}.jpg`}/></Modal.Content>
            </Modal>
        )
    }
}