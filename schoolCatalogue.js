//creat a parent class School
class School{
  constructor(name, level, numberOfStudents){
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  
  //creat a getters for name, level and numberOfStudents
  get name(){
    return this._name;
  }
  get level(){
    return this._level;
  }
  
  set numberOfStudents(number){
    if(typeof number === 'number'){
      this._numberOfStudents = number;
    }else{
      console.log(`Invalid input: numberOfStudents must be set to a Number.`);
    }
  }
  
  get numberOfStudents(){
    return this._numberOfStudents;
  }
  
  //creat a method quickFacts,
  quickFacts(){
    return `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level`;
  }
  
  //creat a static method pickSubstituteTeacher,
  static pickSubstituteTeacher(substituteTeachers){
   	let teacherIndex = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[teacherIndex];
  }
}

//creating a PrimarySchool class that extends School/parent class
class PrimarySchool extends School{
  constructor(name, numberOfStudents, pickupPolicy){
    super(name, 'primary', numberOfStudents);
    
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy(){
    return this._pickupPolicy;
  }
}

//creating a HighSchool class that extends School/parent class
class HighSchool extends School{
  constructor(name, numberOfStudents, sportsTeams){
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams(){
    return this._sportsTeams;
  }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.' );
console.log(lorraineHansbury.name);
console.log(lorraineHansbury.numberOfStudents);
console.log(lorraineHansbury.pickupPolicy);
console.log(lorraineHansbury.quickFacts());

console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

console.log(alSmith.sportsTeams);