<template>
    <div class="product-item">
        <div class="col">
            <div class="card">
                <img :src="product.images[0]" class="card-img-top" :alt="product.title">
                <div class="card-body">
                    <h5 class="card-title">{{ product.id }}. {{ product.title }}</h5>
                    <p class="card-text">Price: {{ product.price }}$</p>
                    <button class="button-details">
                    <a class="card-link" @click="$emit('goDetail', product)">Details</a>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Product } from '../models/product'

export default defineComponent({
    props: {
        product: {
            type: Object as PropType<Product>,
            required: true,
        }
    },
})
</script>

<style scoped>

.card-text {
    font-weight: lighter;
    font-size: 1rem;
}
.card-title {
    height: 50px;
    font-weight: bold;
    font-size: 1.2rem;
}
.card-link {
    color: white;
    text-align: start;
    text-decoration-line: none;
    cursor: pointer;
}


.card-body {
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
}
.product-item {
    width: 300px;
    display: flex;
}

.button-details {
    background-color: rgb(153, 127, 255);
    border: none;
    border-radius: 20px;
    width: 70px;
    height: 35px;
}
.button-details:hover {
    background-color: rgb(197, 188, 255);
    transition: 0.3s ease-in-out;
}
</style>