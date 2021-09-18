<template>
  <div class="title-container">
    <h1>put your frontend & design skills to the test.</h1>
    <div class="button-container">
      <Button text="show me" :action="scrollToTutorial" />
      <Button
        text="get started"
        :hasBackground="true"
        :action="scrollToGenerator"
      />
    </div>
  </div>
</template>

<script>
import Button from "./Button";
export default {
  name: "TitleContainer",
  methods: {
    scrollToTutorial() {
      this.$emit("scroll-tutorial");
    },
    scrollToGenerator() {
      this.$emit("scroll-generator");
    },
  },
  components: { Button },
};
</script>

<style scoped>
.title-container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: linear-gradient(
      125deg,
      #00ff57 0%,
      #010033 40%,
      #460043 70%,
      #f0ffc5 100%
    ),
    linear-gradient(55deg, #0014c9 0%, #410060 100%),
    linear-gradient(300deg, #ffc700 0%, #001aff 100%),
    radial-gradient(
      135% 215% at 115% 40%,
      #393939 0%,
      #393939 40%,
      #849561 calc(40% + 1px),
      #849561 60%,
      #eed690 calc(60% + 1px),
      #eed690 80%,
      #ecefd8 calc(80% + 1px),
      #ecefd8 100%
    ),
    linear-gradient(
      125deg,
      #282d4f 0%,
      #282d4f 40%,
      #23103a calc(40% + 1px),
      #23103a 70%,
      #a0204c calc(70% + 1px),
      #a0204c 88%,
      #ff6c00 calc(88% + 1px),
      #ff6c00 100%
    );
  background-blend-mode: overlay, screen, overlay, overlay, normal;
}
h1 {
  color: #fff;
  font-size: 45px;
  text-align: center;
  padding: 25px;
}
.button-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 25px;
}
</style>
