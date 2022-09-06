import Transaction from "./Transaction";

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

export default class Bank {
    private accounts: UserAccount[];

    constructor (accounts: UserAccount[]) {
        this.accounts = accounts
    }

    public getAccount() {
        return this.accounts
    }

    public setAccount(newAccounts: any) {
        this.accounts = newAccounts
    }
}