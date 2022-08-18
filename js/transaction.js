// Deposit Part

document.getElementById('deposit-btn').addEventListener('click',function(){

// making code simpler

    const newDepositValue = getValueById('deposit-field');
    
    if(newDepositValue>0 || typeof newDepositValue === Number){
    let oldDepositValue = getInnerTextById('deposit-display');
    const latestDepositValue = newDepositValue + oldDepositValue;
    setValueByID('deposit-display', latestDepositValue);

    // calling balance display

    let oldBalance = getInnerTextById('balance-display');
    const newBalance = oldBalance + newDepositValue;
    setValueByID('balance-display', newBalance);
    }
    
    else{
        alert('Please Enter a valid Amount');
    }
    setEmptyValueByID('deposit-field', '');
})


// Withdraw Part

document.getElementById('withdraw-btn').addEventListener('click',function(){
    const newWithdrawValue = getValueById('withdraw-field');

    // calling balance display
    let oldBalance = getInnerTextById('balance-display');

    if(newWithdrawValue>oldBalance){
        alert('Tor bap er bank a eto taka nai');
    }
   else if(newWithdrawValue>0 || typeof newWithdrawValue === Number){
    let oldWithdrawValue = getInnerTextById('withdraw-display');
    const latestWithdrawValue = newWithdrawValue + oldWithdrawValue;
    setValueByID('withdraw-display', latestWithdrawValue);

    
    const newBalance = oldBalance - newWithdrawValue;
    setValueByID('balance-display', newBalance);
}
else{
    alert('Please Enter a valid Amount');
}
setEmptyValueByID('withdraw-field', '');
})