/* Global variables */
// Cartilla #1
let card1Array = [];
let arrayB1 = [];
let arrayI1 = [];
let arrayN1 = [];
let arrayG1 = [];
let arrayO1 = [];

// Cartilla #1 - Marcadas
const card1Marray = [];
for (let i = 0; i < 5; i++) {
  card1Marray.push([]);
  for (let j = 0; j < 5; j++) {
    card1Marray[i].push(0);
  }
}

// Cartilla #2
let card2Array = [];
let arrayB2 = [];
let arrayI2 = [];
let arrayN2 = [];
let arrayG2 = [];
let arrayO2 = [];

// Cartilla #2 - Marcadas
const card2Marray = [];
for (let i = 0; i < 5; i++) {
  card2Marray.push([]);
  for (let j = 0; j < 5; j++) {
    card2Marray[i].push(0);
  }
}


/* LocalStorage */
function lsOneCard() {
    localStorage.setItem("cardsInGame", 1);
}

function lsTwoCards() {
    localStorage.setItem("cardsInGame", 2);
}

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
    checkNumberOfCardsInGame();
}

function newCard() {
    // window.location.reload();
    card1Array.length = 0;
    card2Array.length = 0;
    localStorage.setItem('lsCard1', null);
    localStorage.setItem('lsCard2', null);
    // localStorage.clear();

    createCards();
    cleanCards();

    closeMenu();
}

function cleanCards() {
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
        // console.log(e);
    }

    closeMenu();
}

/* Marcado de cuadros */
function gotIt1(casilla, row, col) {
    let colorStatus = document.getElementById(casilla).classList.contains("bg-red-300");
    let c1Marray = JSON.parse(localStorage.getItem('lsMcard1'));

    if (c1Marray == null ) {
        c1Marray = card1Marray;
    }

    if (colorStatus) { // si tiene fondo, quítalo
        if (casilla != 's1-n3') {
            document.getElementById(casilla).classList.remove("gotit1");
        }
        document.getElementById(casilla).classList.remove("bg-red-300");
        c1Marray[row][col] = 0; // arreglo de casillas marcadas
        localStorage.setItem('lsMcard1', JSON.stringify(c1Marray)); // guardar en localStorage
    } else { // sino agrégale
        if (casilla != 's1-n3') {
            document.getElementById(casilla).classList.add("gotit1");            
        }
        document.getElementById(casilla).classList.add("bg-red-300");
        c1Marray[row][col] = 1; // arreglo de casillas marcadas
        localStorage.setItem('lsMcard1', JSON.stringify(c1Marray)); // guardar en localStorage
    }

    checkBingoStatus1();
}

function gotIt2(casilla, row, col) {
    let colorStatus = document.getElementById(casilla).classList.contains("bg-blue-300");
    let c2Marray = JSON.parse(localStorage.getItem('lsMcard2'));

    if (c2Marray == null ) {
        c2Marray = card2Marray;
    }

    if (colorStatus) {
        if (casilla != 's2-n3') {
            document.getElementById(casilla).classList.remove("gotit2");
        }
        document.getElementById(casilla).classList.remove("bg-blue-300");
        card2Marray[row][col] = 0; // arreglo de casillas marcadas
        localStorage.setItem('lsMcard2', JSON.stringify(card2Marray)); // guardar en localStorage
    } else {
        if (casilla != 's2-n3') {
            document.getElementById(casilla).classList.add("gotit2");
        }
        document.getElementById(casilla).classList.add("bg-blue-300");
        card2Marray[row][col] = 1; // arreglo de casillas marcadas
        localStorage.setItem('lsMcard2', JSON.stringify(card2Marray)); // guardar en localStorage
    }

    checkBingoStatus2();
}

