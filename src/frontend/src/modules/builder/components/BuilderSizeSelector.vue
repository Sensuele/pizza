<template>
  <div class="content__diameter">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите размер</h2>

      <div class="sheet__content diameter">
        <label
          v-for="size in pizza.sizes"
          :key="size.id"
          class="diameter__input diameter__input--small"
        >
          <RadioButton
            name="diameter"
            :value="size.name"
            class="visually-hidden"
            :checked="size.id === pizza.sizes.id"
          />

          <span>{{ size.name }} см</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import RadioButton from "@/common/components/RadioButton";
import pizza from "@/static/pizza.json";
export default {
  data() {
    return {
      pizza: pizza,
    };
  },
  components: {
    RadioButton,
  },
};
</script>

<style lang="scss" scoped>
.content__diameter {
  width: 373px;
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
