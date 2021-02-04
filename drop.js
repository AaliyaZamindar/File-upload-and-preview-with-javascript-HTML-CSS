function dropHandler(event) {
  event.preventDefault();
  // console.log(event);
  if (event.dataTransfer.files) {
    for (i = 0; i < event.dataTransfer.files.length; i++) {
      var file = event.dataTransfer.files[i];
      console.log(file);
      console.log(file.type);
      const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
      if (validImageTypes.includes(file.type)) {
        previewImage(file);
      }
    }
  }
}
const previewImage = (file) => {
  const fileInstance = new FileReader();

  fileInstance.addEventListener("load", function () {
    const liElement = document.createElement("li");
    const imageElement = document.createElement("Img");
    imageElement.setAttribute("src", fileInstance.result);
    const UlElement = document.getElementById("itemlist");
    liElement.appendChild(imageElement);
    UlElement.appendChild(liElement);
  });

  fileInstance.readAsDataURL(file);
};

function dragOverHandler(event) {
  event.preventDefault();
}
