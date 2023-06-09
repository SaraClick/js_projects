// Declase all variables from HTML
let itemAdd = document.querySelector('#item');
let qtyAdd = document.querySelector('#quantity');
const btnAdd = document.querySelector('#btn-add');
const btnRemove = document.querySelector('.btn-remove');
let listTable = document.querySelector('#shoppingList-table')

console.log(itemAdd);
console.log(qtyAdd);
console.log(btnAdd);
console.log(btnRemove);
console.log(listTable);

// Array to contain all elements in the Shopping List
let shoppingList = [{item: 'Apples', quantity: 4}, {item: 'Bananas', quantity: 2}, {item: 'Broccoli', quantity: 1}];

console.log(shoppingList);

btnAdd.addEventListener('click', function() {

  // Get into from input
  const itemNew = itemAdd.value;  // get input value
  const qtyNew = qtyAdd.value;  // get input value

  shoppingList.push({item: itemNew, quantity: qtyNew});

  // Add table row with the element
  const newRow = listTable.insertRow(-1);  // create new empty row at the end of the table

  const cellItem = newRow.insertCell(0);  // creates a new cell <td> at 1st position on the newRow created
  const cellQty = newRow.insertCell(1);  // creates a new cell <td> at 2nd position on the newRow created
  const cellRemove = newRow.insertCell(2);  // creates a new cell <td> at 2nd position on the newRow created

  cellItem.innerHTML = itemNew;  // inserts the item name inside the cell
  cellQty.innerHTML = qtyNew; // inserts the item Qry inside the cell
  cellRemove.innerHTML = '<button class="btn-remove">Remove</button>';  // inserts the remove button inside the cell
});



