import styled from "styled-components";

export const OrderConfirmedContainer = styled.div`
 display: flex;
 flex-direction: column;
 margin-top: 5rem;

 h1 {
    color: ${({ theme }) => theme.colors["brand-yellow-dark"]}
 }

 > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;

   @media (max-width: 1000px) {
      flex-direction: column;

      > img {
         display: none;
      }
   } 
 }
`
export const OrderDetailsContainer = styled.div`
 padding: 2.5rem;
 border-radius: 6px 36px 6px 36px;
 background: ${({ theme }) => theme.colors["base-background"]};
 width: 32rem;
 display: flex;
 flex-direction: column;
 gap: 2rem;
 position: relative;

 &::before {
    content: "";
    position: absolute;
    inset: -1px; 
    border-radius: 7px 37px 7px 37px;
    z-index: -1;
    background: linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%);
 }

 @media (max-width: 1000px) {
      flex-direction: column;
      width: 100%;
 } 
`
