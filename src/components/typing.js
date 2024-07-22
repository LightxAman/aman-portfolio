import { TypeAnimation } from 'react-type-animation';

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        'MRIIRS B.TECH CSE',
        3000, // Wait
        'DATA SCIENCE, AI & ML', 
        3000, // Wait
        'GAME DEVELOPER', 
        3000, // Wait
        'Click on the links above to find out more',
        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '3em', textAlign:'center', fontFamily: 'Courier New', fontWeight:'600', color:'#1c2e4a'}}
    />
  );
};

export default ExampleComponent;