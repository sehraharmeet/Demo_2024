import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface CustomLinkProps {
  to: string;
  children: ReactNode;
}

const Protiviti: React.FC<CustomLinkProps> = ({ to, children }) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(to);
    //window.open('http://google.com')
  };

  return (
    <a href={to} onClick={handleClick}>
      {children} :-)
    </a>
  );
};

export default Protiviti;
