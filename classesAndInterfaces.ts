class Department {
  public name;

  // we can also have getters and setters to not directly access and modify our class properties
  get departmentName() {
    if( this.name) {
      return this.name;
    }
    throw new Error('No dep name')
  }

  set createDepartmentName(newName:string) {
    if( newName ) {
      this.name = newName
    }
    throw new Error('Please enter a name')
  }

  static depName() {
    return 'name';
  }

  // static methods can be accessed like properties outside of the class Department.fiscalYear => 2020
  static fiscalYear:number = 2020;
 

  // PRIVATE props are only available in class PROTECTED are available and shared between inherited classes;
  constructor(name: string, protected id: number) {
    this.name = name;
    // Department.fiscalYear
    // NOT
    // this.fiscalYear
  }

  describe(this: Department) {
    return 'Department' + this.name
  }

  getName(this:Department) {
    return this.name;
  }

  getId(this:Department) {
    return this.id;
  }

  setId(this:Department, newId:number) {
    this.id = newId;
  }
}

class Accounting extends Department {
  constructor(name:string, id:number){
    super(name, id);
  }

}
const finance = new Department('finance',123456);

const acc = new Accounting('accounting',123456);

acc.setId(5478);
console.log(acc.getId());


finance.describe();

const accountingCopy = { name: 'financeCopy', describe: finance.describe };

// abstract classes have metod which is only defined in them and every ancestor must implement it;
// singleton is class which is instantiated only once it is one of the 
// 28 design patterns some call it anti-pattern because it breaks the rule of single responsibility 
// by making sure of class creation AND being instantiated only once