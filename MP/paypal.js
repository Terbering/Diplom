
paypal.Buttons({
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '10.00' 
                }
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            alert('Оплата успішно здійснена! ID транзакції: ' + details.id);
        });
    },
    onError: function(err) {
        console.error('Сталася помилка: ', err);
    }
}).render('#paypal-button');
