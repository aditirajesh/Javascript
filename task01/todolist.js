
function addtolist() {
    let task = document.getElementById("additem").value;
    let list = document.getElementById("tasklist");

    if (task.trim() !== "" ) {
        const li = document.createElement("li");
        let tot_items = document.querySelectorAll('#tasklist li').length + 1;
        li.textContent = `${tot_items}. ${task}`;

        li.addEventListener("click", function() {
            li.classList.toggle("completed");
        });
        list.appendChild(li);
        document.getElementById("additem").value = "";
    }
}

function updatetolist() {
    let task_number = parseInt(document.getElementById("itemno").value)-1;
    let updated_task = document.getElementById("updatedtext").value;
    let items = document.querySelectorAll("#tasklist li")

    if (task_number >= 0 && task_number<items.length && updated_task.trim() !== "" ) {
        items[task_number].textContent = `${task_number + 1}. ${updated_task}`;
        document.getElementById("itemno").value = "";
        document.getElementById("updatedtext").value = "";

    } else {
        alert("Invalid index or task!")
    }
}

function deletefromlist() {
    let task_number = parseInt(document.getElementById("del_itemno").value)-1;
    let items = document.querySelectorAll("#tasklist li");
    let list = document.getElementById("tasklist")

    if (task_number >= 0 && task_number < items.length) {

        list.removeChild(items[task_number]);
        
        let updatedItems = document.querySelectorAll("#tasklist li");
        for (let i = 0; i < updatedItems.length; i++) {
            let taskText = updatedItems[i].textContent.replace(/^\d+\.\s*/, ""); // remove numbering
            updatedItems[i].textContent = `${i + 1}. ${taskText}`;
        }

        document.getElementById("del_itemno").value = "";
    } else {
        alert('Invalid task!')
    }
}

window.onload = function () {
    const existingTasks = document.querySelectorAll("#tasklist li");
    for (let i = 0; i < existingTasks.length; i++) {
        existingTasks[i].addEventListener("click", function () {
            existingTasks[i].classList.toggle("completed");
        });
    }
};
