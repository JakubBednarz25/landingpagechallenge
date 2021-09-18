<template>
  <div class="generator">
    <h2>generator.</h2>
    <div class="select-options">
      <h3>select options to randomise.</h3>
      <div class="options">
        <Option
          @check="optionChange"
          v-for="option in options"
          :key="option.name"
          :text="option.name"
        />
      </div>
      <div
        :style="{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }"
      >
        <Button
          text="generate options."
          :hasBackground="true"
          :action="submitOptions"
        />
        <p v-if="noOptionsMessage">please select atleast 1 option.</p>
      </div>
    </div>
    <div v-if="requirements" class="requirements">
      <div v-if="requirements.palette" class="required palette">
        <h4>palette.</h4>
        <div class="palette-color-container">
          <div v-for="color in requirements.palette" :key="color">
            <div
              :style="{ backgroundColor: color }"
              class="required-color"
            ></div>
            <p>{{ color }}</p>
          </div>
        </div>
      </div>
      <div v-if="requirements.product" class="required product">
        <h4>product.</h4>
        <div class="product-container">
          <h5>product name: {{ requirements.product.name }}</h5>
          <h5>price: $ {{ requirements.product.price.toFixed(2) }}</h5>
          <h5>Images:</h5>
          <div class="product-images">
            <a
              v-for="image in requirements.product.images"
              :key="image"
              :href="image"
              target="_blank"
            >
              <img :src="image" />
            </a>
          </div>
        </div>
      </div>
      <div v-if="requirements.font" class="required font">
        <h4>font.</h4>
        <a :href="requirements.font" target="_blank">{{ requirements.font }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import Option from "./Option";
import Button from "./Button";

import randomOptions from "../utils/optionRandomizer";

export default {
  name: "Generator",
  data() {
    return {
      options: [
        { name: "palette", checked: false },
        { name: "product", checked: false },
        { name: "font", checked: false },
      ],
      noOptionsMessage: false,
      requirements: undefined,
    };
  },
  methods: {
    optionChange(name) {
      console.log(name);
      this.options = this.options.map((option) => {
        if (option.name === name) {
          return {
            name: name,
            checked: !option.checked,
          };
        }
        return option;
      });
    },
    generatorValidation() {
      return this.options.some((option) => {
        return option.checked;
      });
    },
    submitOptions() {
      let valid = this.generatorValidation();
      this.noOptionsMessage = !valid;
      console.log(valid);
      if (valid) {
        const options = randomOptions(this.options);
        this.requirements = options;
        console.log(options);
      }
    },
  },
  watch: {
    options(x) {
      console.log(x);
    },
  },
  components: { Option, Button },
};
</script>

<style scoped>
.generator {
  width: 100%;
  min-height: 600px;
  background-color: var(--primary-color);
  margin: 100px 0px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  color: #fff;
  font-size: 25px;
}
.select-options {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
}
h2,
h3,
.options,
p {
  padding: 10px;
  display: inline-block;
}
h2 {
  margin: 0px 0px 25px 0px;
}
h3 {
  font-size: 20px;
}
.options {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
}
p {
  font-size: 14px;
}
.requirements {
  width: 100%;
  margin: 30px 0px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.required {
  margin: 0px 0px 30px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
h4 {
  margin: 25px;
  padding: 5px;
  border-bottom: 2px solid var(--tertiary-color);
}
.palette-color-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
}
.required-color {
  width: 128px;
  height: 128px;
  margin: 10px;
  border-radius: 50%;
  border: 2px solid var(--tertiary-color);
}
.product-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
}
h5 {
  margin: 10px;
}
.product-images {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.product-images img {
  max-height: 128px;
  margin: 10px;
}
a {
  color: #fff;
  font-size: 18px;
}
@media only screen and (max-width: 425px) {
  a {
    font-size: 15px;
  }
}
</style>
