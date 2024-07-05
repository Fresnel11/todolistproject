<template>
      <div class="contain">
        <h1>TODOLIST</h1>
        <div class="container">
          <label for="">Ajoutez une tâche !</label>
          <br />
          <input type="text" required v-model="inputValue" />
          <br />
          <button class="button-62" role="button">Ajouter</button>
        </div>

        <div class="table">
          <table>
            <thead>
              <tr>
                <th>Avis</th>
                <th>Tâches</th>
                <th>Etat</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colspan="4">En attentes de tâches...</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>
                  <div class="checkbox-wrapper-31">
                      <input type="checkbox"/>
                    <svg viewBox="0 0 35.6 35.6">
                      <circle class="background" cx="17.8" cy="17.8" r="17.8"></circle>
                      <circle class="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
                      <polyline class="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
                    </svg>
                  </div>
                </td>
                <td>todo text</td>
                <td>Etat</td>
                <td>
                  <span class="icons">
                    <svg class="icon1" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0556f7" title="Modifier">
                      <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/>
                    </svg>
          
                    <svg class="icon2" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e30202" title="Supprimer">
                      <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
                    </svg>
                  </span>
                </td>
              </tr>
            </tbody>
            <tfoot >
              <tr>
                <th colspan="4"></th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
</template>

<script setup>
// import { ref } from "vue";

// let id = ref(0);
// let todoArray = ref([]);
// let inputValue = ref("");

// // 
// function changeValue() {
//   id.value++;
//   inputValue.value = "";
// }

// //Fonctiopn pour ajouter un nouvel élément à notre tableau
// const addList = function () {
//   todoArray.value.push({
//     id: id.value,
//     text: `${inputValue.value}`,
//     etat: false,

//   });
 
//   changeValue();
// };

// function toggle(todo){

// if(todo.etat){
//   todoArray.value.map(t => {
//   if(t.id == todo.id) 
//    t.etat = false;
//   });

// } else {
//   todoArray.value.map(t => {
//   if(t.id == todo.id) 
//    t.etat = true;
//   });
// }
// }
</script>

<style>

.contain {
  width: 800px;
  background-color: white;
  height: 800px;
  text-align: center;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
}

.table {
  border: solid 1px;
  display: flex;
  justify-content: space-around;
  /* width: 100%; */
  margin: 0 auto;
  width: 80%;
  
}



input[type="text"] {
  border: none;
  border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  width: 300px;
  height: 25px;
  margin: 10px;
}

label {
  font-weight: bold;
  font-size: 18px;
}

h1 {
  color: blue;
}

table th,
table td {
  padding-inline: 15px;
  padding-block: 5px;
  border: solid 1px;

  border-collapse: collapse;
}

table {
  border-collapse: collapse;
  width: 100%;
}


.button-62 {
  background: linear-gradient(to bottom right, #EF4765, #FF9A5A);
  border: 0;
  border-radius: 12px;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 2.5;
  outline: transparent;
  padding: 0 1rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow .2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  margin: 10px;
}

.button-62:not([disabled]):focus {
  box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(239, 71, 101, 0.5), .125rem .125rem 1rem rgba(255, 154, 90, 0.5);
}

.button-62:not([disabled]):hover {
  box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(239, 71, 101, 0.5), .125rem .125rem 1rem rgba(255, 154, 90, 0.5);
}

.checkbox-wrapper-31:hover .check {
    stroke-dashoffset: 0;
  }

  .checkbox-wrapper-31 {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 40px;
  }
  .checkbox-wrapper-31 .background {
    fill: #ccc;
    transition: ease all 0.6s;
    -webkit-transition: ease all 0.6s;
  }
  .checkbox-wrapper-31 .stroke {
    fill: none;
    stroke: #fff;
    stroke-miterlimit: 10;
    stroke-width: 2px;
    stroke-dashoffset: 100;
    stroke-dasharray: 100;
    transition: ease all 0.6s;
    -webkit-transition: ease all 0.6s;
  }
  .checkbox-wrapper-31 .check {
    fill: none;
    stroke: #fff;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2px;
    stroke-dashoffset: 22;
    stroke-dasharray: 22;
    transition: ease all 0.6s;
    -webkit-transition: ease all 0.6s;
  }
  .checkbox-wrapper-31 input[type=checkbox] {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    margin: 0;
    opacity: 0;
    -appearance: none;
  }
  .checkbox-wrapper-31 input[type=checkbox]:hover {
    cursor: pointer;
  }
  .checkbox-wrapper-31 input[type=checkbox]:checked + svg .background {
    fill: #6cbe45;
  }
  .checkbox-wrapper-31 input[type=checkbox]:checked + svg .stroke {
    stroke-dashoffset: 0;
  }
  .checkbox-wrapper-31 input[type=checkbox]:checked + svg .check {
    stroke-dashoffset: 0;
  }


.icons {
  
  display: flex;
  justify-content: space-around;
}

.icon1 {
  transition: transform 0.2s;
  cursor: pointer;
}

.icon2 {
  transition: transform 0.1s;
  cursor: pointer;
}

.icon1:hover {
  transform: scale(1.1);
}

.icon2:hover {
  transform: scale(1.1);
  
}


</style>
