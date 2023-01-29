<template>
    <div>
        <nav>
            <div class="side-links">
                <ul>
                <li>
                    <router-link to="/" @click="showAllProducts">All products</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'profile'}">Profile</router-link>
                </li>
            </ul>
            </div>
            <div class="logOut">
               <img @click="logout" src="../assets/log-out.png" alt="">
            </div>
        </nav>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useAuthUser from '../composables/useAuthUser'

export default defineComponent({
    setup(props, { emit }) {
        const showAllProducts = () =>{
            emit("showAll")
        }
        const { deleteToken } = useAuthUser();
        const logout = () => {
            deleteToken();
        }

        return { 
            showAllProducts,
            logout,
        }
    },
})
</script>

<style scoped>
nav { 
    width: 100%;
    height: 80px;
    background-color: white;
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
    align-items: center;
}

.logOut {
    padding: 10px;
}
.logOut img {
    width: 50px;
    height: 50px;
    cursor: pointer;
    margin: 0px 30px 0px 0px;
}
ul {
    display: flex;
    justify-content: center;
    list-style: none;
}
li {
    padding: 1rem;
    font-weight: bold;
    font-size: x-large;
}
a {
    color: #210e3d;
    text-decoration: none;
}
a:hover {
    color: rgba(189, 181, 255, 0.9);
}

</style>