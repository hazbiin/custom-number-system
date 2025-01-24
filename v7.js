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
    }

    if(symbolCount > totalSymbols.length){
        window.alert('this is a 36-base number system, enter values within in that range');
    }

    if(count <= 0){
        window.alert("Invalid input! counting starts from 1");
    }

    let selectedSymbolArr = getSelectedSymbols(symbolCount);
    sequencesContainer.innerHTML = "";
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