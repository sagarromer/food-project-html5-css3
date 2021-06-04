const icons = document.querySelectorAll('.section-1-icons i');
let i = 0;
setInterval(()=>{
    i++;
    const icon = document.querySelector('.section-1-icons .change');
    icon.classList.remove('change');
    if(i === icons.length){
        icons.item(0).classList.add('change');
        i = 0;
    }else{
        icon.nextElementSibling.classList.add('change');
    }
},1000);