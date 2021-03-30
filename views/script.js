
function showRoster(teamID) {
  $.ajax({
    url: "https://statsapi.web.nhl.com/api/v1/teams/"+teamID+"?expand=team.roster",
    type: 'GET',
    success: function(response) {
        let roster=response.teams[0].roster.roster;

        

        for(i=0; i<roster.length; i++){
          playerCard(roster[i])
        }
         console.log(roster);
    }

  
  })
}

function playerCard(player) {
  let element=document.createElement("div");
  element.className
  element.innerHTML=player.jerseyNumber+": "+player.person.fullName+": "+player.position.name;
  document.getElementById("roster-container").appendChild(element)
  
}