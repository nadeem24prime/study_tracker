function login() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "") {
        alert("Email is required");
        return;
    }

    if (password === "") {
        alert("Password is required");
        return;
    }

    alert("Login successful ✅");
}
function togglePassword() {
    const passwordField = document.getElementById("password");

    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}
function togglePassword(icon) {
    const password = document.getElementById("password");

    if (password.type === "password") {
        password.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        password.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}
function toggleDark() {
    document.body.classList.toggle("dark");
}
