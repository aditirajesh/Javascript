const list_items = document.getElementsByClassName("list");
const rightBox = document.getElementById("right");
const leftBox = document.getElementById("left");


for(list of list_items){
    list.addEventListener("dragstart",function(e) {
        let selected_item = e.target;

        rightBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });
        rightBox.addEventListener("drop", function(e) {
            rightBox.appendChild(selected_item);
            selected_item = null;
        });

        leftBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });
        leftBox.addEventListener("drop", function(e) {
            leftBox.appendChild(selected_item);
            selected_item = null;
        });
    })
}
