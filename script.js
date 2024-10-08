function login() {
    alert('Função de login a ser implementada');
}

function register() {
    alert('Função de cadastro a ser implementada');
}

function selectSport(sport) {
    alert(`Esporte selecionado: ${sport}`);
    // Aqui você pode adicionar lógica para carregar dados específicos do esporte
}

// Simulação de dados de pontuação
const scores = [
    { team: 'Time A', matches: 5, wins: 3, points: 9 },
    { team: 'Time B', matches: 5, wins: 2, points: 6 },
    { team: 'Time C', matches: 5, wins: 4, points: 12 }
];

// Função para preencher a tabela de pontuações
function populateScoreTable() {
    const table = document.getElementById('scoreTable');
    scores.forEach(score => {
        const row = table.insertRow();
        row.insertCell(0).textContent = score.team;
        row.insertCell(1).textContent = score.matches;
        row.insertCell(2).textContent = score.wins;
        row.insertCell(3).textContent = score.points;
    });
}

// Chamada da função quando a página carrega
window.onload = populateScoreTable;