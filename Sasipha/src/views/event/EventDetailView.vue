<script setup lang="ts">
import {ref} from 'vue'
import {type EventItem} from '@/type'
import EventService from '@/services/EventService'
const event = ref<EventItem | null>(null)

const props = defineProps({
    id: String
})

EventService.getEventByID(Number(props.id)).then((response)=> {
    event.value = response.data
}).catch(error => {
    console.log(error)
})

</script>

<template>
    <div v-if="event">
    <h1>{{ event.title }}</h1>
    <div id="nav">
        <router-link :to="{name: 'EventDetails' , params: {id}}" > Details </router-link> 
        |
        <router-link :to="{name: 'EventRegister' , params: {id}}" > Register </router-link> 
        |
        <router-link :to="{name: 'EventEdit' , params: {id}}" > Edit </router-link> 

    </div>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
    </div>
</template>