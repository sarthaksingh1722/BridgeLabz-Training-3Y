// Student Class
class Student {

    constructor(name, marks) {

        this.name = name;
        this.marks = marks;

    }

    // Calculate Average using reduce()
    calculateAverage() {

        const total = this.marks.reduce((sum, mark) => {

            return sum + mark;

        }, 0);

        return total / this.marks.length;

    }

    // Calculate Grade
    getGrade() {

        const average = this.calculateAverage();

        if (average >= 90) {
            return "A";
        }
        else if (average >= 80) {
            return "B";
        }
        else if (average >= 60) {
            return "C";
        }
        else {
            return "F";
        }

    }

    // Display Result
    showResult() {

        console.log("Name:", this.name);

        console.log("Marks:", this.marks);

        console.log("Average:", this.calculateAverage());

        console.log("Grade:", this.getGrade());

        console.log("---------------------");

    }

}


// Creating 3 Student Objects
const student1 = new Student("Sarthak", [90, 85, 95]);

const student2 = new Student("Rahul", [75, 80, 85]);

const student3 = new Student("Aman", [45, 55, 50]);


// Display Results
student1.showResult();

student2.showResult();

student3.showResult();