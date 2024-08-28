function fetchSingleRegisterById(id) {
    return $.ajax({
        url: `http://localhost:8080/graveyard-crud/backend/people/${id}`,
        method: 'GET',
        dataType: 'json'
    })
    .then((response) => {
        return response.data;
    })
    .fail((jqXHR, textStatus, msg) => {
        alert(`[ERROR] (${id}): ${msg}`);
    });
}

export default fetchSingleRegisterById;
