let show = document.getElementById("show");
let input = document.getElementById("input");

let arr = ["Daniel", "Festus", "Kunle", "Abiola", "Abbas", "Ifeoluwa", "Abiola", "Ifeoluwa", "Kunle",
    "Precious", "Ifeoluwa", "Sodiq", "Oyin", "Mike", "Abigael", "Abbas",
    "Timi", "Abiola", "Kunle", "Pelumi", "Ifeoluwa"];

function showResult() {
    let people = arr.filter((person) => person == input.value);

    if (input.value === "") {
        show.innerHTML = ""
    }

    else if (people != "") {
        show.innerHTML = "";
        people.map(function (element) {
            show.innerHTML += "<h1>" + element + "</h1>";
            // console.log(element);
        })
    }

    else {
        show.innerHTML = "No match found";
    }
}