const slider = document.querySelector('.price-slider');
const pageviews = document.querySelector('.pageviews');
const price = document.querySelector('.price');
const yearly = document.querySelector('input[type=checkbox]');

yearly.oninput = () =>{
    switch(slider.value){
        case '0':
            pageviews.textContent = '10k';
            if(!yearly.checked){
                const priceNow = 8; 
                price.innerText = priceNow.toString() + '.00';
            }else{
                const priceNow = 8*(0.75);
                price.innerText = priceNow.toString() + '.00';
            }
            break;
        case '1':
            pageviews.innerText = '50k';
            if(!yearly.checked){
                const priceNow = 12; 
                price.innerText = priceNow.toString() + '.00';
            }else{
                const priceNow = 12*(0.75);
                price.innerText = priceNow.toString() + '.00';
            }
            break;
        case '2':
            pageviews.innerText = '100k';
            if(!yearly.checked){
                const priceNow = 16; 
                price.innerText = priceNow.toString() + '.00';
            }else{
                const priceNow = 16*(0.75);
                price.innerText = priceNow.toString() + '.00';
            }
            break;    
        case '3':
            pageviews.innerText = '500k';
            if(!yearly.checked){
                const priceNow = 24; 
                price.innerText = priceNow.toString() + '.00';
            }else{
                const priceNow = 24*(0.75);
                price.innerText = priceNow.toString() + '.00';
            }
            break;
        case '4':
            pageviews.innerText = '1M';
            if(!yearly.checked){
                const priceNow = 36; 
                price.innerText = priceNow.toString() + '.00';
            }else{
                const priceNow = 36*(0.75);
                price.innerText = priceNow.toString() + '.00';
            }
            break;
    }
}


slider.oninput = () =>{
    const max = slider.max;
    let x = slider.value/max *100;
    let color = `linear-gradient(90deg,hsl(174, 77%, 80%) ${x}%,hsl(224, 65%, 95%) ${x}%`;
    slider.style.background = color;
    switch(slider.value){
        case '0':
            pageviews.textContent = '10k';
            if(!yearly.checked){
                const priceNow = 8; 
                price.innerText = priceNow.toString() + '.00';
            }else{
                const priceNow = 8*(0.75);
                price.innerText = priceNow.toString() + '.00';
            }
            break;
        case '1':
            pageviews.innerText = '50k';
            if(!yearly.checked){
                const priceNow = 12; 
                price.innerText = priceNow.toString() + '.00';
            }else{
                const priceNow = 12*(0.75);
                price.innerText = priceNow.toString() + '.00';
            }
            break;
        case '2':
            pageviews.innerText = '100k';
            if(!yearly.checked){
                const priceNow = 16; 
                price.innerText = priceNow.toString() + '.00';
            }else{
                const priceNow = 16*(0.75);
                price.innerText = priceNow.toString() + '.00';
            }
            break;    
        case '3':
            pageviews.innerText = '500k';
            if(!yearly.checked){
                const priceNow = 24; 
                price.innerText = priceNow.toString() + '.00';
            }else{
                const priceNow = 24*(0.75);
                price.innerText = priceNow.toString() + '.00';
            }
            break;
        case '4':
            pageviews.innerText = '1M';
            if(!yearly.checked){
                const priceNow = 36; 
                price.innerText = priceNow.toString() + '.00';
            }else{
                const priceNow = 36*(0.75);
                price.innerText = priceNow.toString() + '.00';
            }
            break;
    }
}

