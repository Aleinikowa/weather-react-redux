export function addHistory(id, name, temp, description) {
    return {
        type: 'ADD_HISTORY',
        id: id,
        nameCity: name,
        tempCity: temp,
        descriptionCity: description
    };
}