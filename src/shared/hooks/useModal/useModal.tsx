import { useCallback, useState } from 'react';

export const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const onOpenModalHandler = useCallback(() => setIsOpenModal(true), []);
  const onCloseModalHandler = useCallback(() => setIsOpenModal(false), []);
  const onToggleModalHandler = useCallback(() => setIsOpenModal(prev => !prev), []);

  return {
    isOpenModal,
    onOpenModalHandler,
    onCloseModalHandler,
    onToggleModalHandler,
  };
};
