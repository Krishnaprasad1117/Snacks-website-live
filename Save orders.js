function placeOrder(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const selectedItems = Array.from(document.querySelectorAll('.snack-item input:checked')).map(input => input.value);
    const total = selectedItems.length * 2.5;

    const order = {
        id: Date.now(),
        name,
        phone,
        address,
        snacks: selectedItems.join(', '),
        total: `$${total.toFixed(2)}`,
    };

    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    alert('Order placed successfully!');
}
