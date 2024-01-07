import { createStore } from 'vuex'
import { getPlayer } from '@/services/apiService';

export default createStore({
  state: {
    playerName:'',
    plattform: '',
    findingPlayer: false,
    lifetime:{},
    weaponMastery:[],
    matches:[]
  },
  getters: {
    areThereWeaponMastery: state => {
      return Object.keys(state.weaponMastery).length > 0;
    },
    isThereLifetime:  state => {
      return Object.keys(state.lifetime).length > 0;
    }
  },
  mutations: {
    setPlayerName(state, name){
      state.playerName = name;
    },
    setPlattform(state, plattform){
      state.plattform = plattform
    },
    setLifetime(state,payload){
      state.lifetime = payload;
    },
    setWeaponMastery(state,payload){
      state.weaponMastery = payload;
    },
    setMatches(state,payload){
      state.matches = payload;
    }
  },
  actions: {
    async findPlayer({state, commit},{playerName, plattform}){
      commit('setPlayerName',playerName);
      commit('setPlattform',plattform);
      if(state.playerName && state.plattform){
        try{
          state.findingPlayer = true;
          const playerDetails = await getPlayer(state.playerName, state.plattform);
          commit('setLifetime',playerDetails.data.lifetime)
          commit('setWeaponMastery',playerDetails.data.weapon_mastery)
          commit('setMatches',playerDetails.data.matches)
          console.log(playerDetails)
          state.findingPlayer = false;
        }catch(error){
          console.error('Error:', error)
        }
      }
    }
  },
  
  modules: {
  }
})
