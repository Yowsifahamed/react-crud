import React, { Component } from 'react';
import "./records-dialog.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

class Dialog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "1",
            address: "2"
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        if (event.target.name == "name") {
            this.setState({ name: event.target.value });
        } else if (event.target.name == "address") {
            this.setState({ address: event.target.value });
        }

        console.log(this.state, "this.state");
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state);
        event.preventDefault();
    }

    closeCustomModal = e => {
        this.props.onCloseModal(e);
    };

    render() {
        return (
            <section>
                <div className="dialog-content container">
                    <h3 className="update-heading">Update </h3>
                    <span className="cross-icon" onClick={this.closeCustomModal}> <FontAwesomeIcon icon={faTimes} /> </span>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label for="exampleInputEmail1" className="input-lable">Name</label>
                            <input type="text" name="name" className="form-control input-control" placeholder="Enter name"
                                value={this.state.name}
                                onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1" className="input-lable">Address</label>
                            <input type="text" name="address" className="form-control input-control" placeholder="Enter address"
                                value={this.state.address}
                                onChange={this.handleInputChange} />
                        </div>
                        <button type="submit" className="btn btn-primary submit-btn">Submit</button>
                    </form>
                </div>
                <div className="black-drop"></div>
            </section>
        );
    }

}

export default Dialog;


{/* <div className="modal fade" id="exampleModalCenter">
<div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
        <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
            <button type="button" className="close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div className="modal-body">
            ...
        </div>
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
        </div>
    </div>
</div>
</div> */}