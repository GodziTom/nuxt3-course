export default defineNuxtPlugin(nuxtApp => {

    //Helper for getting the name of the category from its id
    nuxtApp.provide('getCategoryTitle', (categoryId) => {
        const config = useRuntimeConfig()
        // console.log(config.public['categories'])
        const category = config.public['categories'].find(category => category.id === categoryId)
        return category ? category.title : 'Inconnue'
    })
})