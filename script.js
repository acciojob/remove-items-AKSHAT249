//your JS code here. If required.
let selectDiv = document.getElementById("colorSelect");
let colors = ['Red', 'Green', 'White', 'Black']
function deleted(){
    let color = selectDiv.value;
    colors = colors.filter( (item)=> item!=color)
    selectDiv.innerHTML = ""
    colors.map((item)=>{
        selectDiv.innerHTML += `
            <option value=${item}>${item}</option> 

        `
    })

    


}