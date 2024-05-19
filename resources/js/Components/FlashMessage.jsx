import React, { useState, useEffect } from 'react';
import { usePage } from '@inertiajs/react';

function FlashMessage() {
  const { flash } = usePage().props;
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (flash.message) {
      setShowModal(true);

      const timer = setTimeout(() => {
        setShowModal(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [flash]);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    showModal && (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <dialog open={showModal} className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              <span className="material-symbols-outlined text-green-500">check_circle</span>
            </h3>
            <p className="py-4">{flash.message}</p>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn btn-outline btn-secondary" onClick={closeModal}>
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    )
  );
}

export default FlashMessage;
