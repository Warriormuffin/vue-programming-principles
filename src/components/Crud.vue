<template>
  <div class="crud">
    <h1>{{crud.name}}</h1>
    <p>{{crud.description}}</p>

  </div>
</template>


<script>
import store from '@/store/solid-store'
export default {
  name: 'Crud',
  data(){
    return{
      crud: store.getCrud(this.$route.params.letter)
    }
  },
  computed:{},
  methods:{},
  components:{}
}
</script>


<style scoped>

</style>