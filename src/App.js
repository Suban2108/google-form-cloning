import Footer from '../src/Components/Footer/Footer';
import Box1 from './Components/Box1/box1';
import './App.css';
import Box2 from './Components/Box2/Box2';
import Box3 from './Components/Box3/Box3';
import Box7 from './Components/Box7/Box7';
import FinalBox from './Components/FinalBox/FinalBox';

function App() {
  const b3 = [
    'Next JS',
    'React JS',
    'Tailwind',
    'Design Skills',
    'Solana',
    'Ethereum',
    'Bitcoin',
    'Solidity',
    'Game Developer',
    'Rust',
    'NodeJS',
  ];
  const b4 = [
    'Full Stack',
    'Mobile Development',
    'AI/ML',
    'Crypto',
    'Solana',
    'Ethereum',
    'Bitcoin',
    'DeFi (decentralised finance)',
    'Frontend',
    'Backend',
    'Designing nice UI/UX',
  ];

 const b2 = 'What is your Telegram or Whatsapp (Telegram Preferred)'
 const b5 = 'Provide a website url of the best project you have  worked on. (or youtube video of a demo)'
 const b6 = 'Your github url'

  return (
    <div className="App">
      <Box1 />
      <Box2 title={b2}/>
      <Box3 b={b3} title="Select all technologies you know" />
      <Box3 b={b4} title="Select all you have experience with" />
      <Box2 title={b5}/>
      <Box2 title={b6}/>
      <Box7/>
      <FinalBox/>
      <Footer />
    </div>
  );
}

export default App;
