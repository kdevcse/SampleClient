<template>
  <v-container>
    <v-alert
      v-if="alert.show"
      closable
      :title="alert.title"
      :text="alert.text"
      :type="alert.type"
    ></v-alert>
    <v-text-field
      v-model="user_id"
      label="User Id"
    ></v-text-field>
    <v-btn @click="handleGetUser">Get User</v-btn>
    <v-btn @click="handleDeleteUser">Delete User</v-btn>
  </v-container>
</template>
<script setup>
import { get_user, delete_user } from '../api/user-api';
import { ref } from 'vue';

const alert = ref({
  show: false,
  title: "Alert title",
  text: "...",
  type: "error",
});

const user_id = ref();

async function handleGetUser() {
  console.log('get');
  if (!user_id.value) {
    return;
  }

  const response = await get_user(user_id.value);
  alert.value = {
    show: true,
    title: "GET User Data",
    text: `Successfully retrieved data for user: ${response.user.userName}`,
    type: "success",
  };
}

async function handleDeleteUser() {
  console.log('delete');
  if (!user_id.value) {
    return;
  }

  const response = await delete_user(user_id.value);
  alert.value = {
    show: true,
    title: "User Deleted",
    text: `Successfully deleted data for userId: ${response.id}`,
    type: "success",
  };
}
</script>
<style scoped>

</style>