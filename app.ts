//<-------------------- type inference and types in ts ---------------------------->


let number: number;

number = '5';
number = 0;


//<-------------------- objects in ts ---------------------------->

const person = {
    name: 'Dayana',
    age: 30
}

const product: {
    id: string;
    price: number;
    tags: Array<string>;
    details: {
        title: string;
        description: string;

    } = {
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

grades = [2, 2, 5];
activities = ['poker', 6678];

// here type inference tells us that name is of type string and helps us avoid mistake in the for loop
for (const name of anotherPerson.hobbies) {
    name.toString();
    name.map();
}


//<-------------------- tuples in ts ---------------------------->

const grandMa: {
    name: string;
    age: number;
    activities: [number, string]
} = {
    name: 'Donka',
    age: 80,
    activities: [3, 'knitting']
}

// activities are the predefined with values array

// noproblem with that
grandMa.activities.push('new activitie');

// but can not interfere with the predefined values;
grandMa.activities[1] = 3;



//<-------------------- enum in ts ---------------------------->

enum Role { ADMIN, READ_ONLY, AUTHOR };
enum Player { ADMIN = 1, READ_ONLY, AUTHOR };

const director = {
    name: 'August',
    age: 70,
    role: Role.ADMIN,
}



//<-------------------- UNION in ts ---------------------------->

// when using union ts only checks that the parameter is a union type and there might be possible issues
// when calling the function with different params;

function combine(input1: number | string, input2: number | string) {
    // return input1 + input2;

    if (typeof input1 === "number" && typeof input2 === "number") {
        return input1 + input2;
    } else {
        return input1.toString() + input2.toString();
    }

}

//<-------------------- LITERAL types in ts ---------------------------->


function combineTwo(
    input1: number | string,
    input2: number | string,
    typeConversion: 'to-number' | 'to-string') {

    // return input1 + input2;

    if (typeof input1 === "number" && typeof input2 === "number" || typeConversion == "to-number") {
        return +input1 + +input2;
    } else if (typeof input1 === "string" && typeof input2 === "string" || typeConversion == "to-string") {
        return input1.toString() + input2.toString();
    }

}


//<-------------------- TYPE ALIAS in ts ---------------------------->


function combineTwo(
    input1: number | string,
    input2: number | string,
    typeConversion: 'to-number' | 'to-string') {

    // return input1 + input2;

    if (typeof input1 === "number" && typeof input2 === "number" || typeConversion == "to-number") {
        return +input1 + +input2;
    } else if (typeof input1 === "string" && typeof input2 === "string" || typeConversion == "to-string") {
        return input1.toString() + input2.toString();
    }

}


// void is used when a function returns undefined but not literally returns;
function carrot(): undefined {
    console.log('im carrot');
    return;
}

// here where we have the return statement we use the void;
function carrotTwo(): void {
    console.log('im carrot');
}


//<-------------------- function TYPES in ts ---------------------------->

function waterMelon(a: number, b: number): number {
    return a + b
}

function stringMelon(a: string, b: string): string {
    return a + b
}

let waterMelonReused: (a: number, b: number) => number;

waterMelonReused = waterMelon;
// waterMelonReused = stringMelon; ->> this will cause ERROR

waterMelonReused(4, 6);