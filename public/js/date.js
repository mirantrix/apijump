
function getData() {
  let endpoint = 'http://localhost:5000/matches/api'; //'https://next-fc.herokuapp.com/matches/api';
  fetch(endpoint)
  .then(function(api) {
    return api.text();
  })
  .then(function(json) {
    response(json);
    console.log('Request successful');
  })
  .catch(function(error) {
    console.log('Request failed', error)
  });
}

function response(json) {
  const response = JSON.parse(json);
  response.map(iterateMacthes);
}

function matchDateConvertion(matchDate){
  let dateToArray = String(new Date(matchDate)).split(" ");
  let day = dateToArray[0];
  let month = dateToArray[1];
  let date = dateToArray[2];
  let time = dateToArray[4].split(":");
  let hours = time[0];
  let minutes = time[1];
  let matchTime = `${day}, ${hours}:${minutes} pm`;

  return {
    day,
    month,
    date,
    matchTime
  }
}


function iterateMacthes(eachMatch){
  let { day,month,date,matchTime } = matchDateConvertion(eachMatch.matchDate);
  const matches = document.getElementById('matches');
  let li = document.createElement('li');
  li.innerHTML = eachMatch.local.abbreviation;
  // Mockup, will Refactor
  /*
  li.innerHTML =
      `<div class="match">\
        <div class="match-card">\
          <div class="match-date">\
            <p class="month">${month}</p>\
            <p class="date">${date}</p>\
            <p class="time">${matchTime}</p>\
          </div>\
          <div class="match-teams">\
            <ul>\
              <li class="local team-status">\
                <figure>\
                  <img class="team-icon" src= "/images/${eachMatch.local.icon}.png">\
                </figure>\
                <h3>${eachMatch.local.abbreviation}</h3>\
              </li>\
              <li class="versus">VS</li>\
              <li class="visiting team-status">\
                <figure>\
                  <img class="team-icon" src= "/images/${eachMatch.visiting.icon}.png">\
                </figure>\
                <h3>${eachMatch.visiting.abbreviation}</h3>\
              </li>\
            </ul>\
          </div>\
        </div>\
        <div class="complementary-info">\
          <p class="tournament">${eachMatch.tournament}</p>\
          <p class="city">${eachMatch.city}</p>\
        </div>\
      </div>`
  */
  matches.appendChild(li);
  return;
}
