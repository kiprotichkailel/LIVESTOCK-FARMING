// Function to toggle the visibility of livestock farming details
function showDetails(livestockType) {
    var details = document.getElementById('details-' + livestockType);
    // Toggle visibility
    if (details.style.display === "block") {
        details.style.display = "none";
    } else {
        details.style.display = "block";
    }
}

// Handle form submission and add entries to the financial table
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
