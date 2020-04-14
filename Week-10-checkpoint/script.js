// 1. How is information stored in an object?
// Information is stored in an object using the new keyword, it is stored in an object by assigning a property to 
// the object and giving the property a value

let me = {
    name: "Leeangelo Riley",
    sayHi: () => {
        console.log(me.name);
    }
};

me.sayHi();