/* Generación de cartilla aleatoria */
function createCards() {
    /*console.log(localStorage.getItem('lsCard1'));
    console.log(localStorage.getItem('lsCard2'));*/

    /* Si localStorage tiene valores guardados */
    if (localStorage.getItem('lsCard1') == null || localStorage.getItem('lsCard1') == 'null' || localStorage.getItem('lsCard2') == null || localStorage.getItem('lsCard2') == 'null') {
        // Columna B
        let randomB1 = [];

        while (randomB1.length < 5) {
            let randomNumber = Math.floor(Math.random() * 15) + 1;

            if (!randomB1.includes(randomNumber)) {
                randomB1.push(randomNumber);
            }
        }
        arrayB1 = randomB1;
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
        arrayB2 = randomB2;
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
        arrayI1 = randomI1;
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
        arrayI2 = randomI2;
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
        arrayN1 = randomN1;
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
        arrayN2 = randomN2;
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
        arrayG1 = randomG1;
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
        arrayG2 = randomG2;
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
        arrayO1 = randomO1;
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
        arrayO2 = randomO2;
        for (var i = 1; i <= randomO2.length; i++) {
            document.getElementById('s2-o' + i).innerHTML = randomO2[i - 1];
        }
    } else { /* Si localStorage tiene valores */
        // Columna B
        let randomB1 = JSON.parse(localStorage.getItem('lsCard1'));
        arrayB1 = randomB1[0];
        for (var i = 1; i <= randomB1[0].length; i++) {
            document.getElementById('s1-b' + i).innerHTML = randomB1[0][i - 1];
        }

        let randomB2 = JSON.parse(localStorage.getItem('lsCard2'));
        arrayB2 = randomB2[0];
        for (var i = 1; i <= randomB2[0].length; i++) {
            document.getElementById('s2-b' + i).innerHTML = randomB2[0][i - 1];
        }

        // Columna I
        let randomI1 = JSON.parse(localStorage.getItem('lsCard1'));
        arrayI1 = randomI1[1];
        for (var i = 1; i <= randomI1[1].length; i++) {
            document.getElementById('s1-i' + i).innerHTML = randomI1[1][i - 1];
        }

        let randomI2 = JSON.parse(localStorage.getItem('lsCard2'));
        arrayI2 = randomI2[1];
        for (var i = 1; i <= randomI2[1].length; i++) {
            document.getElementById('s2-i' + i).innerHTML = randomI2[1][i - 1];
        }

        // Columna N
        let randomN1 = JSON.parse(localStorage.getItem('lsCard1'));
        arrayN1 = randomN1[2];
        for (var i = 1; i <= randomN1[2].length; i++) {
            if (i != 3) {
                document.getElementById('s1-n' + i).innerHTML = randomN1[2][i - 1];
            }
        }

        let randomN2 = JSON.parse(localStorage.getItem('lsCard2'));
        arrayN2 = randomN2[2];
        for (var i = 1; i <= randomN2[2].length; i++) {
            if (i != 3) {
                document.getElementById('s2-n' + i).innerHTML = randomN2[2][i - 1];
            }
        }

        // Columna G
        let randomG1 = JSON.parse(localStorage.getItem('lsCard1'));
        arrayG1 = randomG1[3];
        for (var i = 1; i <= randomG1[3].length; i++) {
            document.getElementById('s1-g' + i).innerHTML = randomG1[3][i - 1];
        }

        let randomG2 = JSON.parse(localStorage.getItem('lsCard2'));
        arrayG2 = randomG2[3];
        for (var i = 1; i <= randomG2[3].length; i++) {
            document.getElementById('s2-g' + i).innerHTML = randomG2[3][i - 1];
        }

        // Columna O
        let randomO1 = JSON.parse(localStorage.getItem('lsCard1'));
        arrayO1 = randomO1[4];
        for (var i = 1; i <= randomO1[4].length; i++) {
            document.getElementById('s1-o' + i).innerHTML = randomO1[4][i - 1];
        }

        let randomO2 = JSON.parse(localStorage.getItem('lsCard2'));
        arrayO2 = randomO2[4];
        for (var i = 1; i <= randomO2[4].length; i++) {
            document.getElementById('s2-o' + i).innerHTML = randomO2[4][i - 1];
        }
    }


    // Guardar cartillas en arreglos globales
    card1Array.push(arrayB1, arrayI1, arrayN1, arrayG1, arrayO1);
    card2Array.push(arrayB2, arrayI2, arrayN2, arrayG2, arrayO2);

    // Guardar cartillas en localStorage
    localStorage.setItem('lsCard1', JSON.stringify(card1Array));
    localStorage.setItem('lsCard2', JSON.stringify(card2Array));
}
// createCards();

