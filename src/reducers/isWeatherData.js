const initialState = [
];

const  weatherReducer = (state = initialState, action)=> {
    switch (action.type) {
        case 'ADD_HISTORY':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.nameCity,
                    temp: action.tempCity,
                    description: action.descriptionCity
                }
            ];
        default:
            return state;
    }
};

export default weatherReducer;