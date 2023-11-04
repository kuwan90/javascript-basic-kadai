let num = 525;  // 3と5の倍数
// let num = 21; 3の倍数
// let num = 100; 5の倍数
// let num = 19; 上記以外

if (num % 3 === 0 && num % 5 === 0) {
    console.log('3と5の倍数です');
} else if (num % 3 === 0) {
    console.log('3の倍数です');
} else if (num % 5 === 0) {
    console.log('5の倍数です');
} else {
    console.log(num);
}