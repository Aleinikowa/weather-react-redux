export function setTemp(temp) {
    return {
        type: 'SET_TEMP',
        tempCity: temp
    };
}

export function setName(name) {
    return {
        type: 'SET_NAME',
        nameCity: name
    };
}