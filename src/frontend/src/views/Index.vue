<template>
  <form action="#" method="post">

      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>
        <BuilderDoughSelector />
        <BuilderSizeSelector />
        <BuilderIngredientsSelector>
          <BuilderSauceSelector />
        </BuilderIngredientsSelector>

        <BuilderPizzaView>

          <template #pizzaPrice>
            <BuilderPriceCounter />
          </template>
        </BuilderPizzaView>

      </div>

    </form>
</template>
<script>
  import BuilderDoughSelector from "../modules/builder/components/BuilderDoughSelector";
  import BuilderSizeSelector from "../modules/builder/components/BuilderSizeSelector";
  import BuilderIngredientsSelector from "../modules/builder/components/BuilderIngredientsSelector";
  import BuilderPizzaView from "../modules/builder/components/BuilderPizzaView";
  import BuilderPriceCounter from "../modules/builder/components/BuilderPriceCounter";
  import BuilderSauceSelector from "../modules/builder/components/BuilderSauceSelector";
  import pizza from "@/static/pizza.json";
  export default{
          data(){
              return{
                  pizza: pizza,
              }
          },
          components: {
          BuilderDoughSelector,
          BuilderSizeSelector,
          BuilderIngredientsSelector,
          BuilderSauceSelector,
          BuilderPizzaView,
          BuilderPriceCounter,
        },
      }
</script>

<style lang="scss" scoped>
  // @import "~@/assets/scss/blocks/diameter.scss";
  @import "~@/assets/scss/app.scss";
  // @import "~@/assets/scss/blocks/filling.scss";
  // @import "~@/assets/scss/blocks/ingredients.scss";
  @import "~@/assets/scss/blocks/pizza.scss";
</style>
