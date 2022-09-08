
window.onload = reset;
const player1 = 'o';
const player2 = "x";
const vazio = '';
let ganhou = false;
let jogador = player1;

let placarX = 0;
let placarO = 0;
let empate = 0;
let rodada = 0;


let tabuleiro =
  [vazio, vazio, vazio,
    vazio, vazio, vazio,
    vazio, vazio, vazio];

function reset() {
  jogador = player1;
  ganhou = false;
  document.getElementById("rodada").innerHTML = (rodada + " RODADA")
  rodada += 1
  for (let i = 0; i < 9; i++) {
    let cell = document.getElementById(`celula_${i}`);
    cell.innerHTML = '';
    tabuleiro[i] = vazio
  }
}

// function verificaGanhador() {
//   //testar a primeira linha
//   if (tabuleiro[i] !== vazio &&
//     tabuleiro[i] === tabuleiro[i+1] && tabuleiro[i] === tabuleiro[i+2]) {
//     alert('ganhou');
//     ganhou = true;
//   }
// }

function verificaGanhador() {
  if (tabuleiro[0] !== vazio && tabuleiro[0] === tabuleiro[1] && tabuleiro[0] === tabuleiro[2]) {
    ganhou = true;
    if (tabuleiro[0] === player1) {
      alert('ganhou jogador O');
      placarO += 1;
      document.getElementById("scoreO").innerHTML = placarO;
    }
    else if (tabuleiro[0] === player2) {
      alert('ganhou jogador X');
      placarX += 1;
      document.getElementById("scoreX").innerHTML = placarX;
    }
  }

  else if (tabuleiro[0] !== vazio && tabuleiro[0] === tabuleiro[3] && tabuleiro[0] === tabuleiro[6]) {
    ganhou = true;
    if (tabuleiro[0] === player1) {
      alert('ganhou jogador O');
      placarO += 1;
      document.getElementById("scoreO").innerHTML = placarO;
    }
    else if (tabuleiro[0] === player2) {
      alert('ganhou jogador X');
      placarX += 1;
      document.getElementById("scoreX").innerHTML = placarX;
    }
  }

  else if (tabuleiro[0] !== vazio && tabuleiro[0] === tabuleiro[4] && tabuleiro[0] === tabuleiro[8]) {
    ganhou = true;
    if (tabuleiro[0] === player1) {
      alert('ganhou jogador O');
      placarO += 1;
      document.getElementById("scoreO").innerHTML = placarO;
    }
    else if (tabuleiro[0] === player2) {
      alert('ganhou jogador X');
      placarX += 1;
      document.getElementById("scoreX").innerHTML = placarX;
    }
  }

  else if (tabuleiro[4] !== vazio && tabuleiro[4] === tabuleiro[1] && tabuleiro[4] === tabuleiro[7]) {
    ganhou = true;
    if (tabuleiro[4] === player1) {
      alert('ganhou jogador O');
      placarO += 1;
      document.getElementById("scoreO").innerHTML = placarO;
    }
    else if (tabuleiro[4] === player2) {
      alert('ganhou jogador X');
      placarX += 1;
      document.getElementById("scoreX").innerHTML = placarX;
    }
  }

  else if (tabuleiro[4] !== vazio && tabuleiro[4] === tabuleiro[3] && tabuleiro[4] === tabuleiro[5]) {
    ganhou = true;
    if (tabuleiro[4] === player1) {
      alert('ganhou jogador O');
      placarO += 1;
      document.getElementById("scoreO").innerHTML = placarO;
    }
    else if (tabuleiro[4] === player2) {
      alert('ganhou jogador X');
      placarX += 1;
      document.getElementById("scoreX").innerHTML = placarX;
    }
  }

  else if (tabuleiro[8] !== vazio && tabuleiro[8] === tabuleiro[7] && tabuleiro[8] === tabuleiro[6]) {
    ganhou = true;
    if (tabuleiro[8] === player1) {
      alert('ganhou jogador O');
      placarO += 1;
      document.getElementById("scoreO").innerHTML = placarO;
    }
    else if (tabuleiro[8] === player2) {
      alert('ganhou jogador X');
      placarX += 1;
      document.getElementById("scoreX").innerHTML = placarX;
    }
  }

  else if (tabuleiro[8] !== vazio && tabuleiro[8] === tabuleiro[5] && tabuleiro[8] === tabuleiro[2]) {
    ganhou = true;
    if (tabuleiro[8] === player1) {
      alert('ganhou jogador O');
      placarO += 1;
      document.getElementById("scoreO").innerHTML = placarO;
    }
    else if (tabuleiro[8] === player2) {
      alert('ganhou jogador X');
      placarX += 1;
      document.getElementById("scoreX").innerHTML = placarX;
    }
  }

  else if (tabuleiro[0] !== vazio && tabuleiro[1] !== vazio && tabuleiro[2] !== vazio &&
    tabuleiro[3] !== vazio && tabuleiro[4] !== vazio && tabuleiro[5] !== vazio &&
    tabuleiro[6] !== vazio && tabuleiro[7] !== vazio && tabuleiro[8] !== vazio) {
    alert('Empate');
    empate += 1
    document.getElementById("empates").innerHTML = empate
  }
}




function jogada(numero) {
  if (ganhou === true) {
    alert("O Jogo acabou");
    return;
  }

  let cell = document.getElementById(`celula_${numero}`);

  if (tabuleiro[numero] === vazio) {
    cell.innerHTML = `<img src="${jogador}.svg" alt='jogador ${jogador}' />`;
    tabuleiro[numero] = jogador;
    jogador = (jogador === player1) ? player2 : player1;

    verificaGanhador();
  }

}




