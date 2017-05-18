<template>
  <div class="Solid">
    <h1>S.O.L.I.D</h1>
      <ul>
        <li v-for="letter in solid">
          <router-link :to="'/solid/'+letter">{{letter}}</router-link>
        </li>
      </ul>
      <ul>
        <li v-for="letter2 in crud">
          <router-link :to="'/crud/'+ letter2">{{letter2}}</router-link>
        </li>
      </ul>
       <ul>
        <li v-for="letter3 in http">
          <router-link :to="'/http/'+ letter3">{{letter3}}</router-link>
        </li>
      </ul>
  </div>
</template>


<script>
export default {
  name: 'Solid',
  data(){
    return {
      solid: 'SOLID',
      crud: 'CRUD',
      http: ['post', 'delete', 'put', 'get', 'patch']
    }
  },
  computed:{},
  methods:{},
  components:{}
}
</script>


<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
