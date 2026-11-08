# Access Modifiers in TypeScript

## Introduction

Access modifiers are used to control the accessibility of class properties and methods from outside the class.

In TypeScript, there are three main access modifiers: `public`, `private`, and `protected`.

## 1. Public

If we declare a property as `public`, we can access that property from anywhere within the accessible scope of the class instance. `public` is the default access modifier in TypeScript. This means that if we don't explicitly specify an access modifier for a property, TypeScript treats it as `public`.

**Readonly:** `readonly` is a property modifier that prevents a property from being reassigned after initialization.

**Example:**

```ts
class Employee {
  public readonly name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const employee = new Employee("Himel");
console.log(employee.name); // Himel
employee.name = "Ahmed"; // Error: Cannot assign to 'name'
```

The `name` property can be accessed from anywhere the `Employee` instance is accessible, but it cannot be modified after initialization because it is declared with the `readonly` modifier.

## 2. Private

If we declare a property as `private`, we can access that property only within the class where it is declared. We cannot access it directly from outside the class or from its subclasses.

**Example:**

```ts
class Employee {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}

const employee = new Employee("Himel");
console.log(employee.getName()); // Himel
console.log(employee.name); // Error: Property 'name' is private
```

The `name` property can only be accessed directly inside the `Employee` class. We use the `getName()` method to access its value from outside.

## 3. Protected

If we declare a property as `protected`, we can access that property within the class where it is declared and its subclasses. However, we cannot access it directly from outside the class.

**Example:**

```ts
class Employee {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Developer extends Employee {
  getName(): string {
    return this.name;
  }
}

const employee = new Employee("Himel");
const developer = new Developer("Ahmed");

console.log(developer.getName()); // Ahmed
console.log(employee.name); // Error: Property 'name' is protected
```

The `name` property can be accessed inside the `Employee` class and its child classes, such as `Developer`. However, it cannot be accessed directly from outside the class.
