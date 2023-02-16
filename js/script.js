/* Menú */
function openMenu() {
    document.getElementById('menu-options').classList.remove("hidden");
    
    // esconder temporalmente la pantalla #2
    document.querySelector('#screen2').classList.add('hidden');
    document.querySelector('#container').style.width = "100%";
    document.querySelector('#screen1').style.width = "100%";
}

function closeMenu() {
    document.getElementById('menu-options').classList.add("hidden");
}

function newCard() {
    // window.location.reload();
    createCard();
    cleanCard();
    closeMenu();
}

function cleanCard() {
    const boxes = document.querySelectorAll('.casilla');
    // console.log(boxes);

    boxes.forEach(box => {
        box.classList.remove("bg-red-300", "gotit1");
    });

    boxes.forEach(box => {
        box.classList.remove("bg-blue-300", "gotit2");
    });

    document.getElementById('s1-n3').classList.add("gotit1");
    document.getElementById('s2-n3').classList.add("gotit2");

    try {
        document.querySelector('#bingoConfetti').classList.add('hidden');
    } catch (e) {
        console.log(e);
    }

    closeMenu();
}

/* Marcado de cuadros */
function gotIt1(casilla) {
    colorStatus = document.getElementById(casilla).classList.contains("bg-red-300");

    if (colorStatus) {
        if (casilla != 's1-n3') {
            document.getElementById(casilla).classList.remove("gotit1");
        }
        document.getElementById(casilla).classList.remove("bg-red-300");
    } else {
        if (casilla != 's1-n3') {
            document.getElementById(casilla).classList.add("gotit1");
        }
        document.getElementById(casilla).classList.add("bg-red-300");
    }

    checkBingoStatus1();
}

function gotIt2(casilla) {
    colorStatus = document.getElementById(casilla).classList.contains("bg-blue-300");

    if (colorStatus) {
        if (casilla != 's2-n3') {
            document.getElementById(casilla).classList.remove("gotit2");
        }
        document.getElementById(casilla).classList.remove("bg-blue-300");
    } else {
        if (casilla != 's2-n3') {
            document.getElementById(casilla).classList.add("gotit2");
        }
        document.getElementById(casilla).classList.add("bg-blue-300");
    }

    checkBingoStatus2();
}

/* Generación de cartilla aleatoria */
function createCard() {
    // Columna B
    let randomB1 = [];

    while (randomB1.length < 5) {
        let randomNumber = Math.floor(Math.random() * 15) + 1;

        if (!randomB1.includes(randomNumber)) {
            randomB1.push(randomNumber);
        }
    }
    // console.log(randomB1);
    for (var i = 1; i <= randomB1.length; i++) {
        document.getElementById('s1-b' + i).innerHTML = randomB1[i - 1];
    }

    let randomB2 = [];

    while (randomB2.length < 5) {
        let randomNumber = Math.floor(Math.random() * 15) + 1;

        if (!randomB2.includes(randomNumber)) {
            randomB2.push(randomNumber);
        }
    }
    // console.log(randomB2);
    for (var i = 1; i <= randomB2.length; i++) {
        document.getElementById('s2-b' + i).innerHTML = randomB2[i - 1];
    }

    // Columna I
    let randomI1 = [];

    while (randomI1.length < 5) {
        let randomNumber = Math.floor(Math.random() * 15) + 16;

        if (!randomI1.includes(randomNumber)) {
            randomI1.push(randomNumber);
        }
    }
    // console.log(randomI1);
    for (var i = 1; i <= randomI1.length; i++) {
        document.getElementById('s1-i' + i).innerHTML = randomI1[i - 1];
    }

    let randomI2 = [];

    while (randomI2.length < 5) {
        let randomNumber = Math.floor(Math.random() * 15) + 16;

        if (!randomI2.includes(randomNumber)) {
            randomI2.push(randomNumber);
        }
    }
    // console.log(randomI2);
    for (var i = 1; i <= randomI2.length; i++) {
        document.getElementById('s2-i' + i).innerHTML = randomI2[i - 1];
    }

    // Columna N
    let randomN1 = [];

    while (randomN1.length < 5) {
        let randomNumber = Math.floor(Math.random() * 15) + 31;

        if (!randomN1.includes(randomNumber)) {
            randomN1.push(randomNumber);
        }
    }
    // console.log(randomN1);
    for (var i = 1; i <= randomN1.length; i++) {
        if (i != 3) { // cuadro central bonus
            document.getElementById('s1-n' + i).innerHTML = randomN1[i - 1];
        }
    }

    let randomN2 = [];

    while (randomN2.length < 5) {
        let randomNumber = Math.floor(Math.random() * 15) + 31;

        if (!randomN2.includes(randomNumber)) {
            randomN2.push(randomNumber);
        }
    }
    // console.log(randomN2);
    for (var i = 1; i <= randomN2.length; i++) {
        if (i != 3) { // cuadro central bonus
            document.getElementById('s2-n' + i).innerHTML = randomN2[i - 1];
        }
    }

    // Columna G
    let randomG1 = [];

    while (randomG1.length < 5) {
        let randomNumber = Math.floor(Math.random() * 15) + 46;

        if (!randomG1.includes(randomNumber)) {
            randomG1.push(randomNumber);
        }
    }
    // console.log(randomG1);
    for (var i = 1; i <= randomG1.length; i++) {
        document.getElementById('s1-g' + i).innerHTML = randomG1[i - 1];
    }

    let randomG2 = [];

    while (randomG2.length < 5) {
        let randomNumber = Math.floor(Math.random() * 15) + 46;

        if (!randomG2.includes(randomNumber)) {
            randomG2.push(randomNumber);
        }
    }
    // console.log(randomG2);
    for (var i = 1; i <= randomG2.length; i++) {
        document.getElementById('s2-g' + i).innerHTML = randomG2[i - 1];
    }

    // Columna O
    let randomO1 = [];

    while (randomO1.length < 5) {
        let randomNumber = Math.floor(Math.random() * 15) + 61;

        if (!randomO1.includes(randomNumber)) {
            randomO1.push(randomNumber);
        }
    }
    // console.log(randomO1);
    for (var i = 1; i <= randomO1.length; i++) {
        document.getElementById('s1-o' + i).innerHTML = randomO1[i - 1];
    }

    let randomO2 = [];

    while (randomO2.length < 5) {
        let randomNumber = Math.floor(Math.random() * 15) + 61;

        if (!randomO2.includes(randomNumber)) {
            randomO2.push(randomNumber);
        }
    }
    // console.log(randomO2);
    for (var i = 1; i <= randomO2.length; i++) {
        document.getElementById('s2-o' + i).innerHTML = randomO2[i - 1];
    }
}
createCard();


