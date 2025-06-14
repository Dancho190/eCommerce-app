import { useState } from 'react'
import "./Sidebar.css"
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

interface SidebarProps { // Структура пропсов
   isOpen: boolean;
   onClose: () => void;
   onApplyPromo:(code:string) => void
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, onApplyPromo }) => { // Передаем все пропсы интерфейса 
  const [promoCode, setPromoCode] = useState('');

  const handleApply = () => {
    onApplyPromo(promoCode.trim());
    setPromoCode('');
    onClose();
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-button" onClick={onClose}>
        <FaTimes />
      </button>
      <h2>Welcome to Aimaq Store</h2>
      <input
        type="text"
        placeholder="Enter promo code"
        value={promoCode}
        onChange={(e) => setPromoCode(e.target.value)}
      />
      <button onClick={handleApply}>Apply</button>
      <button className="sidebar-login-button" >
      <Link to="/login">Login</Link>
      </button>
    </div>
  );
};

export default Sidebar;
