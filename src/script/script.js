let valueBase = 0
let parcelas = 1
let taxaLucra = 0.0076
let taxaNormal =   0.0202
function setValue(){
    valueBase = document.querySelector("#numberInput").value
    let valuerTaxaLucra = Number(valueBase) * (1 + (parcelas*taxaLucra))
    let valuerTaxaNormal = Number(valueBase) * (1 + (parcelas*taxaNormal))
    let ganho = valuerTaxaNormal - valuerTaxaLucra
    document.querySelector("#titleLucra").innerHTML  = `R$ ${Number(valuerTaxaLucra).toFixed(2)}`
    document.querySelector("#titleBase").innerHTML = `R$ ${Number(valueBase).toFixed(2)}`
    document.querySelector("#titleNormal").innerHTML = `R$ ${Number(valuerTaxaNormal).toFixed(2)}`
    document.querySelector("#titleGanho").innerHTML = `- R$ ${Number(ganho).toFixed(2)}`
}
function setParcelas(){
    let select = document.querySelector("#parcelas")
    parcelas = select.options[select.selectedIndex].value 
}