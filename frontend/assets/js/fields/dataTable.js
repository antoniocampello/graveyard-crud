function startDataTable(dataTableId) {
	return $(dataTableId).DataTable({
		ajax: {
			url: 'http://localhost:8080/graveyard-crud/backend/people',
			dataSrc: (json) => json.data
		},
		columns: [
			{ data: 'name' },
			{ data: 'date_of_birth' },
			{ data: 'date_of_death' },
			{ data: 'gender' },
			{ data: 'nationality' },
			{ data: 'marital_status' },
			{
				data: null,
				render: function (data, type, row) {
					return `
                        <button class="btn-edit" data-id="${row.id}">Edit</button>
                        <button class="btn-delete" data-id="${row.id}">Delete</button>
                    `;
				}
			}
		]
	});
}

export default startDataTable;
