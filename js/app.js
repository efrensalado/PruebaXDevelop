let span = document.getElementsByTagName('span');
let card = document.getElementsByClassName('card');
let menuList = document.getElementById('menu');

let card_page = Math.ceil(card.length/4);
let l = 0;
let movePer = 25.34;
let maxMove = 203;
menuList.style.maxHeight = "0px";
let mob_view = window.matchMedia("(max-width: 768px)");
if (mob_view.matches) {
	movePer = 50.36;
	maxMove = 504;
}

let right_mover = () => {
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

function toggleMenu() {
	if (menuList.style.maxHeight == "0px") {
		menuList.style.maxHeight = "130px"
	} else {
		menuList.style.maxHeight = "0px"
	}
}