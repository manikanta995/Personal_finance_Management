document.getElementById("moneyForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get user input values
    const income = parseFloat(document.getElementById("income").value);
    const insurance = parseFloat(document.getElementById("insurance").value);
    const investment =parseFloat(document.getElementById("investment").value);
    const savings = parseFloat(document.getElementById("savings").value);
    const spendings = parseFloat(document.getElementById("spendings").value);
    

    // Define suggested money ranges
    const incomeRange = "Income should be 700,000";
    const insuranceRange = "insurance should be between ₹56,000 and ₹70,000";
    const investmentRange = "investment should be between ₹105,000 and ₹140,000";
    const savingsRange = "Savings should be between ₹140,000 and ₹154,000";
    const spendingsRange = "Spendings should be between ₹280,000 and ₹315,000";
    

    // Check if input values are within the suggested ranges
    if (income >= 0 && income <= 700000) {
        document.getElementById("incomeRange").textContent = "";
    } else {
        document.getElementById("incomeRange").textContent = incomeRange;
    }

    if (insurance >= 56000 && insurance <= 70000) {
        document.getElementById("insuranceRange").textContent = "";
    } else {
        document.getElementById("insuranceRange").textContent = insuranceRange;
    }

    if (investment >= 105000 && investment <= 140000) {
        document.getElementById("investmentRange").textContent = "";
    } else {
        document.getElementById("investmentRange").textContent = investmentRange;
    }


    if (savings >= 140000 && savings <= 154000) {
        document.getElementById("savingsRange").textContent = "";
    } else {
        document.getElementById("savingsRange").textContent = savingsRange;
    }

    if (spendings >=  280000 && spendings <= 315000) {
        document.getElementById("spendingsRange").textContent = "";
    } else {
        document.getElementById("spendingsRange").textContent = spendingsRange;
    }

});

