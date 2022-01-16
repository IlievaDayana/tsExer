"use strict";
//<-------------------- type inference and types in ts ---------------------------->
var number;
number = '5';
number = 0;
//<-------------------- objects in ts ---------------------------->
var person = {
    name: 'Dayana',
    age: 30
};
var product;
product.id = 1;
//<-------------------- arrays in ts ---------------------------->
var anotherPerson = {
    name: 'Dayana',
    age: 30,
    hobbies: ['baseball', 'painting', 'reading', 'sewing'],
};
var activities;
var grades;
var mixedValues;
grades = [2, 2, 5];
activities = ['poker', 6678];
// here type inference tells us that name is of type string and helps us avoid mistake in the for loop
for (var _i = 0, _a = anotherPerson.hobbies; _i < _a.length; _i++) {
    var name_1 = _a[_i];
    name_1.toString();
    name_1.map();
}
//<-------------------- tuples in ts ---------------------------->
var grandMa = {
    name: 'Donka',
    age: 80,
    activities: [3, 'knitting']
};
// activities are the predefined with values array
// noproblem with that
grandMa.activities.push('new activitie');
// but can not interfere with the predefined values;
grandMa.activities[1] = 3;
//<-------------------- enum in ts ---------------------------->
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var Player;
(function (Player) {
    Player[Player["ADMIN"] = 1] = "ADMIN";
    Player[Player["READ_ONLY"] = 2] = "READ_ONLY";
    Player[Player["AUTHOR"] = 3] = "AUTHOR";
})(Player || (Player = {}));
;
var director = {
    name: 'August',
    age: 70,
    role: Role.ADMIN,
};
//<-------------------- UNION in ts ---------------------------->
// when using union ts only checks that the parameter is a union type and there might be possible issues
// when calling the function with different params;
function combine(input1, input2) {
    // return input1 + input2;
    if (typeof input1 === "number" && typeof input2 === "number") {
        return input1 + input2;
    }
    else {
        return input1.toString() + input2.toString();
    }
}
//<-------------------- LITERAL types in ts ---------------------------->
function combineTwo(input1, input2, typeConversion) {
    // return input1 + input2;
    if (typeof input1 === "number" && typeof input2 === "number" || typeConversion == "to-number") {
        return +input1 + +input2;
    }
    else if (typeof input1 === "string" && typeof input2 === "string" || typeConversion == "to-string") {
        return input1.toString() + input2.toString();
    }
}
//<-------------------- TYPE ALIAS in ts ---------------------------->
function combineTwo(input1, input2, typeConversion) {
    // return input1 + input2;
    if (typeof input1 === "number" && typeof input2 === "number" || typeConversion == "to-number") {
        return +input1 + +input2;
    }
    else if (typeof input1 === "string" && typeof input2 === "string" || typeConversion == "to-string") {
        return input1.toString() + input2.toString();
    }
}
// void is used when a function returns undefined but not literally returns;
function carrot() {
    console.log('im carrot');
    return;
}
// here where we have the return statement we use the void;
function carrotTwo() {
    console.log('im carrot');
}
//<-------------------- function TYPES in ts ---------------------------->
function waterMelon(a, b) {
    return a + b;
}
function stringMelon(a, b) {
    return a + b;
}
var waterMelonReused;
waterMelonReused = waterMelon;
// waterMelonReused = stringMelon; ->> this will cause ERROR
waterMelonReused(4, 6);
//<-------------------- UNKNOWN TYPES in ts ---------------------------->
var beetsVeggie;
var beetsNot;
beetsVeggie = 5;
beetsVeggie = '5';
// even though the variable is string since it is unknown there must be a type check to assign the value
beetsNot = beetsVeggie;
