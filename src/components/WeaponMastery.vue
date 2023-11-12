<template>
  <div>
    <h2>Weapon Mastery</h2>
    <WeaponDetails v-for="weapon in weaponMastery" :key="weapon.id" :weaponMastery="weapon" />
  </div>
</template>
<script>

  import { computed } from 'vue';
  import { useStore } from 'vuex';

  import WeaponDetails from './WeaponDetails.vue'

  export default{
    name: 'WeaponMastery',
    components: {
      WeaponDetails
    },
    setup(){
      const store = useStore();
      const  weaponMastery = computed(() => store.state.weaponMastery );
      return{
        weaponMastery
      }
    }
  }
</script>