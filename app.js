/**************************************************************************************************
 * Objetivo: Realizar o calculo de medias escolares (Condicionais, Tratamento de Erro, Variáveis)
 * Autor: Edvan
 * Data: 05/08/2025
 * Versão: 1.0 
 **************************************************************************************************/

//Import do arquivo de medias escolares
const mediaEscolar = require('./Modulo/media.js')
// Import de biblioteca do readline
const readline = require('readline');

// Iniciando a interface de input de dados por meio do terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

/*******************************************************************************************
 *          Formas de criação de variáveis
 * 
 * let ->   Permite criar uma variável dentro do escopo de um bloco,
 *          essa variável nasce e morre dentro do bloco
 * 
 * var ->   Permite criar uma variável dentro ou fora de um escopo de bloco,
 *          porém não se utiliza com tanta frequência
 * 
 * CONST -> Permite criar um espaço em memória onde não sofre alteração de conteudo,
 *          podendo ser criado dentro ou fora de um escopo de bloco
 * 
 * Boa prática é colocar ALL_CAPS nos nomes das const, no resto você usa camelCase
 * 
 * 
 *          Métodos de conversão de tipos de dados
 * String()     > Converte para String
 * Number()     > Converte para número inteiro ou de ponto flutuante , conforme a necessidade
 * ParseInt()   > Converte para número inteiro
 * ParseFloat() > Converte para número de ponto flutuante
 *      Bonus: toFixed(n) para limitar quantas casas depois da vírgula em números float
 *             isNaN() para ver se tem um não-numero
 * 
 * Boolean()    > Converte para booleano
 * Object()     > Converte para objeto (Array, json, class, muitas opções)
 * 
 *          Operadores de comparação
 * 
 * ==   Validação de igualdade de conteúdos
 * <    Validação de menor
 * >    Validação de maior
 * <=   Validação de menor ou igualdade de conteúdos
 * >=   Validação de maior ou igualdade de conteúdos
 * !=   Validação de Diferença de conteudos
 * ===  Validação de tipo de dados e conteúdos
 * !==  Valiação de diferença de conteúdos e igualdade de tipos de dados
 * !=!  Validação de diferença de conteúdos e diferença de tipos de dados
 * 
 * 
 *          Opeadores lógicos
 * E    and     &&
 * OU   or      ||
 * Não  not     !
 * 
*******************************************************************************************/

//Mensagens de erro
const ERROR_MESSAGE_NOT_NUMBER = 'ERRO: Campos com input inválido (Letras ou simbolos especiais)'
const ERROR_MESSAGE_EMPTY = 'ERRO: Campos vazios.'
const ERROR_MESSAGE_OUT_OF_RANGE = 'ERRO: Os valores informados precisam ser entre 0 até 10.'

// Input do nome do aluno
entradaDeDados.question('Digite o nome do aluno: ', function (nome) {
    let nomeAluno = String(nome).toUpperCase();

    entradaDeDados.question('Digite a nota 1: ', function (valor1) {
        let nota1 = valor1;
        entradaDeDados.question('Digite a nota 2: ', function (valor2) {
            let nota2 = valor2;
            entradaDeDados.question('Digite a nota 3: ', function (valor3) {
                let nota3 = valor3;
                entradaDeDados.question('Digite a nota 4:', function (valor4) {
                    let nota4 = valor4;

                    if (mediaEscolar.hasBlank(nomeAluno, nota1, nota2, nota3, nota4)) {
                        console.log(ERROR_MESSAGE_EMPTY)
                    }
                    else if (mediaEscolar.hasNan(nota1, nota2, nota3, nota4)) {
                        console.log(ERROR_MESSAGE_NOT_NUMBER)
                    }
                    else if (mediaEscolar.hasOutOfRange(nota1, nota2, nota3, nota4)){
                        console.log(ERROR_MESSAGE_OUT_OF_RANGE)
                    } else if (mediaEscolar.has) {
                        let media = mediaEscolar.calcMedia(nota1, nota2, nota3, nota4);

                        let statusAluno = mediaEscolar.calcStatusAluno(media);
                        if (statusAluno){
                            console.log(`A média do aluno ${nomeAluno} é de ${media}, Status: ${statusAluno}`);
                        }
                        entradaDeDados.close;

                    }
                })
            })
        })
    }
    )
})