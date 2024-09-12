// Завдання 4. Виконуйте це завдання у файлі src/basic/4.ts.
// У вас є такі функції JavaScript. Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}
