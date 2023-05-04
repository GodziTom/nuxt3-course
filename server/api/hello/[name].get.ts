export default defineEventHandler((event)=>{
    if(event.req.method !== 'GET') {
        throw new Error('Only GET requests are allowed')
    }
    return { hello: event.context.params.name }
})