/* Cargar cartillas de localStorage */
function loadStorageCards() {
    // Columna B
    let randomB1 = [];

    while (randomB1.length < 5) {
        let randomNumber = Math.floor(Math.random() * 15) + 1;

        if (!randomB1.includes(randomNumber)) {
            randomB1.push(randomNumber);
        }
    }
    arrayB1 = randomB1;
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
    arrayB2 = randomB2;
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
    arrayI1 = randomI1;
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
    arrayI2 = randomI2;
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
    arrayN1 = randomN1;
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
    arrayN2 = randomN2;
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
    arrayG1 = randomG1;
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
    arrayG2 = randomG2;
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
    arrayO1 = randomO1;
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
    arrayO2 = randomO2;
    for (var i = 1; i <= randomO2.length; i++) {
        document.getElementById('s2-o' + i).innerHTML = randomO2[i - 1];
    }

    // Guardar cartillas en arreglos globales
    card1Array.push(arrayB1, arrayI1, arrayN1, arrayG1, arrayO1);
    card2Array.push(arrayB2, arrayI2, arrayN2, arrayG2, arrayO2);
}

/* Cargar casillas marcadas */
function loadStorageChecked(){
    let checked1 = JSON.parse(localStorage.getItem('lsMcard1'));
    let checked2 = JSON.parse(localStorage.getItem('lsMcard2'));

    if (checked1 != null) {
        for (var i = 0; i < checked1.length; i++) {
            // console.log('i -> ' + i);
            for(var j = 0; j < checked1.length; j++){
                // console.log('j -> ' + j);
                if(checked1[i][j] == 1){
                    /*console.log('i -> ' + i);
                    console.log('j -> ' + j);
                    console.log('------------');*/
                    
                    switch (i) {
                        case 0:
                            if (j == 0) {
                                document.querySelector('#s1-b1').classList.add('bg-red-300');
                            }else if (j == 1) {
                                document.querySelector('#s1-i1').classList.add('bg-red-300');
                            }
                            else if (j == 2) {
                                document.querySelector('#s1-n1').classList.add('bg-red-300');
                            }
                            else if (j == 3) {
                                document.querySelector('#s1-g1').classList.add('bg-red-300');
                            }
                            else if (j == 4) {
                                document.querySelector('#s1-o1').classList.add('bg-red-300');
                            }
                            break;
                        case 1:
                            if (j == 0) {
                                document.querySelector('#s1-b2').classList.add('bg-red-300');
                            }else if (j == 1) {
                                document.querySelector('#s1-i2').classList.add('bg-red-300');
                            }
                            else if (j == 2) {
                                document.querySelector('#s1-n2').classList.add('bg-red-300');
                            }
                            else if (j == 3) {
                                document.querySelector('#s1-g2').classList.add('bg-red-300');
                            }
                            else if (j == 4) {
                                document.querySelector('#s1-o2').classList.add('bg-red-300');
                            }
                            break;
                        case 2:
                            if (j == 0) {
                                document.querySelector('#s1-b3').classList.add('bg-red-300');
                            }else if (j == 1) {
                                document.querySelector('#s1-i3').classList.add('bg-red-300');
                            }else if (j == 2) {
                                document.querySelector('#s1-n3').classList.add('bg-red-300');
                            }else if (j == 3) {
                                document.querySelector('#s1-g3').classList.add('bg-red-300');
                            }
                            else if (j == 4) {
                                document.querySelector('#s1-o3').classList.add('bg-red-300');
                            }
                            break;
                        case 3:
                            if (j == 0) {
                                document.querySelector('#s1-b4').classList.add('bg-red-300');
                            }else if (j == 1) {
                                document.querySelector('#s1-i4').classList.add('bg-red-300');
                            }
                            else if (j == 2) {
                                document.querySelector('#s1-n4').classList.add('bg-red-300');
                            }
                            else if (j == 3) {
                                document.querySelector('#s1-g4').classList.add('bg-red-300');
                            }
                            else if (j == 4) {
                                document.querySelector('#s1-o4').classList.add('bg-red-300');
                            }
                            break;
                        case 4:
                            if (j == 0) {
                                document.querySelector('#s1-b5').classList.add('bg-red-300');
                            }else if (j == 1) {
                                document.querySelector('#s1-i5').classList.add('bg-red-300');
                            }
                            else if (j == 2) {
                                document.querySelector('#s1-n5').classList.add('bg-red-300');
                            }
                            else if (j == 3) {
                                document.querySelector('#s1-g5').classList.add('bg-red-300');
                            }
                            else if (j == 4) {
                                document.querySelector('#s1-o5').classList.add('bg-red-300');
                            }
                            break;
                        default:
                            // console.log('fila ' + i + ' vacía');
                            break;
                    }
                }             
            }
        }
    }

    if (checked2 != null) {
        for (var i = 0; i < checked2.length; i++) {
            // console.log('i -> ' + i);
            for(var j = 0; j < checked2.length; j++){
                // console.log('j -> ' + j);
                if(checked2[i][j] == 1){
                    /*console.log('i -> ' + i);
                    console.log('j -> ' + j);
                    console.log('------------');*/
                    
                    switch (i) {
                        case 0:
                            if (j == 0) {
                                document.querySelector('#s2-b1').classList.add('bg-blue-300');
                            }else if (j == 1) {
                                document.querySelector('#s2-i1').classList.add('bg-blue-300');
                            }
                            else if (j == 2) {
                                document.querySelector('#s2-n1').classList.add('bg-blue-300');
                            }
                            else if (j == 3) {
                                document.querySelector('#s2-g1').classList.add('bg-blue-300');
                            }
                            else if (j == 4) {
                                document.querySelector('#s2-o1').classList.add('bg-blue-300');
                            }
                            break;
                        case 1:
                            if (j == 0) {
                                document.querySelector('#s2-b2').classList.add('bg-blue-300');
                            }else if (j == 1) {
                                document.querySelector('#s2-i2').classList.add('bg-blue-300');
                            }
                            else if (j == 2) {
                                document.querySelector('#s2-n2').classList.add('bg-blue-300');
                            }
                            else if (j == 3) {
                                document.querySelector('#s2-g2').classList.add('bg-blue-300');
                            }
                            else if (j == 4) {
                                document.querySelector('#s2-o2').classList.add('bg-blue-300');
                            }
                            break;
                        case 2:
                            if (j == 0) {
                                document.querySelector('#s2-b3').classList.add('bg-blue-300');
                            }else if (j == 1) {
                                document.querySelector('#s2-i3').classList.add('bg-blue-300');
                            }else if (j == 2) {
                                document.querySelector('#s2-n3').classList.add('bg-blue-300');
                            }else if (j == 3) {
                                document.querySelector('#s2-g3').classList.add('bg-blue-300');
                            }
                            else if (j == 4) {
                                document.querySelector('#s2-o3').classList.add('bg-blue-300');
                            }
                            break;
                        case 3:
                            if (j == 0) {
                                document.querySelector('#s2-b4').classList.add('bg-blue-300');
                            }else if (j == 1) {
                                document.querySelector('#s2-i4').classList.add('bg-blue-300');
                            }
                            else if (j == 2) {
                                document.querySelector('#s2-n4').classList.add('bg-blue-300');
                            }
                            else if (j == 3) {
                                document.querySelector('#s2-g4').classList.add('bg-blue-300');
                            }
                            else if (j == 4) {
                                document.querySelector('#s2-o4').classList.add('bg-blue-300');
                            }
                            break;
                        case 4:
                            if (j == 0) {
                                document.querySelector('#s2-b5').classList.add('bg-blue-300');
                            }else if (j == 1) {
                                document.querySelector('#s2-i5').classList.add('bg-blue-300');
                            }
                            else if (j == 2) {
                                document.querySelector('#s2-n5').classList.add('bg-blue-300');
                            }
                            else if (j == 3) {
                                document.querySelector('#s2-g5').classList.add('bg-blue-300');
                            }
                            else if (j == 4) {
                                document.querySelector('#s2-o5').classList.add('bg-blue-300');
                            }
                            break;
                        default:
                            // console.log('fila ' + i + ' vacía');
                            break;
                    }
                }             
            }
        }
    }
}

