import React, { Component } from "react"
import Modal from 'react-modal';
import "./Animal.css"
import dog from "./DogIcon.svg"

Modal.setAppElement('#root')
export default class Animal extends Component {
    state = {
        saveDisabled: false,
        modalIsOpen: false
    }

    openModal = this.openModal.bind(this);
    afterOpenModal = this.afterOpenModal.bind(this);
    closeModal = this.closeModal.bind(this);

    openModal() {
        this.setState({modalIsOpen: true});
    }
    afterOpenModal() {
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render() {
        
        return (
            <section className="animal">
                <div key={ this.props.animal.id } className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={ dog } className="icon--dog" />
                            { this.props.animal.name }
                        </h4>
                        <h6 className="card-title">{ this.props.animal.breed }</h6>
                        <button onClick={this.openModal}
                            disabled={ this.state.saveDisabled }
                            className="card-link">Delete</button>
                    </div>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        //   style={customStyles}
                        contentLabel="Example Modal"
                        >

                        <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
                        <div>Are you sure you want to delete?</div>
                       
                            <button onClick={
                                () => {
                                    this.setState(
                                        { saveDisabled: true },
                                        () => this.props.dischargeAnimal(this.props.animal.id),
                                        )
                                       
                                    }
                                }> Yes</button>
                                <button onClick={this.closeModal}>No</button>
                        
                    </Modal>
                </div>
            </section>
        )
    }
}