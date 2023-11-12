<template>
  <div>
    -{{ findingPlayer }}-
    <select v-model="selectedPlatform">
      <option value="0" selected="true" disabled="disabled" >Choose...</option>
      <option v-for="plat in platforms" :key="plat" :value="plat">
        {{ plat }}
      </option>
    </select>
    <input type="text" v-model="playerName" >
    <button @click="findPlayer">Go</button>
    <br>
    
  </div>
</template>

<script>
  import { ref, onMounted, computed } from 'vue';
  import { getPlatforms } from '@/services/apiService';
  import { useStore } from 'vuex';
  export default {
    name: 'SearchPlayer',
    props: {},
    setup() {

      const store = useStore();
      const platforms = ref([]);
      const selectedPlatform = ref(0);
      const playerName = ref('')
      onMounted(async () => {
        try {
          platforms.value = await getPlatforms();
        } catch (error) {
          console.error('Error:', error);
          throw error;
        }
      });

      const isValidPlatform = computed(() => selectedPlatform.value !== null && selectedPlatform.value != 0);
      const isValidPlayerName = computed(() => playerName.value.trim().length >= 3);

      let  findingPlayer  = computed(() => store.state.findingPlayer );
      
     

      const findPlayer = () => {
        if (isValidPlatform.value && isValidPlayerName.value) {
          store.dispatch('findPlayer', { playerName: playerName.value, plattform: selectedPlatform.value });
        }
      }
        
      

      return { platforms, 
        selectedPlatform, 
        playerName, 
        findPlayer, 
        isValidPlatform, 
        isValidPlayerName, 
        findingPlayer,
        
      };
    }
  }
</script>