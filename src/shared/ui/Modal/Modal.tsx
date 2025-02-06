import { useOutsideClick } from '@/shared/hooks/useOutsideClick';
import { useEffect, useRef, useState, type FC, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

interface IModalProps {
  children: ReactNode;
  isOpen: boolean;
  toggleModal: () => void;
}

export const Modal: FC<IModalProps> = ({ children, isOpen, toggleModal }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [portalElement, setPortalElement] = useState<Element | null>(null);

  useOutsideClick(modalRef, toggleModal);

  useEffect(() => {
    if (modalRef.current) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    setPortalElement(document.getElementById('modal'));
  }, []);

  if (!isOpen || !portalElement) return null;

  return createPortal(
    <Backdrop>
      <div ref={modalRef}>{children}</div>
    </Backdrop>,
    portalElement,
  );
};

const Backdrop = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;
