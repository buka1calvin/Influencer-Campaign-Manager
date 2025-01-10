import React from "react";
import { motion } from "framer-motion";

interface OverlayProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const OverlayModel = ({ children, onClose, isOpen }: OverlayProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <motion.div
      className="fixed inset-0 bg-background/40 flex justify-end z-[1050]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-background text-white w-1/2 h-full shadow-lg relative"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default OverlayModel;
