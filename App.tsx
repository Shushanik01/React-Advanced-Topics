import ListApp from './React-virtualized/List.jsx';
import AutoSizerList from './React-virtualized/List.jsx';
import Component from './React-portal/index.js';
import HookForm from './Modal-React-hook-forms/hook-form/hookForm.js';
import Modal from './Modal-React-hook-forms/modal/modal.tsx';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  return (
    <>
      <ListApp />
      <AutoSizerList />
      <Component />
      <button onClick={() => setIsOpen(true)}>Open Form</button>
      <Modal onClose={onClose} isOpen={isOpen}>
        <HookForm />
      </Modal>
    </>
  )
}

export default App;
