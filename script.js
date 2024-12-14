function addMovie() {
    title = document.getElementById("inputTitle");
    year = document.getElementById("inputYear");
    actors = document.getElementById("inputActors");
    
    if (title.value == "" || year.value == "" || actors.value == "") {
        alert("Fill all fields!");
        return;
    }

    var li = document.createElement("li");
    li.innerHTML = "<input type='checkbox'>" + title.value + ", " + year.value + ", " + actors.value;
    document.getElementById("listMovies").appendChild(li)
    console.log("Movie added")

    title.value = ""
    year.value = ""
    actors.value = ""
}

function deleteMovies() {
    var checkedBoxes = document.getElementById("listMovies").querySelectorAll("input[type='checkbox']:checked");

    for (var i = 0; i < checkedBoxes.length; i++) {
        document.getElementById("listMovies").removeChild(checkedBoxes[i].parentNode)
        console.log("Movie removed")
    }
}