import styled, { css } from 'styled-components'

export const StepsProgressWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 35px;
`

export const Progress = styled.progress`
  ${({ theme }) => css`
    width: 100%;
    height: 7px;
    border-radius: 14px;

    &::-webkit-progress-bar {
      background-color: ${theme.colors.lightGray};
      border-radius: 14px;
    }

    &::-webkit-progress-value {
      background: ${`transparent linear-gradient(180deg, ${theme.colors.lightGreen} 0%, ${theme.colors.darkGreen} 100%) 0% 0% no-repeat padding-box;`}
      border-radius: 14px;
    }
  `}
`

export const StepsProgressBulletContainer = styled.div`
  width: 100%;
  position: absolute;
  top: -10px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`

interface ProgressBullet {
  bgColor: string
}

export const ProgressBullet = styled.div<ProgressBullet>`
  ${({ theme, bgColor }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: ${bgColor};

    color: ${theme.colors.white};
    font-size: 14px;
    font-weight: bold;

    &:first-child {
      margin-left: 20px;
    }
  `}
`
