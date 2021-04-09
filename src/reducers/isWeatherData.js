const initialState = {
    name: '',
    temp: '',
};

const  weatherReducer = (state = initialState, action)=> {
    switch (action.type) {
        case 'SET_NAME':
            return {
                name: action.nameCity
            };
        case 'SET_TEMP':
            return {
                temp: action.tempCity
            };
        default:
            return state;
    }
};

export default weatherReducer;