document.addEventListener('DOMContentLoaded', function() {
    var gondoltSzam = Math.floor(Math.random() * 100) + 1; // Véletlen szám generálása 1 és 100 között
    var tippGomb = document.getElementById('ellenorzes');
    var ujSzamGomb = document.getElementById('ujSzam');
    var tippInput = document.getElementById('tippek');
    var visszajelzes = document.getElementById('visszajelzes');

    function ellenorzes() {
        var tipp = Number(tippInput.value);
        if (tipp < 1 || tipp > 100 || tipp !== parseInt(tippInput.value, 10)) {
            alert('Kérlek, adj meg egy érvényes számot 1 és 100 között!');
        } else if (tipp === gondoltSzam) {
            visszajelzes.textContent = 'Gratulálok, eltaláltad a számot!';
        } else if (tipp < gondoltSzam) {
            visszajelzes.textContent = 'A gondolt szám nagyobb!';
        } else {
            visszajelzes.textContent = 'A gondolt szám kisebb!';
        }
    }

    tippGomb.addEventListener('click', ellenorzes);

    ujSzamGomb.addEventListener('click', function() {
        gondoltSzam = Math.floor(Math.random() * 100) + 1;
        visszajelzes.textContent = '';
        tippInput.value = '';
    });
});
