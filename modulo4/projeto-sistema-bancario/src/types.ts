export type Transaction = {
    value: Number,
    date: Date,
    description: String
}

export type Account = {
    name: String,
    CPF: String,
    dateOfBirth: Date,
    balance: number,
    statement: Array<Transaction>
}