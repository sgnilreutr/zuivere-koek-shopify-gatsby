import styled from "@emotion/styled"

export const StyledForm = styled.form`
  display: flex;
  flex-flow: column;
  flex-wrap: nowrap;
  flex-wrap: wrap;
  align-items: center;
`

export const StyledInput = styled.input`
  padding: 12px;
  border: none;
  border-radius: 4px;
`

export const SubscribeButton = styled.button`
  border: none;
  border-radius: 4px;
  background-color: hsl(234, 47%, 31%);
  padding: 5px 35px;
  margin: 0.5rem 0;
  display: flex;
  cursor: pointer;
  max-width: max-content;
  text-decoration: none;
  transition: background-color ease-in-out 0.3s;
  min-width: 100%;
  display: flex;
  flex-flow: row;
  place-content: center;

  :hover {
    background-color: hsl(234, 47%, 41%);
  }

  span {
    color: #f8d8d9;
    text-decoration: none;
    font-family: "Playfair Display", serif;
  }
`

export const Success = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  height: 115px;
  margin-bottom: 1.45rem;

  p {
    margin-left: 8px;
  }
`
