const outputHtml1 = document.getElementById('array_1');
const outputHtml2 = document.getElementById('array_2');
const outputHtml3 = document.getElementById('array_3');
let arr_length = 0;
let time = 0;
const array = [];

//Отримання та перевірка коректності введеної користувачем довжини масиву
while (true) {
    arr_length = Number(prompt('Введіть довжину масиву: '));

    if(correctnessCheck(arr_length, 'array length', time))
        break;

    if(time === 4 && !correctnessCheck(arr_length, 'array length', time))
        break;

    time++;
}

//Отримання та перевірка коректності елементів масиву
if(correctnessCheck(arr_length, 'array length', time)) {
    for (let index = 0; index < arr_length; index++) {
        time = 0;
        array.push();

        while (true) {
            array[index] = Number(prompt(`Введіть число для масиву: `));

            if (correctnessCheck(array[index], 'array', time))
                break;

            if (time === 4 && !correctnessCheck(array[index], 'array', time))
                break;

            time++;
        }

        if(!(correctnessCheck(array[index], 'array', time)) && time === 4)
            break;
    }
}

//Виведення масивів
if(!isNaN(arr_length) && array.every((value) => {return !isNaN(value)})) {
    outputHtml1.innerText = `Масив: ${writingArray(array)}`;

    let count = 0;
    array.sort((firstNumber, secondNumber) => {
        count++;
        return firstNumber - secondNumber;
    });
    outputHtml2.innerText = `Відсортований за зростанням масив: ${writingArray(array)}`;

    if(array.length < 5) {
        outputHtml3.innerText = 'Довжина масиву менша 5, тому не можливо видалити елементи від 2 до 4.';
    } else {
        array.splice(2, 3);
        outputHtml3.innerText = `Масив після видалення з 2 по 4 елементи включно: ${writingArray(array)}`;
    }
}



/**
 *
 * @param arr_lengthOrIndex    {number}     Довжина масиву або елемент масиву
 * @param arrayOrArrayLength    {string}    Вибір перевірки довжини масиву або перевірки елементу масива
 * @param time  {number}                    Перевірка кількості помилок користувача
 * @returns {boolean}
 */
function correctnessCheck (arr_lengthOrIndex, arrayOrArrayLength, time) {  //Перевірка введених даних
    if(arrayOrArrayLength === 'array length') {
        if ((isNaN(arr_lengthOrIndex) || arr_lengthOrIndex <= 0) && time === 4) {
            outputHtml1.innerText = 'Ви ввели не коректну довжину масиву.';
            return false;
        } else if((!isNaN(arr_lengthOrIndex) && arr_lengthOrIndex > 0))
            return true;
    }

    if(arrayOrArrayLength === 'array') {
        if (isNaN(arr_lengthOrIndex) && time === 4) {
            outputHtml1.innerText = 'Ви ввели не коректний елемент масиву.';
            return false;
        } else if(!isNaN(arr_lengthOrIndex) && time <= 4)
            return true;
    }
}

function writingArray(array) {
    let str = '';

    array.forEach((item, index) => {
        if((index + 1) === array.length)
            str += `${item};`;
        else
            str += `${item}, `;
    });
    return str;
}