document.getElementById("moneyForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get user input values
    const income = parseFloat(document.getElementById("income").value);
    const insurance = parseFloat(document.getElementById("insurance").value);
    const investment =parseFloat(document.getElementById("investment").value);
    const savings = parseFloat(document.getElementById("savings").value);
    const spendings = parseFloat(document.getElementById("spendings").value);
    

    // Define suggested money ranges
    const incomeRange = "Income should be ₹600,000";
    const insuranceRange = "insurance should be between ₹48,000 and ₹60,000";
    const investmentRange = "investment should be between ₹90,000 and ₹120,000";
    const savingsRange = "Savings should be between ₹120,000 and ₹132,000";
    const spendingsRange = "Spendings should be between ₹240,000 and ₹270,000";
    

    // Check if input values are within the suggested ranges
    if (income >= 0 && income <= 600000) {
        document.getElementById("incomeRange").textContent = "";
    } else {
        document.getElementById("incomeRange").textContent = incomeRange;
    }

    if (insurance >= 48000 && insurance <= 60000) {
        document.getElementById("insuranceRange").textContent = "";
    } else {
        document.getElementById("insuranceRange").textContent = insuranceRange;
    }

    if (investment >= 90000 && investment <= 120000) {
        document.getElementById("investmentRange").textContent = "";
    } else {
        document.getElementById("investmentRange").textContent = investmentRange;
    }


    if (savings >= 120000 && savings <= 132000) {
        document.getElementById("savingsRange").textContent = "";
    } else {
        document.getElementById("savingsRange").textContent = savingsRange;
    }

    if (spendings >= 240000 && spendings <= 270000) {
        document.getElementById("spendingsRange").textContent = "";
    } else {
        document.getElementById("spendingsRange").textContent = spendingsRange;
    }

});

