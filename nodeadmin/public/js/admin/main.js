//This script contains functions that can be used in many places
$('.collapsible').collapsible();

//Click event on btn_menu
$('.btn_menu').click(function () {
    alert('click');
    let bloque = $(this).attr('data-target');
    if (!$('#' + bloque).hasClass('active')) {
        $('.caja_contenido_principal').removeClass('active');
        $('#' + bloque).addClass('active');
    }
});

//Set Data of actual user in the UI
function setDataUserInUI() {
    person_list.forEach(p => {
        if (account.data.id_person === p.id) {
            $('#url_picture').attr('src', p.data.picture);
            $('#user_name').text(p.data.names.split(' ')[0] + ' ' + p.data.surnames.split(' ')[0]);
        }
    });
}

//Set Info Counters
function setContadores() {
    let total_admin = 0;
    let total_users = 0;
    let categories = category_list.legth;
    let sites = site_list.legth;

    account_list.forEach(a => {
        if (a.data.type === 0) {
            total_admin += 1;
        } else {
            total_users += 1;
        }
    });

    $('#total_admins').text(total_admin);
    $('#total_users').text(total_users);
    $('#total_categorias').text(categories);
    $('#total_sitios').text(sites);

}

//Make an Ajax request and return data through a callback
function peticionAjaxServidor(d, type, dataType, url, cb) {
    $.ajax({
        url: url,
        type: type,
        cache: false,
        dataType: dataType,
        data: {
            data: JSON.stringify(d)
        }
    }).done(function (d) {
        cb(d);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        mostrarMensajeDeError(jqXHR, textStatus, errorThrown);
        cb({ code: -2, data: '' });
    });
}

//Change the state of a button to active or no-active
function changeButtonState(id, state) {
    if (state) {
        $('#' + id).addClass('noactive');
    } else {
        $('#' + id).removeClass('noactive');
    }
}

//Change the state of the loader, to visible or hidden
function changeStateLoader(id, state) {
    if (state) {
        $('#' + id).addClass('visible');
    } else {
        $('#' + id).removeClass('visible');
    }
}

//Set the value of a field and its attrs data-account data-person placeholder data-target (tipo|campo)
function setCamposTipoA(id, value, dc, dp, dt) {
    $('#' + id).val(value);
    $('#' + id).attr('placeholder', value);
    $('#' + id).attr('data-account', dc);
    $('#' + id).attr('data-person', dp);
    $('#' + id).attr('data-target', dt);
}

//Search for an object in an array, according to the value of the variable 'filed' and return it
function searchAndReturnObject(list, field, value) {
    let obj = null;
    list.forEach(o => {
        if (o[field] === value) {
            obj = o;
        }
    });
    return obj;
}