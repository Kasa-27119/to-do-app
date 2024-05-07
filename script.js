function addToDo() {
    // get the input element and its value
    const input = document.getElementById("to-do-input");

    // get value and trim white space from start/end
    const inputValue = input.value.trim();

    // check if the value input isn't empty
    if (inputValue !== "") {
        // create a new list item
        // get the unordered list
        const toDoList = document.getElementById("to-do-list");
        
        //create a list item using createElement:
        const li = document.createElement("li");

        //create the check box using createElement
        const checkBox = document.createElement("input");

        //set checkbox input to a checkbox
        checkBox.type = "checkbox";

        //create a text node that uses the input value
        const textNode = document.createTextNode(inputValue);

        // append (attach) checkbox and textnode to the list item
        li.appendChild(checkBox);
        li.appendChild(textNode);

        // append the list item to the ul of the to do list
        toDoList.appendChild(li);

    } else {
        // alert user if value is empty
        alert("Pleae enter a valid To Do item");
    }

}

// add event listener to the "add button" to add new to do item
document.getElementById("add-button").addEventListener("click", addToDo);

// event listener to mark to do items as completed
// on change event on the to do item
document.getElementById("to-do-list").addEventListener("change", function(event) {

    //check if the event trigger was a checkbox
    if (event.target.type === "checkbox") {

        // get the parent list item of the checkbox
        const listItem = event.target.parentNode;

        // check if the checkbox is checked or not
        if (event.target.checked) {

            //apply a strikethrough style when the checkbox is checked
            listItem.style.textDecoration = "line-through";
        } else {
            // remove the line through when unchecked
            listItem.style.textDecoration = "none";
        }
    }
})