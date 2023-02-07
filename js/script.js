/* Menú */
function openMenu(){
	document.getElementById('menu-options').classList.remove("hidden");
}
function closeMenu(){
	document.getElementById('menu-options').classList.add("hidden");
}

function newCard(){
	// window.location.reload();
	createCard();
	cleanCard();
	closeMenu();
}

function cleanCard(){
	const boxes = document.querySelectorAll('.casilla');
	// console.log(boxes);

	boxes.forEach(box => {
		box.classList.remove("bg-red-200", "gotit");
	});

	document.getElementById('n3').classList.add("gotit");

	try {
		document.querySelector('#bingoConfetti').classList.add('hidden');
	} catch(e) {
		console.log(e);
	}
	
	closeMenu();
}

/* Marcado de cuadros */
function gotIt(casilla){
	colorStatus = document.getElementById(casilla).classList.contains("bg-red-200");
	
	if (colorStatus) {
		if (casilla != 'n3') {
			document.getElementById(casilla).classList.remove("gotit");
		}
		document.getElementById(casilla).classList.remove("bg-red-200");
	}else{
		if (casilla != 'n3') {
			document.getElementById(casilla).classList.add("gotit");
		}
		document.getElementById(casilla).classList.add("bg-red-200");
	}

	checkBingoStatus();
}

/* Generación de cartilla aleatoria */
function createCard(){
	// Columna B
	let randomB = [];

	while (randomB.length < 5) {
		let randomNumber = Math.floor(Math.random() * 15) + 1;

		if (!randomB.includes(randomNumber)) {
			randomB.push(randomNumber);
		}
	}
	// console.log(randomB);
	for (var i = 1; i <= randomB.length; i++) {
		document.getElementById('b'+i).innerHTML = randomB[i-1];
	}		

	// Columna I
	let randomI = [];

	while (randomI.length < 5) {
		let randomNumber = Math.floor(Math.random() * 15) + 16;

		if (!randomI.includes(randomNumber)) {
			randomI.push(randomNumber);
		}
	}
	// console.log(randomI);
	for (var i = 1; i <= randomI.length; i++) {
		document.getElementById('i'+i).innerHTML = randomI[i-1];
	}

	// Columna N
	let randomN = [];

	while (randomN.length < 5) {
		let randomNumber = Math.floor(Math.random() * 15) + 31;

		if (!randomN.includes(randomNumber)) {
			randomN.push(randomNumber);
		}
	}
	// console.log(randomN);
	for (var i = 1; i <= randomN.length; i++) {
		if (i != 3) { // cuadro central bonus
			document.getElementById('n'+i).innerHTML = randomN[i-1];
		}
	}

	// Columna G
	let randomG = [];

	while (randomG.length < 5) {
		let randomNumber = Math.floor(Math.random() * 15) + 46;

		if (!randomG.includes(randomNumber)) {
			randomG.push(randomNumber);
		}
	}
	// console.log(randomG);
	for (var i = 1; i <= randomG.length; i++) {
		document.getElementById('g'+i).innerHTML = randomG[i-1];
	}

	// Columna O
	let randomO = [];

	while (randomO.length < 5) {
		let randomNumber = Math.floor(Math.random() * 15) + 61;

		if (!randomO.includes(randomNumber)) {
			randomO.push(randomNumber);
		}
	}
	// console.log(randomO);
	for (var i = 1; i <= randomO.length; i++) {
		document.getElementById('o'+i).innerHTML = randomO[i-1];
	}
}
createCard();


/* Alerta al refrescar */
window.onbeforeunload = function(event)
{
    return confirm("Confirm refresh");
};


/* Sweet alert */
function confirmClean(){
	Swal.fire({
		title: '¿Estás segura?',
		text: "Todas tus casillas marcadas se limpiarán",
		icon: 'info',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Sí, limpiar'
		}).then((result) => {
		if (result.isConfirmed) {
			cleanCard();
		}else{
			closeMenu();
		}
	});
}

function confirmNew(){
	Swal.fire({
		title: '¿Estás segura?',
		text: "Se generará una nueva cartilla",
		icon: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Sí, nueva cartilla'
		}).then((result) => {
		if (result.isConfirmed) {
			newCard();
		}else{
			closeMenu();
		}
	});
}

/* BINGO! */
function checkBingoStatus(){
	if (document.querySelectorAll('.gotit').length >= 25) {
		try {
			document.querySelector('#bingoConfetti').classList.remove('hidden');
		} catch(e) {
			console.log(e);
			bingo();
		}
	}
	else{
		try {
			document.querySelector('#bingoConfetti').classList.add('hidden');
		} catch(e) {
			console.log(e);
		}
	}
}