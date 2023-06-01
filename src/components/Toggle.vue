<script>
    export default {
       props: {
        id: String,
        name: String,
       },
       emits: ['toggle'],
       data() {
            return {
                toggle: false
            }
       },
       methods: {
            onToggle() {
                this.toggle = !this.toggle
                this.$emit('toggle', this.toggle)
            }
       },
       computed: {
            toggleBgClass() {
                return {
                    'bg-slate-400': !this.toggle,
                    'bg-cyan-400': this.toggle,
                }
            },
            toggleBtnClass() {
                return {
                    'left-[2px]': !this.toggle,
                    'right-[2px]': this.toggle,
                }
            }
       }
    }
</script>

<template>
    <div @click="onToggle">
        <input type="hidden" :id="id" :name="name" v-model="toggle">
        <div class="flex w-[30px] border-0 shadow-inner h-[16px] rounded-full relative hover:cursor-pointer overflow-hidden" :class="toggleBgClass">
            <div class="drop-shadow-md shadow-xs shadow-inner absolute bg-white top-[calc(50%-(11px/2))] w-[11px] h-[11px] rounded-full" :class="toggleBtnClass"></div>
        </div>
    </div>
</template>