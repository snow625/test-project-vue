<template>
  <div class="container">
    <div class="wrapper">
      <router-link class="link" exact-path to="/"
        >Умови страхування
        <my-svg class="icon" nameSvg="#icon-next" />
      </router-link>
      <router-link class="link" to="/form-2"
        >Дані договору
        <my-svg class="icon" nameSvg="#icon-next" />
      </router-link>
      <router-link class="link" to="/form-3">Дані страхувальника</router-link>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: #f8f9fb;
  border-radius: 4px;
  padding: 12px 0px;
}
.link {
  font-weight: 500;
  font-size: 15px;
  line-height: 1.6;
  text-decoration: none;
  display: flex;
  display: flex;
  align-items: center;
}
.router-link-active {
  color: #48a70a;
}
.icon {
  margin-left: 120px;
  display: inline-block;
  width: 0.5em;
  height: 0.7em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
}
</style>
