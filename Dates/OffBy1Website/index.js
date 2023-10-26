// select the button
const btn = document.querySelector('button');
// select the input
const dateInput = document.querySelector('#date');
// select the paragraph
const para = document.querySelector('p');

//convert the date to a string 
btn.onclick = () => {
    const date = new Date(dateInput.value);
    const dateAsString = date.toString();
    para.textContent = dateAsString;
}
