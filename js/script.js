// //167
//
// //1
// let i = 1
// while (i <= 100) {
//     console.log(i);
//     i++;
// }
// console.log("")
//
//
// //2
// for (let x = 100; x > 0; x--) {
//     console.log(x);
// }
// console.log("")
//
// //3
// for (let y = 2; y <= 100; y += 2) {
//     console.log(y);
// }
// console.log("")
//
// //4
// let arr = [];
//
// for (let r = 1; r <=10; r++) {
//     arr.push('x');
// }
// console.log(arr)
// console.log("")
//
// //5
// let m = [];
//
// for (let r = 1; r <=10; r++) {
//     m.push(r);
// }
// console.log(m)
// console.log("")
//
// //6
// let mas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//
// for (let elem of mas) {
//     if (elem < 10 & elem > 0) {
//         console.log(elem);
//     }
// }
// console.log("")
//
// //7
// let mass = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12];
// let flag = false;
//
// for (let elem of mass) {
//     if (elem === 5) {
//         flag = true;
//         break;
//     }
// }
// if (flag === true) {
//     console.log("Есть")
// } else {
//     console.log('Нет')
// }
// console.log("")

//8
// let mass2 = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12];
// let res = 0;
// for (let elem of mass2){
//     res += elem;
// }
// console.log(res)

//9
// let mass2 = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12];
// let kv = 0;
// let n = 0;
// for (let elem of mass2){
//     n = elem;
//     let x = n**2;
//     kv += x;
// }
// console.log(kv)

//10
// let mass2 = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12];
// let res = 0;
// for (let elem of mass2) {
//     res += elem;
// }
// let a = mass2.length;
// let ar = res / a;
// console.log(ar)

//11
// let res = 9;
// let mass2 = [];
// let ser = 1;
// for (let r = 1; r <= res; r++) {
//     mass2.push(r);
// }
// for (let elem of mass2) {
//     ser *= elem;
// }
// console.log(ser)


//12
// let ars = [];
// for (let i = 10; i >= 1; i--) {
//     ars.push(i);
// }
// console.log(ars)

//13
// let arr = [1,2,-3,4,-5,10];
// let a = 0;
// for (let elem of arr) {
//     if (elem > 0) {
//         a += elem;
//
//     }
// }
// console.log(a)

// 14
// let arr = [10, 20, 30, 50, 235, 3000];
// let str
// for (let elem of arr) {
//     str = String(elem);
//     if (str[0] === '1' || str[0] === '2' || str[0] === '5' ) {
//         console.log(elem)
//     }
// }

// 15
// let mas = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12];
// let a = mas.reverse();
// for (let elem of a ){
//     console.log(elem)
// }

//16
// let mas = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12];
// for (let i = 1; i <= mas.length; i++) {
//     if (i === mas[i-1]) {
//         console.log(mas[i-1])
//     }
// }

// 17
// let mas = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12];
// for (let i = 0; i <= mas.length-1; i++) {
//     document.write(mas[i] + '<br>');
// }

//18

// let mas = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"]
// for (let i = 0; i <= mas.length-1; i++) {
//     document.write(mas[i] + '<p>');
// }


//19

// let mas = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"]
// for (let i = 0; i <= mas.length-3; i++) {
//     document.write(mas[i])
// }
// document.write('<b>', mas[5], mas[6] + '</b>');

//20

// let arr = ["понедельник ", "вторник ", "среда ", "четверг ", "пятница ", "суббота ", "воскресенье "]
// let day = arr[1];
// for(let elem of arr){
//     if(elem === day){
//         document.write('<i>' + day + '</i>');
//             continue;
//     }
//     document.write(elem)
// }


//21 
// let obj = {
// 	employee1: 100,
// 	employee2: 200,
// 	employee3: 300,
// 	employee4: 400,
// 	employee5: 500,
// 	employee6: 600,
// 	employee7: 700,
// };
// for (let i = 1; i < 8; i++) {
//     if (obj['employee' + 1] *=1.1);
// }
// console.log(obj);

// 22

//  let obj = {
//  	employee1: 100,
//  	employee2: 200,
//  	employee3: 300,
// 	employee4: 400,
// 	employee5: 500,
//   	employee6: 600,
// 	employee7: 700,
//  };
// for (let i = 1; i < 8; i++) {
//     if (obj['employee' + 1] *=1.1);
//         obj['employee' +1] <=400;
// }
//  console.log(obj);

//23

// let arr1 = [1, 2, 3, 4, 5],
//   arr2 = [6, 7, 8, 9, 10],
//   arr = {};
// for (let i = 0; i < arr1.length; i++) {
//   let key = arr1[i];
//   arr[key] = arr2[i];
// }
// console.log(arr)

//24

// let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
// let sum = 0,
//     sum_elem = 0;
// let res = 0;
// for (let key in obj) {
//   key = +key;
//   sum += key;
//   sum_elem +=obj[key];
//   res = sum / sum_elem;
// }
 
// console.log(res) 

//25
// let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
// let mas = [];
// let mas1 = [];
// for (let key in obj) {
//     mas.push(key);
//     mas1.push(obj[key]);
// }
// console.log(mas, mas1)

//26
// let obj = {
//  1: 125,
//  2: 225,
//  3: 128,
//  4: 356,
//  5: 145,
//  6: 281,
//  7: 452,
// };
// let mas = []
// let mas1 = []
// for (let key in obj) {
//     mas.push(obj[key])
// }
// for (let i of mas) {
//     if (+String(i)[0] == 1 || +String(i)[0] == 2){
//         mas1.push(i)
//     }
// }
// console.log(mas1)

//27
// let arr = ['a', 'b', 'c', 'd', 'e'];
// let obj = {};
// for (let i = 0; i < arr.length; i++) {
//     obj[i + 1] = arr[i];
// }
// console.log(obj)

//28
// let arr = ['a', 'b', 'c', 'd', 'e'];
// let obj = {};
// for(let i = 0; i < arr.length; i++) {
//     obj[arr[i]] = i + 1
// }
// console.log(obj)






