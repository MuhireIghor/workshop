const currencyFormat = new Intl.NumberFormat(undefined,{currency:"Rwf",style:"currency"});
export function formatCurrency(number){
return currencyFormat.format(number);
}