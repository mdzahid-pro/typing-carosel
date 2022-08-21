function render_typing_carosel(name,len = 0, source = null){
    let length = name.length, elem = source;

    setTimeout(function (){
        if(len === 0){
            elem.innerHTML = "";
        }

        if(name[len] !== undefined){
            elem.append(name[len])
        }

        if(len <= length){
            render_typing_carosel(name, len + 1, source);
        }else{
            render_typing_carosel(name, 0, source);
        }

    }, 200);
}

render_typing_carosel("Code Reader Youtube Channel", 0, document.querySelector(".test-header"));