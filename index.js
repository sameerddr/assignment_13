//   -------- Solution  1 -------

// a = parseInt(process.argv[2])
// for (var i = 1; i <= a; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }


// ------------solution 2 ----------

// x = parseInt(process.argv[2]);
// y = parseInt(process.argv[3]);
// for (i = x; i <= y; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }


// --------------solution 3 -----------


// let n = parseInt(process.argv[2]);
// let sum = 0;
// let firstdigit;
// let lastdigit;

// lastdigit = n % 10;

// while (n >= 10) {
//     n = Math.floor(n / 100);
// }
// firstdigit = n;
// console.log(firstdigit, lastdigit);



// ----------- solution 4 Armstrong Number -------------
// let number = parseInt(process.argv[2]);
// let sum = 0;
// let temp;
// let lastdigit;
// temp = number;


// while (temp != 0) {
//     lastdigit = temp % 10;
//     sum = sum + (lastdigit * lastdigit * lastdigit);
//     temp = parseInt(temp / 10);
// }
// if (sum == number) {
//     console.log(number, " is a Armstrong Number");
// } else {
//     console.log(number, " is not a Armstrong Number");
// }

// ------- Solution no 7 Reverse Number checking------

// let rev = 0;
// let num = 123456;
// let lastDigit;

// while (num != 0) {
//     lastDigit = num % 10;
//     rev = rev * 10 + lastDigit;
//     num = Math.floor(num / 10);
// }


// console.log("Reverse number : " + rev);
// if (num == num)
//     console.log("Is equal to its reverse");
// else
//     console.log("Is not equal to its reverse");

// -------------solution 5 ---------------------

// let pro = 1;
// for (let i = 40; i <= 48; i++) {
//     let x = Math.floor(i / 10);
//     if (i % 2 == 0 && x % 10 == 4) {
//         pro = pro * i;

//     }
// }
// if (pro == 1)
//     console.log(0);
// else
//     console.log(pro);

// ------------------ solution 6 --------------------
let numb = 1821;
while (numb > 0) {
    let digits = numb % 10;
    if (digits % 2 == 0) {
        console.log(digits);
    }
    numb = Math.floor(numb / 10);
}