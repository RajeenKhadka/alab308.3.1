console.log("================================================");
console.log("#Part1: Fizz Buzz");

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizz buzz");
    } else if (i % 3 === 0) {
        console.log("fizz");

    } else if (i % 5 === 0) {
        console.log("buzz");

    } else {
        console.log(i);
    }
}

console.log("================================================");
console.log("#Part2: Prime Number");

let isPrime = false;
let number = 5;

while (!isPrime) {
    number++;

    if (number == 2) {
        console.log(number + "is Prime Number");
        isPrime = true;
    }
    else {

        if (number > 1) {
            for (let i = 2; i <= number - 1; i++) {
                if (number % i == 0) {
                    isPrime = false;
                    break;
                }
                else {
                    isPrime = true;
                }
            }
        }
        if (isPrime) {
            console.log(number);
        }
    }
}

console.log("================================================");
console.log("#Part3: ");

let title = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

let splitRows = title.split("\n");
console.log(splitRows);

for (let element of splitRows){
    let cell = element.split(",");
    console.log(cell[0],cell[1],cell[2],cell[3]);
}



