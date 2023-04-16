import React, {useState} from "react";
import { toast } from "react-toastify";
import { createContact } from "./db/store";// { } typed or named import

//to read values from inputs in react forms
//mutable -> useRef() hook

//immutable -> state and onChange method
const getRandom =() => {
    return Math.round(Math.random()*10000); // random id
};

function Create(props){
    // const [state,handler()] = useState(initialValue)
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [mobile,setMobile] = useState('')
    const [image,setImage] = useState('')
    const [address,setAddress] = useState('')

    const submitHandler = async (e) => {
        e.preventDefault(); //to avoid page refresh
        let data ={
            id:getRandom(),
            name: name,
            email: email,
            mobile: mobile,
            image: image,
            address: address
        };
        console.log('new contact =',data);
        createContact(data);
        toast.success('successfully submitted')
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-4 text-success">Create new</h3>
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
                                    <input type="submit" value="Create" className="btn btn-outline-success" required />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create;