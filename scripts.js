// Function to handle the addition of financial entries
document.getElementById('financial-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the form input values
    var type = document.getElementById('type').value;
    var amount = document.getElementById('amount').value;
    var date = document.getElementById('date').value;
    var category = document.getElementById('category').value;

    // Create a new row in the table
    var tableBody = document.getElementById('financial-table-body');
    var newRow = document.createElement('tr');

    // Insert the data into the new row
    newRow.innerHTML = `
        <td>${type}</td>
        <td>${amount}</td>
        <td>${date}</td>
        <td>${category}</td>
        <td><button onclick="deleteEntry(this)">Delete</button></td>
    `;

    // Append the new row to the table body
    tableBody.appendChild(newRow);

    // Reset the form
    document.getElementById('financial-form').reset();
});

// Function to delete an entry from the table
function deleteEntry(button) {
    var row = button.parentElement.parentElement;
    row.remove();
}
