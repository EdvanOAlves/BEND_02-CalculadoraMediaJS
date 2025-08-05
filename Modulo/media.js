/*****************************************************
 * Objetivo: Arquivo responsável pelo processamento de cálculos de médias escolares e status de aprovação
 * Autor: Edvan
 * Data: 30/07/2025
 * Versão: 1.0
 ******************************************************/

// Função para realizar calculos de médias escolares
function calcMedia(valor1, valor2, valor3, valor4){
    let nota1 = valor1;
    let nota2 = valor2;
    let nota3 = valor3;
    let nota4 = valor4;

    let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4))/4;
    return media.toFixed(1);
}

// Função para classificar o status do aluno
function calcStatusAluno(media){
    let statusAluno;

    if (media < 5){
        statusAluno = 'REPROVADO';
    }else if (media >=5 && media < 7){
        statusAluno = 'PARA RECUPERAÇÃO';
    }else if (media <= 10){
        statusAluno = 'APROVADO';
    }

    return statusAluno
}
//Permite deixar as funções, variáveis, constantes e objetos como públicos, para serem utlizadas em outros arquivos ou projetos
module.exports = {
    calcMedia,
    calcStatusAluno
}