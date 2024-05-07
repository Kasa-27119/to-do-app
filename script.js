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