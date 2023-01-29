<template>
    <NavLinks/>
  <div class="profile-wrapper">
    <div v-if="!isLoading" class="profileView">
      <CustomCard>
        <template v-slot:image>
          <div class="picture"><img :src="authUser.avatar" class="card-img-top" alt=""></div>
        </template>
        <template v-slot:header>
          <h2 class="card-title">{{ authUser.name }}</h2>
        </template>
        <template v-slot:body>
          <p class="card-text">{{ authUser.email }}</p>
        </template>
        <template v-slot:footer>
          <h2 class="role">Role: {{ authUser.role }}</h2>
        </template>
      </CustomCard>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CustomCard from "../components/CustomCard.vue"
import NavLinks from "../components/NavLinks.vue"
import useAuthUser from '../composables/useAuthUser'

export default defineComponent({
  name: 'ProfileView',
  components: {
        NavLinks,
        CustomCard
  },
  setup() {
    const {authUser, isLoading, fetchAuthUser } = useAuthUser()
    fetchAuthUser()

    return{
      authUser, 
      isLoading, 
      fetchAuthUser
    }
  },
})
</script>

<style scoped>

.profile-wrapper {
  padding: 40px;
}

.card-title {
  font-weight: bold;
  text-align: left;
}
.card-text {
  text-align: left;
}
.role{
  font-size: 1.2rem;
  text-align: left;
}
.profileView{
    margin-top: -40px;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
}
</style>

