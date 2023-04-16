import React, {useState, useEffect} from "react";
import { readContacts  } from './db/store'
import AddressCard from "./AddressCard";


function Home(props) {
    const [contact ,setContact] = useState([])
    
    //useEffect(handler,[dependency])
    //useEffect -> will be called before component render
    useEffect(() => {
        console.log('called useffect');
        let data = readContacts();
        setContact(data);
    },[])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-success">Home Page</h3>
                </div>
            </div>

            <div className="row">
                {
                    contact.map((item,index) => {
                        return(
                            <AddressCard key ={index} {...item}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home;