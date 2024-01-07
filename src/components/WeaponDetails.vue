<template>
  <div class="weapon">
    <div class="title">
      <h3>{{ weaponMastery.name }}  </h3>
      <span><b>Lv.</b>  {{ weaponMastery.LevelCurrent }}</span>
    </div>
    
    <div class="stats">
      <div>
          <h4>{{ weaponMastery.OfficialStatsTotal.Kills }}</h4>
          <span>Kills</span>
      </div>
      <div>
          <h4>{{ weaponMastery.OfficialStatsTotal.MostKillsInAGame }}</h4>
          <span>MKM</span>
      </div>
      <div>
          <h4>{{ weaponMastery.OfficialStatsTotal.Groggies }}</h4>
          <span>Groggies</span>
      </div>
      <div>
          <h4>{{ weaponMastery.OfficialStatsTotal.HeadShots }}</h4>
          <span>HeadShots</span>
      </div>
      <div>
          <h4>{{ weaponMastery.OfficialStatsTotal.LongestKill }}</h4>
          <span>L.Kill</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WeaponDetails',
  props: {
    weaponMastery: {
      type: Object,
      required: true
    }
  }
};
</script>
<style lang="scss">
  .weapon{
    border: solid black 1px;
    border-radius: 5px;
    margin-bottom: 10px;
    .title{
      display: grid;
      grid-template-columns: auto auto;
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
    }
    .stats{
      h4{
        margin: 0;
      }
      span{
        color: #D98B48;
      }
      display: grid;
      grid-template-columns: repeat(6,auto);
    }
  }
  
</style>