// Task 1 completed on html file, header, main section, and footer display in browser
// Task 2: Adding Employee Cards Dynamically
let cnt = 0;
function createElement(name, position) {
    // create container for cards
    const employeeContainer = document.getElementById("employeeContainer");
    let card = document.createElement("div"); //employee card element
    card.setAttribute("class","employeeCard");
    card.setAttribute("id", `employee${cnt}`);
    //create a heading for employees name
    card.innerHTML = `<h3>${name}</h3><p>${position}</p>`;
    //create the remove button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "remove";
    deleteBtn.addEventListener("click", (event) => {
        employeeContainer.removeChild(card);
        event.stopPropagation();
    });
    //append element to card, and card to employeeContainer
    card.appendChild(deleteBtn);
    employeeContainer.appendChild(card);

}
//Test cases
createElement('Natalie Devenbeck', "Student");
createElement('Valeria Aceituno', "HR-Representative");
//correctly displays 2 employees and remove buttons in chrome

//Task 3: Converting NodeLists to Arrays for Bulk Updates
//function for bulk updating to cards
function bulkUpdateEmployeeCards() {
    const employeeCards = document.querySelectorAll('.employeeCard');
    const cardArray = Array.from(employeeCards);
    cardArray.forEach(card => {
        card.style.backgroundColor = 'lightpink'; //update style of each card
    });
}
//test case
bulkUpdateEmployeeCards();  //works and what was a white background now is pink for employee cards

//Task 4: Implementing Removal of Employee Cards with Event Bubbling
//attach a click event listener on the parent container
removeButton.addEventListener('click', function(event){
    console.log('Remove button has been clicked');
    event.stopPropagation();
    employeeCard.remove();
})
