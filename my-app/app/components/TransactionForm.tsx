
import React, { useState } from 'react';

type TransactionFormProps = {
  onAddTransaction: (transaction: { name: string; amount: number; type: 'income' | 'expense' }) => void;
};

const TransactionForm: React.FC<TransactionFormProps> = ({ onAddTransaction }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState<'income' | 'expense'>('expense');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !amount) return;

    onAddTransaction({
      name,
      amount: parseFloat(amount),
      type,
    });

    setName('');
    setAmount('');
    setType('expense');
  };

  return (
    <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg shadow-indigo-100/50 dark:shadow-none border border-slate-100 dark:border-slate-700 mb-8 transition-colors duration-300">
      <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-6 flex items-center">
        <span className="w-1.5 h-6 bg-pink-500 rounded-full mr-3"></span>
        Add New Transaction
      </h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative group">
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="peer w-full px-5 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all placeholder-transparent text-slate-800 dark:text-slate-100"
            placeholder="Description"
          />
          <label 
            htmlFor="name" 
            className="absolute left-5 -top-2.5 bg-white dark:bg-slate-800 px-2 text-xs font-medium text-slate-500 dark:text-slate-400 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-indigo-600 dark:peer-focus:text-indigo-400 rounded-md"
          >
            Description
          </label>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          <div className="relative">
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="peer w-full px-5 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all placeholder-transparent text-slate-800 dark:text-slate-100"
              placeholder="Amount"
            />
            <label 
              htmlFor="amount" 
              className="absolute left-5 -top-2.5 bg-white dark:bg-slate-800 px-2 text-xs font-medium text-slate-500 dark:text-slate-400 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-indigo-600 dark:peer-focus:text-indigo-400 rounded-md"
            >
              Amount (฿)
            </label>
            
            {/* Quick Select Buttons */}
            <div className="mt-3 flex flex-wrap gap-2">
              {[1, 5, 10, 50, 100, 500, 1000, 5000, 10000].map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setAmount(val.toString())}
                  className="px-2 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 rounded-md hover:bg-indigo-100 dark:hover:bg-indigo-900/50 hover:border-indigo-200 transition-colors"
                >
                  +{val.toLocaleString()}
                </button>
              ))}
            </div>
          </div>
          
          <div className="relative">
             <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setType('income')}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border transition-all duration-200 ${
                    type === 'income' 
                      ? 'bg-green-100 dark:bg-green-900/30 border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 font-bold shadow-sm' 
                      : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                  Income
                </button>
                <button
                  type="button"
                  onClick={() => setType('expense')}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border transition-all duration-200 ${
                    type === 'expense' 
                      ? 'bg-red-100 dark:bg-red-900/30 border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 font-bold shadow-sm' 
                      : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                  Expense
                </button>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-900 dark:bg-indigo-600 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-indigo-900/20 dark:shadow-indigo-900/40 hover:bg-indigo-800 dark:hover:bg-indigo-500 hover:shadow-indigo-900/30 transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;
