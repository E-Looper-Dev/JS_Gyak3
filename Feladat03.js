document.addEventListener('DOMContentLoaded', function() {
    var koszonesGomb = document.getElementById('koszonesGomb');

    koszonesGomb.addEventListener('click', function() {
        var ora = new Date().getHours();
        var udvozles;

        if (ora < 12) {
            udvozles = 'Jó reggelt';
        } else if (ora < 18) {
            udvozles = 'Jó napot';
        } else {
            udvozles = 'Jó estét';
        }

        alert(udvozles + ', kedves felhasználó!');
    });
});
