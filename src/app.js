// File: app.js
// Author: Tóth Fedor László
// Copyright: 2023, Tóth Fedor László
// Date: 2023.06.06
// Web: https://github.com/TothFL/

const doc = {
    LenghtInput: document.querySelector('#Lenght'),
    HeightInput: document.querySelector('#Height'),
    WidthInput: document.querySelector('#Width'),
    VolumeInput: document.querySelector('#Volume'),
    calcButton: document.querySelector('#calcButton')
};

const state = {
    Volume: 0
};

window.addEventListener('load', () => {
    init();
});

function init() {
    if(doc.calcButton) {
        doc.calcButton.addEventListener('click', () => {
            startCalc();
            console.log("Működik");
        });
    }
    checkInput(Lenght);
}

function startCalc() {
    let Lenght = doc.LenghtInput.value;
    let Height = doc.HeightInput.value;
    let Width = doc.WidthInput.value;
    state.Volume = calcBodyVolume(Lenght, Height, Width);
    doc.VolumeInput.value = state.Volume;
}

function calcBodyVolume(Lenght, Height, Width) {
    return (Lenght*(Height-10)*Width)/1000000;
}

function checkInput(input) {
    let inputStr = String(input);
    let inputNum = Number(input);
    if(inputStr.match(/^[0-9.]+$/)){
        if(inputNum > 0) {
            console.log("true");
            return true;
        }else {
            console.log("false");
            return false;
        }        
    }else{
        
        console.log("false");
        return false;
    }    
}