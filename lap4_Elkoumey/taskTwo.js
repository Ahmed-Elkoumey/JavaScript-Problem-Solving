var search, ok, add, container;


search = document.getElementById("search");
ok = document.getElementById("ok");
add = document.getElementById("add");

container = document.getElementById("container");
var pargraph = document.createElement('span');

var Students = [];

add.addEventListener("click", function () {
    do {
        var StudentName = prompt("Please Enter A Student Name", "");
        
    } while (!StudentName)

        var Btn = document.createElement("button");

        if (StudentName === null || StudentName === "") {

            alert("Please Enter A Name");
            StudentName;

        } else {

            var list = document.createElement("li");

            Btn.innerHTML = 0;
            list.innerHTML = StudentName;

            list.append(pargraph, Btn);
            container.appendChild(list);
            Array.from(list);
            console.log(Btn);
            Students.push(list);

            console.log(Students);

            Btn.addEventListener("click", function (e) {
                e.target.parentNode.remove();
                Students.pop();
                console.log(Students);


            })
        }
    


})


ok.addEventListener("click", function (e) {

    e.preventDefault();
    e = search.value;


    for (var i = 0; i < Students.length; i++) {

        var x = new RegExp(e, "gi");

        if (Students[i].textContent.match(x)) {
            Students[i].style.color = "green";
        } else {
            Students[i].style.display = "none";
        }
    }
    search.value = " ";
    Students=[];
})