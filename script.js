document.getElementById('checkout-btn').addEventListener('click', function() {
    alert('Proceeding to checkout...');
    window.location.href="checkout.html";
});

document.querySelectorAll('.remove-btn').forEach(button => {
    button.addEventListener('click', function(event) {
        event.target.closest('tr').remove();
        alert('Item removed from cart');
    });
});
