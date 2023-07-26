function savetoLocalstorage(event) {
    event.preventDefault();
    let name = event.target.name.value;
    let email = event.target.email.value;
    let address = event.target.address.value;

    let obj1 = {
        name,
        email,
        address
    };
    axios
    .post("https://crudcrud.com/api/38ad95170c6d4de299050035be493b30/BookingAppointment",obj1)
    .then((res)=>showUserDetailsOnScreen(res.data))
    .catch((err)=>console.error(err))
//     localStorage.setItem(obj1.name, JSON.stringify(obj1));
//     showUserDetailsOnScreen(obj1);
 }

function showUserDetailsOnScreen(obj1) {
    let parentEl = document.getElementById("listOfItem");
    let childEl = document.createElement("li");
    childEl.textContent = obj1.name + "-" + obj1.email + "-" + obj1.address;
    const deleteButton = document.createElement('input');
    deleteButton.type = "button";
    deleteButton.value = "Delete";
    deleteButton.onclick = () => {
        localStorage.removeItem(obj1.name);
        parentEl.removeChild(childEl);
    };
    const editButton = document.createElement('input');
    editButton.type = "button";
    editButton.value = "edit";
    editButton.onclick = () => {
        localStorage.removeItem(obj1.name);
        parentEl.removeChild(childEl);
        document.getElementById('nameInputTag').value = obj1.name;
    };
    childEl.appendChild(deleteButton);
    childEl.appendChild(editButton);
    parentEl.appendChild(childEl);
}   