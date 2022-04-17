import React from 'react';
import './Style.scss';
import ItemTodo from './ItemTodo';
import AddItem from './AddItem';
import StorageLocal from './storage';

class TodoList extends React.Component {
        state = StorageLocal.get();

        addInput = (title) => {
            if (!title.id) {
                alert('wrongs!!!')
                return;
            }
            let listTodo = [...this.state.listTodo, title];
            this.setState({...this.state, listTodo : listTodo});
        }

        removeItem = (id) => {
            let listTodo = this.state.listTodo.filter( item => item.id !== id);
            this.setState({...this.state , listTodo : listTodo});
        }

        updateItem = (item) => {
            let indexItem = this.state.listTodo.findIndex( todo => todo.id === item.id);
            let todos = [...this.state.listTodo]
            todos[indexItem].title = item.title;
            this.setState({
                listTodo : todos
            })
        }

        componentDidUpdate() {
            StorageLocal.set(this.state);
        }
    render() {
        let { listTodo } = this.state ;

        return (
            <div className='wrapper'>
            <h1 className='heading'>Todo List</h1>
                <div className='container'>
                    <AddItem
                        addInput = {this.addInput}
                    />
                    <ul className='listtodo'>
                        {
                            listTodo.map( item => <ItemTodo
                                item = {item}
                                key = {item.id}
                                removeItem = {this.removeItem}
                                updateItem = {this.updateItem}
                            />)
                        }
                    </ul>

                </div>
            </div>
        )
    }
}

export default TodoList;