    // Слайдер
let right_button = document.getElementById('right')
let left_button = document.getElementById('left')

function change_stream_right() {
    let center = document.querySelector('.stream-center')
    let left = document.querySelector('.stream-left')
    let left2 = document.querySelector('.stream-left2')
    let right = document.querySelector('.stream-right')
    let right2 = document.querySelector('.stream-right2')
    let none = document.querySelector('.stream-none')

    center.classList.toggle("stream-center")
    center.classList.toggle("stream-right")
    right.classList.toggle("stream-right")
    right.classList.toggle("stream-right2")
    right2.classList.toggle("stream-right2")
    right2.classList.toggle("stream-none")
    none.classList.toggle("stream-none")
    none.classList.toggle("stream-left2")
    left2.classList.toggle("stream-left2")
    left2.classList.toggle("stream-left")
    left.classList.toggle("stream-left")
    left.classList.toggle("stream-center")
}

function change_stream_left() {
    let center = document.querySelector('.stream-center')
    let left = document.querySelector('.stream-left')
    let left2 = document.querySelector('.stream-left2')
    let right = document.querySelector('.stream-right')
    let right2 = document.querySelector('.stream-right2')
    let none = document.querySelector('.stream-none')

    center.classList.toggle("stream-center")
    center.classList.toggle("stream-left")
    left.classList.toggle("stream-left")
    left.classList.toggle("stream-left2")
    left2.classList.toggle("stream-left2")
    left2.classList.toggle("stream-none")
    none.classList.toggle("stream-none")
    none.classList.toggle("stream-right2")
    right2.classList.toggle("stream-right2")
    right2.classList.toggle("stream-right")
    right.classList.toggle("stream-right")
    right.classList.toggle("stream-center")
}

left_button.addEventListener('click', change_stream_left)
right_button.addEventListener('click', change_stream_right)

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

// Переключение темы

var btn = document.getElementById("dark_white");
var link = document.getElementById("theme-link");

function ChangeTheme() {
    let lightTheme = "main-light.css";
    let darkTheme = "main.css";
    var img = document.querySelector('.darkicon')
    var arrow_left = document.querySelector('.left_img')
    var arrow_right = document.querySelector('.right_img')

    var currTheme = link.getAttribute("href");
    var theme = "";

    if (currTheme == lightTheme) {
        currTheme = darkTheme;
        theme = "dark";
        img.setAttribute("src", "/all_use_img/sun_moon_white.png");
        arrow_left.setAttribute("src", "/only_main_img/left_white.png");
        arrow_right.setAttribute("src", "/only_main_img/right_white.png");
    }
    else {
        currTheme = lightTheme;
        theme = "light";
        img.setAttribute("src", "/all_use_img/sun_moon_dark.png");
        arrow_left.setAttribute("src", "/only_main_img/left.png");
        arrow_right.setAttribute("src", "/only_main_img/right.png");
    }

    link.setAttribute("href", currTheme);

    Save(theme);
}

btn.addEventListener('click', ChangeTheme)

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