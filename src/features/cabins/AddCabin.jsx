import React from 'react';
import { useState } from 'react';
import Button from '../../ui/Button';
import CreateCabinForm from './CreateCabinForm';
import Modal from '../../ui/Modal';

function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div>
      <Button onClick={() => setIsOpenModal((show) => !show)}>
        Add a new Cabin
      </Button>

      {isOpenModal && <Modal />}
    </div>
  );
}

export default AddCabin;
