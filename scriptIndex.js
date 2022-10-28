let valorIrreal = document.getElementById("valorIrreal")
let valoresMain = document.querySelectorAll(".numBtn")
let num_online = valoresMain[0]
let num_carteira = valoresMain[1]
let num_fatCard = valoresMain[2]
let num_invest = valoresMain[3]
let num_dividend = valoresMain[4]
let num_proxFat = valoresMain[5]

let inputNaloresMain = document.querySelectorAll(".inputValueMain")
let inputNum_online = inputNaloresMain[0]
let inputNum_carteira = inputNaloresMain[1]
let inputNum_fatCard = inputNaloresMain[2]
let inputNum_invest = inputNaloresMain[3]
let inputNum_dividend = inputNaloresMain[4]
let inputNum_proxFat = inputNaloresMain[5]

inputNum_online.value = parseInt(localStorage.getItem("num_online"))
inputNum_carteira.value = parseInt(localStorage.getItem("num_carteira"))
inputNum_fatCard.value = parseInt(localStorage.getItem("num_fatCard"))
inputNum_invest.value = parseInt(localStorage.getItem("num_invest"))
inputNum_dividend.value = parseInt(localStorage.getItem("num_dividend"))
inputNum_proxFat.value = parseInt(localStorage.getItem("num_proxFat"))

atualizarDados()

function atualizarDados() {
    num_online.innerHTML = parseInt(localStorage.getItem("num_online"))
    num_carteira.innerHTML = parseInt(localStorage.getItem("num_carteira"))
    num_fatCard.innerHTML = parseInt(localStorage.getItem("num_fatCard"))
    num_invest.innerHTML = parseInt(localStorage.getItem("num_invest"))
    num_dividend.innerHTML = parseInt(localStorage.getItem("num_dividend"))
    num_proxFat.innerHTML = parseInt(localStorage.getItem("num_proxFat"))
    valorIrreal.innerHTML = "R$ " + ((parseInt(num_online.innerHTML) + parseInt(num_carteira.innerHTML) + parseInt(num_dividend.innerHTML)) - parseInt(num_fatCard.innerHTML)).toFixed(2).replace(".", ",")
}

function salvarNovosDados() {
    localStorage.setItem('num_online', inputNum_online.value)
    localStorage.setItem('num_carteira', inputNum_carteira.value)
    localStorage.setItem('num_fatCard', inputNum_fatCard.value)
    localStorage.setItem('num_invest', inputNum_invest.value)
    localStorage.setItem('num_dividend', inputNum_dividend.value)
    localStorage.setItem('num_proxFat', inputNum_proxFat.value)
    atualizarDados()
    document.getElementById("inputDados").style.display = "none"
}

function cadastrarNovasDados(){
    document.getElementById("inputDados").style.display = "block"

}