///////////////задания циклы\\\\\\\\\\\\\\\\\\\\\\\\\\\
// 1
// for (let  i = 1; i<=100; i++){
//     console.log(i)
// }

// 2
// for (let  i = 11; i<=33; i++){
//     console.log(i)
// }

// 3
// for (let  i = 0; i<=100; i+=2){
//     console.log(i)
// }    

// 4
// let i = 0;
// for (let forr = 1; forr<=100; forr++){
//     console.log(i+ ' плюс ' +forr+' будет: ' + (i = i+forr))
// }


///////////////Работа с for для массивов\\\\\\\\\\\\\\\\\\\\\\\\\\\
// 1
// let array = [1, 2, 3, 4, 5]
// for (let i of array){
//     console.log(i)
// }

// 2
// let array = [1, 2, 3, 4, 5]
// let result = 0
// for (let i of array){
//     result += i
// }
// console.log(result)

////////////////////Работа с for-in\\\\\\\\\\\\\\\\\\\\\
// 1
// let obj = {green:'зеленый',red:'красный',blue:'синий'}
// for (i in obj){
//     console.log(i,':    ', obj[i])
// }

// 2
// let obj = {'Коля':200,'Вася':300,'Петя':400}
// for (i in obj){
//     console.log(`${i} - зарплата ${obj[i]} долларов.`)
// }

///////////////////Задачи\\\\\\\\\\\\\\\\\\\\\\\
// 1
// let nums = [2, 5, 9, 15, 0, 4]
// for (i of nums) {
//     if (i>=3 && i<10){
//         console.log(i)
//     } 
// }

// 2
// let nums = [-3, 3,-4,2,-8, -22]
// let result = 0
// for (i of nums) {
//     if (i>=0){
//         result += i
//     } 
// }
// console.log(result)

// 3
// let nums = [1, 2, 5, 9, 4, 13, 4, 10]
// for (i of nums){
//     if (i == 4){
//         console.log('ЕСТЬ!')
//         break
//     }
// }

// 4
// let numbers = [10, 20, 30, 50, 235, 3000]; 
// for (let number of numbers) { 
//     let first = Number(String(number)[0]); 
//     if (first == 1 || first == 2 || first == 5) { 
//         console.log(number); 
//     } 
// }

// 5
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = '-'
// for (let i = 0; i < numbers.length; i++) {
//     result += numbers[i] + '-'
// }
// console.log(result)

// 6
// let daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
// let vision = ''
// for (let day of daysOfWeek) {
//     if (day == 'Суббота' || day == 'Воскресенье') {
//         vision += '<b>'+day+'</b>'+'<br>'
//     } else {
//         vision += day + '<br>'
//     }
// }
// document.write(vision)

// 7 
// let arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
// let day = 'пятница'
// let vision = ''
// for (let i = 0; i < arr.length; i++) {
//   if (i == day) {
//     vision += '<em>'+ arr[i] + '</em>'+'<br>' //чет у меня не получается курсив, хотя именно так она должна делаться( можкт потому что у меня яндекс а не хром
//   } else {
//     vision += arr[i] + '<br>'
//   }
// }
// document.write(vision)


// 8
// let n = 1000
// let num = 0

// while (n >= 50) {
//     n /= 2
//     num++
// }

// console.log(n)
// console.log(num)