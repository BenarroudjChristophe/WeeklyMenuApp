import styled from "styled-components";
import ListeDesPlats from "./ListeDesPlats";

const DishesList =[ {
    id: 1,
    name: 'Quiche',
  },
  { id: 2,
    name: 'Pates',
  },
  { id: 3,
    name: 'Salade',
  },

]

function DragDrop() {
 

    return (
      
          
    <Main>

              <div key={DishesList.id} >
                {DishesList.map((dish) => {
                  return (
                      <ListeDesPlats name={dish.name} id={dish.id} />
                      )})}
                </div>
     </Main>
                  
                  
              
             
         
      
    )
  }
  
  const Main = styled.main`
  display: flex;
  /* height: auto; */
  border: 1px solid black;
  margin-top: 2%;
  width: 50%;
  
  `
  


  export default DragDrop;