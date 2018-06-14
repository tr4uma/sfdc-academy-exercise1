<template>
  <div class="research">
    <input type="text" v-model="searchText" placeholder="codice qui"/>
    <button @click="performSearch">SEARCH</button>
    <div v-for="res in searchResults" :key="res.value">
      {{res}}
    </div>
  </div>
</template>

<script>
import axios from 'axios';

const url = 'http://localhost:3000/search';
const wsConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export default {
  name: 'ItemResearch',
  data() {
    return {
      searchResults: ['ugo', 'pippo'],
      searchText: '',
    };
  },
  methods: {
    performSearch() {
      console.log(`Hello, ${this.searchText}!`);
      const service = `${url}?searchtoken=${this.searchText}`;
      axios.get(service, wsConfig)
        .then((response) => {
          console.log(response.data.haicercato);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
