document.getElementById("moneyForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get user input values
    const income = parseFloat(document.getElementById("income").value);
    const insurance = parseFloat(document.getElementById("insurance").value);
    const investment =parseFloat(document.getElementById("investment").value);
    const savings = parseFloat(document.getElementById("savings").value);
    const spendings = parseFloat(document.getElementById("spendings").value);
    

    // Define suggested money ranges
    const incomeRange = "Income should be between ₹0 and ₹100,000";
    const insuranceRange = "insurance should be between ₹0 and ₹50,000";
    const investmentRange = "investment should be between ₹0 and ₹50,000";
    const savingsRange = "Savings should be between ₹0 and ₹50,000";
    const spendingsRange = "Spendings should be between ₹0 and ₹50,000";
    

    // Check if input values are within the suggested ranges
    if (income >= 0 && income <= 100000) {
        document.getElementById("incomeRange").textContent = "";
    } else {
        document.getElementById("incomeRange").textContent = incomeRange;
    }

    if (insurance >= 0 && insurance <= 50000) {
        document.getElementById("insuranceRange").textContent = "";
    } else {
        document.getElementById("insuranceRange").textContent = insuranceRange;
    }

    if (investment >= 0 && investment <= 50000) {
        document.getElementById("investmentRange").textContent = "";
    } else {
        document.getElementById("investmentRange").textContent = investmentRange;
    }


    if (savings >= 0 && savings <= 50000) {
        document.getElementById("savingsRange").textContent = "";
    } else {
        document.getElementById("savingsRange").textContent = savingsRange;
    }

    if (spendings >= 0 && spendings <= 50000) {
        document.getElementById("spendingsRange").textContent = "";
    } else {
        document.getElementById("spendingsRange").textContent = spendingsRange;
    }

});

