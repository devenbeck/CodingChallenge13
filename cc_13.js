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