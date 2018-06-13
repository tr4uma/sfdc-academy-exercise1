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
