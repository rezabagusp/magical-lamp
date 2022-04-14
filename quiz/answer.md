## Quiz:

1. Explain how Object Oriented Programming works with a thorough understanding of the keyword this and the new keyword
2. What is the new class syntax and how to create instance methods, class methods?
3. Give an example of how to implement inheritance in ES2015 using extends and super
4. Imagine refactoring an ES5 application to use ES2015, how would you go about it?
5. Give an example of how you structure applications with design patterns using closure and modules
6. What are your preferred ways of testing your web application?
7. Which web server do you use? Why? Explain pros and cons of your choice.
8. What is your preferred production deployment process?
9. Give an example of clean README.md documentation.

### Answer 1:
By definition OOP is a software design where we develop the software around the data/object. The representation of the data is contructed by the blueprint as we called it *class*.
Example:
```
  // suppose we have a class Person that has attribute `name` and `age`.
  class Person {
    constructor(age, name) {
      this.name = name;
      this.age = age;
    }
  }

  // `this` directive is used to access/manipulate the current member(methods & properties) of the class. in this case we want to assign the name & the age of the `Person`.

  // we can make the instance/object of that class with `new` directive like this.
  const reza = new Person('Reza Bagus Permana', 25);
```
When we call `reza`, the result shown on the console will be:
```
Person {name: 25, age: 'Reza Bagus Permana'}
  age: "Reza Bagus Permana"
  name: 25
  [[Prototype]]: Object
```

### Answer 2:
New class syntax is syntax that is part of the ES6(ES2015) features. It allows us to write the object in more *class-based* programming way. We should noted here that Javascript is not a *class-based* programming language (it's *prototype-based*). So that it just a syntax that mimic the object declaration like the *class-based* one.

*Class method* or we may call it a static method is a method that is part of the class. This method can be called directly without needing to create an instance class.

*Instance method* (as like it sound) is a method that'll be available once we create an instance of the class.

Example:

```
  class Person {
    constructor(age, name) {
      this.name = name;
      this.age = age;
    }
    greetings() {
      console.log(`Hallo, my name is ${this.name}. I'm ${this.age} years old`);
    }


    // asssume we have a static method that call certain repository/endpoint to get network status.
    static getNetworkStatus() {
      return 'You are online';
    }
  }

  // without a make an instance, we can directly called it the static method like this

  Person.getNetworkStatus();
  /*
    You are online
  */

```

### Answer 3:
Example: 
Suppose we already have class `Person`. Then, we want to utilize that class and use it's capability to class `Student`.
```
  class Person {
    constructor(age, name) {
      this.name = name;
      this.age = age;
    }
    greetings() {
      console.log(`Hallo, my name is ${this.name}. I'm ${this.age} years old`);
    }
  }

  // inherit that `Person` class to `Student` class
  class Student extends Person {
    constructor(age, name, studentId) {
      super(age, name);
      this.studentId = studentId;
    }

    whoAmI()  {
      this.greetings();
      console.log(`My student ID is ${this.studentId}`);
    }
  }

  // let's try to called the 'whoAmI' method
  const rezaStudent = new Student('Reza Bagus Permana', 25, 'G14140023');
  rezaStudent.whoAmI();
  /*
    Hallo, my name is Reza Bagus Permana. i'm 25 years old
    My student ID is G64140023
  */
```
As we can see, since `Student` inherit the  `Person` class. The instance of the `Student` class also get the properties and methods that define in `Person` class.

### Answer 4:
First of all. We need to make sure that the environment of our Application is support ES6 or not. If not, of course we should setup the environment first.

Assume our application is support ES6 environment.
- Firstly, we need to remark which part of the code that could be refactored to ES6. I usually start by the popular ES6 feature like arrow function, spread operator, and variables (like `let`, `const` and `var`).
- Then, we try change any variables that is defined with `var` to `let` (if necessary).
- Then, we change variable that is used only once with `const`,
- Then, change any function that is defined with `function` to arrow function (define it with function expression instead).
- Re-run & test.
- Iterate to other files.

### Answer 5:
Actually in React, we usually implement *closure* and *modules* when we define our component.
Let's say we create a file component called `ButtonCounter`. This file is a representation of the module component we define. This component basically an UI with a counter state.

```
const ButtonCounter = () => {
  // this is the closure. It only available to this scope of this module
  const [counter, setCounter] = useState(0);

  return (
    <button onClick={() => setCounter(counter + 1)}>
      {`Current Counter ${counter}`}
    </button>
  );
}

// This where we set this file as a module of ButtonCounter component.
export default ButtonCounter;
```

As we call it a module, means it encapsulate the scope and control the data that can be accessed by the ouside module.
We can see that at `ButtonCounter` module, it take the advantage of the closure state (*counter*) define in that component. Whenever that component is called, the state is not only available to that module but also it will remain until that component is disposed.

### Answer 6:
Black box & Unit test.
But, i'd say it also depends on the case we face. For many reasons, create test causes a lot of pain (ex: Time consuming). But, we can't deny that it is important. For me, it would be the combination of those two. First, i focus on developing the functionalities and then create the test. I prefer to do the test at container component since the view component is typically just for a view purpose.

### Answer 7:
Nginx. I use it on my saveral project. Honestly i don't really get into depth about the web server. I only know that Nginx is one of the most use and popular web server out there.

### Answer 8:
Using CI/CD with combination of *trunk-based* development process. I usually implement *trunk-based* development because it is simple and works on many repositories i'd made. It's basically like this. Assume we use github for our VCS (Version Control System).
- Init new repo
- Set *master* as our main branch.
- When we develop new things (feat, refactor, fix, etc.), we checkout from the  *master* branch, and do the work there.
- Once finished, we review the code & merge it to master.
- I usually setup the github hook that listens to any changes on the master branch, if any changes happen then it will cause the action for our CI/CD service to deploy our app on the staging server.
- For production, i usually trigger the deployment by `tag`. Whenever i create a `tag`, it will trigger our CI/CD service to deploy on the production server.  

### Answer 9:
I have some hints for how good Readme.md should be.It should fulfill the following.
- What it is about?
- It should cover how to process (if needed).
- It should cover examples (if needed))
- It should cover what others or future of us should know.

some of the examples i know:
- [React Hook Debounce](https://github.com/xnimorz/use-debounce)
- [This Repository](https://github.com/rezabagusp/magical-lamp)