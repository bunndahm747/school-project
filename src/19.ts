class Student {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log(`Hello, I am ${this.name} and I am ${this.age} years old.`);
    }
}

class Teacher extends Student {
    teacherId: string;

    constructor(name: string, age: number, teacherId: string) {
        super(name, age);
        this.teacherId = teacherId;
    }

    updateAge(newAge: number) {
        this.age = newAge;
        return { name: this.name, age: this.age };
    }
}

class StudentWithTeacher extends Teacher {
    constructor(name: string, age: number, teacherId: string) {
        super(name, age, teacherId);
    }

    teach(toStudent: Student) {
        toStudent.speak();
        return toStudent;
    }
}

// Example usage:
const student1 = new Student('John', 20);
student1.speak();

const teacher1 = new Teacher('Jane', 35, 'TE35');
teacher1.updateAge(40);

const student2 = new StudentWithTeacher('Alice', 28, 'TAL28');
student2.teach(student1); // Output: Hello, I am Alice and I am 28 years old.
