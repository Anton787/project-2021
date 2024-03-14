// Чат открыт

var arrow = document.querySelector('.arrow-open')
var stream = document.querySelector('.stream')
var chat = document.querySelector('.chat')
var text_expand = document.querySelector('.expand')
var tracking = document.querySelector('.tracking')

function chat_open(){
    stream.style.width = '1394px';
    text_expand.innerHTML = 'Свернуть'
    text_expand.style.top = '85px'
    text_expand.style.right = '415px'
    chat.style.display = 'block';
    arrow.style.display = 'none';
    tracking.style.right = '400px';
}

arrow.addEventListener('click', chat_open)

// Чат закрыт 

var arrow_closed = document.querySelector('.arrow-close')

function chat_close(){
    stream.style.width = '100%';
    text_expand.innerHTML = 'Развернуть'
    text_expand.style.top = '135px'
    text_expand.style.right = '55px'
    chat.style.display = 'none';
    arrow.style.display = 'flex';
    tracking.style.right = '0px';
}

arrow_closed.addEventListener('click', chat_close)

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