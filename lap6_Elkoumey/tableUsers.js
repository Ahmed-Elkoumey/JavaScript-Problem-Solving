/*
// Get insteance of XML obj to fetch the api
// req the headers
// check of the status code
// if it is 200 so we will start to implemint our elements 
*/ 

var container = document.getElementById("container");


var r = new XMLHttpRequest();
r.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
r.setRequestHeader("language", "en");
r.send();


// var table = `<tr><th>ID</th><th>username</th></tr>`;

r.onload = function () {
    if (r.status === 200 && r.readyState === 4) {

        var respon = r.response;

        var formatted = JSON.parse(respon);
        console.log(formatted);

        for (var i = 0; i < formatted.length; i++) {
            var tr = document.createElement("tr");
            var tdOne = document.createElement("td");
            var tdTwo = document.createElement("td");
            var tdThree = document.createElement("td");
            var tdFour = document.createElement("td");
            var tdFive = document.createElement("td");
            var tdSix = document.createElement("td");

            tdOne.append(formatted[i].id,);
            tdTwo.append(formatted[i].username);
            tdThree.append(formatted[i].email)
            tdFour.append(formatted[i].name)
            tdFive.append(formatted[i].website)
            tdSix.append(formatted[i].phone)
            tr.append(tdOne, tdTwo,tdThree,tdFour,tdFive,tdSix);
            container.appendChild(tr);

            // table += "<tr><td>" +
            //     formatted[i].id +
            //     "</td><td>" +
            //     formatted[i].username +
            //     "</td>";
            // container.innerHTML = table;
        }

    } else {
        console.log("no response");
    }

}
