function renderOrders() {
    const tableBody = document.getElementById('order-table-body');
    tableBody.innerHTML = '';

    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${order.id}</td>
            <td>${order.name}</td>
            <td>${order.phone}</td>
            <td>${order.address}</td>
            <td>${order.snacks}</td>
            <td>${order.total}</td>
        `;
        tableBody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', renderOrders);
