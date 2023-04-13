//complete this code
class Person {
	constructor(name, age){
		this._name = name;
		this._age = age;
	}
	get getName(){
		return this._name;
	}

	set setAge(age){
		this._age = age;
	}

	
}

class Student extends Person {
	study(){
		console.log(`${this._name} is studying`);
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this._name} is teaching`);
	}
}


const person = new Person("John", 25);
console.log(person._name);
person.age = 30;

const student = new Student("John", 30);
console.log(student._name);
student.study();

const teacher = new Teacher("Bob", 35);
console.log(teacher._name);
teacher.teach();

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
