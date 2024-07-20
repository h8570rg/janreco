"use client";

import { Modal, ModalContent } from "@/components/Modal";
import { useMatchContext } from "../../../../context";

export function GameInputModalController({
  children,
}: {
  children: React.ReactNode;
}) {
  const { gameInputModal } = useMatchContext();

  return (
    <Modal
      isOpen={gameInputModal.isOpen}
      onClose={gameInputModal.onClose}
      hideCloseButton
    >
      <ModalContent>{children}</ModalContent>
    </Modal>
  );
}
