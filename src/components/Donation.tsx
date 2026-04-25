import { useState } from 'react';
import { Building2, CreditCard, Smartphone, FileText, Heart, Copy, CheckCheck } from 'lucide-react';

const amounts = [1000, 2500, 5000, 10000, 25000, 50000];

type Method = 'bank' | 'card' | 'transfer' | 'cheque';

const methods: { id: Method; label: string; icon: typeof Building2; desc: string }[] = [
  { id: 'bank', label: 'Bank Deposit', icon: Building2, desc: 'Pay directly into our bank account at any branch.' },
  { id: 'card', label: 'Card Payment', icon: CreditCard, desc: 'Pay securely with Visa, Mastercard, or Verve card.' },
  { id: 'transfer', label: 'USSD / Transfer', icon: Smartphone, desc: 'Instant bank transfer via USSD or mobile banking app.' },
  { id: 'cheque', label: 'Cheque', desc: 'Send a cheque to our school address.', icon: FileText },
];

const bankDetails = [
  { label: 'Bank Name', value: 'Zenith Bank PLC' },
  { label: 'Account Name', value: 'The Place of Liberty School' },
  { label: 'Account Number', value: '1234567890' },
  { label: 'Sort Code', value: '057' },
];

const ussdCodes = [
  { bank: 'GTBank', code: '*737*1*Amount*1234567890#' },
  { bank: 'Zenith Bank', code: '*966*Amount*1234567890#' },
  { bank: 'Access Bank', code: '*901*Amount*1234567890#' },
  { bank: 'First Bank', code: '*894*Amount*1234567890#' },
  { bank: 'UBA', code: '*919*3*Amount*1234567890#' },
];

function CopyBtn({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={copy}
      aria-label="Copy"
      className="p-1.5 rounded-md hover:bg-orange-100 text-gray-400 hover:text-orange-600 transition-colors"
    >
      {copied ? <CheckCheck size={15} className="text-green-600" /> : <Copy size={15} />}
    </button>
  );
}

