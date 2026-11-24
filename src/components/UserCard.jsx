function UserCard({ user }) {
  return (
    <div className="user-card">
      <h2>{user.name}</h2>
      <p><strong>Usuario:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Telefone:</strong> {user.phone}</p>
      <p><strong>Cidade:</strong> {user.address.city}</p>
      <p><strong>Empresa:</strong> {user.company.name}</p>
    </div>
  );
}

export default UserCard;
