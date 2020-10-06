const events = require('events');
const util = require('util');

class Person extends events.EventEmitter{
    constructor(name){
        super();
        this.name = name;
    }
}

const James = new Person("James");
const Amy = new Person("Amy");
const Luke = new Person("Luke");
const people = [James, Amy, Luke];

people.forEach( (person) => {
    person.on("speak", (message) => {
        console.log(person.name + " said: " + message);
    });
});

James.emit("speak", "Hey, dude!");