document.getElementById('generateTeam').addEventListener('click', generateTeams);

function generateTeams() {

    const players = [
        { name: 'Bahri', role: 'high skill' },
        { name: 'Serhat', role: 'high skill' },
        { name: 'Değnek', role: 'top' },
        { name: 'Müdür', role: 'top' },
        { name: 'Salih', role: 'support' },
        { name: 'Atalay', role: 'support' },
        { name: 'Hasan', role: 'flex' },
        { name: 'Ali Eren', role: 'flex' },
        { name: 'Atahan', role: 'flex' },
        { name: 'Orkun', role: 'flex' }
    ];


    players.sort(() => 0.5 - Math.random());

    let team1 = [], team2 = [];
    let team1Criteria = { highSkill: 0, support: 0, top: 0 };
    let team2Criteria = { highSkill: 0, support: 0, top: 0 };

    players.forEach(player => {
        if ((team1.length < 5) && canBeAddedToTeam(player, team1Criteria)) {
            team1.push(player);
            updateCriteria(player, team1Criteria);
        } else if (team2.length < 5 && canBeAddedToTeam(player, team2Criteria)) {
            team2.push(player);
            updateCriteria(player, team2Criteria);
        }
    });

    displayTeams(team1, team2);
}

function canBeAddedToTeam(player, criteria) {
    if (player.role === 'high skill' && criteria.highSkill < 1) return true;
    if (player.role === 'support' && criteria.support < 1) return true;
    if (player.role === 'top' && criteria.top < 1) return true;
    if (player.role === 'flex') return true;
    return false;
}

function updateCriteria(player, criteria) {
    if (player.role === 'high skill') criteria.highSkill++;
    if (player.role === 'support') criteria.support++;
    if (player.role === 'top') criteria.top++;
}

function displayTeams(team1, team2) {
    const teamDisplay = document.getElementById('teamDisplay');
    teamDisplay.innerHTML = `<h3>Team 1</h3><ul>${team1.map(player => `<li>${player.name} (${player.role})</li>`).join('')}</ul>` +
                            `<h3>Team 2</h3><ul>${team2.map(player => `<li>${player.name} (${player.role})</li>`).join('')}</ul>`;
}
