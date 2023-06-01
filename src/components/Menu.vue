<script>
import { faDumpster } from '@fortawesome/free-solid-svg-icons';

    export default {
        name: 'c-menu',
        emits: ['hovered'],
        props: {
            menu: Object,
            depth: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                collapse: true,
                hovered: false,
                childHovered: false,
            }
        },
        methods: {
            onToggle() {
                this.collapse = !this.collapse
                this.hovered = true
                // child is considered hovered when parent is not collapsed
                if (this.menu.subMenu) this.$emit('hovered', !this.collapse)
            },
            onMouseOver(e) {
                if (this.childHovered) return
                this.hovered = true
                if (this.menu.subMenu) {
                    this.$emit('hovered', this.hovered)
                }
            },
            onMouseLeave() {   
                this.hovered = false
                this.$emit('hovered', this.hovered)
            },
            onChildHovered(isHovered) {
                this.hovered = !isHovered
                this.childHovered = isHovered
            }
        }
    }
</script>

<template>
    <li @click.stop="onToggle" @mouseleave="onMouseLeave">
        <div v-if="menu.category" class="c-menu-category pt-5">
            <span class="mx-5 text-xs font-mono font-extrabold text-cyan-300 uppercase">{{ menu.label }}</span>
        </div>
        <div v-else>
            <div class="py-2 hover:bg-slate-800 hover:text-neutral-200">
                <a v-if="menu.uri" :href="menu.uri" class="flex mx-10 c-menu-item block font-sans font-normal">
                    <div class="flex-none text-center" :class="{'w-5': depth !== 0 || menu.icon}">
                        <c-icon v-if="menu.icon" :icon="menu.icon" class="fa-xs" />
                    </div>
                    <span class="flex-1">{{ menu.label }}</span>
                    <div v-if="menu.subMenu" class="flex-none text-center pl-5" :class="{'w-5': depth !== 0 || menu.icon}">
                        <c-icon :icon="collapse ? 'fa-solid fa-caret-right' : 'fa-solid fa-caret-down'" class="fa-xs"/>
                    </div>
                </a>
                <a v-else @click.prevent="() => hovered = true" href="#" class="flex mx-10 c-menu-item block font-sans font-normal">
                    <div class="flex-none text-center" :class="{'w-5': depth !== 0 || menu.icon}">
                        <c-icon v-if="menu.icon" :icon="menu.icon" class="fa-xs" />
                    </div>
                    <span class="flex-1">{{ menu.label }}</span>
                    <div v-if="menu.subMenu" class="flex-none text-center pl-5" :class="{'w-5': depth !== 0 || menu.icon}">
                        <c-icon :icon="collapse ? 'fa-solid fa-caret-right' : 'fa-solid fa-caret-down'" class="fa-xs"/>
                    </div>
                </a>
            </div>
            <ul v-if="menu.subMenu && this.collapse === false" class="c-sub-menu my-4 relative">
                <div 
                    v-if="hovered && !collapse"
                    class="c-menu-child-group border-2 border-r-0 border-t-0 border-slate-500 rounded-bl-md absolute left-[35px] h-[calc(100%-15px)] w-[15px]"
                ></div>
                <c-menu v-for="item in menu.subMenu" :menu="item" :depth="depth + 1" @hovered="onChildHovered" @mouseover.stop="onMouseOver" @mouseleave.stop="onMouseLeave"/>
            </ul>
        </div>
    </li>
</template>