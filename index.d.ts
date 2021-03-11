// 1. Числовой (number). Все числа, целые и дробные.
// const num: number = 1984;
// const fractal: number = 4.2;
// const logNumber: number = 3e10;

// 2. Логический (boolean). Два значения: true, false.
// const isIt: boolean = true;
// const isThat: boolean = false;

// 3. Строковый (string)
// const letter: string = `Typescript`;

// 4. Массив (array). Включает в себя разные подтипы в зависимости от типа его элементов:
// const numberArray: nomber[] = [1,2,3,4,5];
// const stringArray: string[] = [`Typescript`,`Javascript`,`NodeJS`];

// 5. Tuple
// const mixedArray: [nomber, string] = [1,2,3,`...`,100,`soba4ku`];

// 6. Any. Позволяет присваивать переменной значение любого типа.
// let variant: any = 1;
// let variant = `String`;
// let variant = [];

// 7. Void. Это тип, использование которого говорорит о том, что функция ничего не возвращает.

// 8. Never. Признак для функций, которые никогда не вернут значения.
// - по причине прирывания
// function error(message: string): never {
//     throw new Error(message);
// }
// - по причине зацикливания:
// function infiniteLoop(): never {
//     while (true) {
//     }
// }

// 9. null

// 10. undefined