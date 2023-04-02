import { Link } from 'react-router-dom';
import { FooterContent, FooterText } from './index.styled';

/**
 * Simple footer to show copyright info and a link to the contact page form. 
 */

export function Footer()  {
  return (
    <FooterContent>
      <FooterText>&#169; MP Productions</FooterText>
      <FooterText>
        <Link to="/contact">contact</Link>
      </FooterText>
    </FooterContent>
  )
}

// Not the fanciest footer in the game but a footer nonetheless!