<template>
  <div
    class="w-full h-screen bg-grayTr-450 fixed top-0 left-0 right-0 flex items-center justify-center"
  >
    <div class="w-[460px] rounded-2xl bg-white py-6 px-8">
      <div class="relative">
        <label class="text-2xl block text-center">Upload Image</label>
        <button
          class="absolute right-0 top-2"
          @click="$emit('closeModal')"
        >
          <CloseIcon />
        </button>
      </div>
      <div
        class="border border-dashed rounded-2xl py-9 mt-9 mb-5 relative"
      >
        <input
          @change="handleImage"
          class="invisible h-0 overflow-hidden"
          type="file"
          accept="image/*"
          ref="file"
        />
        <div
          class="relative z-0 flex flex-col items-center justify-center"
          @click="chooseFiles()"
        >
          <img
            v-if="image"
            :src="image"
            class="h-[100px] max-w-max object-cover"
          />
          <span v-else class="h-[70px]">
            <UploadIcon />
          </span>
          <label v-if="name">{{ name }}</label>
          <label v-else class="text-lg text-customGray-10 mt-2"
            >Select Image / Drag Here</label
          >
          <label class="text-xd text-customGray-20"
            >Maximum Size : 1 MB
          </label>
        </div>
      </div>

      <div class="flex flex-col">
        <label class="text-[10px]">Image Name</label>
        <input
          v-model="name"
          placeholder="Enter Image Name"
          class="rounded-lg bg-customGray-30 focus:bg-white focus:shadow-focus border-none h-10 mt-1 px-3 border"
        />
      </div>
      <div class="flex flex-col mt-4">
        <label class="text-[10px]">Select Image Category</label>
        <select
          v-model="imageCategory"
          class="rounded-lg bg-customGray-30 focus:bg-white border-none h-10 mt-1 px-3 focus:shadow-focus"
        >
          <option disabled value="" selected>Catgory Options</option>
          <option
            v-for="option in imageCategories"
            :value="option.value"
            :key="option.id"
          >
            {{ option.text }}
          </option>
        </select>
      </div>
      <button
        class="bg-blue-10 text-white rounded-3xl h-[30px] w-[100px] mt-5 mx-auto"
        @click="uploadImage"
      >
        Save
      </button>
    </div>
  </div>
</template>
<script>
import UploadIcon from '../icons/IconUpload.vue';
import { store } from '../../store';
import CloseIcon from '../icons/CloseIcon.vue';
import router from '../../router/index';
export default {
  components: { UploadIcon, CloseIcon },
  emits: ['closeModal'],
  props: {
    imageName: {
      type: String,
      default: '',
    },
    imageCategory: {
      type: String,
      default: null,
    },
    imageSrc: {
      type: String,
      default: null,
    },
    imageId: {
      type: String,
      default: new Date(),
    },
  },
  data() {
    return {
      imageCategories: store.imageCategories,
      image: this.imageSrc,
      name: this.imageName,
      loading: false,
    };
  },
  methods: {
    chooseFiles() {
      const fileInputElement = this.$refs.file;
      fileInputElement.click();
    },

    handleImage(e) {
      const selectedImage = e.target.files[0]; // get first file
      this.name = selectedImage.name;
 
      this.createBase64Image(selectedImage);
    },

    createBase64Image(fileObject) {
      const reader = new FileReader();

      reader.onload = (e) => {
        this.image = e.target.result;
      };
      reader.readAsDataURL(fileObject);
    },

    uploadImage() {
      store.uploadImg(
        this.image,
        this.name,
        this.imageCategory,
        this.imageId
      );
      router.push({
        name: 'imagesList',
      });
      this.$emit('closeModal');
    },
  },
};
</script>
<style scoped>
input:focus-visible {
  outline: none;
}
</style>
