

<template>
  <main class="flex items-center justify-center h-screen ">
    
    <div class="container shadow-xl min-h-max h-772 flex p-[30px] ">
      <div class="bg-purple flex  flex-col items-center p-4  w-3/6">

        <div class="flex flex-col justify-center items-start h-full ">
          <label class="text-3xl text-white font-bold"><span class="block">Drag/Upload</span> your images here</label>
          <button class="bg-white rounded-full px-1 mt-5 w-[120px] text-sm h-8" @click="openUploadModal">Upload</button>
        </div>
        <p class="text-white text-xs text-left justify-self-start w-full">SDSutdio Evaluation - frontend | 2021 - 2022
          SDStudio. All Rights Reserverd.
        </p>
      </div>
      <div class="flex items-center justify-center w-3/6">
        <IconUploadLogo />
      </div>
      <UploadModal v-if="modalIsVisable" @closeModal="closeModal"/>
      
    </div>


  </main>
</template>
<script>
import IconUploadLogo from '../components/icons/IconUploadLogo.vue';
import UploadModal from '../components/ui/UploadModal.vue';
export default {
  components: { UploadModal, IconUploadLogo },
  data() {
    return {
       modalIsVisable:false
    };
  },
  methods: {
  openUploadModal(){
    this.modalIsVisable=!this.modalIsVisable
  },
  closeModal(){
    this.modalIsVisable=false
  }

},
}

</script>
