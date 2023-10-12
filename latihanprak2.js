function jumlahkan() {
        
        var bilangan1 = parseFloat(document.getElementById('bilangan1').value);
        var bilangan2 = parseFloat(document.getElementById('bilangan2').value);

        var hasil = bilangan1 + bilangan2;

        window.alert('Hasil penjumlahan: ' + hasil);

        document.getElementById('hasil').textContent = '';
}

function ulangi() {
        
        document.getElementById('bilangan1').value = '';
        document.getElementById('bilangan2').value = '';

        document.getElementById('hasil').textContent = '';
}
