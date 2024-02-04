import clsx from "clsx";
import FocusTrap from "focus-trap-react";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

type ModalProps = {
  children: React.ReactNode;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  containerClasses?: string;
};

const Modal: React.FC<ModalProps> = ({
  children,
  setShowModal,
  showModal,
  containerClasses,
}) => {
  const modalRef = React.useRef(null);

  return (
    <AnimatePresence>
      {showModal && (
        <>
          <FocusTrap focusTrapOptions={{}}>
            <motion.div
              ref={modalRef}
              key="desktop-modal"
              className="fixed inset-0 z-40 hidden min-h-screen items-center justify-center md:flex"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onMouseDown={(e) => {
                if (modalRef.current === e.target) {
                  setShowModal(false);
                }
              }}
            >
              <div
                className={clsx(
                  `overflow relative w-full max-w-lg transform rounded-xl border border-gray-200 bg-white p-6 text-left shadow-2xl transition-all`,
                  containerClasses
                )}
              >
                {children}
              </div>
            </motion.div>
          </FocusTrap>
          <motion.div
            key="desktop-backdrop"
            className="fixed inset-0 z-30 bg-gray-100 bg-opacity-10 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
