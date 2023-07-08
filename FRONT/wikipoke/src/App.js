import { AuthProvider } from './contexts/useAuthContext';
import Router from './router/router';

function App() {
  return (
    <AuthProvider>
      <Router/>
    </AuthProvider>
  );
}

export default App;
