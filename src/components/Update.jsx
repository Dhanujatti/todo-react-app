import React, {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { readContact, updateContact} from "./db/store";
import { toast } from "react-toastify";

function Update(props){
    const params = useParams();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [mobile,setMobile] = useState('');
    const [image,setImage] = useState('');
    const [address,setAddress] = useState('');

    useEffect (() => {
        let data = readContact(params.id)
        setName(data.name)
        setEmail(data.email)
        setMobile(data.mobile)
        setImage(data.image)
        setAddress(data.address)
    },[])
    const submitHandler = (e) =>{
        e.preventDefault();
        try {
            let data = {
                name : name,
                email: email,
                mobile: mobile,
                image: image,
                address: address
            };
            console.log('updated data =', data);
            updateContact(params.id,data);
        } catch (err) {
            toast.error(err.message)
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-success">Update {params.id}</h3>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            <form autoComplete="off" onSubmit={submitHandler}>
                                <div className="form-group mt-2">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" id="name" value={name} onChange={(e)=> setName(e.target.value)} className="form-control" required />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="email">Email</label>
                                    <input type="text" name="email" id="email" value={email} onChange={(e)=> setEmail(e.target.value)} className="form-control" required />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="mobile">Mobile</label>
                                    <input type="number" name="mobile" id="mobile" value={mobile} onChange={(e)=> setMobile(e.target.value)} className="form-control" required />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="image">Image</label>
                                    <input type="url" name="image" id="image" value={image} onChange={(e)=> setImage(e.target.value)}  className="form-control" required />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="address">Address</label>
                                  <textarea name="address" id="address" cols="30" rows="5" value={address} onChange={(e)=> setAddress(e.target.value)} className="form-control" required></textarea>
                                </div>
                                <div className="form-group mt-2">
                                    <input type="submit" value="Update" className="btn btn-outline-success" required />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Update