/* Alerta al refrescar */
window.onbeforeunload = function(event) {
    // return confirm("Confirm refresh");
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
            cleanCards();
        } else {
            closeMenu();
        }
    });
}

function confirmNew() {
    Swal.fire({
        title: '¿Estás segura?',
        text: "Se generarán nuevas cartillas",
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
            // console.log(e);
            bingo();
        }
    } else {
        if (document.querySelectorAll('.gotit2').length < 25) {
            try {
                document.querySelector('#bingoConfetti').classList.add('hidden');
            } catch (e) {
                // console.log(e);
            }
        }
    }
}

function checkBingoStatus2() {
    if (document.querySelectorAll('.gotit2').length >= 25) {
        try {
            document.querySelector('#bingoConfetti').classList.remove('hidden');
        } catch (e) {
            // console.log(e);
            bingo();
        }
    } else {
        if (document.querySelectorAll('.gotit1').length < 25) {
            try {
                document.querySelector('#bingoConfetti').classList.add('hidden');
            } catch (e) {
                // console.log(e);
            }
        }
    }
}

/* Jugar 1 o 2 cartillas */
function play1card() {
    lsOneCard();
    document.querySelector('#screen2').classList.add('hidden');
    document.querySelector('#container').style.width = "100%";
    document.querySelector('#screen1').style.width = "100%";

    document.querySelector('#p1cOption').src = "images/one-fill.svg";
    document.querySelector('#p2cOption').src = "images/two.svg";
}

