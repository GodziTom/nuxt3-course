
<script setup>

import { ShoppingBagIcon } from '@heroicons/vue/outline'



    const config = useRuntimeConfig()
    const { totalProducts} = useCart()
    
    const menuCategoryItems = config.public['categories'].map(category => {
        return {
            path : '/category/' + category.id,
            title : category.title
        }
    })

   



    const menuItems = [
        { path : '/', title : 'Accueil'},
        ...menuCategoryItems
    ]

    // const route = useRoute()
    // console.log(route);
    const description = ref('My amazing site.')
    useHead({
        title : 'DT Merch',
        meta: [
            { name: 'description', content: description, title : 'DT Merch' },
        ],
        link : [
            { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
            { href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap', rel: 'stylesheet' }
        ],
        script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
    })
</script>

<template>
    <!-- <head>
        <title>DT Merch</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css">
    </head> -->
    <div class="flex h-full">
       
            <!-- START : SIDEBAR -->
            <div class="fixed top-0 bottom-0 left-0 w-64 py-5 bg-primary text-primary-content">
                <h1 class="mt-5 px-5 text-2xl font-bold">GodziShop    
                    <div @click="$router.push('/cart')" class="indicator">
                        <span class="indicator-item badge badge-primary">{{ totalProducts }}</span>
                        <button class="btn btn-square btn-outline btn-secondary">
                            <ShoppingBagIcon class="w-6"/>
                        </button> 
                    </div>
                </h1>
                <ul class="menu  w-full mt-10 px-0">
                    <li v-for="menuItem in menuItems" :class="menuItem.path === $route.path ? 'bordered' : 'hover-bordered'">
                        <NuxtLink :to="menuItem.path"> {{ menuItem.title }}</NuxtLink>
                    </li>
                </ul>
            </div>

            <!-- END : SIDEBAR -->

            <!--START : PAGE-->
            <div class="w-full pl-64">
                <slot />
            </div>

            <!--END : PAGE-->

        
    </div>
</template>

<style scooped>
.menu li.hover-bordered a:hover, .menu li.bordered a{
    @apply border-primary-content
}
</style>