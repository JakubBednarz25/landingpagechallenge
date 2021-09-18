<template>
  <TitleContainer
    @scroll-tutorial="scrollToTutorial"
    @scroll-generator="scrollToGenerator"
  />
  <div ref="tutorial">
    <Tutorial />
  </div>
  <Paragraph />
  <div ref="generator">
    <Generator />
  </div>
  <Footer />
</template>

<script>
import TitleContainer from "./components/TitleContainer";
import Tutorial from "./components/Tutorial";
import Generator from "./components/Generator";
import Paragraph from "./components/Paragraph";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    TitleContainer,
    Tutorial,
    Generator,
    Paragraph,
    Footer,
  },
  methods: {
    scrollToTutorial() {
      const el = this.$refs.tutorial;
      el.scrollIntoView({ behavior: "smooth" });
    },
    scrollToGenerator() {
      const el = this.$refs.generator;
      el.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;

  font-family: "Poppins", sans-serif;
  font-weight: bolder;
  text-transform: lowercase;
}
#app {
  width: 100%;
  min-height: 100vh;

  --primary-color: #01007c;
  --secondary-color: #d1178b;
  --tertiary-color: #ff92bb;
}
</style>
