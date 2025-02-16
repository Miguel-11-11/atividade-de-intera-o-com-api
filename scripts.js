function calcularIMC() {
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;

    if (peso === "" || altura === "" || isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, preencha os campos corretamente.");
        return;
    }

    const imc = peso / (altura * altura);
    let categoria = "";

    if (imc < 18.5) {
        categoria = "Abaixo do Peso";
    } else if (imc < 25) {
        categoria = "Normal";
    } else if (imc < 30) {
        categoria = "Sobrepeso";
    } else {
        categoria = "Obesidade";
    }

    document.getElementById('resultado').innerHTML = `Seu IMC é ${imc.toFixed(2)} (${categoria})`;
}