function play2cards() {
    lsTwoCards();
    document.querySelector('#screen2').classList.remove('hidden');
    document.querySelector('#container').style.width = "200%";
    document.querySelector('#screen1').style.width = "50%";

    document.querySelector('#p1cOption').src = "images/one.svg";
    document.querySelector('#p2cOption').src = "images/two-fill.svg";
}

function checkNumberOfCardsInGame() {
    if (localStorage.getItem("cardsInGame") === null || localStorage.getItem("cardsInGame") == 1) {
        play1card();
    } else {
        startSlideAnimation();
        play2cards();
    }
}

/* Crear indicador de deslizador */
function createSlideAnim() {
    // Create a new div element
    const divElement = document.createElement('div');

    // Add an id attribute to the div element
    divElement.setAttribute('id', 'slideInd');

    // Create a new img element
    const imgElement = document.createElement('img');

    // Set the source attribute of the img element
    imgElement.src = 'images/slide.png';

    // Append the img element to the div element
    divElement.appendChild(imgElement);

    // Append the div element to the document body
    document.querySelector('#slideind-container').appendChild(divElement);

    var slideInd = document.getElementById("slideInd");
    slideInd.addEventListener("animationend", function() {
        slideInd.style.display = "none";
    });
}

/* Indicador dedo deslizador (al terminar animación) */
var slideInd = document.getElementById("slideInd");
slideInd.addEventListener("animationend", function() {
    slideInd.style.display = "none";
});

function startSlideAnimation() {
    var slideInd = document.getElementById("slideInd");
    slideInd.style.display = "block";
}

/* Después de cargar la página */
/*window.onload = function() {
    createCards();
    checkNumberOfCardsInGame();
};*/
createCards();
loadStorageChecked();
checkNumberOfCardsInGame();