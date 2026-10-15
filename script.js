function upDate(previewPic) {
  console.log("upDate triggered");
  console.log("Alt text:", previewPic.alt);
  console.log("Image source:", previewPic.src);

  const image = document.getElementById("image");
  image.textContent = previewPic.alt;
  image.style.backgroundImage = `url("${previewPic.src}")`;
}

function undo() {
  const image = document.getElementById("image");
  image.style.backgroundImage = "url('')";
  image.textContent = "Hover over an image below to display here.";
}
