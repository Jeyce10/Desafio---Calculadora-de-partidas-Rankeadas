function saldo(vitoria, derrota){
	return vitoria - derrota
}


let resultado = saldo (150,35)



if (resultado <=10){
	nivel = "Ferro"
} else if((resultado >=11) && (resultado <=20)){
	nivel = "Bonze"
}else if ((resultado >=21) && (resultado <=50)){
	nivel = "Prata"
}else if ((resultado >=51) && (resultado <=80)){
	nivel = "Ouro"
}else if ((resultado >=81) && (resultado <=90)){
	nivel = "Diamante"
}else if ((resultado >=91) && (resultado <=100)){
	nivel = "Lendário"
}else if (resultado >=100){
	nivel = "Imortal"
}


console.log ("O Herói tem de saldo: " + resultado + " e está no nível de " + nivel)