<template>


  <div>

  <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">

      <a class="navbar-item">
        Tutorials
      </a>

      <a class="navbar-item">
        Documentation
      </a>

    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Add Tutorials</strong>
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
    
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>Tutorial Name</th>
          <th>Description</th>
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.description }}</td>
          <td class="has-text-centered">
            <a
              class="button is-danger is-small"
              @click="deleteProduct(item.product_id)"
              >Delete</a
            >
          </td>
        </tr>
      </tbody>
    </table>

    <router-link :to="{ name: 'Create' }" class="button is-success mt-5">Add Tutorial</router-link>


  </div>

</template>
  
<script>
// import axios
import axios from "axios";
  
export default {
  name: "ProductList",
  data() {
    return {
      items: [],
    };
  },
  
  created() {
    this.getTutorials();
  },
  
  methods: {

    async getTutorials() {
      try {
        const response = await axios.get("http://localhost:8080/");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },
  

  },
};
</script>
  
<style>
</style>