import styled from 'styled-components'

const WippoFAQ = styled.img`
  /* content:url('../../static/img/wippo/${props => props.wippo}'); */
  position: absolute;
  bottom: -5vh;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;

  @media (min-height:320px) {
    height: 35vh;
  }
  @media (min-height:576px) {
    height: 40vh;
  }
  @media (min-height:800px) {
    height: 45vh;
  }
  @media (min-height:1024px) {
    height: 50vh;
  }
`
export default WippoFAQ