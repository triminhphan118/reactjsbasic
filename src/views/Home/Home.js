import React from 'react';
import Logo from '../../assets/images/cat.jpg';
import { connect } from 'react-redux';

class Home extends React.Component {

     handleDelete = (user) => {
        this.props.deleteUser(user);
    }

    handleAdd = () => {
        this.props.addUser();
    }

    render() {
        let listUsers = this.props.dataRedux;
        return (
            <>
            <div>
                {
                    listUsers &&
                    listUsers.map( (user, index) => {
                        return (
                            <>
                            <div key={index} >
                                <span>{user.name}</span> <br/>
                                <button 
                                    className='btn'
                                    onClick={() => this.handleDelete(user)}
                                >Delete</button>
                            </div>
                            </>
                        )
                    })
                }
            </div>
            <button 
                            className='btn'
                            onClick={() => this.handleAdd()}
                            >add user</button>
            <div className='div-img'>
                <img src={Logo} alt="logo"/>
            </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux : state.users
    }
}

const mapDispatchToProps = (disPatch) => {
    return {
        deleteUser : (payload) => disPatch({type : 'DELETEUSER', payload : payload}),
        addUser : () => disPatch({type : 'ADDUSER'}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);