var button_user = document.querySelector('.button-user'),
    button_calendar = document.querySelector('.button-calendar'),
    form_user = document.querySelector('.in-out'),
    cancel = document.querySelectorAll('.icon-cancel'),

    form_calendar = document.querySelector('.booking-form');
console.log(cancel);
button_user.addEventListener('click', function() {
    form_user.classList.toggle('show-form');
    form_user.classList.remove('hidden-x');
})
button_calendar.addEventListener('click', function() {
    form_calendar.classList.toggle('show-form');
    form_calendar.classList.remove('hidden-x');
})


for (let c = 0; c < cancel.length; c++) {
    cancel[c].addEventListener('click', function() {
        form_calendar.classList.toggle('hidden-x');
        form_calendar.classList.remove('show-form');
        form_user.classList.toggle('hidden-x');
        form_user.classList.remove('show-form');
    });

}
// cancel.addEventListener('click', function() {
//     form_calendar.classList.toggle('hidden-x');
//     form_calendar.classList.remove('show-form');
// })
// cancel.addEventListener('click', function() {
//     form_user.classList.toggle('hidden-x');
//     form_user.classList.remove('show-form');
// })