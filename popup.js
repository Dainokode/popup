const btn = document.querySelector(".btn");
const closeBtn = document.querySelector(".close");
const popupWrapper = document.querySelector(".popup-wrapper");

btn.addEventListener("click", () => {
    popupWrapper.classList.remove("hidden");
})

closeBtn.addEventListener("click", () => {
    popupWrapper.classList.add("hidden");
})

popupWrapper.addEventListener("click", () => {
    popupWrapper.classList.add("hidden");
})
