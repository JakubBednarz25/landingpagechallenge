<template>
  <div class="tutorial">
    <div class="box">
      <div class="box-title">what is this?</div>
      <p>
        This website was created for aspiring frontend engineers, and also
        developers who are interested in website design. we provide a way to
        challenge yourself, as you are introduced to random requirements which
        you need to follow to build a landing page. These include the color
        palette, font and product information & images you need to create a
        landing page for. can your imagination create an amazing landing page
        despite the factors being randomised ?
      </p>
    </div>
    <img src="../assets/clock.png" alt="clock with graduation cap" />
  </div>
</template>

<script>
export default {
  name: "Tutorial",
};
</script>

<style scoped>
.tutorial {
  width: 100%;
  min-height: 300px;
  margin: 125px 0px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  padding: 50px 0px 0px 0px;
}
.box {
  background-color: var(--primary-color);
  color: #fff;
  padding: 30px;
  border-radius: 40px;
  position: relative;
  max-width: 400px;
  line-height: 175%;
}
.box-title {
  /* background-color: var(--secondary-color); */
  background-image: linear-gradient(180deg, #d1178b 0%, #01007c 100%);
  text-align: center;
  position: absolute;
  padding: 12px 25px 12px 25px;
  border-radius: 15px;
  font-size: 18px;

  transform: translate(-50%, -50%);
  left: 50%;
  top: 0px;
}
img {
  width: 450px;
  height: 450px;
  margin: 35px;
}

@media only screen and (max-width: 451px) {
  img {
    width: 300px;
    height: 300px;
  }
}
@media only screen and (min-width: 1250px) {
  img {
    margin: 0px 0px 0px 200px;
  }
}
</style>
