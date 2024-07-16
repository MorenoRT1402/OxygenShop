const currencySelector = document.getElementById('currency-selector');

const getCurrencyChanges = () => {
    const api = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json';

    return fetch(api)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch exchange rates");
            }
            const resJSON = response.json();
            console.log(resJSON);
            return resJSON;
        })
        .then(data => data.eur)
        .catch(error => {
            console.error(error.message);
            return null;
        });
}

const updatePrices = (currencyChanges, selectedCurrency) => {
    console.log(currencyChanges, selectedCurrency);
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
