<template>
    <div class="login">
        <h1 class="title">Log In.</h1>
        <form class="form" @submit.prevent="getToken">
        <fieldset>
            <label for="email" class="form-label">Email address</label>
            <input v-model.lazy="email" type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="john@mail.com" required>
            <div id="emailHelp" class="form-text">Use a valid email address.</div>
        </fieldset>
        <fieldset>
            <label for="password" class="form-label">Password</label>
            <input v-model.lazy="password" type="password" class="form-control" id="password" placeholder="changeme" required>
        </fieldset>
        <button type="submit" class="btn btn-primary">Log In</button>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import useAuthUser from '../composables/useAuthUser'
export default defineComponent ({
    setup() {
        const { fetchToken } = useAuthUser()
        let email = ref("")
        let password = ref("")
        const getToken = () => {
            fetchToken({email: email.value, password: password.value})
        }
        return{
            email,
            password,
            getToken
        }
    }
});
</script>

<style scoped>
.title {
    margin: 2rem;
    text-align: center;
    color: #210e3d;
}
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  background: rgba(189, 181, 255, 0.9);
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}

fieldset {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px;
}

button{
    align-self: center;
    width: 200px;
    height: 40px;
    border: none;
    background: #22153f;
    margin: 10px;
}

button:hover{
    background: #794ed4;
}
</style>