let categories = [];

let elements = {
    0: [, ],
    1: [],
    2: [],
}
let control = [];

function addCategory(){
    let add = document.getElementById("categoryInput");
    let adder = add.value.trim();
    //console.log("adder:"+adder);
    document.getElementById("categoryInput").value = "";
    //console.log(typeof adder);
    
    console.log(adder);
    categoriesPush(adder);
    categories.forEach((category, index) => { 
    if(control[index] != true){ //faccio sì che controlli se già esiste quella voce così non la aggiunge (sono pigra)
            let divCat = document.getElementById("categories");
            let containerCategories = document.createElement("div");

            //creo un div e i contenuti che deve avere alla creazione
            containerCategories.className = "containCat";
            let categoryTitle = document.createElement("h3");
            categoryTitle.innerHTML = category;
            categoryTitle.setAttribute("class", "niceFont");
            divCat.appendChild(containerCategories);
            containerCategories.id = category;
            containerCategories.appendChild(categoryTitle);
            
            //creo un div che conterrè il titolo e input
            let containerIncipit = document.createElement("div");
            containerIncipit.className =" containerIncipit";
            containerCategories.appendChild(containerIncipit)
            
            //bottone per eliminare la categoria
            let deleteCategoryButton = document.createElement("button");
            deleteCategoryButton.innerHTML = "X";
            deleteCategoryButton.setAttribute("class", "closeButton");
            deleteCategoryButton.onclick = function(){ deleteCategory(category, containerCategories, divCat) };
            containerIncipit.appendChild(deleteCategoryButton);

            //input per gli elementi
            let inputElement = document.createElement("input");
            inputElement.id = index;
            console.log("indice: "+category +index);
            containerIncipit.appendChild(inputElement);
            //bottone che manda input a funzione

            let bottoneCategories = document.createElement("button");
            bottoneCategories.innerHTML = "clicca qui";
            bottoneCategories.setAttribute("class", "inputButton");
            bottoneCategories.onclick = function(){ createNewElement(index, category) }; //passo questa funzione che come corpo richiama la funzione
            containerIncipit.appendChild(bottoneCategories);

            //console.log("sto andando vai tra");
           // console.log("cat"+category);

            elements[index] = [];
           // console.log(elements);
            control[index] = true;
            //console.log(control);
        }
    });
    //console.log(categories);
}

function categoriesPush(adder){
let flag = 0;
    if(adder == 0){
        adder= "";
        flag++;
    }
    categories.forEach(category => {                             //catgory è il nome che do io al singolo elemento dell'array
        console.log("sono entrato");
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
        console.log(control);
    }
}

function showElement(){
//faccio comparire nel html
}
//
