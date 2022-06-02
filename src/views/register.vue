<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <form @submit="onSubmit" class="">
        <div class="row">
          <label for="fullName">
            <span class="font-semibold">Full name</span>
            <input type="text" placeholder="Test..." 
            id="fullName"
            class="px-4 py-3 rounded-lg border-gray-100 mt-1" />
          </label>
        </div>
        <div class="row">
          <label for="fullName">
            <span class="font-semibold">Full name</span>
            <input type="text" placeholder="Test..." 
            id="fullName"
            class="px-4 py-3 rounded-lg border-gray-100 mt-1 mx-10" />
          </label>
        </div>
        <div class="row">
          <label for="fullName">
            <span class="font-semibold">Full name</span>
            <input type="text" placeholder="Test..." 
            id="fullName"
            class="px-4 py-3 rounded-lg border-gray-100 mt-1" />
          </label>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  setup () {
    function onSubmit() {}
    return {
      onSubmit
    }
  },
}
</script>