<template>
  <div
    class="container shadow-xl min-h-max rounded-3xl my-[30px] p-6"
  >
    <div
      class="bg-customGray-40 rounded-md h-[80px] w-full flex justify-between items-center px-3 mb-7"
    >
      <label
         class="flex items-center ">
        <IconImages/>
        <span class="text-[26px] ml-3 font-bold ">   Uploaded Images List</span>
     </label
      >
      <button
        @click.prevent="backToPrev"
        class="bg-white w-[50px] h-[50px] flex justify-center items-center rounded-md"
      >
        <svg
          width="30"
          height="12"
          viewBox="0 0 30 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.2484 5.40002L7.0242 1.62422L6.1758 0.775818L0.951599 6.00002L6.1758 11.2242L7.0242 10.3758L3.2484 6.60002H29.4V5.40002H3.2484Z"
            fill="black"
          />
        </svg>
      </button>
    </div>
    <template v-if="!maskModalIsVisible">
      <ul class="flex justify-center text-sm">
        <li class="font-bold text-customGray-50">Images Categories</li>
        <li
          v-for="item in imageCategories"
          :key="item.id"
          class="mx-2 cursor-pointer "
          @click="changeTab(item.value)"
          :class="[item.value===activeTab ? 'text-blue-10 border-b-blue-10 border-b' : 'text-customGray-50']"
        >
          {{ item.text }}
        </li>
      </ul>
      <div
        v-for="item in selectedImages"
        :key="item.imageId"
        class="flex justify-between mt-7 shadow-md p-5"
      >
        <div class="flex">
          <img
            :src="item.imageSrc"
            class="w-[200px] h-[140px] mr-5 rounded-2xl object-cover"
          />
          <div class="flex flex-col">
            <span>{{ item.imageName }}</span>
            <span> {{ item.imageCategory }}</span>
          </div>
        </div>
        <div class="flex">
          <button
          class="mx-1 cursor-pointer bg-customGray-60 w-[50px] h-[50px] rounded-md flex items-center justify-center"
            @click="maskImage(item.imageId)"
          >
            <IconMask/>
          </button>
          <button
          class="mx-1 cursor-pointer bg-customGray-60 w-[50px] h-[50px] rounded-md flex items-center justify-center"
            @click="removeImage(item.imageId)"
          >
            <IconDelete/>
          </button>
          <button
            class="mx-1 cursor-pointer bg-customGray-60 w-[50px] h-[50px] rounded-md flex items-center justify-center"
            @click="editImage(item.imageId)"
          >
            <IconEdit/>
          </button>
        </div>
      </div>

      <UploadModal
        v-if="modalIsVisable"
        @closeModal="closeModal"
        :imageCategory="selectedImage.imageCategory"
        :imageName="selectedImage.imageName"
        :imageSrc="selectedImage.imageSrc"
        :imageId="selectedImage.imageId"
      />
    </template>
    <MaskImage
      v-if="maskModalIsVisible"
      @closeMask="closeMaskModal"
      :selectedImage="selectedImage"
    />
  </div>
</template>
<script>
import { store } from '../store';
import UploadModal from '../components/ui/UploadModal.vue';
import MaskImage from '../components/image/MaskImage.vue';
import IconImages from '../components/icons/IconImages.vue';
import router from '../router';
import IconMask from '../components/icons/IconMask.vue';
import IconDelete from '../components/icons/IconDelete.vue';
import IconEdit from '../components/icons/IconEdit.vue';
export default {
  components: { UploadModal, MaskImage, IconImages, IconMask, IconDelete, IconEdit },
  data() {
    return {
      imageCategories: store.imageCategories,
      selectedImages: store.selectedImages,
      modalIsVisable: false,
      selectedImage: null,
      maskModalIsVisible: false,
      activeTab: 'livingRoom',
    };
  },
  mounted() {
    this.selectedImages = store.getImagesByCategory(this.activeTab);
  },
  methods: {
    editImage(id) {
      this.selectedImage = this.selectedImages.find(
        (x) => x.imageId == id
      );
      this.modalIsVisable = true;
    },
    removeImage(id) {
      const selectedIndex = this.selectedImages.findIndex(
        (x) => x.imageId == id
      );
      this.selectedImages.splice(selectedIndex, 1);
    },
    closeModal() {
      this.modalIsVisable = false;
    },
    maskImage(id) {
      this.selectedImage = this.selectedImages.find(
        (x) => x.imageId == id
      );
      this.maskModalIsVisible = true;
    },
    closeMaskModal(newImage) {
      this.maskModalIsVisible = false;
      if (newImage) this.selectedImage.imageSrc = newImage;
    },
    changeTab(category) {
      this.selectedImages = store.getImagesByCategory(category);
      this.activeTab=category
    },
    backToPrev() {
      router.push({
        name: 'home',
      });
    },
  },
};
</script>
