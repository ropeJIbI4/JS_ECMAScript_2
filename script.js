
class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  displayInfo() {
    console.log(`Название: ${this.title}`);
    console.log(`Автор: ${this.author}`);
    console.log(`Страниц: ${this.pages}`);
  }
}

class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  displayInfo() {
    console.log(`Имя: ${this.name}`);
    console.log(`Возраст: ${this.age}`);
    console.log(`Класс: ${this.grade}`);
  }
}

const book1 = new Book("Война и мир", "Лев Толстой", 1300);
const book2 = new Book("Преступление и наказание", "Федор Достоевский", 640);
const book3 = new Book("1984", "Джордж Орлуел", 288);

console.log("Класс Book");
console.log("\n");
book1.displayInfo();
console.log("\n");
book2.displayInfo();
console.log("\n");
book3.displayInfo();
console.log("\n");



const student1 = new Student("Александр Александров", 16 , "10 класс");
const student2 = new Student("Иванов Иван", 17, "11 класс");
const student3 = new Student("Петров Петр", 18, "11 класс");

console.log("Класс Student");
console.log("\n");
student1.displayInfo();
console.log("\n");
student2.displayInfo();
console.log("\n");
student3.displayInfo();
