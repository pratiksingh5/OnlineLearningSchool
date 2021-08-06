import {React,useState} from 'react'
import Button from '../Components/Button'
import items from '../Data';
import Course from '../Components/Course'

const allCategories = ['All', ...new Set(items.map(item => item.category))];


function Courses() {
    const [menuItem, setMenuItem] = useState(items);
    const [buttons, setButtons] = useState(allCategories);
 
  //Filter Function
  const filter = (button) =>{

    if(button === 'All'){
      setMenuItem(items);
      return;
    }

    const filteredData = items.filter(item => item.category ===  button);
    setMenuItem(filteredData)
  }


    return (
        <div className="pages">
            <h2>The world Best courses </h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea iu</p>
          <Button button={buttons} filter={filter}/>
    

          <Course menuItem={menuItem}/>
         

        </div>
    )
}

export default Courses
