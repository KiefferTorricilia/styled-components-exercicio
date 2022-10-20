import styled from "styled-components";

export const Cabecalho = styled.header`
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  height: 10%;
`

export const TelaInteira = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Principal = styled.main`
  min-height: 80%;
  display: flex;
`

export const Lateral = styled.nav`
  flex-basis: 200px;
  border-right-style: solid;
  border-right-width: thin;
`

export const Secao = styled.section`
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  row-gap: 10px;
  column-gap: 10px;
  margin: 10px;
`

export const Lista = styled.ul`
    list-style-type: none;
`

export const Fim = styled.footer`
  background: #333b3e;
  color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  padding: 0 10px;
`

export const Titulo4 = styled.h4`
  margin-left: 20px;
`