<template>


  <div>
<br>

<div id="extended-img" ref="wrapper"> 
    <img 
      v-bind:class="{
        'landscape': isLandscape,
        'cover': size && size === 'cover',
        'contain': size && size ==='contain'
      }" 
      v-bind:src="src" 
      v-bind:alt="alt" 
      ref="image">
  </div>

<br>
  <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="">
      <h2 class="title is-2">Tutorial Management System</h2>
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">

      <!-- <a class="navbar-item">
        Tutorials
      </a>

      <a class="navbar-item">
        Documentation
      </a> -->

    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <router-link :to="{ name: 'Add' }" class="button is-success mt-5">Add Tutorial</router-link>
        </div>
      </div>
    </div>
  </div>
</nav>

<br>
<hr>
<br>
    
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>Tutorial Name</th>
          <th>Description</th>
          <th>Action</th>

 
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.description }}</td>
          <td><a
              class="button is-danger "
              to="tutorial"
              @click="deleteTutorial(item.id)"
              >Delete</a
            >
          </td>
         
        </tr>
      </tbody>
    </table>


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
        const response = await axios.get("https://tutorial-management.herokuapp.com/");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    async deleteTutorial(id) {
      try {
        await axios.delete(`https://tutorial-management.herokuapp.com/tutorials/${id}`);
        this.getProducts();
        this.$router.push("Add");
      } catch (err) {
        console.log(err);
      }
      this.$router.go()
    },
  

  },
};
</script>
  
<style>
</style>