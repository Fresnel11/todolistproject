const express = require('express');
const serveur = express();
const fs = require('fs');
const port = 3000;

const path = 'Serveur/model/model.json'

// Lire les données du fichier JSON
function readData() {
  try {
  const data = fs.readFileSync(path, 'utf8');
  return JSON.parse(data);
  } catch (err) {
  console.error(err);
  return [];
  }
  }

  // Écrire les données dans le fichier JSON
function writeData(data) {
  try {
  fs.writeFileSync(path, JSON.stringify(data, null, 2), 'utf8');
  } catch (err) {
  console.error(err);
  }
  }
  

// Définissez vos routes ici
serveur.get('/', (req, res) => {
    res.send('Hello World!');
});


// Middleware pour servir les fichiers statiques (si nécessaire)
serveur.use(express.static('public'));


// Démarrage du serveur
serveur.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});


//Incrémentation et réinitialisation de la l'entrée input
function changeValue() {
    const id = ref(0);
    let inputValue = ref("");

    id.value++;
    inputValue.value = "";
};

//Ajout d'un nouvel élément à notre tableau
 function addList() {
    const id = ref(0);
    let todoArray = ref([]);
    let inputValue = ref("");

    todoArray.value.push({
      id: id.value,
      text: `${inputValue.value}`,
      etat: false,
  
    });
   
    changeValue();
  };

//Modification de l'état en fonction du checkbox
function toggle(todo){
    let todoArray = ref([]);

    if(todo.etat){
      todoArray.value.map(t => {
      if(t.id == todo.id) 
       t.etat = false;
      });
    
    } else {
      todoArray.value.map(t => {
      if(t.id == todo.id) 
       t.etat = true;
      });
    }
  };

//Modification d'un élément
function modif(id, todo) {
    // Recherche de l'index de l'élément avec l'id donné
   const index = todoArray.findIndex((el) => el.id === id);
   
   // Vérification si l'élément avec l'id existe
   if(index !== -1 ) {
        // Modification de la tâche
        todoArray[index].task = todo;
        console.log(`Tâche avec l'id ${id} modifiée avec succès.`);
   }else {
    console.log(`Aucune tâche trouvée avec l'id ${id}.`);
}
};

//Suppression d'un élément
function supp(todo) {
    let todoArray = ref([]);

    todoArray.value= todoArray.value.filter(t => t.id !== todo.id);
  }



  module.exports = {changeValue, addList, toggle, modif, supp}
