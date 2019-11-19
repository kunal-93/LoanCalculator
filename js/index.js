let rateOfInterest = 5;
let loanAmmountRef = document.getElementById("loanAmount");
let loanTermRef = document.getElementById("loanTerm");
document.getElementById("calculateButton").addEventListener("click", OnCalculatePressed);
let outputArea = document.getElementById("output-area");


function calculateMonthlyPayments(loanAmount, loanTerm){
    if(loanAmount<=0 || loanTerm<=0){
        alert(`Amount and/or Term cannot be <= 0`)
        return null;
    }

    let loanTermInMonths = loanTerm*12;
    let monthlyInterstRate = rateOfInterest/100/12;
    let denominator = 1 - (monthlyInterstRate+1)**(-loanTermInMonths);
    let numerator = loanAmount*monthlyInterstRate;
    let ans = numerator/denominator;

    return ans.toFixed(2);
}


function OnCalculatePressed(){
    ans = calculateMonthlyPayments(loanAmmountRef.value, loanTerm.value);
    if(ans == null)
        return
    let temp = outputArea.innerHTML;
    outputArea.innerHTML = `<li><h2>Your Monthly Payments</h2></li>`;
    outputArea.innerHTML += `<li><h3>Base Calculations</h3></li>`;
    outputArea.innerHTML += `<ul class="output-grid" id="output-grid">
    </ul>`;
    let outputGrid = document.getElementById("output-grid");
    outputGrid.innerHTML = `<li><label><strong>Loan Amount:</strong> ${loanAmmountRef.value}</label></li>`;
    outputGrid.innerHTML += `<li><label><strong>Interest Rate:</strong> ${rateOfInterest}%</label></li>`;
    outputGrid.innerHTML += `<li><label><strong>Number of Years:</strong> ${loanTerm.value}</label></li>`;
    outputGrid.innerHTML += `<li><label><strong>Monthly Payments:</strong> $${ans}</label></li>`;
   
}