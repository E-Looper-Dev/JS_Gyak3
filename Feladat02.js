document.addEventListener('DOMContentLoaded', function() {
    var szamolGomb = document.getElementById('szamol');
    var aInput = document.getElementById('a');
    var bInput = document.getElementById('b');
    var cInput = document.getElementById('c');
    var eredmeny = document.getElementById('eredmeny');

    szamolGomb.addEventListener('click', function() {
        var a = parseFloat(aInput.value);
        var b = parseFloat(bInput.value);
        var c = parseFloat(cInput.value);

        if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
            alert('Kérlek, adj meg érvényes oldalhosszakat!');
            return;
        }

        var kerulet = a + b + c;
        var s = kerulet / 2;
        var terulet = Math.sqrt(s * (s - a) * (s - b) * (s - c));

        eredmeny.textContent = 'A háromszög területe: ' + terulet.toFixed(2) + ', kerülete: ' + kerulet.toFixed(2);
    });
});
