function validateForm() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var alamat = document.getElementById("alamat").value;
    var errorMessage = document.getElementById("error-message");

    if (nama === "" || email === "" || alamat === "") {
        window.alert = "Anda harus mengisi data dengan lengkap !";
        return false;
    }

    if (nama.trim() === "" || email.trim() === "" || alamat.trim() === "") {
        errorMessage.innerHTML = "Semua bidang harus diisi.";
        return false;
    }

    errorMessage.innerHTML = "";
    return true;
}
