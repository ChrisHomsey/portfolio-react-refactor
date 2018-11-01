import React, { Component } from 'react';
import { Button, Image, Modal } from 'semantic-ui-react';

export default class ResumeModal extends Component {
    render() {
        return (
            <Modal basic size="small" trigger={<Button size="tiny" circular inverted floated="right">View Resume</Button>}>
                <Modal.Header>
                    <a href="https://s3.us-east-2.amazonaws.com/www.chrishomsey.com/docs/Chris+Homsey+-+Resume.pdf"><Button circular floated="right" color="red" size="tiny"><i className="ui file icon"></i>Open as PDF</Button></a>
                </Modal.Header>
                <Modal.Content>
                    <Image src={"/img/chris-homsey-resume.png"} alt="Chris Homsey Resume" className="ui fluid image" />
                </Modal.Content>
            </Modal>
        )
    }
}