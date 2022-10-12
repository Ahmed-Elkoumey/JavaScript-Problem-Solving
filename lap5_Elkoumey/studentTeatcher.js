function Student(id, name, degree, phnNum) {

    this.id = id;
    this.name = name;
    this.degree = degree;
    this.phnNum = "+20 " + phnNum;
   
    
    function calc() {
        var avrg, isSuccess;
        avrg = 0;
        for (const ind in degree) {
            avrg += degree[ind];
        }
        isSuccess = avrg / degree.length ? "Success" : "Fali";
        return console.log(avrg + " " + isSuccess);
    }

    this.getDegree = function () {
        return calc();
    }


}



function Teacher(idTetch, TechName, phnNum) {
    this.idTetch = idTetch;
    this.TechName = TechName;
    this.phnNum = "+20 " + phnNum;

}

var v = function () {

    console.log(this.phnNum);
}

Student.prototype.getNumber = v;


var stud = new Student(12, "Ahmed", [10, 22, 20, 10, 11], 11);
console.log(stud);

var tech = new Teacher(1, "Ali", 112332211);
Teacher.prototype.getNumber = v;
console.log(tech);
tech.getNumber();

