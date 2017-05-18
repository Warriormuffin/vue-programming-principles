<template>
  <div class="component">
    <h1>{{principle.name}}</h1>
    <p>{{principle.description}}</p>
  </div>
</template>


<script>
import store from '@/store/solid-store'

export default {
  name: 'Principle',
  data(){
    return{
      principle: store.getPrinciple(this.$route.params.letter)
    }
  },
  computed:{},
  methods:{},
  components:{}
}
</script>


<style scoped>

</style>