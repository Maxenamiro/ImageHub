//import './App.css';

import { RegistrationForm } from './components/RegistrationForm';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        {/* <header className='App-header'></header> */}
        <RegistrationForm />
      </AuthProvider>
    </div>
  );
}

export default App;
