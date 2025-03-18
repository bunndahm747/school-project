 
export class Student {
    private _name: string;
    private _age: number;
    private _grade: string;
    private _address: string;
  
    constructor(name: string, age: number, grade: string, address: string) {
        this._name = name;
        this._age = age;
        this._grade = grade;
        this._address = address;
    }
  
    get name(): string {
        return this._name;
    }
  
    set name(value: string) {
        this._name = value;
    }
  
    get age(): number {
        return this._age;
    }
  
    set age(value: number) {
        this._age = value;
    }
  
    get grade(): string {
        return this._grade;
    }
  
    set grade(value: string) {
        this._grade = value;
    }
  
    get address(): string {
        return this._address;
    }
  
    set address(value: string) {
        this._address = value;
    }
}