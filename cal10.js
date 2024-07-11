document.getElementById("moneyForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get user input values
    const income = parseFloat(document.getElementById("income").value);
    const insurance = parseFloat(document.getElementById("insurance").value);
    const investment =parseFloat(document.getElementById("investment").value);
    const savings = parseFloat(document.getElementById("savings").value);
    const spendings = parseFloat(document.getElementById("spendings").value);
    

    // Define suggested money ranges
    const incomeRange = "Income should be ₹10,00,000";
    const insuranceRange = "insurance should be between ₹80,000 and ₹100,000";
    const investmentRange = "investment should be between ₹150,000 and ₹200,000";
    const savingsRange = "Savings should be between ₹200,000 and ₹220,000";
    const spendingsRange = "Spendings should be between ₹400,000 and ₹450,000";
    

    // Check if input values are within the suggested ranges
    if (income >= 0 && income <= 1000000) {
        document.getElementById("incomeRange").textContent = "";
    } else {
        document.getElementById("incomeRange").textContent = incomeRange;
    }

    if (insurance >= 80000 && insurance <= 100000) {
        document.getElementById("insuranceRange").textContent = "";
    } else {
        document.getElementById("insuranceRange").textContent = insuranceRange;
    }

    if (investment >= 150000 && investment <= 200000) {
        document.getElementById("investmentRange").textContent = "";
    } else {
        document.getElementById("investmentRange").textContent = investmentRange;
    }


    if (savings >= 200000 && savings <= 220000) {
        document.getElementById("savingsRange").textContent = "";
    } else {
        document.getElementById("savingsRange").textContent = savingsRange;
    }

    if (spendings >= 400000 && spendings <= 450000) {
        document.getElementById("spendingsRange").textContent = "";
    } else {
        document.getElementById("spendingsRange").textContent = spendingsRange;
    }

});

