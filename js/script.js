document.getElementById('applyBtn').addEventListener('click', function(){

    const inputValueString = document.getElementById('inputValue').value;
    document.getElementById('inputValue').value = '';

    const prevSubValueString = document.getElementById('prevSubValue').innerText;
    const prevSubValue = parseFloat(prevSubValueString);
    
    const prevTotalValueString = document.getElementById('prevTotalValue').innerText;
    const prevTotalValue = parseFloat(prevTotalValueString);

    if(inputValueString == "promo20"){
        const newSubValue = prevSubValue - (prevSubValue * 20 / 100);
        document.getElementById('prevSubValue').innerText = newSubValue;

        const newTotalValue = prevTotalValue - (prevTotalValue * 20 / 100);
        document.getElementById('prevTotalValue').innerText = newTotalValue;
    }
})