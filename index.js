const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list container")
function runTask(){
    if(inputBox.value === ''){
        alert("Kuchh likh pehle bhondhu")
    }


    else {
        let li = document.createElement('li');
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML='\u00d7';
        li.appendChild(span);

    }
    inputBox.value='';
    saveData();
} 

inputBox.addEventListener("keydown",
function(event){
    if(event.key==='Enter'){
        runTask();

    }
listContainer.addEventListener("click",
function(event1){
    if(event1.target.tagName ==='LI'){
        event1.target.classList.toggle('checked');
        saveData();
    }
    else if(event1.target.tagName ==='SPAN'){
        event1.target.parentElement.remove();
        saveData();
    }
})
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML= localStorage.getItem("data")
}
showTask();


