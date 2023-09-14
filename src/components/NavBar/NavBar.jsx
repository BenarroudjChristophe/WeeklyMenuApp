import styled from 'styled-components'

const NavBar = () => {
    //state

    //comportement

    const handleClick = () => {
        
    
    }



    //return
  return (
    
    <Ul>
        <li>Add a Dish</li>
        <li>Week's menu</li>
        <li>Favoris</li>
        <li>Recherche</li>
        <li>Create User</li>
        <li>User</li>
    </Ul>
    
  )
}

const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #000;
    color: #fff;
    padding: 0 20px;
    height: 50px;
    margin: 0;
    list-style: none;
    font-size: 1.2rem;
    font-weight: 500;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    /* max-width: 100%; */
    z-index: 100;
    width: 97vw;
    & li:hover {
        cursor: pointer;
    }

`

export default NavBar