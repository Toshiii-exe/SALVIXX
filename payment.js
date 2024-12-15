document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('Name').value;
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;
    const amount = document.getElementById('amount').value;

    if (name && cardNumber && expiryDate && cvv && amount) {
        alert('Thanks for purchasing with us!');
    } else {
        alert('Please fill in all fields.');
    }
});
