// Declase all variables from HTML
let itemAdd = document.querySelector('#item');
let qtyAdd = document.querySelector('#quantity');
const btnAdd = document.querySelector('#btn-add');
// const btnRemove = document.querySelectorAll('.btn-remove');
let listTable = document.querySelector('#shoppingList-table');
let tableBody = document.querySelector('tbody');

// console.log(itemAdd);
// console.log(qtyAdd);
// console.log(btnAdd);
// console.log(listTable);


// EVENT LISTENER FOR ADD BUTTON
btnAdd.addEventListener('click', function() {

  // Get into from input
  const itemNew = itemAdd.value;  // get input value
  const qtyNew = qtyAdd.value;  // get input value

  // The commented out block renders an additional line but doesn't create the elements hence we have no new nodes created
 /*const newRow = listTable.insertRow(-1);  // create new empty row at the end of the table

  const cellItem = newRow.insertCell(0);  // creates a new cell <td> at 1st position on the newRow created
  const cellQty = newRow.insertCell(1);  // creates a new cell <td> at 2nd position on the newRow created
  const cellRemove = newRow.insertCell(2);  // creates a new cell <td> at 2nd position on the newRow created

  cellItem.innerHTML = itemNew;  // inserts the item name inside the cell
  cellQty.innerHTML = qtyNew; // inserts the item Qry inside the cell
  cellRemove.innerHTML = '<button class="btn-remove">Remove</button>';  // inserts the remove button inside the cell*/

  // Declare variables to be used: note that we need all elements as we will be nesting one inside another to create the whole <tr> element
  const tbody = document.querySelector('tbody');
  const tr = document.createElement('tr');
  const tdItem = document.createElement('td');
  const tdQty = document.createElement('td');
  const tdRemove = document.createElement('td');
  const tdBtn = document.createElement('button');

  // Create the <tr> element by nesting the elements 
  tdRemove.append(tdBtn);
  tr.append(tdItem);
  tr.append(tdQty);
  tr.append(tdRemove);
  tbody.append(tr);

  // Add the class names to the elements created
  tdItem.setAttribute('class', 'item');
  tdQty.setAttribute('class', 'quantity');
  tdBtn.setAttribute('class', 'btn-remove');

  // Add the text to the elements created
  tdItem.innerText = itemNew;
  tdQty.innerText = qtyNew;
  tdBtn.innerHTML = '<i class="fa fa-minus" aria-hidden="true"></i>';

  // console.log(document.querySelectorAll('.btn-remove'));
  // console.log(tableBody);

  // Function call to add eventListener to the remove button
  removeEvent(tdBtn);

  // Function call to clear input fields
  clearField(itemAdd)
  clearField(qtyAdd)
});



// Event listener for delete button must be inside a function so we can call the function from within the Add Event listener
function removeEvent(btnRemove) {btnRemove.addEventListener('click', function() {
    btnRemove.closest('tr').remove();
});
};


// Function to clear the input fields. This is so we can call the function within the AddEvent for Add items once the item has been added
function clearField(field) {
  field.value = '';
}