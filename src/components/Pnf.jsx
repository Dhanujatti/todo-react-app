import React from "react";
import { navlink } from 'react-router-dom';

function Pnf(props){
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-danger">Requested Path Not Found</h3>
                    <h5 className="display-5 text-danger">404 Error</h5>
                    <navlink to={`/`} className="btn btn-outline-success">Return Home</navlink>
                </div>
            </div>
        </div>
    )
}

export default Pnf;
