<template>
  <div>
    <AppLayoutHeader />

    <main class="content">
      <PizzaConstructor/>
    </main>
  </div>
</template>

<script>
import AppLayoutHeader from "@/layouts/AppLayoutHeader";
import PizzaConstructor from "@/views/Index";

export default {
  name: "AppLayout",
  components: {
    AppLayoutHeader,
    PizzaConstructor,
  },
};
</script>
