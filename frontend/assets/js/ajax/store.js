function createRegister(data) {
	return $.ajax({
		url: `http://localhost:80/graveyard-crud/backend/people`,
		method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data)
	})
	.done((msg) => {
		alert('[INFO]: Person created succesfully.');
	})
	.fail((jqXHR, textStatus, msg) => {
		alert(`[ERROR]:  ${msg}`);
	});
}

export default createRegister;
