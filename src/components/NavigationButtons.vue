<template>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item"><a class="page-link" href="#" @click="$emit('previous')">Back</a></li>
        <li class="page-item"><a class="page-link" href="#" @click="$emit('next')">Next</a></li>
      </ul>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'CustomCard',
})
</script>

<style>

nav {
  padding: 30px;
}
a{
  width: 160px;
}

</style>