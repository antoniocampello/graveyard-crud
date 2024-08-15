function deleteRegisterById(id) {
	return $.ajax({
		url: `http://localhost:80/graveyard-crud/backend/people/${id}`,
		method: 'DELETE'
	})
	.done((msg) => {
		alert(`[INFO] (${id}): ${msg.message}`);
	})
	.fail((jqXHR, textStatus, msg) => {
		alert(`[ERROR] (${id}):  ${msg}`);
	});
}

export default deleteRegisterById;
