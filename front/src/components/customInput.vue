<template>
  <div class="custom-input-container">
    <!-- input -->
    <input
      placeholder=" "
      :type="inputType"
      @focus="focusFunction"
      @input="$emit('input', $event.target.value)"
      :value="$attrs.value"
    />
    <label>{{ labelText }}</label>
    <!-- error -->
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
    //type of input
    inputType: {
      type: String,
      required: true,
    },
    //function on input focus
    focusFunction: {
      type: Function,
    },
    //text in input label
    labelText: {
      type: String,
      required: true,
    },
    //error bool
    errorBool: {
      type: Boolean,
      required: true,
    },
    //error message
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
  width: 100%;
  margin-bottom: 3rem;
  & input {
    display: flex;
    position: relative;
    width: 100%;
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
    padding: 0.5rem 1rem;
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
