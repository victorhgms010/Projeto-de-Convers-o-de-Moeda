// Cotacao da moeda

const USD = 5.79;
const EUR = 6.85;
const GBP =  7.49;

//Obtendo os elementos do HTML
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const form = document.getElementById("form");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

// ADD.EVENTLISTENER Observo e capturo o valor

amount.addEventListener("input", () => {
  const value = amount.value;
  const hashCharacteres = /\D+/g;
  amount.value = value.replace(hashCharacteres, "");
});

//Capturando o valor do input
form.onsubmit = (event) => {
  event.preventDefault();
  switch (currency.value){
    case "USD": 
      convertCurrency(amount.value, USD, "$");
      break;
      case "EUR": 
      convertCurrency(amount.value, EUR, "€");
      break;
      case "GBP": 
      convertCurrency(amount.value, GBP, "£");
      break;
  }
};

// Function para converter a moeda 

function convertCurrency(amount, price, symbol){
  try{
    // Exibindo a cotacao da moeda selecionada
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

    //Calculando o valor total
    let total = amount * price;
    // Formatar o valor total 
    total = formatCurrencyBRL(total).replace("R$", "");

    //Exibindo o resultado
    result.textContent = `${total} Reais`;

    //Aplica a classe que exibe o footer com o resultado
    footer.classList.add("show-result");
  }catch(error){
    console.log(error);
    //Remove a clase do footer
    footer.classList.remove("show-result");
    alert("Digite um valor válido");
  }
}


//FORMATA A MOEDA PARA REAL BRASILEIRO
function formatCurrencyBRL(value){
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
