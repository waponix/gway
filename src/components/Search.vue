<script>
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons'

    export default {
        props: {
            searchBy: {
                type: Array,
                default: null
            },
            searchByDate: {
                type: Array,
                default: null
            },
            placeholder: {
                type: String,
                default: 'Search'
            }
        },
        created() {
            for(const id in this.searchBy) {
                const label = this.searchBy[id]
                this.searchBySelection.push({
                    id, label, selected: false,
                })
            }

            for(const id in this.searchByDate) {
                const label = this.searchByDate[id]
                this.searchByDateSelection.push({
                    id, label, selected: false,
                })
            }
        },
        data() {
            return {
                toggle: false,
                search: '',
                searchBySelection: [],
                searchByDateSelection: [],
                class: {
                    cSearch: [
                        'shadow-inner',
                        'shadow-white',
                        'bg-gradient-to-b',
                        'from-neutral-200',
                        'to-transparent',
                        'relative',
                        'border',
                        'border-neutral-400',
                        'rounded-t-2xl',
                        'overflow-hidden',
                        'px-2',
                        'bg-white',
                        'z-[1000]',
                    ],
                    cSearchInput: [
                        'flex-grow',
                        'flex-auto',
                        'focus:outline-none',
                        'p-1',
                        'pl-2',
                        'min-w-[200px]',
                        'bg-transparent'
                    ],
                    cIcon: [
                        'relative',
                        'inline-block',
                        'text-neutral-500',
                        'text-sm',
                    ],
                    cSearchOptions: [
                        'absolute',
                        'flex-grow',
                        'flex-auto',
                        'w-full',
                        'border',
                        'border-t-0',
                        'border-neutral-400',
                        'rounded-b-2xl',
                        'bg-slate-200',
                        'shadow-inner',
                        'shadow-white',
                    ],
                    cSearchBy: [
                        'flex-initial', 
                        'text-sm', 
                        'mr-1.5', 
                        'mb-2',
                        'px-2', 
                        'py-0.5', 
                        'inline-block', 
                        'bg-cyan-600', 
                        'rounded text-white',
                        'hover:bg-cyan-700',
                        'hover:cursor-pointer',
                        'lowercase'
                    ]
                }
            }
        },
        computed: {
            classCSearch() {
                return [
                    {
                        'border-b-0': this.toggle,
                        'rounded-b-0': this.toggle,
                        'rounded-b-2xl': !this.toggle,
                    },
                    this.class.cSearch,
                ]
            },
            classCSearchInput() {
                return this.class.cSearchInput
            },
            classCIcon() {
                return this.class.cIcon
            },
            classCIconToggle() {
                return [
                    this.class.cIcon,
                    [
                        'rounded-full', 
                        'w-[12px]', 
                        'h-[12px]', 
                        'p-0.5', 
                        'hover:bg-neutral-400', 
                        'hover:text-white',
                    ],
                ]
            },
            classCSearchOptions() {
                return [{'hidden': !this.toggle}, this.class.cSearchOptions]
            },
            classCSearchBy() {
                return this.class.cSearchBy
            },
            classCSearchBySelected() {
                return [
                        'flex-initial', 
                        'text-sm', 
                        'mr-0.5', 
                        'px-2', 
                        'py-0', 
                        'inline-block', 
                        'bg-cyan-600', 
                        'rounded text-white',
                        'lowercase'
                    ]
            },
            showUnselected() {
                let selected = this.searchBySelection.filter(item => !item.selected)
                if (selected.length <= 0) this.toggle = false
                return selected
            },
            showSelected() {
                return this.searchBySelection.filter(item => item.selected)
            },
            showDateSelected() {
                return this.searchByDateSelection.filter(item => item.selected)
            },
            showDateUnselected() {
                let selected = this.searchByDateSelection.filter(item => !item.selected)
                if (selected.length <= 0) this.toggle = false
                return selected
            },
            isAvailable() {
                let flag = this.searchBy || this.searchByDate

                if (this.showSelected.length > 0) {
                    flag = this.showUnselected.length > 0
                } 
                
                if (this.showDateSelected.length > 0) {
                    flag = this.showDateUnselected.length > 0
                }

                return flag;
            }
        },
        methods: {
            toggleSelected(item) {
                item.selected = !item.selected
            }
        }
    }
</script>

<template>
    <div @mouseleave="() => toggle = false" class="c-search-container inline-block relative drop-shadow-lg z-[1000]">
        <div :class="classCSearch">
            <div class="flex justify-center items-center">
                <span class="flex-initial">
                <c-icon icon="fa-solid fa-magnifying-glass" :class="classCIcon"></c-icon>
                </span>
                <input @focus="() => toggle = false" type="text" class="c-search-input" :class="classCSearchInput" :placeholder="placeholder" v-model="search">
                <span v-if="showSelected.length || showDateSelected.length" class="c-search-selected-options flex-grow flex-auto italic text-sm">
                    <span v-if="showSelected.length" class="text-neutral-400">by: </span>
                    <span v-else-if="showDateSelected.length" class="text-neutral-400">by date: </span>
                    <span v-for="item in showSelected" class='c-search-by' :class="classCSearchBySelected" :key="item.id">
                        {{ item.label }}
                        <c-icon icon="fa-solid fa-close" class="ml-1 text-xs text-cyan-800 hover:text-cyan-100 hover:cursor-pointer" @click="toggleSelected(item)"></c-icon>
                    </span>
                    <span v-for="item in showDateSelected" class='c-search-by' :class="classCSearchBySelected" :key="item.id">
                        {{ item.label }}
                        <c-icon icon="fa-solid fa-close" class="ml-1 text-xs text-cyan-800 hover:text-cyan-100 hover:cursor-pointer" @click="toggleSelected(item)"></c-icon>
                    </span>
                </span>
                <span v-if="isAvailable" class="flex-initial" @click="() => toggle = !toggle">
                    <c-icon icon="fa-solid fa-ellipsis-vertical hover:cursor-pointer" :class="classCIconToggle"></c-icon>
                    <!-- <c-icon v-else icon="fa-solid fa-gear" :class="classCIconToggle"></c-icon> -->
                </span>
            </div>
        </div>
        <div class="c-search-options pl-2 pt-2" :class="classCSearchOptions">
            <div v-if="searchBy && showUnselected.length && !showDateSelected.length" class="mb-4">
                <small class="ml-2 font-normal text-sm text-neutral-500 text-left block mb-1">By:</small>
                <div class="flex flex-auto flex-wrap pl-2">
                    <span class='c-search-by' v-for="item in showUnselected" :class="classCSearchBy" :key="item.id" @click="toggleSelected(item)">{{ item.label }}</span>
                </div>
            </div>
            <div v-if="searchByDate && showDateUnselected.length && !showSelected.length" class="mb-4">
                <small class="ml-2 font-normal text-sm text-neutral-500 text-left block mb-1">By date:</small>
                <div class="flex flex-auto flex-wrap pl-2">
                    <span class='c-search-by' v-for="item in showDateUnselected" :class="classCSearchBy" :key="item.id" @click="toggleSelected(item)">{{ item.label }}</span>
                </div>
            </div>
        </div>
    </div>
</template>