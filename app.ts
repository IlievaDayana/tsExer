//<-------------------- type inference and types in ts ---------------------------->


let number : number;

number = '5';
number = 0;


//<-------------------- objects in ts ---------------------------->

const person = {
    name: 'Dayana',
    age: 30
}

const product : {
    id: string;
    price: number;
    tags: Array<string>;
    details: {
      title: string;
      description: string;

  }= {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
      title: 'Red Carpet',
      description: 'A great carpet - almost brand-new!'
    }
  }

product.id = 1;


//<-------------------- arrays in ts ---------------------------->

const anotherPerson = {
    name: 'Dayana',
    age: 30,
    hobbies: ['baseball', 'painting', 'reading', 'sewing'],
};

let activities: string[];
let grades: number[];
let mixedValues: any[];

grades =  [2,2,5];
activities = ['poker', 6678];

// here type inference tells us that name is of type string and helps us avoid mistake in the for loop
for (const name of anotherPerson.hobbies) {   
    name.toString();
    name.map();
}


//<-------------------- tuples in ts ---------------------------->

const grandMa: {
name:string;
age:number;
activities: [number, string]
} = {
    name: 'Donka',
    age: 80,
    activities: [3,'knitting']
}

// activities are the predefined with values array

// noproblem with that
grandMa.activities.push('new activitie');

// but can not interfere with the predefined values;
grandMa.activities[1] = 3;