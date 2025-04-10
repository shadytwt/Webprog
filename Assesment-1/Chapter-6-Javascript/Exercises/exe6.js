function calculateTotal() {

    const costPerLitre = parseFloat(document.getElementById('costPerLitre').value);
    const litresPurchased = parseFloat(document.getElementById('litresPurchased').value);

    const totalCost = costPerLitre * litresPurchased;

    document.getElementById('totalCost').innerText = `Total Cost: AED ${totalCost.toFixed(2)}`;
}
