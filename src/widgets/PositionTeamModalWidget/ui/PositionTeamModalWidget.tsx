import { ModalContentDnD } from '@/features/ModalContentDnD';
import { useModal } from '@/shared/hooks/useModal';
import { Button } from '@/shared/ui/Button';
import { Modal } from '@/shared/ui/Modal';
import { useTranslations } from 'next-intl';
import styled from 'styled-components';

export const PositionTeamModalWidget = () => {
  const t = useTranslations('home');

  const { isOpenModal, toggleModal, closeModal } = useModal();

  return (
    <ContainerGradientWithButton>
      <LargeGradientDiv />
      <SmallGradientDiv />

      <ButtonContainer>
        <Button
          size='big'
          color='primary'
          shadow
          width='242px'
          text={t('arrangeTeams')}
          state='active'
          onClick={toggleModal}
        />

        <Modal isOpen={isOpenModal} toggleModal={toggleModal}>
          <ModalWrapper>
            <ModalContentDnD closeModal={closeModal} />
          </ModalWrapper>
        </Modal>
      </ButtonContainer>
    </ContainerGradientWithButton>
  );
};

const ContainerGradientWithButton = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 602px;
  height: 236px;
  border-radius: 8px;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  background-color: #27282ee5;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(/images/BgNoize.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    mix-blend-mode: color-burn;
  }

  @media (max-width: 768px) {
    width: 78%;
    height: 150px;
  }
`;

const LargeGradientDiv = styled.div`
  position: absolute;
  z-index: 2;
  top: -165px;
  left: -227px;
  width: 675px;
  height: 675px;
  border-radius: 50%;
  background: radial-gradient(circle, #48484c 0%, transparent 70%, transparent 100%);
`;
const SmallGradientDiv = styled.div`
  position: absolute;
  z-index: 2;
  top: -241px;
  right: -226px;
  width: 556px;
  height: 556px;
  border-radius: 50%;
  background: radial-gradient(circle, #48484c 0%, transparent 70%, transparent 100%);
`;

const ButtonContainer = styled.div`
  z-index: 3;
`;

const ModalWrapper = styled.div`
  background-color: #16171c;
  position: relative;
  padding: 32px 160px;
  border-radius: 10px;
  width: 1348px;
  height: 800px;
  box-shadow: 0px 0px 34px 0px rgba(209, 194, 194, 0.6);

  @media (max-width: 1440px) {
    max-width: 90vw;
    max-height: 90vh;
    padding: 32px;
  }
`;
