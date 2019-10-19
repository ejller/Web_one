let validX, validY, validR = false;
let count_counter = 0;

function x_choosen(x) {
    let field = document.getElementById('X_field');
    if (field.value === x){
        field.value = "";
        document.getElementById("x" + x).classList.remove('sel');
        validX=false;
    } else{
        if (field.value !== ""){
            document.getElementById("x" + field.value).classList.remove('sel'); 
        }
        field.value = x;
        document.getElementById("x" + x).classList.add('sel');
        validX=true;
    }

    check_button();
}

function y_choosen() {
    const field = document.getElementById('Y_field');
    // field.value = field.value.replace( /[^0-9]/,"");
    const txt = field.value.match(/^[0-3]{1}[\,|\.]{1}\d{1,}$|^-[0-5]{1}[\,\.]\d{1,}$|^[0-3]$|^-[0-5]$/m);
    if (txt !== null && txt!=='-0') {
        validY=true;
        if (field.classList.contains("invalid")){
            field.classList.remove("invalid");
        }
    } else{
        validY=false;
        field.classList.add("invalid");
    }

    check_button();
}

function r_choosen() {
    let field = document.getElementById('R_field');

    let txt = field.value.match (/^[2-4]{1}[\,|\.]{1}\d{1,}$|^[2-5]$/m);
    if (txt !== null) {
        validR=true;
        if (field.classList.contains("invalid")){
            field.classList.remove("invalid");
        }
    } else{
        validR=false;
        field.classList.add("invalid");
    }

    check_button();
}

function check_button(){
    if (validX && validY && validR) {
        document.getElementById('check').disabled=false;
        let field = document.getElementById('ph');
        document.getElementById('check').style.opacity="1";
        field.style.display ="none";
    } else {
        document.getElementById('check').disabled=true;
        document.getElementById('check').style.opacity="0.3";
        document.getElementById('ph').style.display="block";
    }
}

function count_up() {
    if (!document.getElementById('check').disabled) {
        setCookie('count_counter', get_count_counter() + 1);
    }

    check_count();
}

function count_reset() {
    setCookie('count_counter', 0);
    check_count();
}

function check_count() {
    if (get_count_counter()>3) {
        document.getElementById('myModal').style.display = "block";
    } else {
        document.getElementById('myModal').style.display = "none";
    }
}

function get_count_counter() {
    const ret = parseInt(getCookie('count_counter'));

    if (!isNaN(ret)) {
        return ret;
    }

    return 0;
}

/// Cookies

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {

  options = {
    path: '/',
    // при необходимости добавьте другие значения по умолчанию
    ...options
};

if (options.expires && options.expires.toUTCString) {
    options.expires = options.expires.toUTCString();
}

let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
  }
}

document.cookie = updatedCookie;
}


