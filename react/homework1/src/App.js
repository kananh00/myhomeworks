import React, {useState} from 'react';
import Button from './components/Button'
import Button2 from './components/Button2'
import Modal from './components/Modal'
function App() {
  const [firstModalStatus, setFirstModalStatus] = useState(false);
  const [secondModalStatus, setSecondModalStatus] = useState(false);
  const toggleFirstModal = () => setFirstModalStatus(v => !v)
  const toggleSecondModal = () => setSecondModalStatus(v => !v)
  return (
    <div className="App">
      <Button backgroundColor = '#d44637' 
      text = 'Delete File' 
      onClick = {toggleFirstModal}/>
      <Button backgroundColor = 'green' 
      text = 'Save Changes' 
      onClick = {toggleSecondModal}/>
      {firstModalStatus && (
        <Modal header = 'Do you want to delete this file?'
        closeIcon = {true}
        text = {` Once you delete this file, it won’t be possible to undo this action. \n Are you sure you want to delete it?`} 
        close = {toggleFirstModal}
        actions = {[
          <Button2 
            key = {1}
            backgroundColor = 'rgba(0, 0, 0, .2)' 
            text = 'Ok' 
            onClick = {() => alert('File is deleted successfully')}/>,
          <Button2 
            key = {2}
            backgroundColor = 'rgba(0, 0, 0, .2)'  
            text = 'Cancel' 
            onClick = {toggleFirstModal}/>
        ]}/>
      )}
    
    {secondModalStatus && (
            <Modal header = 'Are you sure save all changes?'
            closeIcon = {true}
            text = {`If you save all changes, it won’t be possible to undo this action. \n Are you sure you want to save it?`}
            close = {toggleSecondModal}
            actions = {[
              <Button2 
                key = {1}
                backgroundColor = 'rgba(0, 0, 0, .2)'  
                text = 'Save' 
                onClick = {() => alert('All changes are saved succesfully')}/>,
              <Button2 
                key = {2}
                backgroundColor = 'rgba(0, 0, 0, .2)'  
                text = 'Cancel' 
                onClick = {toggleSecondModal}/>
            ]}/>
          )}
    </div>
  );
}
export default App;
