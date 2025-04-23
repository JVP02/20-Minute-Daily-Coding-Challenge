const galleryContainer = document.getElementById('gallery');

// Replace with your GitHub repository's raw URL for images
const repoBaseUrl = 'https://raw.githubusercontent.com/username/repository/branch/path-to-images/';

const imageList = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    // Add more image filenames here
];

function loadGallery() {
    imageList.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = `${repoBaseUrl}${image}`;
        imgElement.alt = image;
        galleryContainer.appendChild(imgElement);
    });
}

document.addEventListener('DOMContentLoaded', loadGallery);
