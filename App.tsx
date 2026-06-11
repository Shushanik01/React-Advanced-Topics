import ListApp from './React-virtualized/List.jsx';
import AutoSizerList from './React-virtualized/List.jsx';
import Component from './React-portal/index.js';
import HookForm from './Modal-React-hook-forms/hook-form/hookForm.tsx';
import Modal from './Modal-React-hook-forms/modal/modal.tsx';
import { useState } from 'react';
import UserData from './Modal-React-hook-forms/userData/userData.tsx';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const [dataStorage, setDataStorage] = useState(false)

  return (
    <>
      <ListApp />
      <AutoSizerList />
      <Component />
      <button onClick={() => setIsOpen(true)}>Open Form</button>
      <Modal onClose={onClose} isOpen={isOpen}>
        <HookForm onDataStored={()=> setDataStorage(true)} onClose={onClose}/>
      </Modal>
      {
        dataStorage && <UserData onClose ={()=> setDataStorage(false)}/>
      }
    </>
  )
}

export default App;
