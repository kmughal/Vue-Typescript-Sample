export class Person {

    constructor(private name: string, private age: number, private address: string) {

    }

    getFullRecord = () => `${this.name} is ${this.age} old and address recorded is ${this.address}.`;
}