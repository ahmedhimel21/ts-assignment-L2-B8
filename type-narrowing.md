# Type Narrowing in TypeScript

## Introduction

TypeScript initially knows that a variable might have multiple types. Type narrowing helps TypeScript understand which type it actually has at a particular point in the code.

For type narrowing, we use some type guards like `typeof`, `in`, and `instanceof`. Type guards are used to check data types at runtime. When we don't know what type of data is coming, we use type guards to narrow its type conditionally and ensure type safety.

## 1. typeof Guard

We can check primitive data types like `number`, `string`, `boolean`, and `undefined` using the `typeof` operator.

**Example:**

```typescript
const checkType = (data: unknown) => {
  if (typeof data === "number") {
    return data * data;
  } else if (typeof data === "string") {
    return data.length;
  } else {
    return "Wrong Input.";
  }
};
```

The above function takes a parameter called `data`, whose type is `unknown`. Since we don't know what type of data is coming through the parameter, we use the `typeof` guard to narrow its type conditionally.

## 2. in Guard

When different object types share some common properties but have specific properties, we can use the `in` operator to distinguish between them.

**Example:**

```typescript
type NormalUser = { id: number; name: string };
type AdminUser = { id: number; name: string; role: "admin" };

const checkUser = (user: NormalUser | AdminUser) => {
  if ("role" in user) {
    console.log("Admin user");
  } else {
    console.log("Normal user");
  }
};
```

The above function checks whether the `role` property exists in the user object to distinguish between a normal user and an admin user.

## 3. instanceof Guard

When we need to identify which class an object belongs to and access its specific methods or properties, we use the `instanceof` operator.

**Example:**

```typescript
class Parent {
  propertyCorollaCar(): void {
    console.log("I have a Corolla car");
  }
}

class Child1 extends Parent {
  propertyTeslaCar(): void {
    console.log("I have a Tesla car");
  }
}

class Child2 extends Parent {
  propertyBMWCar(): void {
    console.log("I have a BMW car");
  }
}

const checkProperty = (person: Parent) => {
  if (person instanceof Child1) {
    person.propertyTeslaCar();
  } else if (person instanceof Child2) {
    person.propertyBMWCar();
  } else {
    person.propertyCorollaCar();
  }
};
```

Here, `Child1` and `Child2` are subclasses of `Parent`. We use the `instanceof` guard to identify the object's class and access its corresponding methods.
