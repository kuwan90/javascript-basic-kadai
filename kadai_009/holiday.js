const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"];
const num = 16; //祝日の数

let i = 0;

// while文での出力
console.log('[while文での出力]');

while (i < num) {
    console.log(holidays[i]);

    i++;
}

console.log(''); // 空行

// for文での出力
console.log('[for文での出力]');

for (let i = 0; i < num; i++) {
    console.log(holidays[i]);
}