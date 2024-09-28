// Declaração de variáveis globais
let valorAtual = '';  // Armazena o valor digitado atualmente
let operadorAtual = '';  // Armazena o operador atual (+, -, *, /)
let valorAnterior = '';  // Armazena o valor anterior para o cálculo

// Função para adicionar números ao visor
function adicionarValor(valor) {
    valorAtual += valor;  // Concatena o valor atual com o novo número
    atualizarVisor(valorAtual);  // Atualiza o visor com o valor atual
}

// Função para adicionar o operador matemático
function adicionarOperador(operador) {
    if (valorAtual === '') return;  // Se não houver valor, não faz nada
    if (valorAnterior !== '') {  // Se já houver um valor anterior, realiza o cálculo
        calcular();  // Calcula o resultado antes de aplicar o novo operador
    }
    operadorAtual = operador;  // Define o novo operador
    valorAnterior = valorAtual;  // Salva o valor atual como o valor anterior
    valorAtual = '';  // Reseta o valor atual para receber o próximo número
}

// Função para realizar o cálculo
function calcular() {
    let resultado;
    const valor1 = parseFloat(valorAnterior);  // Converte o valor anterior para número
    const valor2 = parseFloat(valorAtual);  // Converte o valor atual para número

    if (isNaN(valor1) || isNaN(valor2)) return;  // Verifica se os valores são números válidos

    // Escolhe a operação com base no operador
    switch (operadorAtual) {
        case '+':
            resultado = valor1 + valor2;
            break;
        case '-':
            resultado = valor1 - valor2;
            break;
        case '*':
            resultado = valor1 * valor2;
            break;
        case '/':
            if (valor2 === 0) {  // Verifica se a divisão por zero está acontecendo
                alert('Divisão por zero não é permitida!');  // Avisa o usuário
                limparVisor();
                return;
            }
            resultado = valor1 / valor2;
            break;
        default:
            return;  // Se não houver operador válido, sai da função
    }

    valorAtual = resultado;  // Atualiza o valor atual com o resultado do cálculo
    operadorAtual = '';  // Reseta o operador
    valorAnterior = '';  // Reseta o valor anterior
    atualizarVisor(valorAtual);  // Atualiza o visor com o resultado
}

// Função para limpar o visor
function limparVisor() {
    valorAtual = '';  // Limpa o valor atual
    operadorAtual = '';  // Limpa o operador atual
    valorAnterior = '';  // Limpa o valor anterior
    atualizarVisor('0');  // Reseta o visor para zero
}

// Função para atualizar o visor
function atualizarVisor(valor) {
    document.getElementById('visor').value = valor;  // Atualiza o valor no visor
}
