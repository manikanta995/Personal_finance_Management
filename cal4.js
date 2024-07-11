document.getElementById("moneyForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get user input values
    const income = parseFloat(document.getElementById("income").value);
    const insurance = parseFloat(document.getElementById("insurance").value);
    const investment =parseFloat(document.getElementById("investment").value);
    const savings = parseFloat(document.getElementById("savings").value);
    const spendings = parseFloat(document.getElementById("spendings").value);
    

    // Define suggested money ranges
    const incomeRange = "Income should be ₹400,000";
    const insuranceRange = "insurance should be between ₹32,000 and ₹40,000";
    const investmentRange = "investment should be between ₹60,000 and ₹80,000";
    const savingsRange = "Savings should be between ₹80,000 and ₹88,000";
    const spendingsRange = "Spendings should be between ₹160,000 and ₹180,000";
    

    // Check if input values are within the suggested ranges
    if (income >= 0 && income <= 400000) {
        document.getElementById("incomeRange").textContent = "";
    } else {
        document.getElementById("incomeRange").textContent = incomeRange;
    }

    if (insurance >= 32000 && insurance <= 40000) {
        document.getElementById("insuranceRange").textContent = "";
    } else {
        document.getElementById("insuranceRange").textContent = insuranceRange;
    }

    if (investment >= 60000 && investment <= 80000) {
        document.getElementById("investmentRange").textContent = "";
    } else {
        document.getElementById("investmentRange").textContent = investmentRange;
    }


    if (savings >= 80000 && savings <= 88000) {
        document.getElementById("savingsRange").textContent = "";
    } else {
        document.getElementById("savingsRange").textContent = savingsRange;
    }

    if (spendings >= 160000 && spendings <= 180000) {
        document.getElementById("spendingsRange").textContent = "";
    } else {
        document.getElementById("spendingsRange").textContent = spendingsRange;
    }

});

