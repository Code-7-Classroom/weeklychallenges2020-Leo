// function Person(name, job, age) {
//     this.name = name;
//     this.job = job;
//     this.age = age;
//     this.exercise = function () {
//         console.log(`${this.name} running is fun! no one said ever`);
//     }
//     this.fetchJob = function () {
//      console.log(`${this.name} is a ${this.job}`);
//  }
//     }

// function Programmer(language,busy) {
    
//     this.language = language;
//     this.busy = busy;
//     this.completeTask = function () {
//         this.busy = false;
//         if (this.busy == false) {
//             console.log(`${this.name} would love to take on a new responsibility`);
            
//         } else {
//             console.log(`${this.name} can't accept any new tasks right now`);
//         }
//     }
//     this.learnLanguage = function () {
//         this.language = ["Python", "C++", "Ruby on rails", "C#"];
//         console.log(`${this.name} is learning these language: ${this.language}`);
//     }
//     this.listLanguage = function() {
//         this.language = ["Java", "Go", "HTML"];
//         console.log(`${this.name} knows these languages: ${this.language}`);
//     }
    
// }

// Person.prototype = new Object.create(Programmer.prototype.constructor);
// Person.prototype.constructor === Programmer;


// var john = new Person ('John','Front-End developer',28);
// john.exercise();
// john.fetchJob();
// john.completeTask();



function Person(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
    this.exercise = function () {
    console.log(`${this.name} running is fun! no one said ever`);
    }
    this.fetchJob = function () {
    console.log(`${this.name} is a ${this.job}`);
    Programmer.call(this,name,job,age);
    }
    }
    function Programmer(language,busy) {
    this.language = language;
    this.busy = busy;
    this.completeTask = function () {
    this.busy = false;
    if (this.busy == false){
        console.log(`${this.name} is busy`);
    } else {
        console.log(`${this.name} is not busy`);
    }   
    this.acceptNewTask = function () {
        this.busy = true;
    }
    }


    this.offerNewTask = function () {
        if (this.busy == false) {
            console.log(`${this.name} would love to take on a new responsibility`);
            } else {
            console.log(`${this.name} can't accept any new tasks right now`);
            }
    }

    this.learnLanguage = function () {
    this.language = ["Python", " C++ ", " Ruby on rails", " C#"];
    console.log(`${this.name} is learning these language: ${this.language}`);
    }

    this.listLanguage = function() {
    this.language = ["Java", " Go", " HTML"];
    console.log(`${this.name} knows these languages: ${this.language}`);
    }
    };

    var john = new Person ('John','Front-End developer',28);
    var katie = new Person('katie','Back-End developer', 26)

    john.exercise();
    john.fetchJob();
    john.completeTask();
    john.learnLanguage();
    john.listLanguage();

    katie.exercise();
    katie.fetchJob();
    katie.completeTask();
    katie.learnLanguage();
    katie.listLanguage();