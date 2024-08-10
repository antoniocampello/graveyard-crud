import startDataTable from './fields/dataTable.js';
import showModal from './fields/openModal.js';
import deleteRegisterById from './ajax/destroy.js';
import fetchSingleRegisterById from './ajax/show.js';
import createRegister from './ajax/store.js';
import updateRegister from './ajax/update.js';

$(() => {
	const dataTableSelector = '#dataTable';
	const dataTable = startDataTable(dataTableSelector);

	const [btnAdd, btnEdit, btnDelete] = ['#btn-add', '.btn-edit', '.btn-delete'];

	$(dataTableSelector).on('click', btnEdit, async function () {
		const id = $(this).data('id');

		const data = await fetchSingleRegisterById(id);

		const newData = showModal(data);

		await updateRegister(id, newData);

		dataTable.ajax.reload(null, false);
	});

	$(dataTableSelector).on('click', btnDelete, async function () {
		const id = $(this).data('id');

		if (confirm(`Are you sure? id: [${id}]`)) {
			await deleteRegisterById(id);
		}

		dataTable.ajax.reload(null, false);
	});

	$(btnAdd).on('click', async () => {
		const data = showModal();

		await createRegister(data);

		dataTable.ajax.reload(null, false);
	});
});
