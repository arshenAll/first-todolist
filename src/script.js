let categories = ["spesa", "studio", "allenamento"];

let elements = {
    0: ["pomodoro", "insalata"],
    1: [],
    2: [],
}
let control = [false, false, false];

function addCategory(){
    let add = document.getElementById("categoryInput");
    let adder = add.value.trim();
    console.log("adder:"+adder);
    document.getElementById("categoryInput").value = "";
    categoriesPush(adder);
    categories.forEach((category, index) => { 
    if(control[index] != true){ //faccio sì che controlli se già esiste quella voce così non la aggiunge (sono pigra)
            let divCat = document.getElementById("categories");
            let containerCategories = document.createElement("div");
            //creo un div e i contenuti che deve avere alla creazione
            containerCategories.style = "border: 2px solid green;";
            containerCategories.innerHTML = "<p>"+category+"</p>";
            divCat.appendChild(containerCategories);
            containerCategories.id = category;
            
            //bottone per eliminare la categoria
            let deleteCategoryButton = document.createElement("button");
            deleteCategoryButton.innerHTML = "X";
            containerCategories.appendChild(deleteCategoryButton);
            //input per gli elementi
            let inputElement = document.createElement("input");
            inputElement.id = index;
            console.log("indice: "+category +index);
            containerCategories.appendChild(inputElement);
            //bottone che manda input a funzione
            let bottoneCategories = document.createElement("button");
            bottoneCategories.innerHTML = "clicca qui";
            bottoneCategories.onclick = function(){ createNewElement(index, category) }; //passo questa funzione che come corpo richiama la funzione
            containerCategories.appendChild(bottoneCategories);
            //!se uso onclick non devo mettere le tonde o lo richiama
            
            //in questo modo si attiva solo onclick
            //! aggiungere onclik
            //containerCategories.innerHTML += "<p> ciao ! </p>";
            console.log("sto andando vai tra");
            console.log("cat"+category);
            //! aggiungere un indice a elementi
            elements[index] = [];
            console.log(elements);
            control[index] = true;
        }
    });
    console.log(categories);
}

function categoriesPush(adder){
let flag = 0;
    categories.forEach(category => {                             //catgory è il nome che do io al singolo elemento dell'array
        
        if(adder == category){
            console.log("esiste già");
            flag++;                                              //se il flag aumenta, significa che non c'è in nessuna posizione
        }
        else if(adder == ""){
            console.log("vuoto");
        flag++;
        }
        else{
            console.log("aggiunto "+ adder);
        }
        console.log("categoria "+category);
        console.log(categories);

    });
    if (flag==0){                                                   //l'elemento non esiste quindi lo pusho
        categories.push(adder);
        control.push(false);
    }
}
function createNewElement(index, category){
    let idPick = document.getElementById(category);
    let idInput = document.getElementById(index);
    let inputElement = idInput.value.trim();
    idInput.value = "";
    let flag = 0;
    //metto solo nel oggetto
    //creo elemento basato su input
    elements[index].forEach(element => {
        
        if(inputElement == element){
            flag++;
            console.log("esiste già");
        }else if(inputElement == ""){
            flag++;
            console.log("vuota");
        }else{
            console.log("gg!");
            //questa funzione creerà un elemento al suo div di appartenenza
            //attachElement(); //questa funzione dovrà appendChild alla div più grande e dovrà contenere un deleteElement
        }
    });
    if (flag == 0){
        let addedElement = document.createElement("p");
            addedElement.innerHTML = inputElement;
            addedElement.id = inputElement;
            idPick.appendChild(addedElement);
            //aggiungo a array dell'oggetto
            elements[index].push(inputElement);
            console.log(elements);
            console.log(elements[index]);
            //creo tasto per rimuoverlo
            let deleteElement = document.createElement("button");
            deleteElement.innerHTML = "X";
            deleteElement.onclick = function() { deleteThatElement(inputElement)}
            document.getElementById(category).appendChild(deleteElement);
            console.log("heyy "+inputElement);
            console.log("tu: "+idPick);
    }
}
function showElement(){
//faccio comparire nel html
}
//
function deleteThatElement(inputElement){
//gli passo l'id dell'elemento da eliminare
console.log("elimino"+ inputElement);
let indexToRemove = elements.indexOf(inputElement);
elements.splice(indexToRemove)
//! sistema
}