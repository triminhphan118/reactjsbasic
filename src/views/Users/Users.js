import React from "react";
import axios from "axios";
import ItemUser from "./ItemUser";

class Users extends React.Component {
    state = {
        listUsers : [],
    }
    async componentDidMount() {
        // axios.get('https://reqres.in/api/users?page=2')
        //     .then(res => console.log(res))

        const getUsers = await axios.get('https://reqres.in/api/users?page=1');
        const listUsers = ( getUsers && getUsers.data && getUsers.data.data) ? getUsers.data.data : [];
        this.setState({
           ...this.state, listUsers : listUsers
        });
        
    }
    render() {
        let { listUsers } = this.state;
        return (
            <div className='wrapper'>
            <h1 className='heading'>List Users</h1>
                <div className='container'>
                    <ul className='listtodo'>
                        {
                            listUsers.map( (item, index) => <ItemUser
                                key={item.id}
                                itemUser = {item}
                                index = {index}
                            />)
                        }
                    </ul>

                </div>
            </div>
        )
    }
}

export default Users;