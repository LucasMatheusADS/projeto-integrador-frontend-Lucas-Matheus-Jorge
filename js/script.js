const ano = new Date().getFullYear();
document.getElementById("ano").textContent = ano;

const carro = document.getElementById("carro");
const dias = document.getElementById("dias");
const total = document.getElementById("total");

// Um objeto funciona como um dicionário em Python
const precos = {
    "porsche-911": 3500,
    "audi-r8": 4000,
    "skyline-r34": 5000
};

function calcularTotal() {
    const preco = precos[carro.value];

    // Se nenhum carro estiver selecionado, limpa o texto
    if (!preco) {
        total.textContent = "";
        return;
    }

    total.textContent = "Total: R$ " + (preco * dias.value).toLocaleString("pt-BR");
}

// Executa a função sempre que o usuário muda o carro ou a quantidade



carro.addEventListener("change", calcularTotal);
dias.addEventListener("input", calcularTotal);