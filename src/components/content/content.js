import React, { Component } from 'react';
import Dialog from '../dialog/records-dialog';
import "../content/content.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

class Content extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            selectedValue: {},
            table: [
                { id: 1, name: 'Sajith', address: 'Colombo', Company: 'ABCD' },
                { id: 2, name: 'Afrad', address: 'Colombo', Company: 'ABCD' },
                { id: 3, name: 'Arafath', address: 'Colombo', Company: 'ABCD' },
                { id: 4, name: 'Rilwan', address: 'Colombo', Company: 'ABCD' },
                { id: 5, name: 'Ihsan', address: 'Colombo', Company: 'ABCD' },
            ]
        };
    }

    showModal = (status) => {
        this.setState(prevState => ({
            showModal: !prevState.showModal
        }));
    }

    render() {
        return (
            <div className="container content">
                <div className="row">
                    <div className="col-md-6">
                        <div className="input-group search-bar mb-3">
                            <input type="text" className="form-control" placeholder="Search" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <button className="btn btn-primary float-right" type="button" onClick={this.showModal}>
                            Add record
                        </button>
                    </div>
                </div>

                <form>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Address</th>
                                <th scope="col">Company</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.table.map((res, index) =>
                                    <tr key={index}>
                                        <td className="table-data-no">{res.id}</td>
                                        <td className="table-data">{res.name}</td>
                                        <td className="table-data">{res.address}</td>
                                        <td className="table-data">{res.Company}</td>
                                        <td className="table-data" onClick={() => this.editRecord(res)}><FontAwesomeIcon icon={faEdit} /></td>
                                        <td className="table-data" onClick={() => this.deleteRecord(res.id)} > <FontAwesomeIcon icon={faTrashAlt} /></td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </form>
                {this.state.showModal &&
                    <Dialog
                        addingRecords={this.addRecords}
                        modalStaus={this.showModal}
                        editRecord={this.state.selectedValue}
                        recordSubmission={this.recordSubmission}
                    />
                }
            </div>
        );
    }

    addRecords = (e, id, name, address, company) => {
        this.setState(prevState => ({
            showModal: e
        }));

        this.setState({ selectedValue: {} });

        if (id == undefined) {
            if (name != "" && address != "" && company != "") {
                let tableObject = [...this.state.table];
                tableObject.push({
                    id: this.state.table.length + 1,
                    name: name,
                    address: address,
                    Company: company
                });

                this.setState({ table: tableObject });
            }
        } else {
            if (name != "" && address != "" && company != "") {
                let tableObject = [...this.state.table];
                tableObject.map(res => {
                    if (res.id == id) {
                        res.name = name;
                        res.address = address;
                        res.Company = company;
                    }
                })
            }
        }
    }

    editRecord(res) {
        this.setState(prevState => ({
            showModal: true
        }));

        this.setState({ selectedValue: res });
    }

    deleteRecord(id) {
        let tableObject = [...this.state.table];
        tableObject.forEach((res, index) => {
            if (res.id == id) {
                tableObject.splice(index, 1);
                this.setState({ table: tableObject });
            }
        })
    }

    recordSubmission() {

    }
}

export default Content;