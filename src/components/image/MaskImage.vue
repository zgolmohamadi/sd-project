<template>
  <div class="flex-row">
 
    <div class="flex justify-center mb-7">
        <vue-drawing-canvas
        ref="VueCanvasDrawing"
        v-model:image="image"
        :width="600"
        :height="400"
        :stroke-type="strokeType"
        :line-cap="lineCap"
        :line-join="lineJoin"
        :fill-shape="fillShape"
        :eraser="eraser"
        :lineWidth="line"
        :color="color"
        :background-color="backgroundColor"
        :background-image="backgroundImage"
        :watermark="watermark"
        :initial-image="initialImage"
        saveAs="png"
        :styles="{
          border: 'solid 1px #000',
        }"
        :lock="disabled"
        @mousemove="getCoordinate($event)"
        :additional-images="additionalImages"
      />

    </div>
      <div class="flex justify-between">
        <div class="flex">
          <div
            class="flex items-center"
            @click.prevent="eraser = false"
          >
            <button
              type="button"
              class="flex border rounded-lg p-3 border-black"
            >
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.3511 2.79953C16.8774 6.47744 9.42615 13.9166 9.42615 13.9166L9.42323 13.9137C9.40573 13.9329 9.3899 13.9529 9.37115 13.9716C8.90281 14.4391 8.2674 14.6283 7.65698 14.5562C7.85323 15.3779 7.64615 16.2799 7.0199 16.922C7.0199 16.922 3.88656 20.7966 0.414062 18.3554C0.414062 18.3554 2.28656 17.8308 2.44948 16.3199C2.44948 16.3199 2.19948 14.7974 3.57406 13.3866C4.19031 12.7541 5.0524 12.537 5.84281 12.7216C5.77948 12.1199 5.96906 11.4966 6.43073 11.0354C6.44906 11.0166 6.46948 11.0008 6.48865 10.9829L6.48573 10.9799C6.48573 10.9799 13.9324 3.53661 17.6157 1.06619C18.1032 0.717445 18.7841 0.758278 19.2216 1.19536C19.6603 1.63328 19.7007 2.31286 19.3511 2.79953ZM6.4399 13.9524C6.13073 13.6433 5.7299 13.467 5.30115 13.467C4.87073 13.467 4.46406 13.6404 4.15781 13.9549C3.10156 15.0391 3.2599 16.2816 3.26406 16.3204C3.17323 17.162 2.69615 17.8791 2.19865 18.3104C2.37448 18.3424 2.5524 18.3587 2.73406 18.3587C4.71323 18.3587 6.38073 16.417 6.39615 16.3987C6.39656 16.3987 7.5374 15.0504 6.4399 13.9524ZM6.66406 12.5033C6.66406 12.8349 6.78448 13.1474 7.0199 13.382C7.25531 13.617 7.58156 13.7533 7.91406 13.7533C8.24656 13.7533 8.54698 13.6174 8.7749 13.3891L9.4224 12.7349C9.45531 12.7012 9.50031 12.6554 9.53656 12.6183L7.78781 10.8695C7.74948 10.9066 7.7024 10.952 7.66823 10.9858L7.01948 11.6262C6.78448 11.8604 6.66406 12.1716 6.66406 12.5033ZM18.6332 1.78578C18.5295 1.68203 18.4082 1.66661 18.3445 1.66661C18.2561 1.66661 18.172 1.69328 18.0799 1.75911C15.4891 3.49661 10.5803 8.16203 8.37115 10.302L10.1041 12.0349C12.2457 9.82828 16.9224 4.91703 18.6741 2.31328C18.7924 2.14911 18.7753 1.92703 18.6332 1.78578Z"
                    fill="black"
                  />
                </svg>
              </span>
            </button>
            <div class="ml-4 flex items-center">
              <div class="w-[150px]">
                <vue-slider
                  v-model="line"
                  ref="slider"
                  v-bind="options"
                  :tooltip-formatter="formatter1"
                />
              </div>
              <label
                class="ml-3 bg-blue-10 text-white rounded px-1 text-[10px]"
                >{{ line + ' %' }}</label
              >
            </div>
          </div>
          <div
            class="ml-[50px] flex items-center"
            @click.prevent="eraser = true"
          >
            <button
              type="button"
              class="flex border rounded-lg p-3 border-black"
            >
              <span>
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.197 0.439342C10.7828 -0.146447 11.7325 -0.146447 12.3183 0.439342L16.561 4.68198C17.1468 5.26777 17.1468 6.21751 16.561 6.8033L8.36408 15.0002H13.5001C13.7762 15.0002 14.0001 15.2241 14.0001 15.5002C14.0001 15.7764 13.7762 16.0002 13.5001 16.0002H6.81974C6.40996 16.0217 5.99303 15.876 5.68003 15.5629L1.43738 11.3203C0.851602 10.7345 0.851602 9.7848 1.43738 9.199L10.197 0.439342ZM11.6112 1.14645C11.416 0.951182 11.0994 0.951182 10.9041 1.14645L4.53846 7.51212L9.48822 12.4619L15.8539 6.09619C16.0491 5.90093 16.0491 5.58435 15.8539 5.38909L11.6112 1.14645ZM8.7811 13.169L3.83135 8.2192L2.14449 9.9061C1.94923 10.1014 1.94923 10.4179 2.14449 10.6132L6.38713 14.8558C6.58239 15.0511 6.89898 15.0511 7.09424 14.8558L8.7811 13.169Z"
                    fill="#212121"
                  />
                </svg>
              </span>
            </button>
            <div class="ml-4 flex items-center">
              <div class="w-[150px]">
                <vue-slider
                  v-model="line"
                  ref="slider"
                  v-bind="options"
                  :tooltip-formatter="formatter1"
                />
              </div>
              <label
                class="ml-3 bg-blue-10 text-white rounded px-1 text-[10px]"
                >{{ line + ' %' }}</label
              >
            </div>
          </div>
        </div>
        <div class="flex">
       
          <button
            type="button"
            @click.prevent="cancel()"
            class="border border-blue-10  h-[30px] w-[100px] rounded-2xl mr-3"
          >
            back
          </button>
          <button
            type="button"
            @click.prevent="getStrokes()"
            class="bg-blue-10 text-white h-[30px] w-[100px] rounded-2xl"
          >
            Save
          </button>
        </div>
      </div>
  </div>
