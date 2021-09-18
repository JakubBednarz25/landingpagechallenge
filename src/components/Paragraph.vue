<template>
  <div class="paragraph-info">
    <div class="skills-container">
      <Skill text="create unique requirements." />
      <Skill text="grow your design skills easily." />
      <Skill text="choose your strictness." />
    </div>
    <div class="paragraph">
      <h2>why should I use this?</h2>
      <p>
        you never know which situation you can be in - you may only be
        restricted to some particular concept, and have no way around that. this
        service helps you by creating a unique scenario, in which you are tasked
        to create a landing page for the specified & randomised requirements
        which are generated for you. You are allowed to choose which options you
        want to randomise, for if you only want to focus on certain aspects of
        your design skills.
      </p>
    </div>
  </div>
</template>

<script>
import Skill from "./Skill";
export default {
  name: "Paragaph",
  components: { Skill },
};
</script>

<style scoped>
.paragraph-info {
  min-height: 500px;
  margin: 25px 0px 75px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.paragraph {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
}
h2 {
  font-size: 24px;
  color: var(--primary-color);
  padding: 5px 10px 15px 10px;
  border-bottom: 2px solid var(--tertiary-color);
}
p {
  max-width: 500px;
  text-align: center;
  padding: 10px;
  color: var(--primary-color);
  line-height: 175%;
  font-size: 18px;
}
.skills-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 20px;
}
@media only screen and (min-width: 1250px) {
  .skills-container {
    margin: 0px 250px 0px 0px;
  }
}
</style>
