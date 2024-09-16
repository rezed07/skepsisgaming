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
  // Array con le informazioni dei tornei
const tournaments = [
  { id: 1, name: "#1 Point Tournament", date: "15 September 2024", time: "3pm UTC+2" },
  { id: 2, name: "#2 Point Tournament", date: "29 September 2024", time: "3pm UTC+2" },
  { id: 3, name: "#3 Point Tournament", date: "6 October 2024", time: "3pm UTC+2" },
  { id: 4, name: "Qualification Tournament", date: "13 October 2024", time: "3pm UTC+2" },
  { id: 5, name: "#4 Point Tournament", date: "17 October 2024", time: "3pm UTC+2" },
  { id: 6, name: "#5 Point Tournament", date: "20 October 2024", time: "3pm UTC+2" },
  { id: 7, name: "Qualification Tournament", date: "27 October 2024", time: "3pm UTC+1" },
  { id: 8, name: "#6 Point Tournament", date: "7 November 2024", time: "3pm UTC+1" },
  { id: 9, name: "#7 Point Tournament", date: "10 November 2024", time: "3pm UTC+1" },
  { id: 10, name: "Qualification Tournament", date: "17 November 2024", time: "3pm UTC+1" },
  { id: 11, name: "#8 Point Tournament", date: "24 November 2024", time: "3pm UTC+1" },
  { id: 12, name: "Qualification Tournament", date: "1 December 2024", time: "3pm UTC+1" },
  { id: 13, name: "#9 Point Tournament", date: "8 December 2024", time: "3pm UTC+1" },
  { id: 14, name: "#10 Point Tournament", date: "15 December 2024", time: "3pm UTC+1" },
  { id: 15, name: "Last Chance Qualifier", date: "21 December 2024", time: "3pm UTC+1" }
];

function displayTournamentList() {
  const tournamentList = document.getElementById("tournament-list");
  tournaments.forEach(tournament => {
      const listItem = document.createElement("li");
      listItem.textContent = `${tournament.name} - ${tournament.date} - ${tournament.time}`;
      listItem.addEventListener("click", () => displayTournamentDetails(tournament.id));
      tournamentList.appendChild(listItem);
  });
}

function displayTournamentDetails(tournamentId) {
  const selectedTournament = tournaments.find(tournament => tournament.id === tournamentId);
  const detailsDiv = document.getElementById("tournament-details");
  detailsDiv.style.display = "block";
  detailsDiv.innerHTML = `
      <h2>${selectedTournament.name}</h2>
      <p><strong>Date:</strong> ${selectedTournament.date}</p>
      <p><strong>Time:</strong> ${selectedTournament.time}</p>
      <p>Get ready to participate in this amazing event! Make sure to register on Matcherino and join our Discord for updates.</p>
  `;
}

// Carica la lista dei tornei quando la pagina viene caricata
window.onload = displayTournamentList;