/* Alerta al refrescar */
window.onbeforeunload = function(event) {
    return confirm("Confirm refresh");
};


/* Sweet alert */
function confirmClean() {
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
        } else {
            closeMenu();
        }
    });
}

function confirmNew() {
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
        } else {
            closeMenu();
        }
    });
}

/* BINGO! */
function checkBingoStatus1() {
    if (document.querySelectorAll('.gotit1').length >= 25) {
        try {
            document.querySelector('#bingoConfetti').classList.remove('hidden');
        } catch (e) {
            console.log(e);
            bingo();
        }
    } else {
        try {
            document.querySelector('#bingoConfetti').classList.add('hidden');
        } catch (e) {
            console.log(e);
        }
    }
}

function checkBingoStatus2() {
    if (document.querySelectorAll('.gotit2').length >= 25) {
        try {
            document.querySelector('#bingoConfetti').classList.remove('hidden');
        } catch (e) {
            console.log(e);
            bingo();
        }
    } else {
        try {
            document.querySelector('#bingoConfetti').classList.add('hidden');
        } catch (e) {
            console.log(e);
        }
    }
}

/* Jugar 1 o 2 cartillas */
function play1card() {
    document.querySelector('#screen2').classList.add('hidden');
    document.querySelector('#container').style.width = "100%";
    document.querySelector('#screen1').style.width = "100%";
    closeMenu();
}
function play2cards() {
    document.querySelector('#screen2').classList.remove('hidden');
    document.querySelector('#container').style.width = "200%";
    document.querySelector('#screen1').style.width = "50%";
    closeMenu();
}

/* Pantalla slide */
/*const container = document.querySelector("#container");
const screen1 = document.querySelector("#screen1");
const screen2 = document.querySelector("#screen2");

let startX = null;

container.addEventListener("touchstart", (event) => {
    startX = event.touches[0].clientX;
});

container.addEventListener("touchmove", (event) => {
    if (startX === null) {
        return;
    }

    const currentX = event.touches[0].clientX;
    const diffX = startX - currentX;

    if (diffX > 0) {
        // Swiped left, move to screen 2
        container.style.transform = "translateX(-50%)";
    } else if (diffX < 0) {
        // Swiped right, move to screen 1
        container.style.transform = "translateX(0%)";
    }

    startX = null;
});

screen1.addEventListener("touchstart", (event) => {
    event.stopPropagation();
});

screen2.addEventListener("touchstart", (event) => {
    event.stopPropagation();
});*/