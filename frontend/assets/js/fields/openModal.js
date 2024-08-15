/**
let meuid = 1;

let meusdados = {
    "name": "teste update",
    "date_of_birth": "1940-07-15",
    "date_of_death": "2023-08-12",
    "gender": "Male",
    "nationality": "American",
    "marital_status": "Widowed"
}

await updateRegister(meuid, meusdados);
*/

function showModal(data = null) {
    const modalSelector = '#modalAdd';
    const closeBtn = '#closeBtn';
    const saveBtn = '#saveBtn';

    $(modalSelector).modal('show');

    // TODO: caso tenha colocar os dados passados na modal
    // data = {
    //     "name": "testando teste borabill",
    //     "date_of_birth": "1940-07-15",
    //     "date_of_death": "2023-08-12",
    //     "gender": "Male",
    //     "nationality": "omgomg",
    //     "marital_status": "Widowed"
    // }
    const name = $('#name').val();
    console.log(1, name);

    // TODO: botao de close -> limpar os campos

    $(saveBtn).on('click', () => {
        return data;
    });
}

export default showModal;
