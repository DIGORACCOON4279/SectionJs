/**************** Crear Cuenta *************************** */

// Form "Create Account"

function validateEmail(email) {
    return email.includes("@") && email.includes(".com");
}

function validatePassword(password) {
    return password.length === 6 && !isNaN(password);
}

function containsOnlyLetters(text) {
    for (let i = 0; i < text.length; i++) {
        let character = text[i].toLowerCase();
        if (character < 'a' || character > 'z') {
            return false;
        }
    }
    return true;
}

function createAccount() {
    let name;
    let lastName;
    let email;
    let password;

    do {
        name = prompt("Enter your name:");

        if (!containsOnlyLetters(name)) {
            alert("Invalid name. It must contain only letters.");
        }
    } while (!containsOnlyLetters(name));

    do {
        lastName = prompt("Enter your last name:");

        if (!containsOnlyLetters(lastName)) {
            alert("Invalid last name. It must contain only letters.");
        }
    } while (!containsOnlyLetters(lastName));

    do {
        email = prompt("Enter your email address:");

        if (!validateEmail(email)) {
            alert("Email is not valid. It must contain '@' and '.com'.");
        }
    } while (!validateEmail(email));

    do {
        password = prompt("Enter your password (6 numbers):");

        if (!validatePassword(password)) {
            alert("Invalid password. It must contain exactly 6 numbers..");
        }
    } while (!validatePassword(password));

    alert("¡User account created successfully. Welcome!!! \n\nName: " + name + " " + lastName + "\nEmail: " + email);
}

createAccount();
