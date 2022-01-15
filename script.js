
document.querySelector("#button").addEventListener("click",()=>{
    const title = document.getElementById("inputValue").value;
    console.log(title)
    document.getElementById("inputValue").value = ""

    let textarea = document.createElement("textarea")
    textarea.rows = 18;
    textarea.cols = 130;
    textarea.id = "text-content"
    let titleName = document.createElement("H2")
    titleName.innerHTML = title;
    document.getElementById("main-notes").append(titleName)
    document.getElementById("main-notes").append(textarea)
   //document.getElementById("main-notes").style.textAlign = center;
})
/*
const createText = () =>{
    let para = document.createElement("p")
    para.innerHTML;
    document.getElementById("main-notes").append(para)
}
createText();*/