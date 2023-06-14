const buttons = document.querySelectorAll('.btn')
const dbody = document.querySelector('body')

buttons.forEach(function (btn) {
    btn.addEventListener('click', (e) => {
        if (e.target.id == 'green') {
            dbody.style.backgroundColor = e.target.id;
        }
        if (e.target.id == 'orange') {
            dbody.style.backgroundColor = e.target.id;
        }
        if (e.target.id == 'yellow') {
            dbody.style.backgroundColor = e.target.id;
        }
        if (e.target.id == 'blue') {
            dbody.style.backgroundColor = e.target.id;
        }
        if (e.target.id == 'red') {
            dbody.style.backgroundColor = e.target.id;
        }
    })
})