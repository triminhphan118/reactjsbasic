const USER = 'USER_MT'

const StorageLocal = () => {
    return {
        get() {
            return JSON.parse(localStorage.getItem(USER)) || { listTodo : []};
        },
    
        set(data){
             localStorage.setItem(USER , JSON.stringify(data));
        }
    }
}

export default StorageLocal();