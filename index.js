let celsiusInpuTEle = document.getElementById("celsiuselement");
let fahrenheitInputEle = document.getElementById("fahrenheitelement");
let convertbuttonEle = document.getElementById("convertbutton");
let refreshbuttonEle = document.getElementById("refreshbutton");

function conversion() {
    let userEnterValue = parseInt(celsiusInpuTEle.value);
    let conversionTofah = (userEnterValue * (9 / 5)) + 32;
    fahrenheitInputEle.value = conversionTofah + "F";
}

function refresh() {
    celsiusInpuTEle.value = "";
    fahrenheitInputEle.value = "";
}