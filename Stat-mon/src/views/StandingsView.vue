<template>
  <div class="standings">
    <h1>Standings</h1>
    <div>
      <select name="league" id="league" @change="loadStandings" @loadstart="loadStandings" v-model="league">
        <optgroup label="Select A League">Select A League
        <option value="NBA">NBA</option>
        <option value="MLB">MLB</option>
        <option value="NHL">NHL</option>
        </optgroup>
      </select>
    </div>

    <div class='sportsData'>
        <table class="table table-dark table-striped table-hover" id="sportsTable">
            <thead>
                <tr class="header">
                    <th>Team</th>
                    <th>Name</th>
                    <th v-if=!isBaseball>Conference</th>
                    <th v-if=isBaseball>League</th>
                    <th v-if=isBaseball>Division</th>
                    <th>Wins</th>
                    <th>Losses</th>
                    <th>Percentage</th>
                </tr>
            </thead>
            <tbody>
                <tr v-bind:key=team.id v-for="team in apiData">
                    <td>{{team.Key}}</td>
                    <td>{{team.City + " "+ team.Name}}</td>
                    <td v-if=!isBaseball>{{team.Conference}}</td>
                    <td v-if=isBaseball>{{team.League}}</td>
                    <td v-if=isBaseball>{{team.Division}}</td>
                    <td>{{team.Wins}}</td>
                    <td>{{team.Losses}}</td>
                    <td>{{team.Percentage}}</td>
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
  name: 'StandingsView',
  data(){
    return{
      apiData : [],
      league: 'NBA',
      isBaseball: false
    };
  },
  created:function(){
    this.loadStandings();
  },
  methods:{
    loadStandings(){
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
        url: "https://api.sportsdata.io/v3/"+this.league+"/scores/json/Standings/2022?key="+apiKey, // this is my free trial key dont do anything evil
        
      };

      axios.request(options).then((response)=> {
        // console.log(response.data);
        // this.teamPhoto = (JSON.stringify(response.data.response[0][0].team.logo));
        // this.apiData = (JSON.stringify(response.data.response[0][0].team.logo));
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
    max-width : 60%;
    overflow-y: scroll;
    border : 2px solid;
    border-color: #1673bd;
    border-collapse: collapse;
}
#league{
  margin: 2rem;
}
th, td{
  border-bottom: 1px solid #1673bd;
}
td{
  border-left: 1px solid #1673bd;
  border-right : 1px solid #1673bd;
}
tr:hover:not(.header) {
  background-color: #d4d9dd;
}

</style>
