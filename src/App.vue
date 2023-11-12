<template>
  
  <SearchPlayer/>
  <WeaponMastery v-if="areWeaponMastery"/>
</template>

<script>
import SearchPlayer from './components/SearchPlayer.vue'
import WeaponMastery from './components/WeaponMastery.vue'

import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'App',
  components: {
    SearchPlayer,
    WeaponMastery
  },
  setup() {
    const store = useStore();
    const  areWeaponMastery  = computed(() => store.getters.areWeaponMastery );
    return {
      areWeaponMastery
    }
  }

  
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
