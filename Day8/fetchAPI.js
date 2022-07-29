const url = 'https://api-football-standings.azharimm.site/leagues';

async function fetchStandings() {
    const data = await fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    });

    return data.json();
}

function printStandings(leagues) {
    let html = '<ul>';
    for (let league of leagues) {
      html += '<li>' + league.name + '</li>';
    }
    html += '</ul>';
    document.body.innerHTML = html;
}

async function fetchAndPrintStandings() {
    try {
        const standings = await fetchStandings();
        printStandings(standings.data);
    } catch(err) {
        console.log(err);
    }
}

fetchAndPrintStandings();
