<template>
  <div class="loader">
    <div class="loader-container">
      <div id="loader"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loader",
};
</script>

<style lang="scss">
.loader {
  @include flex-center;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  z-index: 998;
  &-svg {
    width: 80px;
    height: 80px;
  }
}
#loader {
  animation: animate 1.2s linear infinite;
  clip: rect(0, 80px, 80px, 40px);
  height: 80px;
  width: 80px;
  position: absolute;
  left: calc(50% - 40px);
  top: calc(50% - 40px);
  &:after {
    animation: animate2 1.2s cubic-bezier(0.6, 0, 0.4, 1) infinite;
    clip: rect(0, 80px, 80px, 40px);
    content: "";
    border-radius: 50%;
    border: 8px solid $primaryYellow;
    height: 80px;
    width: 80px;
    position: absolute;
  }
}
@keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(200deg);
  }
}
@keyframes animate2 {
  0% {
    transform: rotate(-160deg);
  }
  100% {
    transform: rotate(160deg);
  }
}
</style>
