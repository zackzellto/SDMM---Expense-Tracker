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

//Delete Expense Function

function deleteExpense(e){
    e.target.parentElement.childElement.remove();
}


//Add Expense Function
function addExpense(){
    let i = 1 ;
    let row = document.getElementById('expense-table').insertRow(i);
    let typeCell = row.insertCell(0);
    let dateCell = row.insertCell(1);
    let locationCell = row.insertCell(2);
    let descriptionCell = row.insertCell(3);
    let amountCell = row.insertCell(4);
    let removeExpCell = row.insertCell(5);
    let newDeleteBtn = document.createElement('button');
    newDeleteBtn.setAttribute('id','delete-button')
    newDeleteBtn.textContent = "Delete Expense"
    newDeleteBtn.addEventListener('click', () => deleteExpense());

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

