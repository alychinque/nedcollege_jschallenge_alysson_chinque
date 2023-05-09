<template>
  <main>
    <div class="title mt-5 mb-5">
      <h1>Latest Posts</h1>
    </div>
    <div class="header mt-5 mb-5">
      <h2>Messages</h2>
    </div>
    <table>
      <thead>
        <tr>
          <th>Author</th>
          <th>Title</th>
          <th>Date</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(post, index) in posts" :key="index">
          <td>{{ post.author }}</td>
          <td>
            <button @click="seePost(post)">Open</button>
            {{ post.title }}
          </td>
          <td>{{ post.date }}</td>
          <td>
            <button v-if="user" @click="editPost(post)">Edit</button>
            <button v-if="user" @click="deletePost(post)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <section>
      <div class="alert alert-warning center" role="alert">
        Register or Login to add a post
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          author: "John Doe",
          title: "My First Post",
          date: "2022-05-01",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          author: "Jane Smith",
          title: "My Second Post",
          date: "2022-05-02",
          content:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        // Add more posts as needed
      ],
    };
  },
  methods: {
    editPost(post) {
      // Implement edit functionality
    },
    deletePost(post) {
      // Implement delete functionality
    },
  },
};
</script>

<style>
table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
th {
  background-color: #f2f2f2;
  font-weight: bold;
}
button {
  margin-right: 5px;
}
@media (max-width: 768px) {
  th:nth-child(1),
  td:nth-child(1) {
    display: none;
  }
}
@media (max-width: 576px) {
  th:nth-child(3),
  td:nth-child(3) {
    display: none;
  }
}
</style>
