import React, { Component } from 'react';
import "./records-dialog.css";

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
                <div className="dialog-content">
                    Test
                </div>
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