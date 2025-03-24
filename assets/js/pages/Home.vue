<script lang="ts" setup>
import Button from '@/components/ui/button/Button.vue';

const handleVisitUrl = (url) => {
    window.open(url, '_blank')
}

defineProps({
    title: String,
})
</script>

<template>
    <section class="grid place-items-center h-[100dvh]">
        <div class="px-4 max-w-3xl sm:px-6 lg:px-8">
            <h1>
                {{ title }}
            </h1>
            <ul>
                <li>Get started by editing the <code>pages/Home.vue</code> file</li>
                <li>Save and see your changes instantly</li>
            </ul>

            <div class="flex">
                <Button class="cursor-pointer" @click="handleVisitUrl('https://djangoproject.com')">Read
                    documentation</Button>
                <Button class="cursor-pointer" variant="link" @click="handleVisitUrl('https://www.shadcn-vue.com')">View
                    components</Button>
            </div>
        </div>
    </section>
</template>
