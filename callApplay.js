const normalPerson = {
    firdtName: 'Rahim',
    lastname: 'Uddin',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastname);
    },
    // chargeBill: function(amount){
    //     this.salary = this.salary - amount;
    //     return this.salary;
    // }
      chargeBill: function(amount, tips, tax){
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }

}

// normalPerson.chargeBill(5000);
// normalPerson.chargeBill(2000);
// console.log(normalPerson.salary)

const heroPerson = {
    firstName: 'Hero',
    lastname: 'Balam',
    salary: 12000,
}

const zeroPerson = {
    firstName: 'Zero',
    lastname: 'kalam',
    salary: 22000,
}
                    // bind method
// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(2000)
// console.log(heroPerson.salary)

// const zeroChargeBill = normalPerson.chargeBill.bind(zeroPerson);
// zeroChargeBill(2000)
// console.log(zeroPerson.salary)

                    // CALL METHOED
                    
// normalPerson.chargeBill.call(heroPerson, 1000, 500, 500);
// console.log(heroPerson.salary)

             //apply use with array [],

normalPerson.chargeBill.apply(heroPerson, [1000, 500, 500]);
normalPerson.chargeBill.apply(heroPerson, [1000, 1000, 1000]);
console.log(heroPerson.salary)

