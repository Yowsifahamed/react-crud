import React, { Component } from 'react';
import "./records-dialog.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


class Dialog extends Component {

    constructor(props) {
        super(props);

        if (props.editRecord.name != "" && props.editRecord.address != "" && props.editRecord.company != "") {
            this.state = { id: props.editRecord.id, name: props.editRecord.name, address: props.editRecord.address, company: props.editRecord.Company };
        } else {
            this.state = { id: '', name: '', address: '', company: '', };
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeTheModal = this.closeTheModal.bind(this);
    }

    handleInputChange(event) {
        if (event.target.name == "name") {
            this.setState({ name: event.target.value });
        }
        if (event.target.name == "address") {
            this.setState({ address: event.target.value });
        }

        if (event.target.name == "company") {
            this.setState({ company: event.target.value });
        }
    }

    handleSubmit() {
        this.props.addingRecords(false, this.state.id, this.state.name, this.state.address, this.state.company)
    }

    closeTheModal() {
        this.setState({ id: null, name: null, address: null, company: null });
        this.props.modalStaus(false)
        console.log(this.state)
    }

    render() {
        return (
            <section>
                <div className="dialog-content container">
                    <h3 className="update-heading">Update </h3>
                    <span className="cross-icon" onClick={this.closeTheModal}> <FontAwesomeIcon icon={faTimes} /> </span>
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
                        <div className="form-group">
                            <label for="exampleInputPassword1" className="input-lable">Address</label>
                            <input type="text" name="company" className="form-control input-control" placeholder="Enter address"
                                value={this.state.company}
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
