<template>
  <div class="container">
    <div class="wrapper">
      <h1 class="title">Страхування тварини</h1>
      <my-button
        @click="$store.commit('toggleFavorite')"
        class="btn_icon"
        :accent="false"
      >
        <my-svg class="icon" nameSvg="#icon-star" />
        {{ $store.state.isFavorite ? "Прибрати з бажане" : "Додати в бажане" }}
      </my-button>
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
  justify-content: space-between;
  margin-top: 60px;
  margin-bottom: 32px;
}
.title {
  /* font-family: "Commissioner"; */
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.4;
  color: #0b0f0e;
}
.btn_icon {
  display: flex;
  align-items: center;
  gap: 8px;
}

.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
}
</style>
