let id = 0
document.getElementById('add').addEventListener('click', ()=> {
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-item').value
    row.insertCell(1).innerHTML = document.getElementById('section').value
    document.getElementById('new-item').value = ''
    document.getElementById('section').value = ''
    //creates an event listener function to add the user input into a table row and cell, then clears the input boxes
    let checkbox = document.createElement("INPUT");
    checkbox.type = "checkbox";
    row.insertCell(2).append(checkbox)
    //adds a checkbox to the third cell of each row to mark off when the item on the list has been gotten
})

        