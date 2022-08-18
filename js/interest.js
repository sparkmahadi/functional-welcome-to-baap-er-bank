// Simple interest part

// A = P(1 + RT)

// A	=	final amount
// P	=	initial principal balance
// r	=	annual interest rate
// t	=	time (in years)

let interestRate = 0.1;
let finalAmount = 0;

document.getElementById('calc-simple-btn').addEventListener('click', function(event){
    const simpleFieldCall = document.getElementById('simple-value-field');
    const simpleFieldValue = parseFloat(simpleFieldCall.value);

    finalAmount = simpleFieldValue * interestRate;

    const simpleTextCall = document.getElementById('simple-text');
    simpleTextCall.innerText = `Calculated Interest Amount is = ${finalAmount} $/Year`

})