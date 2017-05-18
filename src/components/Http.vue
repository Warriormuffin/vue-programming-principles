<template>
  <div class="http">
    <h1>{{pdpgp.name}}</h1>
    <p>{{pdpgp.description}}</p>
  </div>
</template>


<script>
import store from '@/store/solid-store'
export default {
  name: 'Http',
  data(){
    return{
      pdpgp: store.getHttp(this.$route.params.letter)
    }
  },
  computed:{},
  methods:{},
  components:{}
}
</script>


<style scoped>

</style>