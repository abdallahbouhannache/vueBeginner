<template>
  <div>
    <nav class="menuheader">
      <ul class="navList" v-bind:key="menu.id" v-for="menu in menus">
        <li class="navEl">
          <a href="#">{{menu.name}}</a>
        </li>
        <!-- <router-link to="/foo">Go to Foo</router-link>   -->
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      menus: [
        {
          id: 1,
          name: "MenuA"
        },
        {
          id: 2,
          name: "MenuB"
        },
        {
          id: 3,
          name: "MenuC"
        }
      ]
    };
  }
};
</script>

<style scoped>
.menuheader {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 60px;
  margin: 0;
  padding: 0;
  background: rgb(65, 65, 65);
}
.navList {
  display: flex;
  margin: 0;
  padding: 0;
  flex-direction: row;
  justify-content: flex-end;
}
.navEl {
  padding: 5px 20px;
  margin: 0;
  list-style: none;
}
.navEl > a {
  color: #fff;
  text-decoration: none;
}
</style>