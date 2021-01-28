import React from 'react';
import styled from 'styled-components';
import CenteredImg from './centeredImg';
import Category from 'styles/category';
import DateTime from 'styles/dateTime';
import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fontsource/fira-sans-condensed/300.css'

export const BlogDate = ({ date }) => (
  <span style={{ fontSize: 15}}>
    <span>
      <FontAwesomeIcon color="gray" icon={faCalendarAlt} />
      &nbsp;&nbsp;
      <DateTime dateTime={date}>{date}</DateTime>
    </span>
  </span>      
);

const Card = ({ thumbnail, alt, category, title, desc, date }) => {
  return (
    <Wrapper>
      <CenteredImg src={thumbnail} alt={alt} />
      <Text>
        <div>
          <BlogDate date={date} />
          <Title>{title}</Title>
          <Desc>{desc}</Desc>
        </div>
        <div><Category>{category}</Category></div>
      </Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  border-radius: var(--border-radius-base);
  background-color: var(--color-card);
  border-bottom: 7px solid ${'#6D83F2'};
  box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.16);
  transition: all 0.3s ease-out;
  &:hover {
      transform: translate3d(0px, -0.25rem, 0px);
      box-shadow: 0 0 1rem rgba(0, 0, 0, 0.32);
    }

  /* Fix Safari overflow:hidden with border radius not working error */
  transform: translateZ(0);
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  justify-content: space-between;
  padding: var(--sizing-md);

  & > * {
    display: block;
  }
`;

const Title = styled.h3`
  margin-top: var(--sizing-xs);
  font-size: var(--text-lg);
  font-weight: var(--font-weight-bold);
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.device.md}) {
    font-size: 1.3125rem;
  }

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    font-size: var(--text-md);
  }
`;

const Desc = styled.p`
  line-height: 1.5;
  margin-top: 8px;
  font-family: 'Fira Sans Condensed', sans-serif;
  padding-bottom: var(--sizing-sm);
  color: var(--color-text-2);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default Card;
