
// maak connectie met random user generator API en haal 6 users op
fetch('https://randomuser.me/api/?results=20')
    .then(function (response) {
        // nakijken of de API-call een antwoord terugstuurt
        if (response.ok) {
            // als de status "ok" (=200) is, dan wordt het antwoord omgezet in JSON
            return response.json();
        } else {
            // als de status niet "ok" is, geef dan de status terug en annuleer het uitvoeren
            return Promise.reject(response.status);
        }
    })


    .then(function (response) {
        // lees het volledige antwoord uit in de console
        console.log(response);
        // plaats een section met grid
        let html = '<table class="table">';
        html += '<h3 class="pt-5">Logins:</h3>'
        html += '<thead><tr><th>Datum</th><th>Naam</th><th>Locatie</th><th>Tijdzone</th><th>Email</th></tr></thead>';
        html += '<tbody>';
        // plaats van de gebruikers met afbeelding, naam,...in HTML
        for (let i = 0; i < response.results.length; i++) {
            const user = response.results[i];
            html += '<tr>';
            html += `<td>${user.registered.date}</td>`;
            html += `<td>${user.name.first} ${user.name.last}</td>`;
            html += `<td>${user.location.city}, ${user.location.country}</td>`;
            html += `<td>${user.location.timezone.offset}</td>`;
            html += `<td><a href="mailto:${user.email}">${user.email}</a></td>`;
            html += '</tr>';
        }
        html += '</tbody></table>';
        /*document.body.insertAdjacentHTML('beforeend', html);*/
        document.getElementById("logins").innerHTML = html;
    })

    .catch(function (error) {
        // indien er een fout is, toon in de console dan wat er misloopt
        console.error("Error with message: " + error)
    });