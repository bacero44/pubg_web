<template>
  <div class="player-search">
   
    <label v-for="platform in platforms" :key="platform.value" class="radio-label">
      <input
        type="radio"
        v-model="selectedPlatform"
        :value="platform"
        class="radio-input"
        :disabled="findingPlayer"
      />
      <img :src="platform_logo(platform, selectedPlatform)" alt="Option" class="radio-image" />
      <span>{{ platform }}</span>
    </label>
    <input type="text" v-model="playerName" class="player-name" @keyup.enter="findPlayer" :disabled="findingPlayer" >
    <button @click="findPlayer" class="find-button" v-if="!findingPlayer">
      <img :src="require('@/assets/r_arrow_1.svg')" alt="Go arrow " v-if=" !isValidPlatform || !isValidPlayerName">
      <img :src="require('@/assets/r_arrow_4.svg')" alt="Go arrow " v-if=" isValidPlatform && isValidPlayerName">
      <span>Find</span>
    </button>
    <img class="seaching" v-if="findingPlayer" :src="require('@/assets/loading.svg')" alt="loading...">
    
    
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

      const platform_logo = (platform,selected) =>{
        if(platform == selected){
          return require(`@/assets/${platform}_logo_3.svg`);
        }else{
          return require(`@/assets/${platform}_logo_1.svg`);
          
        }
      }

        
      

      return { platforms, 
        selectedPlatform, 
        playerName, 
        findPlayer, 
        isValidPlatform, 
        isValidPlayerName, 
        findingPlayer,
        platform_logo
        
      };
    }
  }
</script>
<style lang="scss">
.player-search{
  
  display: flex;
  align-items: center;
  padding: 0px 0px 0px 10px;
}
.radio-label{
  border: solid black 1px;
  border-radius: 5px;
  display: block;
  margin-left: 5px;
  margin-right: 5px;
  padding: 5px;
  img{
    display: block;
    width: auto;
    height: 50px;
  }
  span{
    display: block;
    font-size: 60%;
    text-transform: uppercase;
  }
}
.radio-input {
  display: none; /* Oculta el input radio nativo */
}
.player-name, .player-name:focus{
  
  all: unset;
  
  height: 70px;
  width: 50vw;
  background-color: transparent;
  border-top: none;
  border-right: none;
  border-left: 1px solid #000;
  border-bottom: 1px solid #000;
  text-align: left;
  font-size: 4em;
  margin-top: 5px;
  vertical-align: bottom;
}
.find-button{
  all: unset;
  cursor: pointer;
  img{
    height: 50px;
    width: auto;
  }
  span{
    display: block;
    font-size: 60%;
    text-transform: uppercase;
  }

}
.seaching{
  height: 50px;
  width: auto;
}


</style>