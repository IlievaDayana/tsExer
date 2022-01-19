"use strict";
var Department = (function () {
    function Department(n) {
        this.name = n;
    }
    Department.prototype.describe = function () {
        return 'Department' + this.name;
    };
    return Department;
}());
var finance = new Department('finance');
finance.describe();
var accountingCopy = { describe: finance.describe };
console.log(accountingCopy.describe());
