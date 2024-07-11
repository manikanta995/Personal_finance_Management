document.getElementById("moneyForm").addEventListener("submit", function (e) {
    e.preventDefault();

    document.getElementById("moneyForm").onsubmit = function() {
        // Your validation logic
        return true; // To allow the form to submit
    };
    

    // Get user input values
    const income = parseFloat(document.getElementById("income").value);
    const insurance = parseFloat(document.getElementById("insurance").value);
    const investment =parseFloat(document.getElementById("investment").value);
    const savings = parseFloat(document.getElementById("savings").value);
    const spendings = parseFloat(document.getElementById("spendings").value);
    

    // Define suggested money ranges
    const incomeRange = "Income should be ₹300,000";
    const insuranceRange = "insurance should be between ₹24,000 and ₹30,000";
    const investmentRange = "investment should be between ₹45,000 and ₹60,000";
    const savingsRange = "Savings should be between ₹60,000 and ₹66,000";
    const spendingsRange = "Spendings should be between ₹120,000 and ₹135,000";
    

    // Check if input values are within the suggested ranges
    if (income >= 0 && income <= 300000) {
        document.getElementById("incomeRange").textContent = "";
    } else {
        document.getElementById("incomeRange").textContent = incomeRange;
    }

    if (insurance >= 24000 && insurance <= 30000) {
        document.getElementById("insuranceRange").textContent = "";
    } else {
        document.getElementById("insuranceRange").textContent = insuranceRange;

    }
    

    if (investment >= 45000 && investment <= 60000) {
        document.getElementById("investmentRange").textContent = "";
    } else {
        document.getElementById("investmentRange").textContent = investmentRange;
    }


    if (savings >= 60000 && savings <= 66000) {
        document.getElementById("savingsRange").textContent = "";
    } else {
        document.getElementById("savingsRange").textContent = savingsRange;
    }

    if (spendings >= 120000 && spendings <= 135000) {
        document.getElementById("spendingsRange").textContent = "";
    } else {
        document.getElementById("spendingsRange").textContent = spendingsRange;
    }

});

