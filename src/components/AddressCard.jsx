import React from "react";
import { NavLink } from "react-router-dom";
import { deleteContact } from './db/store';
import { toast } from "react-toastify";

function AddressCard(props) {
    const {id,name,mobile,email,image,address} = props;

    const deleteHandler =(id) => {
        if(window.confirm(`Are you sure to delete an id = ${id}?`)){
            deleteContact(id);
        } else {
            toast.warning('Delete Terminated')
        }
    }
    return (
        <div className="col-md-4 col-lg-4 col-sm-12 mt-2 mb-2">
            <div className="card">
                <img src={image} alt="no image" className="card-img-top" />
                <div className="card-header">
                    <div className="card-title text-success">{name}</div>
                </div>
                <div className="card-body">
                    <p>
                        <strong>Email</strong>
                        <span className="text-success float-end">{email}</span>
                    </p>
                    <p>
                        <strong>Mobile</strong>
                        <span className="text-success float-end">{mobile}</span>
                    </p>
                    <p>
                        <strong>Address</strong>
                        <span className="text-success float-end">{address}</span>
                    </p>
                </div>
                <div className="card-footer">
                    <NavLink to={`/update/${id}`} className="btn btn-outline-info">
                        <i className="bi bi-pencil"></i>
                    </NavLink>
                    <button onClick={() => deleteHandler(id)} className="btn btn-outline-danger float-end">
                        <i className="bi bi-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default AddressCard