function deleteThatElement(inputElement, index, addedElement, containerList){
    //gli passo l'id dell'elemento da eliminare
    console.log("elimino"+ inputElement);
    console.log("indice: "+index);
    let indexToRemove = elements[index].indexOf(inputElement); //funziona solo su array non su object
    elements[index].splice(indexToRemove, 1);
    containerList.removeChild(addedElement);
    console.log(elements);
    console.log(elements[index]);
    //divElement.removeChild(addedElement);
    //! sistema
    }
  function deleteCategory(category, containerCategories, divCat){
    let catToRemove = categories.indexOf(category);
    categories.splice(catToRemove, 1);
    divCat.removeChild(containerCategories);
    console.log(categories);
    control.splice(catToRemove, 1);
    console.log(control);
  }