document.addEventListener("DOMContentLoaded", function () {
    const draggables = document.querySelectorAll(".draggable");
    const droppables = document.querySelectorAll(".droppable");


    draggables.forEach(draggable => {
        draggable.addEventListener("dragstart", dragStart);
    });


    droppables.forEach(droppable => {
        droppable.addEventListener("dragover", dragOver);
        droppable.addEventListener("drop", drop);
    });


    function dragStart(e) {
        e.dataTransfer.setData("text", e.target.innerText);
    }


    function dragOver(e) {
        e.preventDefault();
        e.target.classList.add("dragover");
    }


    function drop(e) {
        e.preventDefault();
        e.target.classList.remove("dragover");
        const data = e.dataTransfer.getData("text");
        e.target.innerText = data;
    }
});


function printDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;


    document.body.innerHTML = printContents;


    window.print();


    document.body.innerHTML = originalContents;
}
