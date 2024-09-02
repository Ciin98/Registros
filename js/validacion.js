function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}


function validacionDeFormulario() {
    const nombre = document.getElementById('#nombre').value.trim();
    const apellido = document.getElementById('#apellido').value.trim();
    const email = document.getElementById('#email').value.trim();
    const password1 = document.getElementById('#password1').value.trim();
    const password2 =document.getElementById('#password2').value.trim();
    const terminos =document.getElementById('#terminos').value.trim();
    
    if (!nombre === '' || !apellido === '' || !email === '' || !password1 === '' || !password2 === '') {
        showAlertError ('Los campos no pueden estar vacios.');
        return false;
    } 

    if (password1.length < 6) {
        showAlertError ('La contraseña debe tener al menos 6 caracteres.');
        return false;
    }

    if (password1 !== password2) {
        showAlertError ('Las contraseñas deben coincidir.');
        return false;
    }

    if (!terminos) {
        showAlertError ('Debe aceptar los terminos y condiciones.');
        return false;
    }
}

document.getElementById('regBtn').addEventListener('click', validacionDeFormulario);