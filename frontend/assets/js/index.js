import startDataTable from './fields/dataTable.js';
import showModal from './fields/openModal.js';
import deleteRegisterById from './ajax/destroy.js';
import fetchSingleRegisterById from './ajax/show.js';

$(() => {
	$(() => {
		const dataTableSelector = '#dataTable';
		const dataTable = startDataTable(dataTableSelector);
		const [btnEdit, btnDelete] = ['.btn-edit', '.btn-delete'];
		const spawnModalBtn = '#openModal';
	
		$(spawnModalBtn).on('click', () => {
			showModal(dataTable, null, null, 'create');
		});
	
		$(dataTableSelector).on('click', btnEdit, async function () {
			const id = $(this).data('id');
			const data = await fetchSingleRegisterById(id);

			showModal(dataTable, id, data, 'update');
		});
	
		$(dataTableSelector).on('click', btnDelete, async function () {
			const id = $(this).data('id');

			if (confirm(`Are you sure? id: [${id}]`)) {
				await deleteRegisterById(id);

				dataTable.ajax.reload(null, false);
			}
		});
	});

});
