import React, {useState, useEffect} from 'react'
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon, 
    MobileIcon, 
    NavMenu,
    NavItem, 
    NavLinks,
    NavItemBtn,
    NavBtnLink
} from './Navbar.element';
import { Button } from '../../globalStyles'
import { FaBars, FaTimes } from 'react-icons/fa'
//리엑트아이콘 색상을 변경하기위해
import { IconContext } from 'react-icons/lib'


const Navbar = () => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])
    
    window.addEventListener('resize', showButton);
    
    return (
        <>
            <IconContext.Provider value={{color:'#fff'}}>
                <Nav>
                    <NavbarContainer>
                        {/* 라우터 links to = "~" */}
                        <NavLogo to="/" onClick={handleClick} click={click}>
                            <NavIcon />
                                Dubaiyu
                        </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars/>}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to='/'>
                                Home
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/services'>
                                Services
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/products'>
                                Products
                            </NavLinks>
                        </NavItem>
                        <NavItemBtn>
                            {button ? (
                                <NavBtnLink to="/sign-up">
                                    <Button primary>SIGN UP</Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to="/sign-up">
                                    <Button fontBig primary>
                                        SIGN UP
                                    </Button>
                                </NavBtnLink>
                            )
                        }
                        </NavItemBtn>
                    </NavMenu>
                    
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
