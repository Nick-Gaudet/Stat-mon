<template>
  <div class="standings">
    <h1>Rosters</h1>
    <div>
      <select name="league" id="league" @change="loadTeams" v-model="league">
        <optgroup label="Select A League">Select A League
        <option value="NBA">NBA</option>
        <option value="MLB">MLB</option>
        <option value="NHL">NHL</option>
        </optgroup>
      </select>

      <select name="team" id="team" @change="loadRoster" @loadstart="loadTeams" v-model="team">
        <optgroup label="Select A Team">Select A Team
        <option v-bind:key="team.id" v-for="team in teams">{{team.Key}}</option>
        </optgroup>
      </select>
    </div>

    <div class='sportsData'>
        <table class="table table-dark table-striped table-hover" id="sportsTable">
            <thead>
                <tr class="header">
                    <th>Team</th>
                    <th>Name</th>
                    <th>Jersey #</th>
                    <th>Position</th>
                    <th v-if=isBaseball>Batting Hand</th>
                    <th v-if=isBaseball>Throwing Hand</th>
                    <th v-if=isHockey>Shoots</th>
                    <th>Height</th>
                    <th>Weight</th>
                    <th>Birth City</th>
                    <th v-if=!isHockey>Birth Country</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-bind:key=player.id v-for="player in apiData">
                    <td>{{player.Team}}</td>
                    <td>{{player.FirstName + " "+ player.LastName}}</td>
                    <td>{{player.Jersey}}</td>
                    <td>{{player.Position}}</td>
                    <td v-if=isBaseball>{{player.BatHand}}</td>
                    <td v-if=isBaseball>{{player.ThrowHand}}</td>
                    <td v-if=isHockey>{{player.Shoots}}</td>
                    <td>{{player.Height}}</td>
                    <td>{{player.Weight}}</td>
                    <td>{{player.BirthCity + ", " + player.BirthState}}</td>
                    <td v-if=!isHockey>{{player.BirthCountry}}</td>
                    <td>{{player.Status}}</td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
import axios from 'axios'
export default{
  name: 'RosterView',
  data(){
    return{
      apiData : [],
      teams : [],
      league: 'NBA',
      team: 'TOR',
      isBaseball: false,
      isHockey: false
    };
  },
  created:function(){
    this.loadTeams();
  },
  methods:{
    loadTeams(){
      this.loadRoster();
      let apiKey = "";

      // 
      if (this.league == "NBA"){
        this.isBaseball = false;
        this.isHockey = false;
        apiKey = "0ca715232779441f9ecc1b5955dd2443"
      };
      if (this.league == "MLB"){
        this.isBaseball = true;
        this.isHockey = false;
        apiKey = "b25aa2d25de0455bbe95a54906a59a55"
      };
      if (this.league == "NHL"){
        this.isBaseball = false;
        this.isHockey = true;
        apiKey = "6d33135f7378437c930d23877a06f9c9"
      };


      const options = {
        method: 'GET',
        url: "https://api.sportsdata.io/v3/"+this.league.toLowerCase()+"/scores/json/AllTeams?key="+apiKey, // this is my free trial key dont do anything evil
        
      };

      axios.request(options).then((response)=> {
        this.teams = response.data;
      }).catch(function (error) {
        console.error(error);
      });
    },
    loadRoster(){
      let apiKey = "";
      if (this.league == "NBA"){
        this.isBaseball = false;
        apiKey = "0ca715232779441f9ecc1b5955dd2443"
      };
      if (this.league == "MLB"){
        this.isBaseball = true;
        apiKey = "b25aa2d25de0455bbe95a54906a59a55"
      };
      if (this.league == "NHL"){
        this.isBaseball = false;
        apiKey = "6d33135f7378437c930d23877a06f9c9"
      };


      const options = {
        method: 'GET',
        url: "https://api.sportsdata.io/v3/"+this.league.toLowerCase()+"/scores/json/Players/"+this.team+"?key="+apiKey, // this is my free trial key dont do anything evil
        
      };

      axios.request(options).then((response)=> {
        this.apiData = response.data;
      }).catch(function (error) {
        console.error(error);
      });
    }

  }
}

</script>
<style scoped lang="scss">
#sportsTable{
    table-layout: auto;
    margin :auto;
    height: 500px;
    max-width : 80%;
    overflow-y: scroll;
    border : 2px solid;
    border-color: #1673bd;
    border-collapse: collapse;
}
th, td{
  border-bottom: 1px solid #1673bd;
}
td{
  border-left: 1px solid #1673bd;
  border-right : 1px solid #1673bd;
}
#league, #team{
  margin: 2rem;
}
tr:hover:not(.header) {
  background-color: #d4d9dd;
}

</style>
