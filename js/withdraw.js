// step 1: Add event handler with the withdraw btn
// step 2: get the withdraw amount from the withdraw input field
// step 2.5: Also make sure to convert the input into a number by using parse float
// step 3: Get previous withdraw total
//  step 4: calculate total withdraw amount
//  set total withdraw amount
// step 5: get the previous balance total
// step 6: calculate new balance total
// set the new balance total
// step 7: clear the field
document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('please provide a valid number');
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    if (newWithdrawAmount > previousBalanceTotal) {
        alert('No sufficient balance for withdraw');
        return;
    }
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;



})
