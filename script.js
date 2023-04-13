//complete this code
class Person {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
	get getName(){
		return this.name;
	}

	set setAge(age){
		this.age = age;
	}

	
}

class Student extends Person {
	study(){
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this.name} is teaching`);
	}
}


const person = new Person("John", 25);
console.log(person.name);
person.age = 30;

const student = new Student("Jane", 20);
console.log(student.name);
student.study();

const teacher = new Teacher("Bob", 35);
console.log(teacher.name);
teacher.teach();

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
