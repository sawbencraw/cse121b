document.addEventListener('DOMContentLoaded', function () {
  // Get references to DOM elements
  const convertBtn = document.getElementById('convertBtn'); // Button for initiating conversion
  const resultsDiv = document.getElementById('results'); // Container for displaying conversion results

  // Event listener for button click
  convertBtn.addEventListener('click', () => {
    // Retrieve input values
    const amount = parseFloat(document.getElementById('amount').value); // Amount to convert
    const fromCurrency = document.getElementById('from').value; // Currency to convert from
    const currencies = ['USD', 'EUR', 'GBP', 'JPY']; // Array of currencies to convert to

    // Fetch exchange rates from JSON file
    fetch('exchange_rates.json')
      .then(response => response.json()) // Parse response as JSON
      .then(data => {
        resultsDiv.innerHTML = ''; // Clear previous results

        // Iterate through currencies to convert to
        currencies.forEach(currency => {
          if (currency !== fromCurrency) { // Skip conversion if currency is same as source
            const exchangeRate = data[fromCurrency][currency]; // Get exchange rate for conversion
            const convertedAmount = (amount * exchangeRate).toFixed(2); // Convert amount and round to 2 decimal places
            resultsDiv.innerHTML += `<p>${amount} ${fromCurrency} = ${convertedAmount} ${currency}</p>`; // Display conversion result
          }
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error); // Log error to console
        resultsDiv.innerHTML = 'An error occurred. Please try again later.'; // Display error message
      });
  });
});
