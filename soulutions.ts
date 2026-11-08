const multiplyValue = (value: number, multiplier?: number): number => {
  if (multiplier || multiplier === 0) return value * multiplier;
  else return value * 2;
};

const processInput = (
  x: string | number | boolean,
): string | number | undefined => {
  if (typeof x === "string") return x.trim().toLowerCase();
  else if (typeof x === "number") return x * 10;
  else if (typeof x === "boolean") {
    if (x) return "Active";
    else return "Inactive";
  }
};

const formatCoordinate = (
  coordinate: readonly [number, number, string],
): string => {
  const [lat, long, location] = coordinate;
  return `Location: ${location} (${lat}, ${long})`;
};

const concatenateArrays = <T>(...arrays: T[]): T[] => {
  let concatenatedArr: T[] = [];
  for (let item of arrays) concatenatedArr = concatenatedArr.concat(item);
  return concatenatedArr;
};

interface ICourse {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (
  courses: ICourse[],
  minStudents: number,
): ICourse[] => {
  return courses.filter(
    (course: ICourse) =>
      course.isPublished === true && course.students >= minStudents,
  );
};

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((item) => item[key]);
};

class Employee {
  protected name: string;
  private baseSalary: number;
  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }
  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;
  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }
  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const validateAgeAsync = async (age: number): Promise<string> => {
  if (age >= 18) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return "Access Granted";
  } else {
    throw new Error("Access Denied: Must be 18 or older");
  }
};
