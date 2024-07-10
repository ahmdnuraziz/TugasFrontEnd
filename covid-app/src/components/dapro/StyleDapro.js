import styled from "styled-components";

export const Container = styled.div`
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 8px;

  @media (max-width: 768px) {
    padding: 1rem;
    margin: 2rem auto;
  }
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  color: #06d6a0;
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #118ab2;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 379px;
  width: 100%;
  max-width: 800px;
  overflow-y: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    max-width: 100%;
    height: 300px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    height: 250px;
    box-shadow: none;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    height: 200px;
    padding: 1rem;
  }
`;
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const TableHeader = styled.th`
  background-color: #06d6a0;
  color: white;
  position: sticky;
  top: 0;
  z-index: 1;
  border: 1px solid #ddd;
  padding: 8px;

  @media (max-width: 768px) {
    padding: 6px;
  }

  @media (max-width: 480px) {
    padding: 4px;
  }
`;

export const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;

  @media (max-width: 768px) {
    padding: 6px;
  }

  @media (max-width: 480px) {
    padding: 4px;
  }
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }

  &:hover {
    background-color: #ddd;
  }
`;