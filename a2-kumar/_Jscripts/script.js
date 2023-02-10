function ounce() {

    let number = document.getElementById('input_num').value;

    result = number * 29.574;

    document.getElementById('result').innerHTML = "Ounce to Milliliter : " + result.toFixed(2).fontcolor("green");

}

function milliliter() {

    let number = document.getElementById('input_num').value;

    result = number / 29.574;

    document.getElementById('result').innerHTML = "Milliliter to Ounce : " + result.toFixed(2).fontcolor("green");

}

function liter() {

    let number = document.getElementById('input_num').value;

    result = number * 1000;

    document.getElementById('result').innerHTML = "Liter to Milliliter : " + result.toFixed(2).fontcolor("green");

}

function b1() {

    let number = document.getElementById('input_num').value;

    result = number / 1000;

    document.getElementById('result').innerHTML = "Milliliter to Liter : " + result.toFixed(2).fontcolor("green");

}

function inches() {

    let number = document.getElementById('input_num').value;

    result = number / 0.39370;

    document.getElementById('result').innerHTML = "Inches to Centimeters : " + result.toFixed(2).fontcolor("green");

}

function centimeter() {

    let number = document.getElementById('input_num').value;

    result = number * 0.39370;

    document.getElementById('result').innerHTML = "Centimeters to Inches : " + result.toFixed(2).fontcolor("green");

}

function pounds() {

    let number = document.getElementById('input_num').value;

    result = number / 2.2046;

    document.getElementById('result').innerHTML = "Pounds to Kilograms : " + result.toFixed(2).fontcolor("green");

}

function kilograms() {

    let number = document.getElementById('input_num').value;

    result = number * 2.2046;

    document.getElementById('result').innerHTML = "Kilograms to Pounds : " + result.toFixed(2).fontcolor("green");

}

function clear_data() {

    document.getElementById('input_num').value = '';

    document.getElementById('result').innerHTML = '';

    document.getElementById('input_num').focus();

}