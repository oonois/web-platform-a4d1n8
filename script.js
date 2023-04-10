console.log('Hello!');

const crucigrama = [
  {
    num: 1,
    paraula: 'contestar',
    horitzontal: true,
    posInicial: '5,1',
    descripcio: 'blabla ezo que es?',
  },
  {
    num: 2,
    paraula: 'tribus',
    horitzontal: false,
    posInicial: '4,9',
    descripcio: 'blabla ezo que es?',
  },
  {
    num: 3,
    paraula: 'veure',
    horitzontal: true,
    posInicial: '3,3',
    descripcio: 'blabla ezo que es?',
  },
  {
    num: 4,
    paraula: 'crosta',
    horitzontal: false,
    posInicial: '2,6',
    descripcio: 'blabla ezo que es?',
  },
  {
    num: 5,
    paraula: 'estisora',
    horitzontal: false,
    posInicial: '3,4',
    descripcio: 'blabla ezo que es?',
  },
  {
    num: 6,
    paraula: 'ramses',
    horitzontal: true,
    posInicial: '9,3',
    descripcio: 'blabla ezo que es?',
  },
];

//_______________________
//  fuuuuncions  HAAAAaaa
//_______________________

function activarCasella(divmod) {
  divmod.classList.add('activa');
}
function activarinput(input) {
  input.classList.add('on');
}

function pintarCaselles(crucigrama) {
  for (let x = 0; x < crucigrama.length; x++) {
    //console.log(crucigrama[x].posInicial);

    let pos = crucigrama[x].posInicial;
    for (let y = 0; y < crucigrama[x].paraula.length; y++) {
      if (crucigrama[x].horitzontal) {
        let element = document.getElementById(`casella ${pos}`);
        activarCasella(element);
        let element2 = document.getElementById(`input ${pos}`);
        activarinput(element2); 
        let arrayPos = pos.split(',');
        let ppos = arrayPos[1];
        arrayPos[1] = Number(ppos) + 1;
        pos = arrayPos.join(',');
        console.log(pos);
        console.log('volta');
      } else {
        let element = document.getElementById(`casella ${pos}`);
        activarCasella(element);
        let element2 = document.getElementById(`input ${pos}`);
        activarinput(element2);
        let arrayPos = pos.split(',');
        let ppos = arrayPos[0];
        arrayPos[0] = Number(ppos) + 1;
        pos = arrayPos.join(',');
        console.log(pos);
        console.log('volta');
      }
    }
  }
}

function crearTaula() {
  let contenedorDiv = document.createElement('div');
  document.body.appendChild(contenedorDiv);
  contenedorDiv.className = 'contenidor';
  for (let x = 0; x < 10; x++) {
    let fila = document.createElement('div');
    contenedorDiv.appendChild(fila);
    fila.className = 'fila';
    fila.id = `fila ${x + 1}`;
    for (let y = 0; y < 10; y++) {
      let casella = document.createElement('div');
      fila.appendChild(casella);
      casella.className = 'casella';
      casella.id = `casella ${x + 1},${y + 1}`;
      let input = document.createElement('input');
      casella.appendChild(input);
      input.className = 'of';
      input.setAttribute('maxLength',1);
      input.id = `input ${x + 1},${y +1}`;
    }
  }
}

function getNextInput(idcasella,writeDirection){
	let currentInput = idcasella.querySelector('input');
	if(writeDirection){
		if(!idcasella.nextElementSibling.display == none){
			idcasella = idcasella.nextElementSibling;
		}

	}else {
			let fila = idcasella.parentElement;
			if(fila.nextElementSibling)
			fila = fila.nextElementSibling;	
		}

}

/**
 * funcio per pasar el focus de un input a un altre. aquest tindran una id ="x y z" x i y sera la id de de la casella on esta input i la z sera el num en funcio de la paraula. ex r= 3.
 * la funcio anira al atribut onclickup de cada input. a falta de trobar una forma millor
 * this.value.length == this.getAttribute('maxlength')) input2.focus()
 * 
 */

crearTaula();
pintarCaselles(crucigrama);
//console.log(crucigrama[0].posInicial);

console.log('Bye!');
