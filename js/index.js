let rateOfInterest = 5;
let loanAmmountRef = document.getElementById("loanAmount");
let loanTermRef = document.getElementById("loanTerm");
document.getElementById("calculateButton").addEventListener("click", OnCalculatePressed);
let outputDiv = document.getElementById("output");

function calculateMonthlyPayments(loanAmount, loanTerm){
    if(loanAmount<=0 || loanTerm<=0){
        alert(`Amount and/or Term cannot be <= 0`)
        return
    }

    let loanTermInMonths = loanTerm*12;
    let monthlyInterstRate = rateOfInterest/100/12;
    let denominator = 1 - (monthlyInterstRate+1)**(-loanTermInMonths);
    let numerator = loanAmount*monthlyInterstRate;
    let ans = numerator/denominator;

    return ans;
}


function OnCalculatePressed(){
    ans = calculateMonthlyPayments(loanAmmountRef.value, loanTerm.value);
    outputDiv.innerHTML = `<li><h2>Your Monthly Payments</h2></li>`;
    outputDiv.innerHTML += `<li><h3>Base Calculations</h3></li>`;
    outputDiv.innerHTML += `<li><label>Loan Amount: ${loanAmmountRef.value}</label></li>`;
    outputDiv.innerHTML += `<li><label>Interest Rate: ${rateOfInterest}%</label></li>`;
    outputDiv.innerHTML += `<li><label>Number of Years: ${loanTerm.value}</label></li>`;
    outputDiv.innerHTML += `<li><label>Monthly Payments: ${ans}</label></li>`;
    // Interest Rate: ${rateOfInterest}% Number of Years: ${loanTerm.value} Monthly Payments: ${ans}`;
}