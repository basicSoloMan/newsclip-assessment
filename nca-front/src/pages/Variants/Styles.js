import styled from 'styled-components';

export const ItemHeader = styled.div`
  background-color: rgba(52, 58, 64, 0.5);
  display: flex;
  margin-bottom: 10px;
  border-radius: 4px;

  & div {
    padding: 7px;
    text-align: left;
    width: 25%;
    padding: 3px 10px;
    font-size: 1.25rem;
    color: rgba(52, 58, 64, 1);
  }
`;

export const ItemContent = styled.div`
  display: flex;
  background-color: rgba(187, 194, 201, 0.5);
  margin-bottom: 5px;
  border-radius: 2px;

  & div {
    width: 25%;
    text-align: left;
    padding: 3px 10px;
  }
`;

export const ItemWrapper = styled.div`
  padding: 3px;
  border-bottom: 0.5px solid rgba(187, 194, 201, 0.9);
  border-left: 0.5px solid rgba(187, 194, 201, 0.9);
  border-right: 0.5px solid rgba(187, 194, 201, 0.9);
`;

export const ItemText = styled.p`
  line-height: 40px;
  margin: 0;
`;

export const VariantHeader = styled.h6`
  line-height: 40px;
  margin: 0;
`;
