```function calculaPrecoTotal(quantidade) {
  let preco1 = 1.3 
  let preco2 = 1 
  if (quantidade < 12) {
    return quantidade * preco1
  }
  else if (quantidade >= 12) {
    return quantidade * preco2
  }  
}```