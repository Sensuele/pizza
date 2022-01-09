<template>
  <div class="content__dough">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>

      <div class="sheet__content dough">
        <label
          v-for="dough in pizza.dough"
          :key="dough.id"
          :class="[
            dough.name == 'Тонкое'
              ? 'dough__input--light'
              : 'dough__input--large',
            'dough__input',
          ]"
        >
          <RadioButton
            name="dough"
            :value="dough.name == 'Тонкое' ? 'light' : 'large'"
            class="visually-hidden"
            :checked="dough.id === pizza.dough.id"
          />
          <b>{{ dough.name }}</b>
          <span>{{ dough.description }}</span>
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
.content__dough {
  width: 527px;
  margin-top: 15px;
  margin-right: auto;
  margin-bottom: 15px;
}
</style>
