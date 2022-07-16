function computeLoan(amount, interestRate, months, interest){
    amount = document.querySelector('#amount').value;
    interestRate = document.querySelector('#interestRate').value;
    months = document.querySelector('#months').value;
    interest = (amount * (interestRate * 0.01)) / months;
    let payment = ((amount / months) + interest).toFixed(2);

    fetch('https://api.github.com/users/jayneal')
    .then(response => response.json())  
    .then(json => console.log(json)) 
    .catch(err => console.log('Request Failed', err));

    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
    document.querySelector('#payment').innerHTML = `Monthly Payment = ${payment}` 
    
}