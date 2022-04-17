import React  from "react";

class AddItem extends React.Component {

    state = {
        id : null,
        title : '',
    }

    handleChangeInput = (title) => {
        this.setState({
            id : Math.floor(Math.random() * 10001),
            title : title,
        });
    }
    
    handleAdd = () => {
        this.props.addInput(this.state);
        this.setState({
            id: null,
            title : ''
        })
    }

    render() {
        let { title } = this.state;
        return (
            <div className="additem">
                <input
                    value={title}
                    onChange={(e) => this.handleChangeInput(e.target.value)}
                />
                <button 
                className="btn"
                onClick={ () => this.handleAdd()}
                >Add</button>
            </div>
        )
    }
}

export default AddItem;