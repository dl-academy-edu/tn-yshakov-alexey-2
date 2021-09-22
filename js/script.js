var popupBtn = document.querySelector(".button_banner_js");
var popup = document.querySelector(".popup");
var popupBtnclose = document.querySelector(".popup__close_js")
var input = popup.querySelector("input")

popupBtn.addEventListener("click", function(){
    popup.classList.add("popup_open");
    input.focus()
})
popupBtnclose.addEventListener("click",function(){
    popup.classList.remove("popup_open");
    popupBtn.focus()
})

window.addEventListener("keydown", function(close){
    if (close.code === "Escape") {
        if(popup.classList.contains("popup_open")){
            popup.classList.remove("popup_open");
            popupBtn.focus();
        }
    }
})
