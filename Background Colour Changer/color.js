const list_colors = document.querySelectorAll(".block")
console.log(list_colors)
const body = document.querySelector("body")
list_colors.forEach((block) => {
    block.addEventListener("click",function(a){
    const block_color = a.target.id
    if (block_color){
        body.style.backgroundColor = block_color
    }
    if (block_color){
        body.style.backgroundColor = block_color
    }
    if (block_color){
        body.style.backgroundColor = block_color
    }
    if (block_color ){
        body.style.backgroundColor = block_color
    }
    if (block_color){
        body.style.backgroundColor = block_color
    }
})

})