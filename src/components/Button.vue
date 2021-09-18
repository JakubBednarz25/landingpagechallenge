<template>
  <button
    @click="action"
    :style="{
      backgroundImage: hasBackground
        ? 'linear-gradient(120deg, #d1178b 0%, #01007c 100%)'
        : '',
    }"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      required: false,
      default: "Lorem",
    },
    hasBackground: {
      type: Boolean,
      required: false,
      default: false,
    },
    action: {
      type: Function,
      required: false,
      default: () => {
        console.log("Hello World!");
      },
    },
  },
};
</script>

<style scoped>
button {
  border: 3px solid var(--tertiary-color);
  padding: 15px 25px 15px 25px;
  border-radius: 30px;
  background: transparent;
  color: #fff;
  min-width: 125px;
  font-size: 18px;
  cursor: pointer;
  margin: 5px 10px 5px 10px;
}
button:hover {
  animation-duration: 0.5s;
  /* background-image: linear-gradient(120deg, #d1178b 0%, #01007c 100%); */
}
</style>
