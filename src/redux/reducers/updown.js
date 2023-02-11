const intialState = 10;

const updateNumber = (state = intialState, action) => {

    switch(action.type){
        case "INCREMENT": return state + action.inc;
        case "DECREMENT": return state - 1;
        default: return state;
    }
}

export default updateNumber;