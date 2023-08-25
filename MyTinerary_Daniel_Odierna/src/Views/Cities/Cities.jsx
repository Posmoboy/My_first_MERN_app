import React from 'react'
import './cities.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import SearchBar from "../../Components/SearchBar/SearchBar"
import {Outlet} from 'react-router-dom'





/*********************************************************** */
// function SearchFilter(Arraydatos, texto) {
//     let ArrayFiltrado = Arraydatos.filter(element =>
//       element.name.toLowerCase().includes(texto.toLowerCase()))
//     return ArrayFiltrado
//   }

//   const searchFilter = () => {
//     let ArrayFiltrado = Arraydatos.filter(element =>
//         element.name.toLowerCase().includes(texto.toLowerCase()))
//       return ArrayFiltrado

//   };
/************************************************************* */

//   function AddingCards(Arraydatos) {
//     const BootsCards = document.getElementById("MainCards");
//     if (Arraydatos.length == 0) {
//       BootsCards.innerHTML = "<h2 class='text-bg-warning p-3'>Event not found</h2>"
//       return
//     }
//     let card = ``;
    
//     Arraydatos.forEach((element) => {
//       card += `
//        <div class="card col">
//                       <img src="${element.image}" class="card-img-top" alt="${element.name}">
//                       <div class="card-body">
//                           <h5><mark>Category:</mark></h5><p>${element.category}</p>
//                           <h5 class="card-title"><mark>${element.name}</mark></h5>
//                           <p class="card-text">${element.description}</p>
//                           <p class="card-text h5 "><mark>Date:</mark></p> 
//                           <p class="card-text">${element.date}</p>
//                           <p class="card-text h5"><mark>Place:</mark></p>
//                           <p class="card-text">${element.place}</p>
//                           <p class="card-text h5"><mark>Price:</mark></p>
//                           <p class="card-text">${element.price}</p>
//                           <a href="./events_info.html?id=${element._id}" class="btn btn-primary">More info</a>
//                       </div>
//                   </div>
//       `;
//     })
//     BootsCards.innerHTML = card
//     console.log(BootsCards)
//   };
/************************************************************************************************ */
const Cities = () => {
  return (
    <>
   
    <div className='LayoutCities'>
    <Outlet/>
            <Header/>
            <main> 
           <SearchBar/>
         
             
          </main>

           <Footer/>
    
    </div>

   
   </>
  )
}

export default Cities