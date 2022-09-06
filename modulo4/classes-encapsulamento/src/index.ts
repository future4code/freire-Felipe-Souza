/*

class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(
     cpf: string,
     name: string,
     age: number,
  ) {
     console.log("Chamando o construtor da classe UserAccount")
     this.cpf = cpf;
     this.name = name;
     this.age = age;
  }

}

################################# RESPOSTAS EXE 1 ####################################

a) Construir e tipar os parâmetros da classe
b) Uma vez
c) Com métodos get e set

*/
import Transaction from "./class/Transaction";
import Bank from "./class/bank";

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
  
  }

const UserAccount1: UserAccount = new UserAccount ("123456", "Felipe", 29)
console.log(UserAccount)
console.log(UserAccount1)

const Bank1: Bank = new Bank ([])
Bank1.setAccount("123456789")

console.table(Bank1)

const contaAleatoria = Bank1.getAccount()

console.log(contaAleatoria)