</template>

<script>
import VueDrawingCanvas from 'vue-drawing-canvas';
// import Slider from '@vueform/slider'
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/antd.css';
export default {
  components: {
    VueDrawingCanvas,
    VueSlider,
  },
  props: ['selectedImage'],
  emits: ['closeMask'],
  data() {
    return {
      options: {
        dotSize: 6,
        width: 'auto',
        height: 2,
        contained: false,
        direction: 'ltr',
        data: null,
        dataLabel: 'label',
        dataValue: 'value',
        min: 1,
        max: 100,
        interval: 1,
        railStyle: { backgroundColor: '#F0F0F0' },
        processStyle: { backgroundColor: '#1E1E1E' },
        dotStyle: { backgroundColor: '#1E1E1E', border: 'none' },
        tooltip: 'none',
        tooltipPlacement: 'top',
      },
      formatter1: '{value}%',
      initialImage: [
        {
          type: 'dash',
          from: {
            x: 262,
            y: 154,
          },
          coordinates: [],
          color: '#000000',
          width: 5,
          fill: false,
        },
      ],
      x: 0,
      y: 0,
      image: '',
      eraser: false,
      disabled: false,
      fillShape: true,
      line: 1,
      color: '#182485',
      strokeType: 'dash',
      lineCap: 'round',
      lineJoin: 'miter',
      backgroundColor: '#FFFFFF',
      backgroundImage: this.selectedImage.imageSrc,
      watermark: null,
      additionalImages: [],
    };
  },
  mounted() {
    if ('vue-drawing-canvas' in window.localStorage) {
      this.initialImage = JSON.parse(
        window.localStorage.getItem('vue-drawing-canvas')
      );
    }
  },
  methods: {
    async setImage(event) {
      let URL = window.URL;
      this.backgroundImage = URL.createObjectURL(
        event.target.files[0]
      );
      await this.$refs.VueCanvasDrawing.redraw();
    },
    async setWatermarkImage(event) {
      let URL = window.URL;
      this.watermark = {
        type: 'Image',
        source: URL.createObjectURL(event.target.files[0]),
        x: 0,
        y: 0,
        imageStyle: {
          width: 600,
          height: 400,
        },
      };
      await this.$refs.VueCanvasDrawing.redraw();
    },
    getCoordinate(event) {
      let coordinates =
        this.$refs.VueCanvasDrawing.getCoordinates(event);
      this.x = coordinates.x;
      this.y = coordinates.y;
    },

    getStrokes() {
      window.localStorage.setItem(
        'vue-drawing-canvas',
        JSON.stringify(this.$refs.VueCanvasDrawing.getAllStrokes())
      );
      this.$emit('closeMask', this.image);
      window.localStorage.removeItem("vue-drawing-canvas");
    },
    cancel() {
        window.localStorage.removeItem("vue-drawing-canvas");
      this.$emit('closeMask');
    },
  },
};
</script>
<style src="@vueform/slider/themes/default.css"></style>
