<template>
  <div class="main">
    <div class="nav">
      <img :src="require('@/assets/pubg_logo_1.svg')" alt="Pubg Logo">
      <SearchPlayer/>
    </div>
    <div class="content">
      <div class="stats">
        <LifeTime v-if="isThereLifetime"/>
      </div>
      <div class="stats">
        <WeaponMastery v-if="areThereWeaponMastery"/>
      </div>
    </div>
  </div>
  
  
</template>

<script>
import SearchPlayer from './components/SearchPlayer.vue'
import WeaponMastery from './components/WeaponMastery.vue'
import LifeTime from './components/LifeTime.vue'

import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'App',
  components: {
    SearchPlayer,
    WeaponMastery,
    LifeTime
  },
  setup() {
    const store = useStore();
    const  areThereWeaponMastery  = computed(() => store.getters.areThereWeaponMastery );
    const isThereLifetime = computed(() => store.getters.isThereLifetime);
    return {
      areThereWeaponMastery,
      isThereLifetime
    }
  }

  
}
</script>

<style lang="scss">
  body{
    background-color: #F2F2F2;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding: 10px;
    margin: 0;
  }
  .main{
    min-width: 100%;
    max-width: 100vw;
    min-height: 100%;
    max-height: 100vh;
    display: block;
    background-color: #F2F2F2;
    
  }
  .nav{
    display: flex;
    padding: 10px;
  }
  .content{
    max-height: 100%;
    //max-width: 80%;
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 20px;
  }
  #app {
    
    
  }
</style>
