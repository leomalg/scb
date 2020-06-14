<template>
<div>
  <b-table :data='movies' :columns='columns'></b-table>
  </div>
</template>

<script>
import movies from './../api/movies.js'

export default {
  name: 'Year2000',
  data () {
    return {
      movies: movies.getMovies,
      columns: [
        {
          field: 'rank',
          label: '#',
          numeric: true
        },
        {
          field: 'title',
          label: 'Titre'
        },
        {
          field: 'episode',
          label: 'Épisode'
        }
      ]
    }
  },
  methods: {
    getMovies () {
      this.movies = movies._movies
    }
  },
  created: function () {
    this.getMovies()
  }
}
</script>

<style scoped>
</style>
