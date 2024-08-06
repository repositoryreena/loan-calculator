const monthlyPayment = document.getElementById("monthlypayment");
const amount = document.getElementById("amount");
const interest = document.getElementById("interest");
const months = document.getElementById("months");

// Calculate and update the monthly payment
function updateMonthlyPayment() {
    const P = parseFloat(amount.value);
    const annualInterestRate = parseFloat(interest.value);
    const n = parseInt(months.value);

    // Clear any existing content
    monthlyPayment.innerHTML = '';

    if (isNaN(P) || isNaN(annualInterestRate) || isNaN(n) || n <= 0) {
        // Do nothing if inputs are invalid
        return;
    }

    const r = annualInterestRate / 100 / 12;
    const monthlyPaymentAmount = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    // Update the content with the calculated result
    monthlyPayment.innerHTML = `Monthly Payment: ${monthlyPaymentAmount.toFixed(2)}`;
}

// Add event listeners to all input fields
document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", updateMonthlyPayment);
});

// Optionally, you can initialize the display if needed
