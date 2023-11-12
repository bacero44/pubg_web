<template>
  <div>
    <h3>{{ weaponMastery.name }}  <span>Lv. {{ weaponMastery.LevelCurrent }}</span></h3>
    <div>
      <div><h5>Kills</h5>{{ weaponMastery.OfficialStatsTotal.Kills }}</div>
      <div><h5>MKM</h5>{{ weaponMastery.OfficialStatsTotal.MostKillsInAGame }}</div>
      <div><h5>Groggies</h5>{{ weaponMastery.OfficialStatsTotal.Groggies }}</div>
      <div><h5>HeadShots</h5>{{ weaponMastery.OfficialStatsTotal.HeadShots }}</div>
      <div><h5>LongestKill</h5>{{ weaponMastery.OfficialStatsTotal.LongestKill }}</div>
      
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