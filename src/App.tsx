import * as C from './App.styles'
import { Character } from './components/Character/index';
import { useCharacter } from './hooks/useCharacter';
import { useEffect } from 'react';
const App = () => {
  const char = useCharacter()

  useEffect(()=>{
    window.addEventListener('keydown',handleKeydown)
  },[])

  const handleKeydown = (e:KeyboardEvent) => {
   
    switch(e.code){
      case 'KeyA':
      case 'ArrowLeft':
        char.moveLeft()
        break;
      case 'KeyD':
      case 'ArrowRight':
        char.moveRight()
        break;
      case 'KeyW':
      case 'ArrowUp':
        char.moveUp()
        break;
      case 'KeyS':
      case 'ArrowDown':
        char.moveDown()
        break;
      default:
        break;
    }
  }
   
  return (
    <C.Container>
      <C.Map>
        <Character x={char.x} y={char.y}/>
      </C.Map>
    </C.Container>
  );
}

export default App;
