let span = document.getElementsByTagName('span');
	let card = document.getElementsByClassName('card')
	let card_page = Math.ceil(card.length/4);
    console.log(card.length);
	let l = 0;
	let movePer = 25.34;
	let maxMove = 203;
	// mobile_view	
	let mob_view = window.matchMedia("(max-width: 768px)");
	if (mob_view.matches) {
        console.log("test");
        movePer = 50.36;
        maxMove = 504;
	}

	let right_mover = () => {
        console.log("sdvnsdjk");
		l = l + movePer;
		if (card == 1){ 
            l = 0;
        }
		for(const i of card) {
			if (l > maxMove) {
                l = l - movePer;
            }
			i.style.left = '-' + l + '%';
            console.log(i.style.left);
		}

	}
	let left_mover = () => {
        console.log("test3");
		l = l - movePer;
		if (l<=0) {
            l = 0;
        }
		for(const i of card){
			if (card_page>1){
				i.style.left = '-' + l + '%';
			}
		}
	}
	span[1].onclick = () => { 
        right_mover();
    }
	
	span[0].onclick = () => { 
        left_mover();
    }