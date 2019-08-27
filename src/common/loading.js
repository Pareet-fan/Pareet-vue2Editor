

export default (function () {
    var oSection = document.createElement("section");
    var oIcon = document.createElement("i");

    var oLoading = document.getElementById("loading");


    oSection.appendChild(oIcon);

    oSection.setAttribute("id","mask");

    oLoading.style.position = 'relative';
    oIcon.className = "icon iconfont icon-loading";
    oLoading.appendChild(oSection);

})