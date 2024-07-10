import styled from 'styled-components';

export const Container = styled.div`
    max-width: 800px;
    margin: 2rem auto;
    padding: 0 1rem;
    animation: fadeInUp 0.5s ease;

    @media (max-width: 768px) {
        padding: 0.5rem;
    }
`;

export const Section = styled.div`
    margin-bottom: 2rem;
`;

export const Title = styled.h2`
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

export const Subtitle = styled.p`
    font-size: 1.5rem;
    color: #666;
    margin-bottom: 1rem;
    line-height: 1.6;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

export const List = styled.ul`
    list-style-type: none;
    padding-left: 0;
`;

export const ListItem = styled.li`
    margin-bottom: 0.5rem;
`;
