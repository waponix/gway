<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        
        props: {
            default: Number,
            min: Number,
            max: Number,
        },
        created() {
            this.value = this.default || this.value;
            this.disValue = this.value;
        },
        data() {
            return {
                xPos: <null|number> null,
                step: <number> 5,
                value: <number> 1,
                disValue: <number> 1,
                diff: <number> 0,
                flags: {
                    isMouseDown: <boolean> false,
                    isEditable: <boolean> false,
                }
            }
        },
        methods: {
            onSliderInput(e: KeyboardEvent) {
                let key = e.key

                if (key === 'Enter') {
                    this.flags.isEditable = false;
                    return true;
                }
            },
            onSliderMouseMove(e: MouseEvent) {
                this.flags.isMouseDown = true
                this.xPos = e.pageX
            },
            onSliderMouseUp() {
                this.flags.isEditable = true;
                this.onMouseUp();
            },
            onMouseUp() {
                this.flags.isMouseDown = false
                this.xPos = null
                this.value = this.disValue
                this.diff = 0
            },
            onMouseMove(e: MouseEvent)
            {
                if (this.xPos === null) return
                
                let x = e.pageX

                this.diff = Math.floor(Math.abs((this.xPos - x) / this.step))

                this.disValue = (x > this.xPos) ? this.value + this.diff : this.value - this.diff
        
                if (this.min !== undefined && this.disValue < this.min) {
                    this.value = this.min
                    this.disValue = this.min
                } 

                if (this.max !== undefined && this.disValue > this.max) {
                    this.value = this.max
                    this.disValue = this.max
                } 
            }
        }
    })
</script>

<template>
    <div class="number-slider">
        <div ref="slider"
            class="number-slider slider" 
            :contenteditable="flags.isEditable"

            @mouseup.prevent="() => flags.isEditable = true"
            @blur.prevent="() => flags.isEditable = false"
            @keypress="onSliderInput"
        >
            {{ disValue }}
        </div>
        <div 
            v-if="flags.isMouseDown"
            @mouseup.prevent="onMouseUp"
            @mousemove.prevent="onMouseMove"
            class="number-slider mouse-tracker"
        >
        </div>
        <input type="hidden" v-model="value">
    </div>
  </template>
  
  <style>
  * {
    position: relative;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  .number-slider {
    display: inline;
  }

  .number-slider.slider:hover {
    cursor: e-resize;
  }
  
  .number-slider.mouse-tracker {
    position: fixed;
    display: block;
    z-index: 999999;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
  
  .number-slider.mouse-tracker:hover {
    cursor: e-resize;
  }
  </style>