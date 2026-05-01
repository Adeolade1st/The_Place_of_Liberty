import { ReactNode } from 'react';
import { Building2, CreditCard, Smartphone, FileText, Copy, CheckCheck } from 'lucide-react';
import { useState } from 'react';

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

type PayMethod = 'bank' | 'card' | 'transfer' | 'cheque';

function CopyBtn({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(value); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
      aria-label="Copy"
      className="p-1.5 rounded-md hover:bg-orange-100 text-gray-400 hover:text-orange-600 transition-colors"
    >
      {copied ? <CheckCheck size={15} className="text-green-600" /> : <Copy size={15} />}
    </button>
  );
}

const payMethods: { id: PayMethod; label: string; icon: typeof Building2 }[] = [
  { id: 'bank', label: 'Bank Deposit', icon: Building2 },
  { id: 'card', label: 'Card Payment', icon: CreditCard },
  { id: 'transfer', label: 'USSD / Transfer', icon: Smartphone },
  { id: 'cheque', label: 'Cheque', icon: FileText },
];

const presetAmounts = [1000, 2500, 5000, 10000, 25000, 50000];

interface Props {
  title: string;
  accentColor: string;
  children: ReactNode;
}

export default function DonationLayout({ title, accentColor, children }: Props) {
  const [method, setMethod] = useState<PayMethod>('bank');
  const [amount, setAmount] = useState<number | null>(5000);
  const [custom, setCustom] = useState('');

  const displayAmount = custom ? Number(custom) : (amount ?? 0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
        Make a Donation — <span style={{ color: accentColor }}>{title}</span>
      </h2>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Amount */}
        <div className="p-6 md:p-8 border-b border-gray-100">
          <h3 className="font-bold text-gray-900 mb-4">Select Amount (NGN)</h3>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-4">
            {presetAmounts.map((a) => (
              <button
                key={a}
                onClick={() => { setAmount(a); setCustom(''); }}
                className={`py-2.5 rounded-xl text-sm font-semibold border-2 transition-all duration-200 ${
                  amount === a && !custom
                    ? 'bg-orange-500 border-orange-500 text-white shadow-sm'
                    : 'bg-white border-gray-200 text-gray-700 hover:border-orange-300 hover:text-orange-600'
                }`}
              >
                ₦{a.toLocaleString()}
              </button>
            ))}
          </div>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold text-sm">₦</span>
            <input
              type="number"
              placeholder="Enter custom amount"
              value={custom}
              onChange={(e) => { setCustom(e.target.value); setAmount(null); }}
              className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-orange-400 transition-colors"
            />
          </div>
        </div>

        {/* Method tabs */}
        <div className="p-6 md:p-8 border-b border-gray-100">
          <h3 className="font-bold text-gray-900 mb-4">Choose Payment Method</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {payMethods.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setMethod(id)}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-200 text-center ${
                  method === id
                    ? 'border-orange-500 bg-orange-50 text-orange-700'
                    : 'border-gray-200 text-gray-600 hover:border-orange-200 hover:bg-gray-50'
                }`}
              >
                <Icon size={22} />
                <span className="text-xs font-semibold leading-tight">{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="p-6 md:p-8">
          {method === 'bank' && (
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
                  After depositing, send your teller/reference to <strong>donations@theplaceofiberty.edu.ng</strong> or call <strong>+234 (0) 800 000 0000</strong>.
                </p>
              </div>
            </div>
          )}

          {method === 'card' && (
            <div>
              <h4 className="font-bold text-gray-800 mb-4">Card Payment</h4>
              <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                We accept Visa, Mastercard, and Verve cards. Your card details are processed securely.
              </p>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Full Name on Card</label>
                  <input type="text" placeholder="John Doe" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-orange-400 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Card Number</label>
                  <input type="text" placeholder="0000 0000 0000 0000" maxLength={19} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-orange-400 transition-colors font-mono" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Expiry (MM/YY)</label>
                    <input type="text" placeholder="MM / YY" maxLength={5} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-orange-400 transition-colors font-mono" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">CVV</label>
                    <input type="password" placeholder="***" maxLength={4} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-orange-400 transition-colors font-mono" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Email (for receipt)</label>
                  <input type="email" placeholder="you@example.com" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-orange-400 transition-colors" />
                </div>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-colors text-sm">
                  Donate ₦{displayAmount.toLocaleString()} Now
                </button>
                <div className="flex justify-center gap-3 mt-1">
                  {['Visa', 'Mastercard', 'Verve'].map((c) => (
                    <span key={c} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-md font-mono">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {method === 'transfer' && (
            <div>
              <h4 className="font-bold text-gray-800 mb-2">USSD / Instant Transfer</h4>
              <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                Dial the code for your bank — replace <strong>Amount</strong> with the amount you wish to donate.
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
                  Or transfer directly via your mobile app using account <strong>1234567890</strong> at <strong>Zenith Bank</strong>.
                </p>
              </div>
            </div>
          )}

          {method === 'cheque' && (
            <div>
              <h4 className="font-bold text-gray-800 mb-4">Cheque Donation</h4>
              <div className="space-y-3 mb-5">
                {[
                  { label: 'Pay to', value: 'The Place of Liberty Nursery & Primary School' },
                  { label: 'Delivery Address', value: '1, Alhaji Masha Road, Onisemo Junction, Surulere, Lagos' },
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
                  Include your name, phone, and purpose of payment on the back of the cheque so we can send your receipt.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Trust signals */}
      <div className="mt-6 grid grid-cols-3 gap-4 text-center text-xs text-gray-500">
        {['Secure & Encrypted', 'Official Receipts Issued', '100% Goes to Children'].map((t) => (
          <div key={t} className="bg-white rounded-xl p-3 border border-gray-100">{t}</div>
        ))}
      </div>

      {/* Page-specific content slot */}
      {children}
    </div>
  );
}
