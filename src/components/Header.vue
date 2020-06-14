<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img src="./../assets/scb.png" alt="Super Ciné Battle" />
        </b-navbar-item>
      </template>

      <template slot="start">
        <b-navbar-dropdown label="Les listes ultimes">
          <b-navbar-item tag="router-link" :to="{ path: '60' }">Années 60</b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '70' }">Années 70</b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '80' }">Années 80</b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '90' }">Années 90</b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '2000' }">Années 2000</b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '2010' }">Années 2010</b-navbar-item>
        </b-navbar-dropdown>
        <b-navbar-item href="#">Statistiques</b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item href="#">Admin</b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
</style>
