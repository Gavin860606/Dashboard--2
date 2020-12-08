<template>
  <div class="infoCard">
    <Header msg="I'm infoCard Page"></Header>
    <button @click="getTodoInfo()">All</button>
    <input v-model="userId" />
    <button @click="getTodoInfo(userId)">Search</button>
    <h3 class="infoLength">資料數量: {{ infoLength }}</h3>
    <h3 class="completeLength">完成數量: {{ completeLength }}</h3>
    <div class="cardGroup">
      <Card
        v-for="(data, idx) in cardInfo"
        :userId="data.userId"
        :id="data.id"
        :title="data.title"
        :completed="data.completed"
        :key="idx"
      ></Card>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Card from "@/components/Card.vue";
import axios from "axios";

export default {
  components: {
    Header,
    Card,
  },
  created() {
    this.getTodoInfo();
  },
  data() {
    return {
      userId: "",
      cardInfo: [
        {
          userId: 1,
          id: 1,
          title: "delectus aut autem",
          completed: false,
        },
        {
          userId: 1,
          id: 2,
          title: "quis ut nam facilis et officia qui",
          completed: false,
        },
        {
          userId: 1,
          id: 3,
          title: "fugiat veniam minus",
          completed: true,
        },
      ],
    };
  },
  methods: {
    getTodoInfo(id) {
      let url = `https://jsonplaceholder.typicode.com/users/${id}/todos/`;
      if (!id) {
        url = "https://jsonplaceholder.typicode.com/todos/";
        this.userId = "";
      }
      axios
        .get(url)
        .then((data) => {
          this.cardInfo = data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {
    infoLength() {
      return this.cardInfo.length;
    },
    completeLength() {
      return this.cardInfo.filter((item) => item.completed).length;
    },
  },
};
</script>
<style lang="scss" scoped>
.cardGroup {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
