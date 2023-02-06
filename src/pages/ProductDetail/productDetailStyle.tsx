import { Avatar, Button, Image, Tabs } from 'antd'
import styled from 'styled-components'

export const ContentWrapper = styled.div`
  padding: 6.25rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ProductWrapper = styled.div`
  display: flex;
`

export const ProductImage = styled.div`
  width: 50%;
`
export const ProductImageShow = styled.div`
  height: 36rem;
  overflow: hidden;
  border-radius: 1rem;
  border: 1px solid #ccc;
`

export const SubImage = styled.div`
  overflow: hidden;
  border-radius: 1rem;
  border: 1px solid #ccc;
  height: 8rem;
`

export const ProductImageDiff = styled.div`
  padding: 2rem 1rem;
  display: flex;
  /* justify-content: space-evenly; */
  align-items: center;
  gap: 2rem;
`

export const ProductInfo = styled.div`
  width: 50%;
  padding: 0 4rem;
`

export const StyledH2 = styled.h2`
  font-weight: 500;
  font-size: 3rem;
  color: #003f62;
  /* line-height: 4.5rem; */
`
export const StyledH3 = styled.h3`
  font-weight: 500;
  font-size: 2.25rem;
  color: #4a4a4a;
  line-height: 4rem;
`

export const StyledSpan = styled.span`
  font-size: 1rem;
  display: block;
  font-weight: 500;
`

export const StyledRating = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Quantity = styled.div`
  padding: 0 1rem;
`

export const AddOrBuy = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin: 2rem 0;
`

export const StyledButton = styled(Button)`
  background-color: #eda415;
  color: white;
  border-radius: 2rem;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 2rem 3.5rem;
  display: flex;
  align-items: center;
`

export const StyledCategory = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  font-weight: 500;
  margin-bottom: 1.25rem;
  font-size: 1.25rem;
`

export const StyledShare = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 1.25rem;
  font-weight: 500;
`

export const ButtonCustom = styled(Button)`
  border-radius: 1.25rem;
  padding: 1.25rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  color: #003f62;
  background: #ffffff;
`

export const TabsCustom = styled(Tabs)`
  .ant-tabs-tab.ant-tabs-tab-active button.ant-btn {
    background-color: #003f62;
    color: #ffffff;
  }
`