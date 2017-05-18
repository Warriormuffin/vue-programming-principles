<template>
  <div class="Solid">
    <h1>S.O.L.I.D</h1>
      <ul>
        <li v-for="letter in solid">
          <router-link :to="'/solid/'+letter">{{letter}}</router-link>
        </li>
      </ul>
      <h1>C.R.U.D</h1>
      <ul>
        <li v-for="letter2 in crud">
          <router-link :to="'/crud/'+ letter2">{{letter2}}</router-link>
        </li>
      </ul>
      <h1>H.T.T.P</h1>
       <ul>
        <li v-for="word in http">
          <router-link :to="'/http/'+ word">{{word}}</router-link>
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
