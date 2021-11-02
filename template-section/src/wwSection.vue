<template>
  <div class="my-section">
    <h1 :style="textStyle">My Title</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </div>
</template>

<script>
export default {
  props: {
    content: { type: Object, required: true },
  },
  computed: {
    textStyle() {
      return {
        color: this.content.textColor,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.my-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 200px;
  h1 {
    font-size: 32px;
  }
  p {
    margin-top: 12px;
  }
}
</style>
