//Table Header Variables
const headerType = document.getElementById('payment-type');
const headerDate = document.getElementById('purchase-date');
const headerLoc = document.getElementById('purchase-location');
const headerDesc = document.getElementById('purchase-desc');
const headerAmount = document.getElementById('purchase-amount');

//Input Variables
const inputType = document.getElementById('input-type');
const inputDate = document.getElementById('input-date');
const inputLoc = document.getElementById('input-location');
const inputDesc = document.getElementById('input-desc');
const inputAmount = document.getElementById('input-amount');

//Add expense button
const addButton = document.getElementById('add-btn');
addButton.addEventListener('click', (e) => {
    e.preventDefault();
    addExpense();
})

//Delete Expense Function

function deleteExpense(element){
    element.parentElement.parentElement.remove();
}


//Add Expense Function
function addExpense(){
    const i = 1 ;
    const row = document.getElementById('expense-table').insertRow(i);
    const typeCell = row.insertCell(0);
    const dateCell = row.insertCell(1);
    const locationCell = row.insertCell(2);
    const descriptionCell = row.insertCell(3);
    const amountCell = row.insertCell(4);
    const removeExpCell = row.insertCell(5);
    const newDeleteBtn = document.createElement('button');
    newDeleteBtn.setAttribute('id','delete-button')
    newDeleteBtn.textContent = "Delete Expense"
    newDeleteBtn.addEventListener('click', () => deleteExpense(newDeleteBtn));

    removeExpCell.appendChild(newDeleteBtn);

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

