
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CartItem } from '../types';
import { WHATSAPP_NUMBER } from '../constants';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQty: (id: string, delta: number) => void;
  total: number;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onRemove, onUpdateQty, total }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    let message = `Olá! Gostaria de fazer um pedido na Adega Vista Alegre 🍷\n\nProdutos selecionados:\n`;
    items.forEach(item => {
      message += `- ${item.name} (${item.quantity}x) – R$ ${(item.price * item.quantity).toFixed(2)}\n`;
    });
    message += `\nValor total: R$ ${total.toFixed(2)}`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  const handleGoToShop = () => {
    onClose();
    navigate('/vinhos');
  };

  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={onClose}
      />
      <div className={`fixed right-0 top-0 h-[100dvh] w-full max-w-md bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 md:p-6 border-b border-gray-100 flex justify-between items-center bg-cream shrink-0">
            {/* Mobile Back Button */}
            <button onClick={onClose} className="md:hidden flex items-center text-wine hover:text-wine-light transition-colors group">
               <svg className="w-5 h-5 mr-1 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
               </svg>
               <span className="font-bold text-sm uppercase tracking-wider">Voltar</span>
            </button>

            <h2 className="text-xl font-serif font-bold text-wine flex items-center">
              Meu Pedido
              {itemCount > 0 && (
                <span className="ml-2 w-6 h-6 bg-wine text-white text-xs font-sans rounded-full flex items-center justify-center shadow-sm">
                  {itemCount}
                </span>
              )}
            </h2>

            {/* Desktop Close Button */}
            <button onClick={onClose} className="hidden md:block p-2 hover:bg-gray-100 rounded-full transition-colors">
              <svg className="w-6 h-6 text-gray-400 hover:text-wine" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Placeholder for alignment on mobile if needed, or just let flex justify-between handle it */}
            <div className="w-8 md:hidden"></div> 
          </div>

          {/* Items List */}
          <div className="flex-grow overflow-y-auto p-4 md:p-6 space-y-6">
            {items.length === 0 ? (
              <div className="text-center py-20 space-y-4">
                <p className="text-gray-400">Seu carrinho está vazio.</p>
                <button 
                  onClick={handleGoToShop}
                  className="text-wine font-bold border-b-2 border-wine hover:text-gold hover:border-gold transition-all pb-1"
                >
                  Ver vinhos agora
                </button>
              </div>
            ) : (
              items.map(item => (
                <div key={item.id} className="flex space-x-4 border-b border-gray-50 pb-4 last:border-0">
                  <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded-md shadow-sm" />
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <h3 className="font-serif font-bold text-wine leading-tight pr-4">{item.name}</h3>
                      <button onClick={() => onRemove(item.id)} className="text-gray-300 hover:text-red-500 p-1">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">R$ {item.price.toFixed(2)}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50">
                        <button 
                          onClick={() => onUpdateQty(item.id, -1)} 
                          className="px-3 py-1 text-gray-500 hover:text-wine hover:bg-gray-100 rounded-l-lg transition-colors"
                        >-</button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQty(item.id, 1)} 
                          className="px-3 py-1 text-gray-500 hover:text-wine hover:bg-gray-100 rounded-r-lg transition-colors"
                        >+</button>
                      </div>
                      <span className="font-bold text-wine">R$ {(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-4 md:p-6 bg-cream border-t border-gray-100 space-y-4 shrink-0 safe-area-bottom">
              <div className="flex justify-between items-center text-lg font-serif">
                <span>Total Estimado:</span>
                <span className="font-bold text-wine text-2xl">R$ {total.toFixed(2)}</span>
              </div>
              
              <div className="flex flex-col gap-3">
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-wine text-white py-4 rounded-full font-bold uppercase tracking-widest hover:bg-wine-dark transition-colors flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform duration-300"
                >
                  <span>Finalizar compra</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.672 1.433 5.661 1.433h.05c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </button>
                
                <button 
                  onClick={onClose}
                  className="w-full bg-transparent text-wine/80 border border-wine/20 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-wine/5 hover:text-wine transition-colors active:bg-wine/10"
                >
                  Continuar Comprando
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
