<template>
  <div
    v-if="meal.date_id"
    class="calendar-meal-container"
    v-lazy:background-image="imgObj"
  >
    <div class="calendar-meal-name text-overflow-ellipsis-3">
      {{ meal.recipe_name }}
    </div>
    <div class="calendar-meal-buttons"></div>
  </div>
</template>

<script>
export default {
  name: "calendarMeal",
  props: {
    meal: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      imgObj: {
        src: this.meal.image,
        error: require("../assets/placeholder.png"),
        loading: require("../assets/loading.png"),
      },
    };
  },
};
</script>

<style lang="scss">
.calendar-meal {
  &-container {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    font-size: 16px;
    color: $primaryGrey;
    background-position: center;
    overflow: hidden;
    //box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
    &:hover {
      color: $primaryGrey;
    }
  }
  &-name {
    position: absolute;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.9);
    //box-shadow: $lightShadow;
    padding: 0.25rem 0.5rem;
    color: $primaryGrey;
    line-height: 120%;
  }
  &-buttons {
    position: absolute;
    width: 100%;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.9);
    //box-shadow: $lightShadow;
    padding: 0 0.5rem;
    color: $primaryGrey;
    height: 25px;
  }
}
</style>
