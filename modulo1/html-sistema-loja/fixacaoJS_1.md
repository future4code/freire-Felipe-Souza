```function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
let comissao1 = qtdeCarrosVendidos * 100
let comissao2 = (valorTotalVendas / 100) * 5
let salarioFixo = 2000
let comissaoTotal = comissao1 + comissao2 + salarioFixo
return comissaoTotal
}```