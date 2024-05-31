<script setup>
defineProps({
    title: String,
    description: String
})
</script>

<template>
    <section class="grid place-items-center h-[100dvh]">
        <div class="text-center flex flex-col gap-2">
            <h1 class="text-blue-500">{{ title }}</h1>
            <h3>{{ description }}</h3>
        </div>
    </section>
</template>