import { useCallback, useState } from 'react';

export function useModalState(initial = false) {
  const [isOpen, setIsOpen] = useState(initial);

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onToggle = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  const onChange = useCallback((value: boolean) => {
    setIsOpen(value);
  }, []);

  return { isOpen, onOpen, onClose, onToggle, onChange };
}
