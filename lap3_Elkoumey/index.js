// LAP 3
/*------------------------------------------*/
// Task 1

function objInfo(objKey) {

    for (var key in objKey) {

        if (typeof objKey[key] !== "function") {
            console.log(key, ":", objKey[key])
        }

    }

}

var info = {
    name: "ahmed",
    age: 25,
    city: "Alex",
    track: "Front End",
    print: function () {
        return console.log("Name : " + this.name + " Age : " + this.age + " City" + this.city + " Track" + this.track)
    }

}

// console.log(objInfo(info));


/*--------------------------------------*/
// Task 2

function duplicateItems(item) {
    var finalItem = [];

    for (var i = 0; i < item.length; i++) {

        if (finalItem.indexOf(item[i]) === -1) {
            finalItem.push(item[i]);
        }

    }

    return finalItem;

}

var duplicateArray = ["Ahmed", "Ahmed", "Ali", "Ali", "Amr", "Amr"];

// console.log( duplicateItems(duplicateArray));

/*----------------------------------------*/
// Task 3


function userStringCount() {
    var userWords = prompt("Pleas Enter Five Words");

    var userSplit = userWords.split(" ");
    var wordCount = "Number of Words is :" + " " + userSplit.length;
    return wordCount;

}

// console.log(userStringCount());

/*----------------------------------------*/
//Task 4

function isVowel(vowelsWords) {
    var count = 0;
    var vowelList = vowelsWords.split("");
    var vowelsCharecter = ['a', 'e', 'i', 'o', 'u'];

    for (var i = 0; i < vowelList.length; i++) {

        if (vowelsCharecter.includes(vowelList[i])) {

            count++;
        }

    }


    return count;

}
// console.log(isVowel("ahmed adham ali"));

/*------------------------------*/
//Task 5

function factorialNum(num) {

    if (num == 1) 
    { return num; }
    else {
        return (num * factorialNum(num - 1));
    }
}
console.log(factorialNum(5));

/*------------------------------*/
// Task6
function RandomNum() {
    
   var rand= Math.floor(Math.random()*(10+1));
   return rand;
}
console.log(RandomNum());

/*-------------------------*/ 
// Task7


function emailHide(email) {
    
    const partialEmail = email.replace(/(\w{3})[\w.-]+@([\w.]+\w)/ig, "$1***@$2");
    return partialEmail;
    
}
const userEmail = "ahmedElkoumey@gmail.com"
console.log(emailHide(userEmail))