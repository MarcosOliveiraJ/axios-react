import { useState, useEffect } from 'react';
import api from './services/api';
import UserCard from './components/UserCard';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);
        setError(null);
        const response = await api.get('/users');
        setUsers(response.data);
      } catch {
        setError('Nao foi possivel carregar os dados. Verifique a conexao e tente novamente.');
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <header className="header">
        <h1>Lista de Usuarios</h1>
        <p>Dados consumidos da API JSONPlaceholder</p>
      </header>

      <div className="search-box">
        <input
          type="text"
          placeholder="Buscar por nome..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {loading && <p className="status-message">Carregando dados...</p>}

      {error && !loading && <p className="error-message">{error}</p>}

      {!loading && !error && filteredUsers.length === 0 && (
        <p className="status-message">Nenhum usuario encontrado.</p>
      )}

      {!loading && !error && (
        <div className="user-grid">
          {filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
