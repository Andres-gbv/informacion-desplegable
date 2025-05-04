const global = document.querySelectorAll(".global");

for(let i = 0; i < 4; i++){

    global[i].addEventListener('mousemove', function(){

        global[i].classList.add(`crecer${i+1}`)

    })
    global[i].addEventListener('mouseout', function(){

        global[i].classList.remove(`crecer${i+1}`)

    })
};