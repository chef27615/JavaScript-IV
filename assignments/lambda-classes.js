// CODE here for your Lambda Classes
class Person{
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.gender = attr.gender;
        this.location = attr.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person{
    constructor(instructorAttr){
        super(instructorAttr)
        this.specialty = instructorAttr.specialty;
        this.favLanguage = instructorAttr.favLanguage;
        this.catchPhrase = instructorAttr.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject){
        return `${student} recieves a perfect score on ${subject}`;
    }
    
}

class Student extends Person{
    constructor(studentAttr){
        super(studentAttr)
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
        this.grade = studentAttr.grade;
    }
    listsSubjects(){
        this.favSubjects.forEach(function(el){
            console.log(el);
        })
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun spring challenge on ${subject}`;
    }
}

class Transit extends Student{
    constructor(transmitAttr){
        super(transmitAttr)
        this.specialty = transmitAttr.specialty;
        this.favLanguage = transmitAttr.favLanguage;
        this.catchPhrase = transmitAttr.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject){
        return `${student} recieves a perfect score on ${subject}`;
    }
}

class PM extends Transit{
    constructor(pmAttr){
        super(pmAttr)
        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel} @channel standy times!`; 
    }
    debugCode( studentName ,subject){
        return `${this.name} debugs ${studentName}'s code on ${subject}`;
    }
}

const christian_ipanaque = new Student({
    name: "Christian Ipanaque",
    age: 32,
    gender: "Male",
    location: "Seattle, WA",
    previousBackground: "Server Hardware Technician",
    className: "WEB18",
    favSubjects: ["Computer Science","Redux","Algorithms","Data Structures","Computer Architecture"],
  })

  const liz_B = new PM({
    name: "Lizzy B",
    age: 27,
    gender: "Female",
    location: "Portland, OR",
    previousBackground: "Biology/Health Science grad",
    gradClassName: "WEB12",
    favInstructor: 'Josh',
    favSubjects: ["CSS","React","Ternaries","SQL","Node"]
  })

  const joshk = new Student({
    name: "Josh Kersting",
    age: 27,
    gender: "Male",
    location: "Muskegon, Mi",
    previousBackground: "Data Analyst",
    className: "WEB18",
    favSubjects: ["Computer Science",,"Algorithms","Data Structures","Computer Architecture","Photography","Cooking"],
  })

  const pitt = new Instructor({
      name: 'pitt',
      aga: 29,
      gender: 'M',
      location: 'DC',
      specialty: 'JS',
      catchPhrase: 'got it',
      favLanguage: 'Python'

  })

  const josh = new Instructor({
      name: 'Josh',
      age: 34,
      location: 'Utah',
      gender: 'M',
      specialty: 'JS',
      catchPhrase: 'A-ha',
      favLanguage: 'Ruby'
  })

  const brellin = new Student({
    name: 'Will Umstead',
    age: 26,
    location: 'Tuscola, Texas',
    gender: 'Male',
    previousBackground: 'Army',
    className: 'WEB18',
    favSubjects: ['PHP',
        'CSS',
        'JavaScript'
    ]
});

console.log(josh.demo('JS'));
console.log(pitt.grade('Ray', 'Python'));
brellin.listsSubjects();
console.log(brellin.PRAssignment('JS'));
console.log(joshk.sprintChallenge('JS IV'));
console.log(liz_B.standUp('web18'));
console.log(liz_B.debugCode('Ray', 'JS'));
