const initState = {
    users : [
        {
            id : 1,
            name : 'minh tri 1'
        },
        {
            id : 2,
            name : 'minh tri 2'
        },
        {
            id : 3,
            name : 'minh tri 3'
        }
    ],

    rules : [
        {
            id : 1,
            rule : 'bao ve'
        }
    ]
}


const RootReducer = (state = initState, action) => {
    console.log(action)
    switch (action.type) {
        case 'DELETEUSER':
            let newState = state.users.filter( user => {
                return user.id !== action.payload.id;
            })

            return {
                ...state,
                users : newState
            }
        case 'ADDUSER':
            let id = Math.floor(Math.random() * 1001);
            return {
                ...state,
                users : [
                    ...state.users,
                    {
                        id : id,
                        name : `minh tri ${id}`
                    }
                ]
            }
    
        default:
            return state;
    }
}

export default RootReducer;