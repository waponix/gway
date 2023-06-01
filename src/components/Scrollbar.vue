<script>
    export default {
        props: {
            sx: {
                type: Boolean,
                default: false
            },
            sy: {
                type: Boolean,
                default: true
            }
        }
    }
</script>

<template>
    <div class="c-scrollbar overflow-hidden" :class="{'hover:overflow-x-auto': sx, 'hover:overflow-y-auto': sy}">
        <slot></slot>
    </div>
</template>