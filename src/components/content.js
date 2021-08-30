import React, { Component } from 'react';
import Dialog from './dialog/records-dialog'

class Content extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        };
    }

    showModal = (e) => {
        this.setState(prevState => ({
            showModal: !prevState.showModal
        }));
    }

    render() {
        return (
            <div className="container content">
                <button className="btn btn-primary" type="button" onClick={this.showModal}>
                    Add record
                </button>
                <form>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                {this.state.showModal && <Dialog onCloseModal={this.showModal} />}

            </div>
        );
    }
}

export default Content;