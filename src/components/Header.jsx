import Navbar from './Navbar';

export default function Header({ cartCount }) {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container flex items-center justify-between py-4">
        <h1 className="text-2xl font-bold">🛍️ Mi Tienda</h1>
        <Navbar cartCount={cartCount} />
      </div>
    </header>
  );
}
