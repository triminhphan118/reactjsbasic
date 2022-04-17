import React from "react";
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import  axios  from "axios";

function DetailUser() {
    let params = useParams();
    const [user, setUser] = useState({});
     useEffect(() => {

        // axios.get(`https://reqres.in/api/users/${params.id}`)
        //     .then(res => console.log(res))

        ( async () => {
            const getUser = await axios.get(`https://reqres.in/api/users/${params.id}`);
            let detailUser =  (getUser && getUser.data && getUser.data.data) ? getUser.data.data : {};

            setUser({
               ...detailUser
            })
        })();
    }, [])
    return(
        <>

        <div className="card">
            <div className="card__img">
                <img src={user.avatar} alt="avatar"/>
            </div>
            <div className="card__info">
                <h2 className="card__name">{user.last_name} {user.first_name}</h2>
                <span className="card__email">{user.email}</span>
            </div>

            <Link className="btn" to='/users'>Back To List</Link>

        </div>
        </>
        
    )
}
export default DetailUser;