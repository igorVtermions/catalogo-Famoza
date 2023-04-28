import styled from "styled-components";

export const Nav = styled.header`
  height: 14vh;
  width: 100%;
   
  .header{
    display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 10px 1px;
  padding: 10px;

  .logo {
    .logoImg {
      width: 4rem;
    }
  }

  .containerSearch {
    border: 2px solid;
    padding: 15px;
    border-radius: 15px;
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .search {
      border: none;
      font-size: 20px;
      width: 90%;
      outline: none;
    }
    .magn {
      border: none;
      background-color: transparent;
      cursor: pointer;
      .magnImg {
        width: 20px;
      }
    }
  }

  .itens {
    padding: 13px;
    border-radius: 15px;
    font-weight: bold;
    background-color: #25d366;
    color: white;
    border: 2px white solid;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    text-decoration: none;
    gap: 10px;
    img{
      width: 30px;
    }
  }
  .itens:hover {
    color: #25d366;
    background-color: white;
    border: 2px #25d366 solid;
  }
  }

  
`;
