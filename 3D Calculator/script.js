const input = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');

let string = "";
const buttonActions = {
    '=': () => {
        string = eval(string);
        input.value = string;
    },
    'AC': () => {
        string = "";
        input.value = string;
    },
    'DE': () => {
        string = string.substring(0, string.length - 1);
        input.value = string;
    },
    '+': (e) => {
        string += e.target.innerHTML;
        input.value = string;
    },
    '-': (e) => {
        string += e.target.innerHTML;
        input.value = string;
    },
    'x': (e) => {
        string += '*';
        input.value = string;
    },
    '/': (e) => {
        string += '/';
        input.value = string;
    },
    'default': (e) => {
        string += e.target.innerHTML;
        input.value = string;
    }
};

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const action = buttonActions[e.target.innerHTML] || buttonActions['default'];
        action(e);
    });
});