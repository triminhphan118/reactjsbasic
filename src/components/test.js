import React from "react";

class Input extends React.Component {
    state = {
        name : "",
        age : null
    }

    handleChange = (event, type) => {
       if (type === 'firstName') {
           this.setState({
               name : event.target.value
           })
       } else {
        this.setState({
            age : event.target.value
        })
       }
     }

     handleClick = (event) => {
         event.preventDefault();
         console.log('name', this.state.name, 'age ', this.state.age);
     }
 
    render() {
        return (
            <div className='form-group'>
                <label>first name</label>
                <input 
                type='text'
                value={this.state.name}
                 onChange = {(event) => this.handleChange(event, 'firstName')}   
                />
                <br/>
                <label>age</label>
                <input type='number' value={this.state.age} 
                onChange = {(event) => this.handleChange(event, 'age')} 
                />
                <button onClick={(event) => this.handleClick(event)}> submit</button>
            </div>
        )
    }


}

export default Input;