import styled from '@emotion/styled'

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
`

export const CategoryList = styled.ul`
  list-style-position: inside;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
`

export const CategoryListItem = styled.li`
  list-style: none;
	padding: 0.3rem;
	margin: 0.2rem;
	font-size: 1.2rem;

  ${generateMultiColorCategory}
`

export const CategoryLink = styled.a`
  color: inherit;
  font-size: 1em;
  text-decoration: none;
  font-size: 1em;
  transition: color ease-in 0.1s;
`


/*
.Category-list-item:nth-child(5n + 1) {
	background-color: var(--brand-color_1);
	color: var(--theme-body-bg);
}
.Category-list-item:nth-child(5n + 2) {
	background-color: var(--brand-color_2);
	color: var(--theme-body-bg);
}
.Category-list-item:nth-child(5n + 3) {
	background-color: var(--brand-color_3);
	color: white;
}
.Category-list-item:nth-child(5n + 4) {
	background-color: var(--brand-color_4);
	color: white;
}
.Category-list-item:nth-child(5n + 5) {
	background-color: var(--brand-color_5);
	color: var(--theme-body-bg);
}

*/