let vitorias = soma(50, 2)
function soma(vitorias, derrotas){
  let resultado = vitorias - derrotas
  return resultado
}

let nivel = ""

if      (vitorias <= 10)
        {nivel = "Ferro"}
else if (vitorias > 10 && vitorias <= 20)
        {nivel = "Bronze"}
else if (vitorias > 20 && vitorias <= 50)
        {nivel = "Prata"}
else if (vitorias > 50 && vitorias <= 80)
        {nivel = "Ouro"}
else if (vitorias > 80 && vitorias <= 90)
        {nivel = "Diamante"}
else if (vitorias > 90 && vitorias <= 100)
        {nivel = "Lendario"}
else if (vitorias >= 101)
        {nivel = "Imortal"}

console.log("O Herói tem um saldo de " + vitorias + " Vitórias" + " e está no Nível " + nivel)

