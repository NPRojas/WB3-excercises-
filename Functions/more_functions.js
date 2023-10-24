function displayMailingLabel(name, address, city, state, zip) {
    const addressLabel = `${name} \n${address} \n${city}, ${state} \n${zip}`
    console.log(addressLabel + '\n');
}

function addNumbers(num1, num2) {
    const add = num1 + num2
    console.log(add + '\n');
}

function displayReceipt(totalDue, amountPaid) {
    const changeDue = amountPaid - totalDue;
    const reciept = `Total Due: $${totalDue} \nAmount Paid: $${amountPaid} \nChange Due: $${changeDue}`
    console.log(reciept + '\n');
}

displayMailingLabel('Christina Castillo', '431 Murry Ave', 'New York', 'New York', '10531');
displayMailingLabel('Sammy Lopez', '516 Garamond Place', 'Brooklyn', 'New York', '14852');

addNumbers(5,2);
addNumbers(4,4);

displayReceipt(30,60);
displayReceipt(30,30);
displayReceipt(30,20);