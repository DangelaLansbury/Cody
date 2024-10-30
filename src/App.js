import './App.css';
import { BaseGroupFull } from './components/BaseGroup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: 'flex', flexDirection: 'horizontal', gap: '1rem' }}>
          <BaseGroupFull />
        </div>
        <p>Hi there, I'm Cody. Your Codon companion.</p>
      </header>
    </div>
  );
}

export default App;
