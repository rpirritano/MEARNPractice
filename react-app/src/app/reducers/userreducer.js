const initialState = { 
    name:"Robert", 
    age:22
}

const userReducer = (state = initialState, action ) =>{

    switch (action.type) {
        case "SET_NAME_FULFILLED":
            state = {
                ...state,
                name: action.payload
            };    
        break;

        case "SET_AGE":
            state = {
                ...state,
                age: action.payload
            };                   
            break;
    
        default:
            break;
    }

    return state;
}

export default userReducer;