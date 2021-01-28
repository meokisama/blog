import styled from 'styled-components';

const Category = styled.span`
  display: block;
  font-size: 0.875rem;
  font-weight: var(--font-weight-semi-bold);
  color: var(--color-text-3);
  float: left;
  border: 1px solid ${'#d9e0ff'};
  border-radius: 50px;
  padding: 8px 13px;
  line-height: 10px;
  margin: 5px;

  &:hover {
    background: ${'#d9e0ff'};
    color: ${'#6D83F2'};
  }
`;

export default Category;
