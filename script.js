'use strict';

const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

function processFormData(e) {
  e.preventDefault();
}

form.addEventListene('submit', processFormData);
