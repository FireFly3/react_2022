// const x = (str:string): number|string=>{ // 1. str:string - вказуємо що в функціїї буде стрінга
//     return 15                            // 2. після дужок : number|string вказуємо що ф-я буде повертати число або стрінгу
// }
//__________________________________________________
// const user:{name:string, age:number, status:boolean} = {name:'max', age:12, status:true}
// // 3.:{name:string, age:number, status:boolean} - в юзера повинно бути 3 поля в яких свої типи даних
//
// console.log(user.name);
//____________________________________________
// type User = {name:string, age:number, status:boolean};
// // 4. Виносимо окремо тип юзера, (протипізовуємо його, а вже потім тип підключаєм до обьекту при створенні його)
// const user:User = {name:'Pipe', age: 20, status: true}

//або

// interface IUser{
//     name:string,
//     age:number,
//     status:boolean
// }
// //5. теж саме що і тип, але інший запис, інтерфейси також перед назвою пишуть велику букву "І"
// const user:IUser = {name:'Pipe', age: 20, status: true}
// //__________________________________

// interface IUser{
//     name:string,
//     age:number,
//     status:boolean
// }
//
// const user:Partial<IUser> = {name:'Pipe', age: 20}
//
// // 6. :Partial<IUser> - можна вказувати не все, не обов'язково щоб в об'єкті були всі поля
//
// //_____________________________________

// interface IUser<T>{ // 7. <T> - дженерік
//     name:string,
//     age:number,
//     status:boolean,
//     data:T
// }
//
// const user:IUser<number[]> = {name:'Max', age: 14, status: true, data:[7]}
// // 7. створюючи юзера вказуємо що виглядати буде як інтерфейс IUser, а в дженеріку вказуємо що це буде масив чисел

//___________________________________

// interface IUser<T> {
//     name: string,
//     age: number,
//     status: boolean,
//     data: T
// }
//
// interface IDog {
//     name: string,
//     age: number
// }
//
// const user: IUser<IDog[]> = {name: 'Max', age: 14, status: true, data: [{name:'Rex', age:2}]}
// // 8. В дженеріки можна передавати інтерфейси

// class User {
//     id: number;
//     name: string;
//     age: number;
//
//     constructor(id: number, name: string, age: number) {
//         this.id = id;
//         this.name = name;
//         this.age = age;
//     }
// }

// 9. широкий запис класу. Створюється клас зі своїми полями, потім створюється конструктор і через this доступається до полів і присвоює їм значення


// class User {
//
//     constructor(private id: number, public name: string, protected age: number) {
//         this.id = id;
//         this.name = name;
//         this.age = age;
//     }
// }
//
// //10. Скорочений запис за допомогою модифікаторів доступу. Всьго їх 3: private - доступний лише всередині класу (не можназалогати цю пропертю), public - можна використовувати змінну ззовні цього класу(можназалогати цю пропертю), protected - видимий в класі нащадка (не можназалогати цю пропертю)

//____________________________________
//
// const x = (str:string):void=>{ // 11. void - значить що функція нічого не повертає
//
// }

//______________________________________

interface IShapeActions{
    area:()=>number,
    perimetr:()=>number
}

interface IGreeting {
    hello:()=> void
}

class Rectangle implements IShapeActions, IGreeting{
    area(): number {
        return 0;
    }

    hello(): void {
    }

    perimetr(): number {
        return 0;
    }

}