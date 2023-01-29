<template>
    <NavLinks/>
    <div class="detail-wrapper">
        <div v-if="!isLoading" class="detailView">
            <CustomCard>
                <template v-slot:image>
                    <div v-if="!activePicture" class="profile">
                        <div class="picture"><img :src="product.images[0]" class="card-img-top" alt=""></div>
                    </div>

                    <div v-else>
                        <div class="picture"><img :src="activePicture" class="card-img-top" alt=""></div>
                    </div> 

                    <div class="pictures">
                        <div v-for="(image, index) in product.images" :key="index">
                                <img :src=image class="card-img-top" @click="changePicture(index)">
                        </div>
                    </div>

                </template>
                <template v-slot:header>
                    <h2 class="card-title">{{ product.id }}. {{ product.title }}</h2>
                </template>
                
                <template v-slot:body>
                    <p class="card-text">{{ product.description }}</p>
                </template>
                <template v-slot:footer>
                    <h2 class="price">Price: {{ product.price }}$</h2>
                </template>

            </CustomCard>
        </div>
        <div v-else>Cargando...</div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onMounted, ref } from 'vue'
import CustomCard from "../components/CustomCard.vue"
import NavLinks from "../components/NavLinks.vue"
import useProducts from '../composables/useProducts'

export default defineComponent({
    name: 'DetailView',
    components: {
        NavLinks,
        CustomCard,
    },
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    setup(props) {
        const {product, fetchProductById, isLoading} = useProducts()
        fetchProductById(props.id)
        let activePicture = ref()
        const changePicture = (index: number) => {
            activePicture.value = product.value.images[index]
        }
        return {
            product,
            isLoading,
            activePicture,
            changePicture
        }
    }
})
</script>

<style scoped>

.card-title {
    padding: 5px;
    font-weight: bold;
    text-align: left;
}

.card-text {
    padding: 5px;
    text-align: left;
}

.price {
    padding: 5px;
    font-size: 1.4rem;
    text-align: left;
}
.detail-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
}
.pictures .card-img-top:hover{
    opacity: 0.5;
}

div .pictures {
    max-width: 385px;
}
.card-img-top {
    cursor: pointer;
}
.detailView{
    margin-top: -40px;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
}
.pictures{
    width: 900px;
    display:flex;
}

.pictures img{
    width: 140px;
    margin:10px;
    border-radius: 8px;
}
</style>