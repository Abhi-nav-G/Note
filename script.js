
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
    titleName.id = "title-name"

    let saveButton = document.createElement("button")
    saveButton.innerHTML = "SAVE";
    saveButton.id = "save"
    saveButton.className = "btn btn-success"
    document.getElementById("main-notes").append(titleName)
    document.getElementById("main-notes").append(textarea)
    document.getElementById("main-notes").append(saveButton)
   //document.getElementById("main-notes").style.textAlign = center;


   document.getElementById("save").addEventListener("click",()=>{
    document.getElementById("title-name").remove();
    document.getElementById("text-content").remove();
    document.getElementById("save").remove();
})
})
/*
const createText = () =>{
    let para = document.createElement("p")
    para.innerHTML;
    document.getElementById("main-notes").append(para)
}
createText();*/
