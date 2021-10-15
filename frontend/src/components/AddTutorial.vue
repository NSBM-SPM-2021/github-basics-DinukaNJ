<template>
  <div>

    <div>
      <br>
<br>
  <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="">
      <h2 class="title is-2">Tutorial Management</h2>
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">

    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <router-link :to="{ name: 'Index' }" class="button is-success mt-5">View Tutorial</router-link>
        </div>
      </div>
    </div>
  </div>
</nav>

<br>
<hr>
<br>
    </div>

    <div class="field">
      <label class="label">Tutorial Title</label>
      <div class="control">
        <input
          class="input"
          type="text"
          v-model="title"
        />
      </div>
    </div>
  
    <div class="field">
      <label class="label">Tutorial Description</label>
      <div class="control">
        <input
          class="input"
          type="text"
          v-model="description"
        />
      </div>
    </div>
  
    <div class="control">
      <button class="button is-success is-fullwidth" @click="AddTutorial">SAVE & ADD</button>
    </div>
  </div>
</template>


<script>
// import axios
import axios from "axios";
  
export default {
  name: "AddTutorial",
  data() {
    return {
      title: "",
      description: "",
    };
  },
  methods: {
    // Create New product
    async AddTutorial() {
      try {
        await axios.post("https://tutorial-management.herokuapp.com/tutorials", {
          title: this.title,
          description: this.description,
        });
        this.title = "";
        this.description = "";
        
      } catch (err) {
        console.log(err);
      }
      this.$router.push("Add");
    },
  },
};
</script>
