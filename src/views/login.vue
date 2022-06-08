<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <form @submit.prevent="onSubmit" class="flex flex-col justify-start space-y-6">
        <div class="row">
          <label for="email" class="flex flex-col">
            <span class="font-semibold">Email</span>
            <input type="text" placeholder="Test..." 
            id="email" v-model="email"
            class="px-4 py-3 rounded-lg border border-gray-300 mt-1" />
          </label>
        </div>
        <div class="row">
          <label for="password" class="flex flex-col">
            <span class="font-semibold">Password</span>
            <input type="password" placeholder="Test..." 
            v-model="password"
            id="password"
            class="px-4 py-3 rounded-lg border border-gray-300 mt-1" />
          </label>
        </div>
        <div class="row">
          <button type="submit" class="py-3 text-center w-full bg-primary text-white font-bold rounded-lg">Sign up</button>
        </div>
      </form>
      <div class="w-full text-center mt-6">
        <span class="font-semibold">I'm new user</span>
        <span class="ml-1">
          <router-link :to="{ name: 'Register', params: {} }" class="text-primary font-bold">
            Sign Up
          </router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useSignIn } from '../composables/useSignIn.js'

export default {
  setup () {
    const { signIn, isPending, error } = useSignIn();
    const email = ref(null);
    const password = ref(null);

    async function onSubmit() {
      await signIn(email.value, password.value)
    }

    return {
      onSubmit,
      email,
      password,
      error,
      isPending
    }
  },
}
</script>