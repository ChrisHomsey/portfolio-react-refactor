import React, {Component} from 'react';
import PhotoGallery from '../../components/PhotoGallery';
import {Container, Header, Divider} from 'semantic-ui-react';

export default class Photography extends Component {

    render() {
        return (
            <Container textAlign="justified">

                <Header as="h2" color="blue">Photography</Header>
                
                <PhotoGallery/>

                <Divider hidden/>
                <Divider hidden />
                <Divider hidden />
            
            </Container>
        )
    }
}