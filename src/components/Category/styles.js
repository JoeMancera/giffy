import styled from '@emotion/styled'
import { bps } from 'styles'

const generateMultiColorCategory = props => {
  const NEED_WITHE_COLOR = [3, 4]
  const colorIndex = props.index % 5 + 1
  const needWhite = NEED_WITHE_COLOR.includes(colorIndex)
  const colorText = needWhite ? 'withe' : 'var(--theme-body-bg)'
  return `
    background-color: var(--brand-color_${colorIndex});
    color: ${colorText};
  `
}

export const CategoryTitle = styled.h3`
  color: var(--theme-body-txt);
  font-weight: bold;
  margin-bottom: 0.7rem;
  margin-top: 0.6rem;

  @media screen and (min-width: 55rem) {
    text-align: right;
  }
`

export const CategoryList = styled.ul`
  list-style-position: inside;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;

  ${bps.greaterThanMobile} {
    justify-content: flex-end;
  }
`

export const CategoryListItem = styled.li`
  list-style: none;
	padding: 0.3rem;
	margin: 0.2rem;
	font-size: 1.2rem;

  ${generateMultiColorCategory}

  ${bps.greaterThanMobile} {
    content: '';
    margin-right: 0.5em;
    font-size: 1em;
  }

`

export const CategoryLink = styled.a`
  color: inherit;
  font-size: 1em;
  text-decoration: none;
  font-size: 1em;
  transition: color ease-in 0.1s;
`
