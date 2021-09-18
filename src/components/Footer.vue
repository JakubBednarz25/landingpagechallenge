<template>
  <footer>
    <p>Landing Page Challenge.</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  width: 100%;
  color: #fff;
  background-color: var(--secondary-color);
  background-image: linear-gradient(
    120deg,
    #d1178b 0%,
    var(--tertiary-color) 100%
  );
}
p {
  font-size: 18px;
  padding: 25px 25px 40px 25px;
}
</style>
