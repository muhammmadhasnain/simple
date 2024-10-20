const fontName = document.getElementById("fontName")
const fontSize = document.getElementById("fontSize")
const optionButton = document.querySelectorAll(".btn-option")
const textArea = document.querySelector("#text-input")
const alignButton = document.querySelectorAll(".align")
const formatButton = document.querySelectorAll(".format")
const spacingButton = document.querySelector(".spacing")
const advOptionButton = document.querySelectorAll(".adv-option-button")



let font = [
    "Arial",
    "poppins",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "cursive",
]



const intialzer = () => {
    highlighter(alignButton , false)
    highlighter(formatButton , false)
    highlighter(spacingButton , false)



    
font.map((value) => {
    console.log(value)
    let option = document.createElement("option")
    option.value = value
    option.innerHTML = value
    fontName.appendChild(option)
});

for(i = 1; i <= 7; i++){
let option2 = document.createElement("option")
option2.value = i
option2.innerHTML = i
fontSize.appendChild(option2)
};

}










const modifyText = (id , defaultUi , value) => {

    document.execCommand(id , defaultUi , value)

}

optionButton.forEach((btn) => {
    btn.addEventListener("click" , () => {
        modifyText(btn.id , false , null)
    })
})

advOptionButton.forEach((btn) => {
    btn.addEventListener("change" , () => {
        modifyText(btn.id , false , btn.value)
    })
})


function highlighter (classname , need) { 
    console.log(classname)
    classname.forEach((btn) => {
       btn.addEventListener("click" , () => {
            if(need){
                let active1 = true
    
                if(btn.classList.contains("active")){
                    active1 = true
    
                }

                if(!active1){
                    btn.classList.add("active")
                }
            }else{
                btn.classList.toggle("active")
            }
    })
})
    

}

const removeActiveClass = (classname) => {
classname.forEach((btn) => {
    btn.classList.remove("active")
})
}


window.onload = intialzer()

