class Person {
    constructor(firstName, lastName, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.profilePicture = this.defaultProfilePicture();
        this.counter();
    }

    static #count = 0;
    #fullName;

    counter() {
        Person.#count++;
    }

    defaultProfilePicture() {
        return this.gender === 'Male' ? 'male.png' : 'female.png';
    }

    getFullName() {
        return this.#fullName || `${this.firstName} ${this.lastName}`;
    }

    setFullName(fullName) {
        if (!this.#fullName) {
            this.#fullName = fullName;
        }
    }

    static getCount() {
        return Person.#count;
    }
}

function capitalizeFirstLetter(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

class Employee extends Person {
    constructor(firstName = '', lastName = '', gender = '', salary = 0, language = '') {
        lastName = capitalizeFirstLetter(lastName);
        super(firstName, lastName, gender);
        this.salary = salary;
        this.language = language;
        this.profilePicture = this.defaultProfilePicture();

        updateTotalCount();
    }
    addCard(containerRef) {
        const cardElement = document.createElement('div');
        cardElement.innerHTML = `
            <img src="${this.profilePicture}" alt="${this.gender}" width="40" height="40" />
            <p>Name: ${capitalizeFirstLetter(this.getFullName())}</p>
            <p>Gender: ${this.gender}</p>
            <p>Language: ${this.language}</p>
            <p>Salary: ${this.salary}</p>
        `;
        containerRef.appendChild(cardElement);
    }

    toString() {
        return `Name: ${this.getFullName()}, Gender: ${this.gender}, Language: ${this.language}, Salary: ${this.salary}`;
    }
}

const container = document.getElementById('employeeContainer');
const totalCountElement = document.getElementById('totalCount');

function updateTotalCount() {
    totalCountElement.textContent = Person.getCount();
}

const employee1 = new Employee('Yara', 'jamal', 'Female', 5000, 'Arabic');
const employee2 = new Employee('Mohammed', 'nasser', 'Male', 7000, 'English');
const employee3 = new Employee('basma', 'jamal', 'Female', 7000, 'English');
const employee4 = new Employee('Mohamed', 'jamal', 'Male', 7000, 'English');
const employee5 = new Employee('khlood', 'hossam', 'Female', 7000, 'English');


employee1.addCard(container);
employee2.addCard(container);
employee3.addCard(container);
employee4.addCard(container);
employee5.addCard(container);

console.log(`Number of persons in memory: ${Person.getCount()}`);
