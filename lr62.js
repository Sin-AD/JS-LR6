function changeImage(imageName) {
	var mainImage = document.getElementById('mainImage');
	mainImage.src = imageName;
	mainImage.alt = "Рисунок " + imageName.substring(3, 4);
}