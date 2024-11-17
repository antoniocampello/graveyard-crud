import createRegister from '../ajax/store.js';
import updateRegister from '../ajax/update.js';

async function modalCreateRegister(data, dataTable) {
    console.log(data);

    await createRegister(data);

    dataTable.ajax.reload(null, false);
}

async function modalUpdateRegister(userId, newData, dataTable) {
    await updateRegister(userId, newData);

    dataTable.ajax.reload(null, false);
}

function getMaritalStatus(code) {
    const dict = {
        'S': 'Single',
        'M': 'Married',
        'D': 'Divorced',
        'C': 'Cohabiting',
        'W': 'Widowed'
    };

    return dict[code];
}

function showModal(dataTable, userId = null, data = null, action = null) {
    $('#modalAdd').modal('show');

    if (data) {
        $('#name').val(data.name || '');
        $('#dateBirth').val(data.date_of_birth || '');
        $('#dateDeath').val(data.date_of_death || '');
        $('#nationality').val(data.nationality || '');
        $('#maritalStatus').val(data.marital_status[0] || '');

        if (data.gender) {
            $(`#gender-field input[value="${data.gender}"]`).prop('checked', true);
        }
    }

    $('#btnSave').on('click', () => {
        const newData = {
            name: $('#name').val(),
            date_of_birth: $('#dateBirth').val(),
            date_of_death: $('#dateDeath').val(),
            gender: $('input[name="gender"]:checked').val(),
            nationality: $('#nationality').val(),
            marital_status: getMaritalStatus($('#maritalStatus').val()),
        };

        $('#modalAdd').modal('hide');

        if (action === 'create') {
            modalCreateRegister(newData, dataTable);
        }

        if (action === 'update') {
            modalUpdateRegister(userId, newData, dataTable);
        }
    });

    $('#closeModal').on('click', () => {
        $('#modalAdd').modal('hide');
    });
}

export default showModal;