export default function Donation() {
  const [selectedMethod, setSelectedMethod] = useState<Method>('bank');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(5000);
  const [customAmount, setCustomAmount] = useState('');

  return (
    <section id="donate" className="bg-gray-50 py-16 md:py-24">
      {/* Banner */}
      <div
        className="relative mb-16 py-16 px-4 text-center text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(21,128,61,0.92), rgba(21,128,61,0.95)), url(https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg?auto=compress&cs=tinysrgb&w=1600)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Heart size={40} className="mx-auto mb-4 text-orange-400" />
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Your Donation Means Everything</h2>
        <p className="text-green-100 max-w-xl mx-auto leading-relaxed mb-6">
          Every naira you give helps a child with a developmental disability access world-class education, therapy, and care. Be the difference in a child's life today.
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-green-100">
          {[
            { amount: '₦1,000', impact: 'Buys school supplies for one child' },
            { amount: '₦5,000', impact: 'Funds one therapy session' },
            { amount: '₦25,000', impact: 'Sponsors one child for a month' },
          ].map(({ amount, impact }) => (
            <div key={amount} className="bg-white/10 rounded-xl px-5 py-3 text-center">
              <div className="text-orange-300 font-bold text-lg">{amount}</div>
              <div className="text-xs">{impact}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">
            Make a Difference
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Donate Now</h2>
          <p className="text-gray-500 leading-relaxed">
            Choose your preferred payment method below. All donations are acknowledged with a receipt.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Amount selection */}
          <div className="p-6 md:p-8 border-b border-gray-100">
            <h3 className="font-bold text-gray-900 mb-4">Select Amount (NGN)</h3>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-4">
              {amounts.map((amt) => (
                <button
                  key={amt}
                  onClick={() => { setSelectedAmount(amt); setCustomAmount(''); }}
                  className={`py-2.5 rounded-xl text-sm font-semibold border-2 transition-all duration-200 ${
                    selectedAmount === amt && !customAmount
                      ? 'bg-orange-500 border-orange-500 text-white shadow-sm'
                      : 'bg-white border-gray-200 text-gray-700 hover:border-orange-300 hover:text-orange-600'
                  }`}
                >
                  ₦{amt.toLocaleString()}
                </button>
              ))}
            </div>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold text-sm">₦</span>
              <input
                type="number"
                placeholder="Enter custom amount"
                value={customAmount}
                onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
                className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-orange-400 transition-colors"
              />
            </div>
          </div>

          {/* Payment method tabs */}
          <div className="p-6 md:p-8 border-b border-gray-100">
            <h3 className="font-bold text-gray-900 mb-4">Choose Payment Method</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {methods.map(({ id, label, icon: Icon, desc }) => (
                <button
                  key={id}
                  onClick={() => setSelectedMethod(id)}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-200 text-center ${
                    selectedMethod === id
                      ? 'border-orange-500 bg-orange-50 text-orange-700'
                      : 'border-gray-200 text-gray-600 hover:border-orange-200 hover:bg-gray-50'
                  }`}
                >
                  <Icon size={22} />
                  <span className="text-xs font-semibold leading-tight">{label}</span>
                </button>
              ))}
            </div>
            <p className="text-gray-500 text-xs mt-3">
              {methods.find((m) => m.id === selectedMethod)?.desc}
            </p>
          </div>

          {/* Payment details */}
          <div className="p-6 md:p-8">
            {selectedMethod === 'bank' && (
              <div>
                <h4 className="font-bold text-gray-800 mb-4">Bank Account Details</h4>
                <div className="space-y-3">
                  {bankDetails.map(({ label, value }) => (
                    <div key={label} className="flex items-center justify-between bg-gray-50 rounded-xl px-5 py-3">
                      <div>
                        <p className="text-xs text-gray-500 mb-0.5">{label}</p>
                        <p className="font-semibold text-gray-900 text-sm">{value}</p>
                      </div>
                      <CopyBtn value={value} />
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-amber-50 rounded-xl border border-amber-200">
                  <p className="text-amber-800 text-xs leading-relaxed">
                    After making your deposit, please send your teller/payment reference to <strong>donations@theplaceofiberty.edu.ng</strong> or call <strong>+234 (0) 800 000 0000</strong> to confirm your donation.
                  </p>
                </div>
              </div>
            )}

            {selectedMethod === 'card' && (
              <div>
                <h4 className="font-bold text-gray-800 mb-4">Card Payment</h4>
                <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                  We accept Visa, Mastercard, and Verve cards. Your card details are processed securely and we do not store any card information.
                </p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Full Name on Card</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-orange-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Card Number</label>
                    <input
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      maxLength={19}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-orange-400 transition-colors font-mono"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">Expiry (MM/YY)</label>
                      <input
                        type="text"
                        placeholder="MM / YY"
                        maxLength={5}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-orange-400 transition-colors font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">CVV</label>
                      <input
                        type="password"
                        placeholder="***"
                        maxLength={4}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-orange-400 transition-colors font-mono"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Email Address (for receipt)</label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-orange-400 transition-colors"
                    />
                  </div>
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-colors text-sm flex items-center justify-center gap-2">
                    <Heart size={18} />
                    Donate ₦{(customAmount ? Number(customAmount) : selectedAmount ?? 0).toLocaleString()} Now
                  </button>
                  <div className="flex justify-center gap-3 mt-2">
                    {['Visa', 'Mastercard', 'Verve'].map((card) => (
                      <span key={card} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-md font-mono">
                        {card}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {selectedMethod === 'transfer' && (
              <div>
                <h4 className="font-bold text-gray-800 mb-2">USSD / Instant Transfer</h4>
                <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                  Dial the code for your bank, replace <strong>Amount</strong> with the amount you wish to donate.
                </p>
                <div className="space-y-3 mb-5">
                  {ussdCodes.map(({ bank, code }) => (
                    <div key={bank} className="flex items-center justify-between bg-gray-50 rounded-xl px-5 py-3">
                      <div>
                        <p className="text-xs text-gray-500 mb-0.5">{bank}</p>
                        <p className="font-mono font-semibold text-green-800 text-sm">{code}</p>
                      </div>
                      <CopyBtn value={code} />
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                  <p className="text-green-800 text-xs leading-relaxed">
                    You can also transfer directly via your mobile banking app using our account number <strong>1234567890</strong> at <strong>Zenith Bank</strong>. Use your name as the narration.
                  </p>
                </div>
              </div>
            )}

            {selectedMethod === 'cheque' && (
              <div>
                <h4 className="font-bold text-gray-800 mb-4">Cheque Donation</h4>
                <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                  If you prefer to donate by cheque, please make it payable to the details below and mail or deliver it to our school.
                </p>
                <div className="space-y-3 mb-5">
                  {[
                    { label: 'Pay to', value: 'The Place of Liberty Nursery & Primary School' },
                    { label: 'Delivery Address', value: '1 Liberty Road, Surulere, Lagos, Nigeria' },
                    { label: 'Contact', value: '+234 (0) 800 000 0000' },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-start justify-between bg-gray-50 rounded-xl px-5 py-3 gap-4">
                      <div>
                        <p className="text-xs text-gray-500 mb-0.5">{label}</p>
                        <p className="font-semibold text-gray-900 text-sm">{value}</p>
                      </div>
                      <CopyBtn value={value} />
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <p className="text-blue-800 text-xs leading-relaxed">
                    Please include your name, phone number, and email address on the back of the cheque or in an accompanying letter so we can send you an acknowledgement receipt.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Trust signals */}
        <div className="mt-6 grid grid-cols-3 gap-4 text-center text-xs text-gray-500">
          {[
            { icon: '🔒', label: 'Secure & Encrypted' },
            { icon: '📋', label: 'Official Receipts Issued' },
            { icon: '❤️', label: '100% Goes to Children' },
          ].map(({ icon, label }) => (
            <div key={label} className="bg-white rounded-xl p-3 border border-gray-100 flex flex-col items-center gap-1">
              <span className="text-xl">{icon}</span>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
