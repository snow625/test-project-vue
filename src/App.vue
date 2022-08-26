<template>
  <div class="main_Wrapper">
    <Header />
    <Navigation />
    <PageTitle />
    <main>
      <FormNavigationBar />
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";
import PageTitle from "./components/PageTitle.vue";
import FormNavigationBar from "./components/FormNavigationBar.vue";
export default {
  components: {
    Header,
    Navigation,
    Footer,
    PageTitle,
    FormNavigationBar,
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Ubuntu", sans-serif;
  font-weight: 400;
  box-sizing: border-box;
  color: #656266;
  font-size: 15px;
  line-height: 1.6;
  font-weight: 400;
}
.main_Wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}
.container {
  width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
}
</style>
