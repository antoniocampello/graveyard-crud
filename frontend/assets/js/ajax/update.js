function updateRegister(id, data) {
	return $.ajax({
		url: `http://localhost:8080/graveyard-crud/backend/people/${id}`,
		method: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify(data)
	})
	.done((msg) => {
		alert(`[INFO]: Person with id (${id}) updated succesfully.`);
	})
	.fail((jqXHR, textStatus, msg) => {
		alert(`[ERROR]:  ${msg}`);
	});
}

export default updateRegister;
