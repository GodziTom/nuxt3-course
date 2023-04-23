<script setup>
    const products = [
        {
            name : 'Shoes',
            price : 100,
            imageSrc : 'https://picsum.photos/id/1005/400/250'
        },
        {
            name : 'T-shirt',
            price : 50,
            imageSrc : 'https://picsum.photos/id/1005/400/250'
        },
        {
            name : 'Casquette',
            price : 20,
            imageSrc : 'https://picsum.photos/id/1005/400/250'
        }
    ]
</script>


<template>
    <div>
        <h1 class="text-5xl text-center">Catégorie : {{ $route.params.categoryName }}</h1>
        <cards-container class="mt-10">
            <product-card v-for="product in products"
                :name="product.name"
                :price="product.price"
                :imageSrc="product.imageSrc"
            />
        </cards-container>
       
    </div>
</template>
