import { reactive } from 'vue';
export const store = reactive({
  imageCategories: [
    {
      value: 'livingRoom',
      text: 'Living Room',
      id: 'img-category' + new Date(),
    },
    {
      value: 'kitchen',
      text: 'Kitchen',
      id: 'img-category' + new Date(),
    },
    {
      value: 'dinningRoom',
      text: 'Dinning Room',
      id: 'img-category' + new Date(),
    },
    {
      value: 'bathroom',
      text: 'Bathroom',
      id: 'img-category' + new Date(),
    },
  ],

  selectedImages: [],

  uploadImg(image, imageName, imageCategory, imageId) {
    const foundImage = this.selectedImages.find(
      (x) => x.imageId === imageId
    );
    if (foundImage) {
      foundImage.image = image;
      foundImage.imageName = imageName;
      foundImage.imageCategory = imageCategory;
      foundImage.imageId = imageId;
    } else {
      this.selectedImages.push({
        imageName: imageName,
        imageCategory: imageCategory,
        imageSrc: image,
        imageId: new Date(),
      });
    }

  },
  getImagesByCategory(category) {
    return this.selectedImages.filter(
      (image) => image.imageCategory === category
    );
  },
});
