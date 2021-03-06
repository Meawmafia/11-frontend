import styled from 'styled-components'

export const DesktopScripture = styled.div`
  position: absolute;
  z-index: 6;
  bottom: 38vh;
  width:20%;
  animation: ${props => props.discription};
  @keyframes spin{
    0%{
      content : url('/static/img/announce/_Scripture.png');
      width:auto;
      height:auto;
      transform: rotate3d(0, 0, 1, 5deg);
    }
    10%, 20%, 30%, 40%, 50% {
      transform: rotate3d(0, 0, 1, 5deg);
    }
    5%, 15%, 25%, 35%, 45%, 55% {
      transform: rotate3d(0, 0, 1, -5deg);
    }
    60% {
        content : url('/static/img/announce/_Scripture.png');
        transform: translate(0, -100%) rotate(360deg);
        opacity : 1;
        bottom:54vh;
    }
    65% {
        transform: translate(0, -200%) rotate(720deg);
        opacity : 1;
        width:auto;
        height:auto;
    }
    70% {
        transform: translate(0, -300%) rotate(1080deg);
        opacity : 1;
    }
    75% {
        transform: translate(0, -400%) rotate(1440deg);
        opacity : 0;
    }
    80% {
        transform: translate(0, -500%) rotate(1800deg);
        opacity : 0;

    }
    100%{
      background-image: url('/static/img/announce/_ScriptureFull.png');
      background-position:center;
      background-repeat:no-repeat;
      background-size:contain;
      transform:translate(0, 0) rotate(0deg);
      opacity:1;
      bottom:30vh;
      width:50%;
      height:50%;
    }
  }
  @keyframes swing{
    0% {
      width:auto;
      height:auto;
      content : url('/static/img/announce/_Scripture.png');
      transform: rotate3d(0, 0, 1, 5deg);
    }
    50%{
      content : url('/static/img/announce/_Scripture.png');
      transform: rotate3d(0, 0, 1, -5deg);
    }
    100%{
      width:auto;
      height:auto;
      content : url('/static/img/announce/_Scripture.png');
      transform: rotate3d(0, 0, 1, 5deg);
    }
  }
  @media (min-width : 320px) {
    display:none;
  }
  @media (min-width : 769px){
    display:none;
  }
  @media (min-width : 1102px) and  (orientation: Landscape){
    display:block;
  }
  @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
    display:none;
  }
  @media only screen and (min-width: 1024px) and (max-height: 768px) {
    display:none;
  }
  @media only screen and (min-width: 1030px) and (max-height: 768px) {
    display:block;
  }
  @media only screen and (min-width: 834px) and (max-height: 1112px) and (orientation: portrait)  {
    display:none;
  }
  @media only screen and (min-width: 1110px) and (max-height: 835px) {
    display:none;
  }
  @media only screen and (min-width: 1115px) and (max-height: 835px) {
    display:block;
  }
  @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
    display:none;
  }
  @media only screen and (min-width: 1366px) and (max-height: 1024px) {
    display:none;
  }
  @media only screen and (min-width: 1370px) and (max-height: 1024px) {
    display:block;
  }
  @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait) {
    display:none;
  }
  @media only screen and (min-width: 1194px) and (max-height: 835px) {
    display:none;
  }
  @media only screen and (min-width: 1197px) and (max-height: 835px) {
    display:block;
  }
  @media only screen and (min-width: 1024px) and (max-height: 1468px) and (orientation: portrait) {
    display:none;
  }
  @media only screen and (min-width: 1466px) and (max-height: 1024px) {
    display:none;
  }
  @media only screen and (min-width: 1470px) and (max-height: 1024px) {
    display:block;
  }
  @media only screen and (width:768px) and (resolution: 163dpi) {
    display:none;
  }

  @media only screen and (width:1024px) and (resolution: 163dpi) {
    display:none;
  }
`

export const DesktopText = styled.div`
  padding-top:4em;
  padding-left:15em;
  padding-right:15em;
  position:relative;
  text-align:center !important;
  @media (min-width : 1024px) {
    left:16vw;
    padding-top:3em;
    padding-left:1em;
    padding-right:1em;
    width: 200px;
  }
  @media (min-width : 1171px) {
    padding-top:8em;
    padding-right:10em;
    font-size:1.2em;
    width: 400px;
  }
  @media (min-width : 1196px) {
    padding-top:5em;
    padding-right:12em;
    font-size:1.2em;
    width: 500px;
  }
  @media (min-width : 1482px) {
    padding-right:12em;
    padding-left:auto;
    width: 500px;
  }
  @media (min-width : 2500px) {
    padding-top:3em;
    padding-right:3.5em;
    padding-left:auto;
    font-size:2.1em;
    left:17.5vw;
  }
`

