class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string
    ) {
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.email = email
        this.name = name
        this.password = password
    }

    public getId(): string {
        return this.id
    }

    public getEmail(): string {
        return this.email
    }

    public getName(): string {
        return this.name
    }
}


const user1: User = new User(
    Date.now().toString(),
    "felipe@felipe.com",
    "Felipe",
    "senha123"
)



/* 
################################ EXERCICIO #################################
1)
a) Não, está privado
b) Uma vez

*/

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        creditCard: string
    ) {
        super(id, email, name, password);
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
    }

    public getCreditCard(): string {
        return this.creditCard;
    }
}

const custumer1: Customer = new Customer (
    Date.now().toString(),
    "felipe@felipe.com",
    "Felipe",
    "senha123",
    "123456789"
)

console.log(custumer1)