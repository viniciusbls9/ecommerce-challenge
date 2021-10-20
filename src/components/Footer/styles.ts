import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 10.5rem;
  background: transparent linear-gradient(180deg, #ff0000 0%, #f91e96 100%) 0%
    0% no-repeat padding-box;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.greaterThan('medium')`
    height: 13.5rem;
  `}
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin: 0 auto;
`
export const SingleIconContainer = styled.div``

export const NavigationIconImg = styled.img`
  width: 30px;
  height: 30px;

  /* ${media.greaterThan('medium')`
    width: 22px;
    height: 22px;
    margin-right: 15px;
  `} */
`
