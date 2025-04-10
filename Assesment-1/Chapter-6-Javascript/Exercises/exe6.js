// Function to calculate total petrol cost
function calculateTotal() {
    // Get input values
    const costPerLitre = parseFloat(document.getElementById('costPerLitre').value);
    const litresPurchased = parseFloat(document.getElementById('litresPurchased').value);

    // Calculate total cost
    const totalCost = costPerLitre * litresPurchased;

    // Display the total cost formatted to 2 decimal places
    document.getElementById('totalCost').innerText = `Total Cost: AED ${totalCost.toFixed(2)}`;
}
