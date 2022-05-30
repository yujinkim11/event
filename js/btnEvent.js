(function(){
    const boxEl = document.querySelector('.con');
    const btn1 = document.querySelector('.add_color');
    const btn2 = document.querySelector('.remove_color');

    // boxEl.addEventListener('click', function(){
    //     boxEl.classList.add('on')
    // })

    // btn1.addEventListener('click', () => boxEl.classList.add('on'));
    // btn2.addEventListener('click', () => boxEl.classList.remove('on'));
    // > 내가 푼 답


    const handleAdd = () => {
        boxEl.classList.add('on');
    }

    const handleRemove = () => {
        boxEl.classList.remove('on');
    }

    btn1.addEventListener('click', handleAdd)
    btn2.addEventListener('click', handleRemove)
    // > 풀이     

    
})();