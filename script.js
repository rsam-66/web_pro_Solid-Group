document.getElementById('checkout-btn').addEventListener('click', function() {
    alert('Proceeding to checkout...');
});

document.querySelectorAll('.remove-btn').forEach(button => {
    button.addEventListener('click', function(event) {
        event.target.closest('tr').remove();
        alert('Item removed from cart');
    });
});
