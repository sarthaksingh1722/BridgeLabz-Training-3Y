// Object using arrow function
const user = {

    name: "Sarthak",

    showName: () => {
        console.log(this.name);
    }
};

// Calling method
user.showName();