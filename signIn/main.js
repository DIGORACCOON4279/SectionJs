

// Observacion: Cree dos codigos para la consigna uno para "Iniciar sesion" y otro para "Crear la Cuenta de usuario":
// -Ambos estan con comentario se puede descomentar el "Sign In" y luego el "Create Account".


/**************** Iniciar Sesion*************************** */


// Form "Sign in"


function signIn() {
    let email = prompt("Enter your email address:");

    while (email.indexOf('@') === -1 || email.indexOf('.com') === -1) {
        alert("Incorrect email. Make sure to include '@' and '.com'.");
        email = prompt("Enter your email address:");
    }

    let password = prompt("Enter your password:(6 numbers):");

    while (isNaN(password) || password.length !== 6 || password.includes(".")){
        alert("Incorrect password. Make sure to enter 6 numbers.");
        password = prompt("Enter your password (6 numbers):");
    }

    alert("Welcome! You have successfully logged in.");
}

signIn();



