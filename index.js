const img = document.querySelector(".main-img");
const jvinfo = document.querySelector(".jv-info");
const im = document.querySelector(".im");
const pin = document.querySelector(".p-in");
const ima = document.querySelector(".ima");
const pcl = document.querySelector(".p-cl");
const pinfo = document.querySelector(".p-infop");
const imas = document.querySelector(".imas");


img.addEventListener("click", function () {
    jvinfo.classList.toggle("hide")
})

im.addEventListener("click", function () {
    pin.classList.toggle("hide")
})

ima.addEventListener("click", function () {
    pcl.classList.toggle("hide")
})

imas.addEventListener("click", function () {
    pinfo.classList.toggle("hide")
})
