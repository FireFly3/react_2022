var x = function (str) {
    return 15; // 2. після дужок : number|string вказуємо що ф-я буде повертати число або стрінгу
};
var user = { name: 'max', age: 12, status: true };
// 3.:{name:string, age:number, status:boolean} - в юзера повинно бути 3 поля в яких свої типи даних
console.log(user.name);
