// Завдання 3. Виконуйте це завдання у файлі src/basic/3.ts.
// Створіть змінну, яка може містити або рядок, або число (union type).
// Також, оголосіть змінну, яка може містити лише одне з двох можливих рядкових значень: 'enable' або 'disable'(literal type).

let orStringOrNumber: string | number;
orStringOrNumber = "Some string";
orStringOrNumber = 2;

let enableOdDisable: "enable" | "disable";
enableOdDisable = "enable";
enableOdDisable = "disable";
