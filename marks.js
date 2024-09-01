
let percentage = prompt('Enter your percentage');

if (percentage <= 39){
    console.log('sorry you are Failed in Exam')
}

else if (percentage < 50){
    console.log('D grade satifactory performance')
}

else if (percentage < 60){
    console.log('C Grade satifactory performance')
}
else if (percentage < 70){
    console.log('B Grade need to perform well')
}
else if (percentage < 80){
    console.log('A Grade congratulation')
}
else if (percentage < 90){
    console.log('A1 Grade congratulation')
}
else if (percentage < 100){
    console.log('A+ Grade congratulation')
}

else{
    console.log('Enter valid value')
}