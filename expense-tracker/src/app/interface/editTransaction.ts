import bigDecimal from "js-big-decimal";

export interface editTransaction{
    id : string,
    userName : string,
    category : string,
    description : string,
    date : string,
    transactionType : string,
    amount : bigDecimal,
    openingBalance : bigDecimal,
    closingBalance : bigDecimal
}