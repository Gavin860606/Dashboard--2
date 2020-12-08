<template>
  <div class="home">
    <!-- <Com0></Com0> -->
    <Header v-bind:msg="text"></Header>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
// import Com0 from '@/components/TestCom.vue';
import Header from "@/components/Header.vue";

export default {
  name: "about",
  components: {
    // Com0,
    Header,
  },
  data() {
    return {
      text: "About",
    };
  },
};
</script>

<style lang="scss" scoped></style>
