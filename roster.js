document.addEventListener('DOMContentLoaded', () => {
    const roster = [
      { name: "Blaks (Manager)", result: "N/A", next: "September 19, 2024" },
      { name: "Adrii (Player)", result: "Top 4 - XYZ Tournament", next: "Torneo ABC" },
      { name: "Bogdan (Player)", result: "Winner - DEF Tournament", next: "Torneo GHI" },
      { name: "Seis (Player)", result: "Runner-up - JKL Tournament", next: "Torneo MNO" },
    ];
  
    let currentPlayer = 0;
  
    function updatePlayer() {
      const playerCard = document.getElementById('playerCard');
      playerCard.querySelector('#playerName').textContent = roster[currentPlayer].name;
      playerCard.querySelector('p:nth-child(2)').textContent = `Last tournament result: ${roster[currentPlayer].result}`;
      playerCard.querySelector('p:nth-child(3)').textContent = `Next tournament: ${roster[currentPlayer].next}`;
    }
  
    document.getElementById('nextPlayer').addEventListener('click', () => {
      currentPlayer = (currentPlayer + 1) % roster.length;
      updatePlayer();
    });
  
    document.getElementById('prevPlayer').addEventListener('click', () => {
      currentPlayer = (currentPlayer - 1 + roster.length) % roster.length;
      updatePlayer();
    });
  
    updatePlayer();
  });
  