import styled from "styled-components";

export const Container = styled.div`
  margin: 5rem 1rem;
  padding: 1rem;

  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 5rem auto;
  }
`;

export const Form = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const FormLeft = styled.div`
  display: none;

  @media (min-width: 992px) {
    display: block;
    flex-basis: 60%;
  }
`;

export const FormRight = styled.div`
  @media (min-width: 992px) {
    flex-basis: 40%;
  }
`;

export const FormImage = styled.img`
  max-width: 100%;
  border-radius: 25px;
  height: auto;
`;

export const FormTitle = styled.h2`
  text-align: center;
  color: #4361ee;
  font-size: 2.44rem;
  margin-bottom: 1rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const FormLabel = styled.label`
  margin-bottom: 1rem;
`;

export const FormInput = styled.input`
  outline: none;
  padding: 1rem 0.5rem;
  border-radius: 10px;
  border: 1px solid #64748b;

  &:focus {
    border: 1px solid #4361ee;
  }
`;

export const FormSelect = styled.select`
  outline: none;
  padding: 1rem 0.5rem;
  border-radius: 10px;
  border: 1px solid #64748b;

  &:focus {
    border: 1px solid #4361ee;
  }
`;

export const FormButton = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  background-color: #4361ee;
  color: #fff;
  display: block;
  margin: 0 auto;
  width: 100%;
`;
