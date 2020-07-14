<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-expand-sm navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="/">Contacts</a>
          <button class="navbar-toggler" type="button"
            data-toggle="collapse" data-target="#navbarsExample07"
            aria-controls="navbarsExample07" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarsExample07">
            <ul class="navbar-nav mr-auto">
              <li><router-link class="nav-link" to="/">Home</router-link></li>
              <li><router-link class="nav-link" to="/about">About</router-link></li>
            </ul>
            <ul class="navbar-nav navbar-right">
              <li>
                <router-link class="nav-link" to="/add">Add Contact</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <router-view/>
  </div>
</template>

<style>

</style>
