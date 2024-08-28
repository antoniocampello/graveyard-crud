function showModal(data = null) {
	const modalSelector = '#modalAdd';
	const closeBtn = '#closeBtn';
	const saveBtn = '#saveBtn';

	$(modalSelector).modal('show');

    if (data) {
        $('#name').val(data.name);
        $('#dateBirth').val(data.date_of_birth);
        $('#dateDeath').val(data.date_of_death);
        $('input[name="gender"][value="' + data.gender.toLowerCase() + '"]').prop('checked', true);
        $('#nationality').val(data.nationality);

        switch (data.marital_status) {
            case 'Single':
                $('#maritalStatus').val('S');
                break;
            case 'Married':
                $('#maritalStatus').val('M');
                break;
            case 'Divorced':
                $('#maritalStatus').val('D');
                break;
            case 'Cohabiting':
                $('#maritalStatus').val('C');
                break;
            case 'Widowed':
                $('#maritalStatus').append('<option value="W" selected>Widowed</option>');
                break;
            default:
                $('#maritalStatus').val('');
        }
    }

	return new Promise((resolve, reject) => {
		$(saveBtn).off('click').on('click', () => {
			const name = $('#name').val();
			const date_of_birth = $('#dateBirth').val();
			const date_of_death = $('#dateDeath').val();
			const gender = $('input[name="gender"]:checked').val();
			const nationality = $('#nationality').val();
			let marital_status = $('#maritalStatus').val();

			switch (marital_status) {
				case 'S':
					marital_status = 'Single';
					break;
				case 'M':
					marital_status = 'Married';
					break;
				case 'D':
					marital_status = 'Divorced';
					break;
				case 'C':
					marital_status = 'Cohabiting';
					break;
				case 'W':
					marital_status = 'Widowed';
					break;
				default:
					marital_status = '';
			}

			$(modalSelector).modal('hide');

			resolve({
				name,
				date_of_birth,
				date_of_death,
				gender,
				nationality,
				marital_status,
			});
		});

		$(closeBtn).off('click').on('click', () => {
			$(modalSelector).modal('hide');
			resolve({});
		});
	});
}

export default showModal;
