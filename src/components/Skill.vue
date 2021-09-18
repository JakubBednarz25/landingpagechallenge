<template>
  <div class="skill">
    <!-- <img :src="src" alt="icon." /> -->
    {{ text }}
  </div>
</template>

<script>
export default {
  name: "Skill",
  props: {
    text: {
      type: String,
      required: false,
      default: "Lorem ipsum dolor sit amet.",
    },
    src: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.skill {
  color: #fff;
  background-image: linear-gradient(120deg, #d1178b 0%, #01007c 100%);
  padding: 20px 35px 20px 35px;
  border-radius: 30px;
  margin: 15px 5px 15px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 250px;
  border: 3px solid var(--tertiary-color);
}
img {
  width: 32px;
  height: 32px;
}
</style>
