import { createToaster } from "@meforma/vue-toaster";

export default defineNuxtPlugin(nuxtApp => {
    // Create a toaster notification
    const toaster = createToaster({ 
        position: 'top-right',
    })
     // providing the toaster to the app context
    nuxtApp.provide('toast', toaster)
})

// file en .client pour que le plugin fonction uniquement coté client ( possibilité .server)