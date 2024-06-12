const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;
    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = tempSelected.options[tempSelected.selectedIndex].value;

    const celToFah = (cel) => {
       return Math.round((cel * 9/5) + 32);
    }

    const fahToCel = (fah) => {
        return Math.round((fah - 32) * 5/9);
    }

    let result;

    if(valueTemp === 'cel') {
        result = celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result} Fahrenheit`;
    } else {
        result = fahToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result} Celsius`;
    }
}
