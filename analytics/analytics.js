// Регистрация 
let vhod = document.querySelector(".exit")
let registrat = document.querySelector(".registration")
let background = document.querySelector(".dark-background")
let exit = document.querySelector(".close")
let login = document.querySelector('.vhojy')
let text_vhod = document.querySelector('.vhojy-word')
let registr = document.querySelector('.registr')
let text_registr = document.querySelector('.registr-word')

function regist() {
    registrat.style.display = 'block';
    background.style.display = 'block';
    exit.style.display = 'block';
    login.classList.toggle('vhojy-purple');
    text_vhod.classList.toggle('vhod-word-purple');
}

vhod.addEventListener('click', regist)

function close() {
    registrat.style.display = 'none';
    background.style.display = 'none';
    exit.style.display = 'none'
}

exit.addEventListener('click', close)

// Смена на регистрацию

let place_registr = document.querySelector(".place-registration")
let place_login = document.querySelector(".place-login")

function change_registr() {
    login.classList.toggle('vhojy-purple');
    text_vhod.classList.toggle('vhod-word-purple');
    registr.classList.toggle('registr-purple');
    text_registr.classList.toggle('registr-word-purple');
    place_login.style.display = 'none';
    place_registr.style.display = 'flex';
    registrat.style.height = '630px';
    registrat.style.top = '45%';
    exit.style.top = '23vh'
}

registr.addEventListener('click', change_registr)

// Смена на вход

function change_login() {
    login.classList.toggle('vhojy-purple');
    text_vhod.classList.toggle('vhod-word-purple');
    registr.classList.toggle('registr-purple');
    text_registr.classList.toggle('registr-word-purple');
    place_login.style.display = 'flex';
    place_registr.style.display = 'none';
    registrat.style.height = '370px';
    registrat.style.top = '50%';
    exit.style.top = '28vh'
}

login.addEventListener('click', change_login)

// Смена авы после успешного входа
let come_in = document.querySelector('.login')
let profile_img = document.querySelector('.profile-img')
function change_profile() {
    registrat.style.display = 'none';
    exit.style.display = 'none';
    background.style.display = 'none';
    profile_img.src = '/Profile/ava.jpg'
}

come_in.addEventListener('click', change_profile)

// Открытие настройки аналитика
let profile = document.querySelector('.profile')
let choice = document.querySelector('.setting-analytic')

function setting_analytic() {
    choice.style.display = 'flex';
}

profile.addEventListener('click', setting_analytic)

// Закрытие

document.onclick = function (event) {
    if (event.target.className == 'choice') {
        choice.classList.toggle("none-setting-analytic");
    };
};

// Открытие стат

var viewers = document.querySelector('.stat-viewers')
var visiting = document.querySelector('.stat-visiting')
var new_sub = document.querySelector('.stat-new-sub')
var message = document.querySelector('.stat-message')
var watched = document.querySelector('.stat-watched')

var viewers_button = document.querySelector('.viewers')
var visiting_button = document.querySelector('.visiting')
var new_sub_button = document.querySelector('.new-sub')
var message_button = document.querySelector('.messages')
var watched_button = document.querySelector('.time-watched')

function open_viewers() {
    viewers.style.display = 'flex';
    visiting.style.display = 'none';
    new_sub.style.display = 'none';
    message.style.display = 'none';
    watched.style.display = 'none';
}

viewers_button.addEventListener('click', open_viewers)


function open_visiting() {
    viewers.style.display = 'none';
    visiting.style.display = 'flex';
    new_sub.style.display = 'none';
    message.style.display = 'none';
    watched.style.display = 'none';
}

visiting_button.addEventListener('click', open_visiting)


function open_new_sub() {
    viewers.style.display = 'none';
    visiting.style.display = 'none';
    new_sub.style.display = 'flex';
    message.style.display = 'none';
    watched.style.display = 'none';
}

new_sub_button.addEventListener('click', open_new_sub)


function open_message() {
    viewers.style.display = 'none';
    visiting.style.display = 'none';
    new_sub.style.display = 'none';
    message.style.display = 'flex';
    watched.style.display = 'none';
}

message_button.addEventListener('click', open_message)


function open_watched() {
    viewers.style.display = 'none';
    visiting.style.display = 'none';
    new_sub.style.display = 'none';
    message.style.display = 'none';
    watched.style.display = 'flex';
}

watched_button.addEventListener('click', open_watched)

// Показание идёт статискика вверх или вниз

// var result = document.getElementsByClassName('.result')
// var middle_vievers = document.querySelector('.viewers-number')
// var 

// function show_result(){
//     if (result.innerHTML<middle_viewers.innerHTML){

//     }
// }