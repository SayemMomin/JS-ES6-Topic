// class student {
//     constructor(){
//         this.id = 12;
//         this.name = `kolimuddin`;
//     }
// }

// class student {
//     constructor(sId, sName){
//         this.id = sId;
//         this.name = sName;
//         this.school = "Lohary School"
//     }
// }

     // funtion old method instead of class / used of this
function student(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Lohary School"
    }


 const student1 = new student(12, "Jahid")
 const student2 = new student(15, "Sohas");
 const student3 = new student(20, "sohel")
console.log(student3)
console.log(student1.name, student2.name)