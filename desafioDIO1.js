/*
Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"

*/

let nome = "ANA";
let qntXP = 10002;

if(qntXP < 1000){
    nivel = "Ferro";

}

else if(qntXP >= 1001 && qntXP <= 2000){
        nivel = "Bronze";

}

else if(qntXP <=2001 && qntXP <=5000){
        nivel = "Prata";

}

else if(qntXP <=5001 && qntXP <=7000){
    nivel = "Ouro";

}

else if(qntXP <=7001 && qntXP <=8000){
    nivel = "Platina";

}

else if(qntXP <=8001 && qntXP <=9000){
    nivel = "Ascendente";

}

else if(qntXP <=9001 && qntXP <=10.000){
    nivel = "Imortal";

}


else if(qntXP >=10001){
    nivel = "RADIANTE";
}

console.log(`O herói de nome ${nome} está no nível de ${nivel}`);
