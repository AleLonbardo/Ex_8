function calcularIdade(dataNascimento) {
    // Calcular a data atual
    var dataAtual = new Date();

    // Extrair o ano de nascimento da data de nascimento
    var anoNascimento = dataNascimento.getFullYear();

    // Extrair o ano atual
    var anoAtual = dataAtual.getFullYear();

    // Calcular a idade
    var idade = anoAtual - anoNascimento;

    return idade;
}

function determinarFaixaEtaria(idade) {
    if (idade >= 0 && idade <= 19) {
        return "Jovem";
    } else if (idade >= 20 && idade <= 59) {
        return "Adulto";
    } else {
        return "Idoso";
    }
}

// Ler o nome do usuário
var nomeUsuario = prompt("Digite seu nome:");

// Ler a data de nascimento do usuário
var dataNascimento = new Date(prompt("Digite sua data de nascimento (AAAA-MM-DD):"));

// Calcular a idade
var idadeUsuario = calcularIdade(dataNascimento);

// Determinar a faixa etária
var faixaEtaria = determinarFaixaEtaria(idadeUsuario);

// Exibir a faixa etária
console.log(nomeUsuario + " está na faixa etária de: " + faixaEtaria);
