import styled from "styled-components";

export const Container = styled.div`
  margin: 0 0 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  min-height: 200px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 3px 5px rgb(0 0 0 / 24%);
  overflow: hidden;
`

export const Image = styled.img`
  width: 100%;
`

export const Description = styled.p`
  padding: 7px 10px;
  background-color: white;
  font-size: 15px;
  text-align: center;
`