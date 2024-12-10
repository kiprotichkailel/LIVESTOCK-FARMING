// Function to handle adding financial entries
document.getElementById('financial-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve form values
    const type = document.getElementById('type').value;
    const amount = document.getElementById('amount').value;
    const date = document.getElementById('date').value;
    const category = document.getElementById('category').value;

    // Validate inputs
    if (!type || !amount || !date || !category) {
        alert("All fields are required!");
        return;
    }

    // Add a new row to the financial tracker table
    const tableBody = document.getElementById('financial-table-body');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td>${type}</td>
        <td>${amount}</td>
        <td>${date}</td>
        <td>${category}</td>
        <td><button onclick="deleteEntry(this)">Delete</button></td>
    `;

    tableBody.appendChild(newRow);

    // Reset form inputs
    document.getElementById('financial-form').reset();
});

// Function to delete a table entry
function deleteEntry(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
