const images = [
    './images/01.jpg',
    './images/02.jpg',
];

let currentIndex = 0;

const sliderImage = document.getElementById('slider-image');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

function updateImage() {
    sliderImage.src = images[currentIndex];
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.querySelector("button[type='button']");
    const gradesTableBody = document.querySelector("#grades-table tbody");

    addButton.addEventListener("click", () => {

        const name = document.getElementById("name").value;
        const gender = document.querySelector('input[name="gender"]:checked')?.value;
        const group = document.getElementById("group").value;
        const web = document.getElementById("web").value;
        const ooad = document.getElementById("ooad").value;
        const mis = document.getElementById("mis").value;
        const linux = document.getElementById("linux").value;
        const se = document.getElementById("se").value;

        if (!name || !gender || !web || !ooad || !mis || !linux || !se) {
            alert("Please fill in all fields.");
            return;
        }

        const newRow = document.createElement("tr");

        [name, gender, group, web, ooad, mis, linux, se].forEach((value) => {
            const cell = document.createElement("td");
            cell.textContent = value;
            newRow.appendChild(cell);
        });
        gradesTableBody.appendChild(newRow);
        document.getElementById("student-form").reset();
    });
});
