const currencySelector = document.getElementById('currency-selector');

const currencySymbols = {
    eur: "€",
    usd: "$",
    gbp: "£",
  };

const getCurrencyChanges = () => {
    const api = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json';

    return fetch(api)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch exchange rates");
            }
            return response.json();
        })
        .then(data => data.eur)
        .catch(error => {
            console.error(error.message);
            return null;
        });
}

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
    const selectedCurrency = event.target.value;

    getCurrencyChanges()
    .then(currencyChanges => {
        updatePrices(currencyChanges, selectedCurrency);
    })
    .catch(error => {
        console.error(error.message);
    });
})
