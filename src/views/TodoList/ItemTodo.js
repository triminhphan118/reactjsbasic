import React from 'react'

class ItemTodo extends React.Component {

    state = {
        todo : {
            id : this.props.item.id,
            title : this.props.item.title,
        },
        isEdit : null,
    }

    handleRemove = (id) => {
        this.props.removeItem(id);

    }

    handleEdit = (id) => {
        if (this.state.isEdit) {
            this.props.updateItem(this.state.todo);
            this.setState({
                ...this.state,
                isEdit : null,
            })
        } else {
            this.setState({
                isEdit : id
            })
        }
    }

    handleChangeInput = (value) => {
        this.setState({
            ...this.state,
            todo : {
                ...this.state.todo,
                title : value
            }
        })
    }
   
    render() {
        let { todo } = this.state;
        return (
            <li  className='itemtodo'>
                {
                    this.state.isEdit === todo.id ? 
                    <input
                        onChange={ (e) => this.handleChangeInput(e.target.value)}
                        value={todo.title}
                    />
                    :
                    <h4>{todo.title}</h4> 
                    
                }
                <div className='action'>
                    <button 
                        className='btn'
                        onClick={ () => this.handleEdit(todo.id)}
                    >
                    {this.state.isEdit === todo.id ? 'Save' : 'Edit'}
                    </button>
                    <button 
                        className='btn'
                        onClick={ () => this.handleRemove(todo.id)}
                    >
                    Remove
                    </button>
                </div>
            </li>
        )
    }
}

export default ItemTodo;