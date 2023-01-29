<template>
    <nav>
        <div class="h2">   
            <div class="image-wrapper">
                <img alt="Fake Shop logo" src="../assets/fake-shop.png">
            </div>          
            
            <div class="text-wrapper">
            <h1>{{title}}</h1>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

interface NavbarProps {
  title: string,
}

export default defineComponent({
    name: 'NavBar',
    props: {
        title: {
            type: String,
            default: "Fake Shop",
            required: true
        },
    }
})
</script>

<style scoped>
    nav {
        width: 100%;
        height: 90px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color:  rgba(189, 181, 255, 0.9) ;
        color: white;
        font-weight: bold;
    }
    div{
        display: flex;
        padding: 10px
    }

    h1 {
    color: white;
    font-size: 1.5rem;
    font-weight: bolder;
    padding: 10px;
    }
    div .image-wrapper {
        display: flex;
        width: 80px;
        height: 80px;
    }
    .text-wrapper {
        display:flex;
        justify-content: center;
        align-items: center;
    }
</style>