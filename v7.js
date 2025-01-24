const numberOfSymbols = document.getElementById("symbol-count");
const countUpto = document.getElementById("count-till");
const getSequenceBtn  = document.getElementById('get-sequence-btn');
const sequencesContainer = document.querySelector('.sequences-container');

const findNumberContainer = document.querySelector('.find-number-container');
let totalSymbols = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "W", "V", "X", "Y", "Z"];

getSequenceBtn.addEventListener("click", () => {
    const symbolCount = parseInt(numberOfSymbols.value);
    const count = parseInt(countUpto.value);

    if(symbolCount <= 0){
        window.alert('Invalid Input, we need atleast 1 symbol for counting');
        return;
    }

    if(symbolCount === 1){
        window.alert('use atleast 2 symbols for efficient counting!');
        return;
    }

    if(symbolCount > totalSymbols.length){
        window.alert('the range of this custom base system is between 1 and 36 so, enter values within in that range!');
        return;
    }

    if(count <= 0){
        window.alert("Invalid input! counting starts from 1");
        return;
    }

    let selectedSymbolArr = getSelectedSymbols(symbolCount);
    sequencesContainer.innerHTML = "";
    console.log("selectecd symbole", selectedSymbolArr)
    generateSequene(count, selectedSymbolArr);

    // getting the display number container
    if(sequencesContainer.querySelector('.symbol')){
        findNumberContainer.classList.add('show');
    }else {
        findNumberContainer.classList.remove('show');
    }

    const decimalInput = document.getElementById('decimal-input');
    const findNumberBtn = document.getElementById('find-number-btn');
    const customBaseNumberContainer = document.querySelector('.output-custom-base-number');

    findNumberBtn.addEventListener("click", () => {
        const decimalInputValue = parseInt(decimalInput.value);

        customBaseNumberContainer.innerHTML = "";
        getNumber(decimalInputValue,selectedSymbolArr,customBaseNumberContainer);
    });

});

function getSelectedSymbols(symbolCount){
    let selectedSymbols = totalSymbols.slice(0, symbolCount);
    return selectedSymbols;
}
function generateSequene(count,selectedSymbols){
    for(let i = 0; i < count; i++){
        const symbol = document.createElement('div');
        symbol.classList.add('symbol');
        symbol.innerHTML = customBaseSystem(i, selectedSymbols);
        sequencesContainer.appendChild(symbol);
    }
}

function getNumber(num, selectedSymbols, customBaseNumberContainer){
    const generatedNumber = document.createElement('div');
    generatedNumber.classList.add('symbol');

    // generatedNumber.innerHTML = customBaseSystem(num - 1 , selectedSymbols);
    generatedNumber.innerHTML = customBaseSystem(num, selectedSymbols);

    customBaseNumberContainer.appendChild(generatedNumber);
}

function customBaseSystem(num, symbols){
    if(num === 0){
        return "0";
    }

    let base = symbols.length;
    let customSymbol = "";

    while(num > 0){
        let reminder = num % base;
        customSymbol = symbols[reminder] + customSymbol;
        let qoutient = Math.floor(num / base);
        num = qoutient;
    }
    return customSymbol;
}


// to do soon
// show different views - for both the scenarios - kind of 2 projects in one 

// addititonal add ons to this project
// this is the core concept ---- each power of the base corresponds to a new digit being added to the left,
// try to right another program which i tried earlier on your free time with above core concept
// coutning with one symbols is not working , i can only count till 1 - check why it is ?
// implementing counting with 0 also