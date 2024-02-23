"use strict";

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const OpenModal= function(){
    console.log('Button clicked');
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden');
}; 

const CloseModal =function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}


for(let i = 0; i < btnOpenModal.length; i++) 
btnOpenModal[i].addEventListener('click',OpenModal);

//btn close modal
btnCloseModal.addEventListener('click',CloseModal);
//overlay close modal
overlay.addEventListener('click',CloseModal);




