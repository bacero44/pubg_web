<template>
  <div>
    <h2>Lifetime</h2>
    <div v-for="(stat, mode) in lifetime"  :key="mode">
      <div class="game-mode" v-if="stat.roundsPlayed > 0" >
        <div class="mode-title" >
          <h3>{{ mode }}</h3>
           <span> <b>Rounds:</b> {{ stat.roundsPlayed }}</span>
        </div>
        <div class="stats-mode" >
          <div>
            <h4>{{ stat.kills }}</h4>
            <span>Kills</span>
          </div>
          <div>
            <h4>{{ stat.wins }}</h4>
            <span>Wins</span>
          </div>
          <div>
            <h4>{{ stat.top10s }}</h4>
            <span>Top 10</span>
          </div>
          <div>
            <h4>{{ Math.round(stat.longestKill) }} m</h4>
            <span>L.Kill</span>
          </div>
          <div>
            <h4>{{ stat.roundMostKills }}</h4>
            <span>Most Kills</span>
          </div>
          <div>
            <h4>{{ stat.headshotKills }}</h4>
            <span>HeadShots</span>
          </div>

        </div>
      </div>
    </div>
    

  </div>
</template>
<script>

  import { computed } from 'vue';
  import { useStore } from 'vuex';

  export default{
    name: 'LifeTime',
    components: {
    },
    setup(){
      const store = useStore();
      const  lifetime = computed(() => store.state.lifetime );

      const helmets = (mode) =>{

        if(mode.includes('solo')){
          return 1
        }else if (mode.includes('duo')) {
          return 2
        } else if(mode.includes('squad')) {
          return 4 
        } else{
          return 0
        }
      }

      return{
        lifetime,
        helmets
      }
    }
  }
</script>

<style lang="scss">
  h2{
    text-align: left;
    border-bottom: solid 2px black;
  }
  .game-mode{
    border: solid black 1px;
    border-radius: 5px;
    margin-bottom: 10px;
    .mode-title{
      display: grid;
      grid-template-columns: 50% 50%;
    }
    padding: 5px;
    h3{
      text-transform: uppercase;
      text-align: left;
      margin: 0;
      padding: 0;
      
    }
    span{
      text-align: right;
      b{
        color: #D98B48;
      }
    } 
    
    .stats-mode{
      display: grid;
      grid-template-columns: repeat(6,auto);
      h4{
        margin: 0;
      }
      span{
        color: #D98B48;
      }
    }
  }
</style>