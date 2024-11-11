/*Crie uma *função* que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
*/
let nome = "Ana";
let vitorias = 50;
let derrotas = 25;

function saldo(vitorias, derrotas){
    return vitorias - derrotas
}

let saldoVitorias = saldo(vitorias, derrotas);

if(saldoVitorias < 10){
    nivel = "Ferro";

}

else if(saldoVitorias >= 11 && saldoVitorias <= 20){
        nivel = "Bronze";

}

else if(saldoVitorias <= 21 && saldoVitorias <= 50){
        nivel = "Prata";

}

else if(saldoVitorias <= 51 && saldoVitorias <= 70){
    nivel = "Ouro";

}

else if(saldoVitorias <= 71 && saldoVitorias <= 80){
    nivel = "Platina";

}

else if(saldoVitorias <= 81 && saldoVitorias <= 90){
    nivel = "Ascendente";

}

else if(saldoVitorias <= 91 && saldoVitorias <= 100){
    nivel = "Imortal";

}


else if(saldoVitorias >= 101){
    nivel = "RADIANTE";
}

console.log(`O herói de nome ${nome} tem o saldo de vitórias ${saldoVitorias} e está no nível de ${nivel}`);