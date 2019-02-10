import React from 'react'
import styled from 'styled-components'

import { Link, Events, scrollSpy, scroller } from 'react-scroll'
import Button from './Button';

export const NavSection = styled.nav`
  position: fixed;
  transition: all .2s;
  right: 2rem;
  margin: 0 !important;
  top: 50%;
  transform: translateY(-50%);
  z-index:1000;
  visibility:${(props) => props.display ? "visible" : "hidden"} ;
  /* display: ${(props) => props.display ? "" : "none"}; */
  /* transition : display 1s  !important; */
  
  @media(max-width: 768px) {
   display: none;
  }
  @media(max-width: 878px) {
    right: 0.5rem;
  }
  @media(max-width: 1024px) {
    right: 0.5rem;
  }

  &:after {
    clear: both;
    text-decoration: none;
  }
`
const BG = styled.div`
  background-image : url('static/img/paper.png') ;
  background-size: cover;
  min-width:95px;
  background-position:right;
  justify-content: center;
`
const NavLink = styled(Link)`
  display: flex;
  color: black;
  margin: 20px 0;
  opacity: 0.6;
  transition: all .2s;
  cursor : pointer;

  &:before {
    content: '';
    height: 20px;
    width: 7.5px;
    display: flex;
    border: 1px solid #C63939;
    margin: 5px;
    background-color: #C63939;
  }
  
  .text {
    opacity: 0;
    display: flex;
    position: absolute;
    right: 2.2em;
    width: 100px;
    justify-content: flex-end;
    font-size: 14px;
    top:10%;
  }

  &:hover {
    opacity: 1;
    &:before {
      border: 1px solid white;
    }
    .text {
      opacity: 0  ;
      color: black;
    }
  }

  &.active {
    opacity: 1;
    &:before {
      opacity:0;
    }
    .text {
      opacity: 1;
      display: flex;
      position: absolute;
      justify-content: flex-end;
      font-size: 14px;
      font-weight:bold;
    }
  }
`
const SectionUl = styled.ul`
  margin: 0;
`

const NavItems = styled.li`
  transition: all .15s ease;
  opacity: 1;
  display: block;
  margin-bottom: 10px;
  position: relative;
`

const AnimationNavbar = styled.div`
  animation-name: ${(props) => props.display ? "fadeInRight" : "fadeOutRight"  };
  animation-duration:.5s;
  animation-fill-mode: forwards;
  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes fadeOutRight {
    from {      
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }

    to {
      transform: translate3d(100%, 0, 0);
      opacity: 0;
    }
  }
`
  

const sections = [
  { href: 'home', title: '' },
  { href: 'what', title: 'What' },
  { href: 'who', title: 'Who' },
  { href: 'where', title: 'Where' },
  { href: 'when', title: 'When' },
  { href: 'faqs', title: 'FAQs' },
  { href: 'sponsor', title: 'Sponsor' },
  { href: 'contact', title: 'Contact' }
]

class Navbar extends React.Component {
  state = {
      current: 'home',
      show: false,
      display: false
  }
  toggleNavbar (to) {
    if (to === 'home') {
      this.setState({ show: false })
      this.setState({ display: false })
    }
    else {
      this.setState({ show: true })
      this.setState({ display: true })
    }
    this.setState({
      current: to
    })
  }

  render () {
    return (
      <NavSection active={this.state.show} display= {this.state.display}>
        
        <BG>
        <SectionUl className = "pt-2">
          {
            sections.map(i => (
              <NavItems key={i.href}>
                <NavLink
                  display={this.state.display}
                  activeClass="active"
                  to={i.href}
                  spy
                  smooth
                  duration={500}
                  offset={0}
                  onSetActive={to => this.toggleNavbar(to)}
                >
                  <div className="text">
                    {i.title}
                  </div>
                </NavLink>
              </NavItems>
            ))
          }
        </SectionUl>
        <div className = "text-center">
          <NavItems>
            <Link className = "text-center"
                  display="none"
                  activeClass="active"
                  to="game"
                  spy
                  smooth
                  duration={500}
                  offset={0}
                  onSetActive={to => this.toggleNavbar(to)}
            >
              <Button src = '/static/img/console.png'  className = "pb-2"/>
            </Link>
          </NavItems>
        </div>
        </BG>
      </NavSection>
    )
  }
}

export default Navbar