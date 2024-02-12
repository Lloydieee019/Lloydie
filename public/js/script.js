const answers = [
    "Sigurado ka? :(",
    "talaga? :(??",
    "wiiiiihhhhhh??",
    "Think again?",
    "Pleaseeeeeeeee?",
    "Loveyyyy Pleeeaaaaaase?",
    "Maybe we can talk about it?",
    "I am not going to ask again!",
    "awtsssss:(!",
    "Bakit mo saken ginagawa to? T.T",
    "Please give me a chance!",
    "I am begging you to stop!",
    "ULEEEEET!!!!.."
]

const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
let i = 0;
let size = 50;
let clicks = 0;

no_button.addEventListener('click', () => {
    // Change banner source
    let banner = document.getElementById('banner');
    if (clicks === 0) {
        banner.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzZoNjVnZml3c21zY2E2cDJhMXV4ZnhpZzJhMG04YndpYnR4aWp1eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yslgoNdzKnvRC/giphy.gif";
        refreshBanner();
    }
    clicks++;
    // increase button height and width gradually to 250px
    const sizes = [40, 50, 30, 35, 45]
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random]
    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;
    let total = answers.length;
    // change button text
    if (i < total - 1) {
        no_button.innerHTML = answers[i];
        i++;
    } else if (i === total - 1) {
        alert(answers[i]);
        i = 0;
        no_button.innerHTML = "No";
        yes_button.style.height = "50px";
        yes_button.style.width = "50px";
        size = 50;
    }

});

yes_button.addEventListener('click', () => {
    // change banner gif path
    let banner = document.getElementById('banner');
    banner.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcm9ieGEyZ3o2NW4yM3dpemUxN3J1N3c5YmRpamhpaGVlZXlhMHNqNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cPU5f4zuT8HrKUmdRE/giphy.gif";
    refreshBanner();
    // hide title div
    let title = document.getElementsByClassName('title')[0];
    title.style.display = "none";
    // hide buttons div
    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";
    // show message div
    let message = document.getElementsByClassName('message')[0];
    message.style.display = "block";
});

function refreshBanner() {
    // Reload banner gif to force load  
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}