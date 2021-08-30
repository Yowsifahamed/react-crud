import React, { Component } from 'react';
import "./records-dialog.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

class Dialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: true
        }

    }
    render() {
        if (this.props.dialogStatus) {
            return (
                <section>
                    <div className="dialog-content container">
                        <h3 className="update-heading">Update </h3>
                        <span className="cross-icon"> <FontAwesomeIcon icon={faTimes} /> </span>
                        <form>
                            <div className="form-group">
                                <label for="exampleInputEmail1" className="input-lable">Email address</label>
                                <input type="email" className="form-control input-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1" className="input-lable">Password</label>
                                <input type="password" className="form-control input-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <button type="submit" className="btn btn-primary submit-btn">Submit</button>
                        </form>
                    </div>
                    <div className="black-drop"></div>
                </section>
            );
        } else {
            return (
                <div> Test false

                </div>
            );
        }

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