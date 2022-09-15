
window.onload = reset;
const player1 = 'o';
const player2 = 'x';
const vazio = '';
let ganhou = false;
let cont_player1 = 0;
let cont_player2 = 0;
let cont_empate = 0;
let cont_rodada = 0;

let jogador = player1;
let tabuleiro =
  [vazio, vazio, vazio,
    vazio, vazio, vazio,  
    vazio, vazio, vazio];

function reset() {
  jogador = player1;
  ganhou = false;
  document.getElementById("rodada").innerHTML = (cont_rodada + " RODADA")
  cont_rodada += 1
  for (let i = 0; i < 9; i++) {
    let cell = document.getElementById(`celula_${i}`);
    cell.innerHTML = '';
    tabuleiro[i] = vazio
  }
}

function verificaGanhador() {
  if (tabuleiro[0] !== vazio &&
    tabuleiro[0] === tabuleiro[1] && tabuleiro[0] === tabuleiro[2]) {
    ganhou = true;
    if (tabuleiro[0] == player1) {
      cont_player1 += 1
      alert('O ganhou');
      document.getElementById("cpu").innerHTML = cont_player1
    }
    else if (tabuleiro[0] == player2){
      cont_player2 +=1
      alert('X ganhou');
      document.getElementById("jogador").innerHTML = cont_player2
    }
  }

  else if (tabuleiro[0] !== vazio &&
    tabuleiro[0] === tabuleiro[4] && tabuleiro[0] === tabuleiro[8]) {
    ganhou = true;
    if (tabuleiro[0] == player1) {
      cont_player1 += 1
      alert('O ganhou');
      document.getElementById("cpu").innerHTML = cont_player1
    }
    else if (tabuleiro[0] == player2){
      cont_player2 +=1
      alert('X ganhou');
      document.getElementById("jogador").innerHTML = cont_player2
    }
  } 

  else if (tabuleiro[0] !== vazio &&
    tabuleiro[0] === tabuleiro[3] && tabuleiro[0] === tabuleiro[6]) {
    ganhou = true;
    if (tabuleiro[0] == player1) {
      cont_player1 += 1
      alert('O ganhou');
      document.getElementById("cpu").innerHTML = cont_player1
    }
    else if (tabuleiro[0] == player2){
      cont_player2 +=1
      alert('X ganhou');
      document.getElementById("jogador").innerHTML = cont_player2
    }
  }

  else if (tabuleiro[8] !== vazio &&
    tabuleiro[8] === tabuleiro[7] && tabuleiro[8] === tabuleiro[6]) {
    ganhou = true;
    if (tabuleiro[8] == player1) {
      cont_player1 += 1
      alert('O ganhou');
      document.getElementById("cpu").innerHTML = cont_player1
    }
    else if (tabuleiro[8] == player2){
      cont_player2 +=1
      alert('X ganhou');
      document.getElementById("jogador").innerHTML = cont_player2
    }
  }

  else if (tabuleiro[2] !== vazio &&
    tabuleiro[2] === tabuleiro[4] && tabuleiro[2] === tabuleiro[6]) {
    ganhou = true;
    if (tabuleiro[2] == player1) {
      cont_player1 += 1
      alert('O ganhou');
      document.getElementById("cpu").innerHTML = cont_player1
    }
    else if (tabuleiro[2] == player2){
      cont_player2 +=1
      alert('X ganhou');
      document.getElementById("jogador").innerHTML = cont_player2
    }
  }

  else if (tabuleiro[2] !== vazio &&
    tabuleiro[2] === tabuleiro[5] && tabuleiro[2] === tabuleiro[8]) {
    ganhou = true;
    if (tabuleiro[2] == player1) {
      cont_player1 += 1
      alert('O ganhou');
      document.getElementById("cpu").innerHTML = cont_player1
    }
    else if (tabuleiro[2] == player2){
      cont_player2 +=1
      alert('X ganhou');
      document.getElementById("jogador").innerHTML = cont_player2
    }
  }

  else if (tabuleiro[4] !== vazio &&
    tabuleiro[4] === tabuleiro[3] && tabuleiro[4] === tabuleiro[5]) {
    ganhou = true;
    if (tabuleiro[4] == player1) {
      cont_player1 += 1
      alert('O ganhou');
      document.getElementById("cpu").innerHTML = cont_player1
    }
    else if (tabuleiro[4] == player2){
      cont_player2 +=1
      alert('X ganhou');
      document.getElementById("jogador").innerHTML = cont_player2
    }
  }
  
  else if (tabuleiro[4] !== vazio &&
    tabuleiro[4] === tabuleiro[1] && tabuleiro[4] === tabuleiro[7]) {
    ganhou = true;
    if (tabuleiro[4] == player1) {
      cont_player1 += 1
      alert('O ganhou');
      document.getElementById("cpu").innerHTML = cont_player1
    }
    else if (tabuleiro[4] == player2){
      cont_player2 +=1
      alert('X ganhou');
      document.getElementById("jogador").innerHTML = cont_player2
    }
  }

  else if (tabuleiro[0] !== vazio && tabuleiro[1] !== vazio && tabuleiro[2] !== vazio && tabuleiro[3] !== vazio && 
    tabuleiro[4] !== vazio && tabuleiro[5] !== vazio && tabuleiro[6] !== vazio && tabuleiro[7] !== vazio && tabuleiro[8] !== vazio){
    cont_empate += 1;
    alert('Foi empate');
    document.getElementById("empate").innerHTML = cont_empate;
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