export const MobileScripture = styled.div`
  position:absolute;
  z-index:6;
  display : block;
  @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
    display:block !important;
   }
   @media only screen and (min-width: 1024px) and (max-height: 768px) {
    display:block !important;
  }
  @media only screen and (min-width: 1030px) and (max-height: 768px) {
    display:none !important;
  }
  @media only screen and (min-width: 1024px) and (max-height: 1370px)  {
    display:block !important;
  }
  @media only screen and (min-width: 834px) and (max-height: 1112px) and (orientation: portrait)  {
    display:block !important;
  }
  @media only screen and (min-width: 1110px) and (max-height: 835px) {
    display:block !important;
  }
  @media only screen and (min-height: 835px)  and (orientation: Landscape)  {
    display: none !important;
  }
  @media only screen and (min-width: 1115px) and (max-height: 835px) {
    display:none !important;
  }
  @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
    display:block !important;
  }
  @media only screen and (min-width: 1366px) and (max-height: 1024px) {
    display:block !important;
  }
  @media only screen and (min-width: 1370px) and (max-height: 1024px) {
    display:none !important;
  }
  @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait) {
    display:block !important;
  }
  @media only screen and (min-width: 1194px) and (max-height: 835px) {
    display:block !important;
  }
   @media only screen and (min-width: 1197px) and (max-height: 835px) {
    display:none !important;
  }
  @media only screen and (min-width: 1024px) and (max-height: 1468px) and (orientation: portrait) {
    display:block !important;
  }
  @media only screen and (min-width: 1466px) and (max-height: 1024px) {
    display:block !important;
  }
  @media only screen and (min-width: 1470px) and (max-height: 1024px) {
    display:none !important;
  }
  @media only screen and (width:768px) and (resolution: 163dpi) {
    display:block !important;
  }
  @media only screen and (width:1024px) and (resolution: 163dpi) {
    display:block !important;
  }
`

export const Box = styled.div`
   position:absolute;
   @media (min-width:320px) {
    left: 2vw;
    right:2vw;
    top:40vh;
  }
  @media only screen and (min-width: 1024px) and (max-height: 768px) {
    top:20vh;
  }
  @media only screen and (min-width: 1366px) and (max-height: 1024px) {
    top:30vh;
  }
  @media only screen and (min-width: 1110px) and (max-height: 835px) {
    top:20vh;
  }
   @media only screen and (min-width: 1194px) and (max-height: 835px) {
    top:20vh;
  }
`

export const MobileText = styled.span`
  position:absolute;
  z-index: 6;
  visibility:${props => props.display} ;
    @media (min-width : 320px) {
    padding-top:2em;
    padding-bottom:3.4em;
    padding-left:1.5em;
    padding-right:1.5em;
    font-size:0.8em;
    width: 200px;
  }
  @media (min-width : 414px) {
    padding-top:2.5em;
  }
  @media (min-width : 768px) {
    padding-top:2.5em;
    padding-left:1em;
    padding-right:1em;
    font-size:1.5em;
    width: 300px;
  }
`

export const ImgBeforeEntrance = styled.img`
  position:absolute;
  z-index: 5 ;
  visibility: ${props => props.before || 'visible'};
  @media (min-width:320px) {
    bottom: -36vh;
    width: 150px;
  }
  @media (min-width:375px) {
    width: 170px;
  }
  @media (min-width:768px) {
    bottom: -28vh;
    width: auto;
  }
  @media only screen and (min-width: 1024px) and (max-height: 1367px) and (orientation: portrait) {
    bottom: -27vh;
    width: 400px;
  }
  @media only screen and (min-width: 1366px) and (max-height: 1024px) {
    bottom: -36vh;
    width: 300px;
  }
  @media only screen and (min-width: 1194px) and (max-height: 835px) {
    bottom: -45vh;
    width: 270px;
  }
`

export const ImgAfterEntrance = styled.img`
  position:absolute;
  z-index: 5 ;
  visibility:${props => props.display || 'hiiden'} ;
  @media (min-width:320px) {
    width: 280px;
  }
  @media (min-width:414px) {
    width: 300px;
  }
  @media (min-width:768px) {
    width: auto;
  }
`

export const Shadow = styled.img`
  position: absolute;
  z-index: 3;
  bottom: 0vh;
  width:100%;
  @media (min-width: 320px) { 
    bottom:0vh;
    width:61%;
  }
  @media (min-width: 1025px) { 
    bottom:0vh;
    width:26.3%;
  }
  @media (min-width: 1366px) { 
    bottom:2vh;
    width:31%;
  }
  @media (min-width: 1367px) { 
    bottom:0vh;
    width:26.3%;
  }
`

export const Linen = styled.img`
  position: absolute;
  z-index: 5;
  bottom: 0vh;
  width:100%;
  @media (min-width: 320px) { 
    bottom:19vh;
    width:70%;
  }
  @media (min-width: 768px) { 
    bottom:25vh;
    width:70%;
  }
  @media (min-width: 1025px) { 
    bottom:27vh;
    width:35%;
  }
`

export const Base = styled.img`
  position: absolute;
  z-index: 4;
  bottom: 0vh;
  width:100%;
  
  @media (min-width: 320px) { 
    bottom:3vh;
    width:70%;
  }
  @media (min-width: 1025px) { 
    bottom:5vh;
    width:30%
  }
  @media (min-width: 1366px) { 
    bottom:6vh;
    width:35%
  }
  @media (min-width: 1367px) { 
    bottom:5vh;
    width:30%
  }
`
export const Button = styled.button`
  cursor: pointer;
  transition-property: color;
  background-color:rgba(204, 0, 68,.7);
  border:none;
  display: inline-block;
  position: relative;
  overflow: hidden;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  transition-duration: 0.3s;
  transition-property: box-shadow, transform;
  visibility : ${(props) => props.visible || 'hidden'};
  /* text-align:center !important; */
  @media screen and (min-width:320px) {
    width:100px;
    height:20px;
  }
  @media screen and (min-width:768px) {
    width:200px;
    height:50px;
  }
  
  &:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #b30000;
  border-radius: 100%;
  transform: scale(2);
  transition-property: transform;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
  }
  
  &:hover{
    box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
    transform: scale(1.1);
    color: white;
  }

  &:hover:before{
    transform: scale(0);
  }
`

export const Link = styled.a`
  color:white;
  &:hover{
    color:white;
    text-decoration:none;
  }
  &:visited{
    color:white;
    text-decoration:none;
  }
`
