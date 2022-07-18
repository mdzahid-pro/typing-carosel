function render_name(name, len = 0){
    let length = name.length;
    setTimeout(function (){
		let elem = document.querySelector(".test-header");
        if(len == 0){
			elem.innerHTML = "";
		}
        
        elem.append(name[len]);
        if(len <= length){
            render_name(name, len + 1)
        }else{
            render_name(name, 0)
        }
        
    },200)
}

render_name("Md Zahidul Islam")