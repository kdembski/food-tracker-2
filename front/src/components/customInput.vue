<template>
  <div class="custom-input-container">
    <input
      placeholder=" "
      :type="inputType"
      @focus="focusFunction"
      @input="$emit('input', $event.target.value)"
    />
    <label>{{ labelText }}</label>
    <transition name="error-transition">
      <div v-if="errorBool" class="input-error-container">
        <i class="fas fa-exclamation"></i>
        {{ errorText }}
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "customInput",
  props: {
    inputType: {
      type: String,
      required: true,
    },
    focusFunction: {
      type: Function,
    },
    labelText: {
      type: String,
      required: true,
    },
    errorBool: {
      type: Boolean,
      required: true,
    },
    errorText: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.custom-input-container {
  position: relative;
  & input {
    display: flex;
    position: relative;
    width: 100%;
    margin-bottom: 3rem;
    padding: 0.5rem 0.75rem;
    outline: none;
    border: 0;
    border-bottom: 2px solid $lightGrey;
    transition: all 0.2s ease-in-out;
    color: $primaryGrey;
    &:not(:placeholder-shown),
    &:focus {
      outline: none;
      border: 0;
      border-bottom: 2px solid $primaryYellow;
      & ~ label {
        top: -1.1rem;
        color: $primaryYellow;
      }
    }
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      transition: background-color 50000s;
    }
  }
  & label {
    position: absolute;
    pointer-events: none;
    top: 0.75rem;
    left: 0.25rem;
    transition: all 0.2s ease-in-out;
    color: $lightGrey;
  }
  & .input-error-container {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    padding: 0.75rem 1rem;
    color: rgb(200, 0, 0);
    background: rgb(255, 180, 180);
    font-weight: 400;
    z-index: 1;
    box-shadow: $lightShadow;
    & i {
      color: rgb(220, 0, 0);
      margin-right: 0.5rem;
    }
  }
}
</style>
