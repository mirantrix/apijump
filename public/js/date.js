function run(){
  function getData() {
    const endpoint = 'http://localhost:5000/matches/api' || 'https://next-fc.herokuapp.com/matches/api';
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
  getData();
}

function response(json) {
  const response = JSON.parse(json);
  response.map(iterateMacthes);
  console.log(response);
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

  // Mockup, will Refactor
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

  matches.appendChild(li);

  console.log(eachMatch.local.abbreviation);
  return;
}


/*
<div class="match">
  <div class="match-card">
  <div class="match-date">
  <p class="month">JUNIO</p>
  <p class="date">5</p>
  <p class="time">Mié, 4:00 pm</p>
</div>
<div class="match-teams">
<ul>
  <li class="local team-status">
    <figure>
      <img class="team-icon" src="./public/images/mex-flag.png">
    </figure>
    <h3>MEX</h3>
  </li>
  <li class="versus">VS</li>
  <li class="visiting team-status">
    <figure>
      <img class="team-icon" src="./public/images/ven-flag.png">
    </figure>
    <h3>VEN</h3>
  </li>
</ul>

</div>
</div>
<div class="complementary-info">
<p class="tournament">Amistoso</p>
<p class="city">@ Atlanta, GA</p>
</div>
</div>

*/


/*
li
  div(class='row')
    div(id='matchDate' class='column')
      p(class='month')
      p(class='date')
      p(class='time')
    div(class='vs row')
      div(class='local-team column')
        figure(class='local-flag')
          img(class='local-icon')
        p(class='local-name')
      p vs
      div(class='visiting-team column')
        figure(class='visiting-flag')
          img(class='visiting-icon')
        p(class='visiting-name')
  div(class='row')
    p(class='tournament')
    p(class='city')
*/
