import React from 'react';
import './Dialog.css';

interface DialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
}

const Dialog: React.FC<DialogProps> = ({ open, onClose, onConfirm, title, message }) => {
  if (!open) return null;

  return (
    <div className="dialog-overlay">
      <div className="dialog">
        <h2>{title}</h2>
        <p>{message}</p>
        <div className="dialog-buttons">
          <button onClick={onClose} className="dialog-button cancel">
            Cancel
          </button>
          <button onClick={onConfirm} className="dialog-button confirm">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;