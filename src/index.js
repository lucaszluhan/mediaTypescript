"use strict";
function calcularMedia(numb1, numb2, numb3) {
    var media = (numb1 + numb2 + numb3) / 3;
    if (media >= 6) {
        console.log('Aprovado!');
    }
    else
        console.log('Reprovado!');
    return media;
}
calcularMedia(1, 9, 6);
