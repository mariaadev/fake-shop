<template>
 <div>
    <NavLinks @showAll="showAllProducts" />
    <div class="wrap-form">
    <form @submit.prevent="validateInput">
      <div class="input-group mb-3">
        <input v-model.lazy="inputFilter" type="text" class="form-control" placeholder="Search by name..."
          aria-label="Recipient's username" aria-describedby="button-addon2" minlength="3">
        <button class="btn btn-outline-secondary" type="submit" id="button-addon2">
          <img src="../assets/magnifying-glass.png" alt="">
        </button>
      </div>
    </form>
  </div>

    <div class="home">
      <div v-if="isLoading"> Loading... </div>
      <div class="product-list" v-else>
        <ProductItem v-for="product in productsFiltered" :key="product.id" :product="product" @goDetail="goDetail" />
      </div>

      <NavigationButtons @previous="showPrevious" @next="showNext" />
    </div>
  </div>

</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import { Product } from '../models/product'
import { useRouter } from 'vue-router'
import NavigationButtons from '../components/NavigationButtons.vue'
import NavLinks from "../components/NavLinks.vue"
import ProductItem from '../components/ProductItem.vue'
import useProducts from '../composables/useProducts'

export default defineComponent({
  name: 'HomeView',
  components: {
    ProductItem,
    NavLinks,
    NavigationButtons,
  },
  setup() {
    const {
      isLoading,
      products,
      productsLength,
      productsFiltered,
      fetchProducts,
      fetchProductByTitle,
      fetchProductByPagination
    } = useProducts()

    const router = useRouter()

    fetchProducts()
    let inputFilter = ref("")

    const limitShow = 20;
    const showAllProducts = () => {
      fetchProductByPagination({ offset: 0, limit: limitShow })
    }
    fetchProductByPagination({ offset: 0, limit: limitShow })
    const validateInput = () => {
      const filter = inputFilter.value.toLowerCase()

      for (let i = 0; i < productsLength.value; i++) {
        if (products.value[i].title.toLowerCase().includes(filter)) {
          const titleArray = products.value[i].title.split(" ")
          for (let j = 0; j < titleArray.length; j++) {
            if (titleArray[j].toLowerCase().includes(filter)) {
              fetchProductByTitle(titleArray[j])
            }
          }
        }
      }
    }

    let offset = 0;
    const showPrevious = () => {
      if (offset !== 0) {
        offset = offset - 20;
        fetchProductByPagination({ offset: offset, limit: limitShow })
      }
       
      
    }

    const showNext = () => {
      if (offset <= productsLength.value) {
        offset = offset + 20;
        fetchProductByPagination({ offset: offset, limit: limitShow })
      }

    }

    return {
      isLoading,
      products,
      productsFiltered,

      goDetail: (product: Product) => router.push({ name: 'detail', params: { id: product.id } }),

      validateInput,
      showAllProducts,
      inputFilter,
      showPrevious,
      showNext
    }
  }
})

</script>

<style scoped>

.wrap-form {
  display:flex;
  justify-content: center;
  align-items: center;
}
.product-list {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 30px 30px;
  margin-top: 40px;
  align-items: center;
  width: 100%;

}

form {
  display: flex;
  justify-content: center;
  width: 80%;
}

form div {
  width: 90%;
}

img {
  width: 30px;
  height: 30px;
}
</style>
