<template>
  <div class="option" @click.="clickOption">
    {{ text }}
    <input type="checkbox" @click.stop="change" ref="checkbox" />
  </div>
</template>

<script>
export default {
  name: "Option",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  methods: {
    change() {
      this.$emit("check", this.text);
    },
    clickOption() {
      const el = this.$refs.checkbox;
      el.checked = !el.checked;
      this.$emit("check", this.text);
    },
  },
};
</script>

<style scoped>
.option {
  font-size: 18px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  background-color: var(--tertiary-color);
  border-radius: 25px;
  cursor: pointer;
}
input {
  width: 16px;
  height: 16px;
  border-radius: 5px;
  margin: 10px;
}
</style>
