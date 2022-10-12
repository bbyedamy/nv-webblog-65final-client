<template>
    <div>
      <h1>Show User</h1>
      <p>id: {{ blog.id }}</p>
      <p>ชื่อ-นามสกุล: {{ blog.name }} - {{ blog.lastname }}</p>
      <p>email: {{ blog.email }}</p>
      <p>password: {{ blog.password }}</p>
    </div>
  </template>
  <script>
  import BlogService from "@/services/BlogService";
  
  export default {
    data() {
      return {
        user: null
      };
    },
    async created() {
      let userId = this.$route.params.userId;
      this.user = (await UserService.show(userId)).data
      console.log(this.userId)
    }
  };
  </script>
  <style scoped></style>
  