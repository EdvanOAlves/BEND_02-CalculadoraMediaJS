/*****************************************************
 * Objetivo: Arquivo responsável pelo processamento de cálculos de médias escolares e status de aprovação
 * Autor: Edvan
 * Data: 05/08/2025
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
    if (media < 5 && media >=0){
        statusAluno = 'REPROVADO';
    }else if (media >=5 && media < 7){
        statusAluno = 'PARA RECUPERAÇÃO';
    }else if (media >= 7 && media <= 10){
        statusAluno = 'APROVADO';
    }

    if(statusAluno == undefined){
        return false;
    }else{
        return statusAluno;
    }
}

// Funções para facilitar validação de dados

//Função para verificar se cinco valores foram preenchidos TODO: Refazer melhor quando for abordado arrays
function hasBlank(valor0, valor1, valor2, valor3, valor4){
    let campos = [valor0, valor1, valor2, valor3, valor4];
    let blanks = 0;
    for (let i = 0; i < campos.length; i++){
        if (campos[i] == ''){
            blanks++;
        }
    }
    return blanks > 0;
}

//Função para verificar existências de não números TODO: Refazer melhor quando for abordado arrays
function hasNan(valor1, valor2, valor3, valor4){
    let campos = [valor1, valor2, valor3, valor4];
    let naNs = 0;
    for (let i = 0; i < campos.length; i++){
        if (isNaN(campos[i])){
            naNs++;
        }
    }
    return naNs > 0;
}

//Função para verificar existencia de valores fora de notas válidas (abaixo de 0 ou acima de 10)
function hasOutOfRange(valor1, valor2, valor3, valor4){
    let campos = [Number(valor1), Number(valor2), Number(valor3), Number(valor4)];
    let outOfRange = 0;
    for (let i = 0; i < campos.length; i++){
        if (campos[i] < 0 || campos[i] > 10){
            outOfRange++;
        }
    }
    return outOfRange > 0;
}

//Permite deixar as funções, variáveis, constantes e objetos como públicos, para serem utlizadas em outros arquivos ou projetos
module.exports = {
    calcMedia,
    calcStatusAluno,
    hasBlank,
    hasNan,
    hasOutOfRange
}