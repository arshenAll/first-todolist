//inserire tutte le funzioni per aggiungere elementi html

function createNewElement(index, category){
    let idPick = document.getElementById(category);
    let idInput = document.getElementById(index);
    let inputElement = idInput.value.trim();
    idInput.value = "";
    let flag = 0;

    //per qualche motivo se era vuoto dall'inizio prendeva comunque un input
    if(inputElement == 0){
        inputElement = "";
        flag++;
    }
    //creo elemento basato su input
    //console.log(typeof inputElement);
    elements[index].forEach(element => {
        if(inputElement == element){
            flag++;
            //console.log("esiste già");
        }else if(inputElement == ""){
            flag++;
            //console.log("vuota");
        }else{
            //console.log("gg!");
        }
    });
    if (flag == 0){
        let containerList = document.createElement("div");
        containerList.className = "contList";
        idPick.appendChild(containerList);

        let addedElement = document.createElement("p");
        addedElement.innerHTML = inputElement;
        addedElement.id = inputElement;
        containerList.appendChild(addedElement);
            //aggiungo a array dell'oggetto
            elements[index].push(inputElement);
            //console.log(elements);
            //console.log(elements[index]);
            //creo tasto per rimuoverlo
            let deleteElement = document.createElement("button");
            deleteElement.innerHTML = "X";
            deleteElement.setAttribute("class", "closeButton"); 
            deleteElement.onclick = function() { deleteThatElement(inputElement, index, addedElement, containerList)}
            document.getElementById(inputElement).appendChild(deleteElement);
            //console.log("heyy "+inputElement);
            //console.log("tu: "+idPick);
    }
}