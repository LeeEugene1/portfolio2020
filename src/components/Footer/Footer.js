import React from 'react'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import {Button} from '../../globalStyles'

import {
    FooterContainer,
    FooterSubscription,
    FooterSubHeading,
    FooterSubText,
    Form,
    FormInput,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './Footer.element'

export default function Footer() {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership to receiver the latest news and trends
                </FooterSubHeading>
                <FooterSubText>You can unscbscribe at any time</FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Your Email"/>
                        <Button fontBig>Subscribe</Button>
                </Form>
            </FooterSubscription>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        Dubaiyu
                    </SocialLogo>
                    <WebsiteRights>Dubaiyu 2020</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target='_blank'
                            aria-label="instagram">
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank'
                            aria-label="Linkedin">
                            <FaLinkedin/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}
