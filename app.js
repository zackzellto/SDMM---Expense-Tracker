//Table Header Variables
const headerType = document.getElementById('payment-type');
const headerDate = document.getElementById('purchase-date');
const headerLoc = document.getElementById('purchase-location');
const headerDesc = document.getElementById('purchase-desc');
const headerAmount = document.getElementById('purchase-amount');

//Table Row Variables
const newPaymentType = document.getElementById('new-type').textContent;
const newPurchaseDate = document.getElementById('new-date').textContent;
const newPurchaseLoc = document.getElementById('new-location').textContent;
const newPurchaseDesc = document.getElementById('new-desc').textContent;
const newPurchaseAmount = document.getElementById('new-amount').textContent;

//Input Variables
const inputType = document.getElementById('input-type');
const inputDate = document.getElementById('input-date');
const inputLoc = document.getElementById('input-location');
const inputDesc = document.getElementById('input-desc');
const inputAmount = document.getElementById('input-amount');

//Expense Button
const expenseBtn = document.getElementById('add-btn');

function deleteExpense(){

}


function addExpense(){
    let i = 1 ;
    let newRow = document.createElement('TD');
    let row = document.getElementById('expense-table').insertRow(i);
    let typeCell = row.insertCell(0);
    let dateCell = row.insertCell(1);
    let locationCell = row.insertCell(2);
    let descriptionCell = row.insertCell(3);
    let amountCell = row.insertCell(4);

    typeCell.textContent = inputType.value;
    dateCell.textContent = inputDate.value;
    locationCell.textContent = inputLoc.value;
    descriptionCell.textContent = inputDesc.value;
    amountCell.textContent = inputAmount.value;

    inputAmount.value = '';
    inputType.value = '';
    inputDate.value = '';
    inputLoc.value = '';
    inputDesc.value = '';
}

