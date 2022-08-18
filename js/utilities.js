// const depositDisplay = document.getElementById('deposit-display');
//     let oldDepositValue = parseFloat(depositDisplay.innerText);
//     const latestDepositValue = newDepositValue + oldDepositValue;
//     depositDisplay.innerText = latestDepositValue;

// making the above code functional thus not needed to repeat

function getValueById(elemetID){
    const elementCall = document.getElementById(elemetID);
    let elementValueString = elementCall.value;
    let elementValue = parseFloat(elementValueString);
    return elementValue;
}

function getInnerTextById(elemetID){
    const elementCall = document.getElementById(elemetID);
    let elementValueString = elementCall.innerText;
    let elementValue = parseFloat(elementValueString);
    return elementValue;
}



function setValueByID(elementID, setInnerText){
    const elementCall = document.getElementById(elementID);
    elementCall.innerText = setInnerText;
}

function setEmptyValueByID(elementID, setValue){
    const elementCall = document.getElementById(elementID);
    elementCall.value = setValue;
}