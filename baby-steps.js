let sum = 0;
let i=2;


for (i ; i < process.argv.length; i++) {
    sum += Number(process.argv[i]);
};

console.log(sum);

// console.log(process.argv);
