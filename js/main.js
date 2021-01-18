
function equacao(a, b, c) {


    if (delta(a, b, c) > 0) {
        console.log("X1 é igual: " + x1(a, b, delta(a, b, c)));
        console.log("X2 é igual: " + x2(a, b, delta(a, b, c)));

        console.log(delta(a, b, c));
        document.getElementById("x1").innerHTML = "X1 é igual: " + x1(a, b, delta(a, b, c));
        document.getElementById("x2").innerHTML = "X2 é igual: " + x2(a, b, delta(a, b, c));
    } else {
        console.log("O Valor de Delta é Negativo " + delta(a, b, c));
    }
}

function delta(a, b, c) {
    return Math.pow(b, 2) - (4 * a * c);
}

function x1(a, b, valorDelta) {
    return (-b + Math.sqrt(valorDelta)) / (2 * a);

}

function x2(a, b, valorDelta) {
    return (-b - Math.sqrt(valorDelta)) / (2 * a);

}



function abrirModal() {
    document.getElementById('modal').style.display = "block";
    
    equacao(document.getElementById('a').value,document.getElementById('b').value,document.getElementById('c').value);

}


function fecharModal() {
    document.getElementById('modal').style.display = "none";

    document.getElementById('a').value = '';
    document.getElementById('b').value = '';
    document.getElementById('c').value = '';
}



