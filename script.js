const btn1 = document.querySelector('.show-modall');
const btn2 = document.querySelector('.show-modal2');
const btn3 = document.querySelector('.show-modal3');
const show = document.querySelector('.modal-hidden');
const icon = document.querySelector('.close-modal');
btn1.addEventListener('click',()=>{
    btn1.style.color = 'crimson';
    show.style.display = 'block';
    show.style.position = 'relative';
    show.style.left = "3%";
});
icon.addEventListener('click',()=>{
    btn1.style.color = 'black';
    btn2.style.color = 'black';
    btn3.style.color = 'black';
    show.style.display = 'none';
});
btn2.addEventListener('click',()=>{
    btn2.style.color = 'crimson';
    show.style.display = 'block';
    show.style.position = 'relative';
    show.style.left = "37%";
});
btn3.addEventListener('click',()=>{
    btn3.style.color = 'crimson';
    show.style.display = 'block';
    show.style.position = 'relative';
    show.style.left = "70%";
});

document.addEventListener('keydown',(e)=>{
    if(e.key === 'Escape'){
        show.style.display = 'none';
        btn1.style.color = 'black';
        btn2.style.color = 'black';
        btn3.style.color = 'black';
    }
})