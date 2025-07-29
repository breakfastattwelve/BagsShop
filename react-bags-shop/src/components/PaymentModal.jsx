import React, { useState } from 'react';
import { VscClose } from 'react-icons/vsc';
import { useCart } from '../hooks/useCart';

function PaymentModal({ isOpen, onClose, onPaymentComplete }) {
  const { total, formatMoney, clearCart } = useCart();
  const [selectedPayment, setSelectedPayment] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const paymentMethods = [
    {
      id: 'credit-card',
      name: 'บัตรเครดิต/เดบิต',
      icon: '💳',
      description: 'Visa, Mastercard, JCB'
    },
    {
      id: 'bank-transfer',
      name: 'โอนเงินผ่านธนาคาร',
      icon: '🏦',
      description: 'โอนเงินผ่านบัญชีธนาคาร'
    },
    {
      id: 'promptpay',
      name: 'PromptPay',
      icon: '📱',
      description: 'สแกน QR Code ผ่านแอปธนาคาร'
    },
    {
      id: 'cod',
      name: 'เก็บเงินปลายทาง',
      icon: '💰',
      description: 'จ่ายเงินเมื่อได้รับสินค้า'
    }
  ];

  const handlePaymentSelect = (paymentId) => {
    setSelectedPayment(paymentId);
  };

  const handleConfirmPayment = async () => {
    if (!selectedPayment) {
      alert('กรุณาเลือกช่องทางการชำระเงิน');
      return;
    }

    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      alert('การชำระเงินสำเร็จ!');
      clearCart();
      onPaymentComplete();
      onClose();
    }, 2000);
  };

  const handleClose = () => {
    if (!isProcessing) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-white z-50">
      {/* Header */}
      <div className="flex justify-between items-center p-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800">ชำระเงิน</h2>
        <button 
          onClick={handleClose}
          disabled={isProcessing}
          className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-full transition-colors disabled:opacity-50"
        >
          <VscClose className="w-6 h-6" />
        </button>
      </div>

      {/* Content */}
      <div className="p-6 h-full">
        {/* Order Summary */}
        <div className="mb-6 p-4 bg-gray-50 rounded-xl">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">สรุปคำสั่งซื้อ</h3>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">ยอดรวม:</span>
            <span className="text-2xl font-bold text-gray-800">฿{formatMoney(total)}</span>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">เลือกช่องทางการชำระเงิน</h3>
          <div className="space-y-3">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                onClick={() => handlePaymentSelect(method.id)}
                className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                  selectedPayment === method.id
                    ? 'border-black bg-black/5'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{method.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">{method.name}</h4>
                    <p className="text-sm text-gray-600">{method.description}</p>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedPayment === method.id
                      ? 'border-black bg-black'
                      : 'border-gray-300'
                  }`}>
                    {selectedPayment === method.id && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons - Fixed at bottom */}
        <div className="space-y-3 mt-auto pt-6">
          <button
            onClick={handleConfirmPayment}
            disabled={!selectedPayment || isProcessing}
            className="w-full bg-black text-white py-3 px-6 rounded-xl font-semibold hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {isProcessing ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                กำลังประมวลผล...
              </div>
            ) : (
              `ยืนยันการชำระเงิน ฿${formatMoney(total)}`
            )}
          </button>
          
          <button
            onClick={handleClose}
            disabled={isProcessing}
            className="w-full bg-gray-200 text-gray-800 py-3 px-6 rounded-xl font-semibold hover:bg-gray-300 disabled:opacity-50 transition-colors"
          >
            ยกเลิก
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentModal; 