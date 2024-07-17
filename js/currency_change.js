const currencySelector = document.getElementById('currency-selector');

const currencySymbols = {
    eur: "€",
    usd: "$",
    gbp: "£",
  };


const updatePrices = (currencyChanges, selectedCurrency) => {
    const pricesInEur = [0, 25, 60];
    const changeRate = currencyChanges[selectedCurrency];

    const priceTexts = document.querySelectorAll('.plan-price');
    priceTexts.forEach(( planPrice, index) => {
        const updatedPrice = pricesInEur[index] * changeRate;
        const normalizedPrice = updatedPrice % 1 == 0 ? updatedPrice : updatedPrice.toFixed(2);
        planPrice.textContent = `${currencySymbols[selectedCurrency]}${normalizedPrice}`;
    });
}

currencySelector.addEventListener('change', event => {
    const api = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json';
    const selectedCurrency = event.target.value;

    fetch(api)
        .then(response => {
            if(!response.ok){
                throw new Error("Failed to fetch exchange rates");
            }
            response.json()
            .then(data => updatePrices(data.eur, selectedCurrency))
            .catch(error => {
                console.log(error.message);
                return null;
            })
        })
})
