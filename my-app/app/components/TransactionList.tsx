
import React from 'react';

type Transaction = {
  id: number;
  name: string;
  amount: number;
  type: 'income' | 'expense';
  date: string;
};

type TransactionListProps = {
  transactions: Transaction[];
  onDeleteTransaction: (id: number) => void;
};

const TransactionList: React.FC<TransactionListProps> = ({ transactions, onDeleteTransaction }) => {
  return (
    <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg shadow-indigo-100/50 dark:shadow-none border border-slate-100 dark:border-slate-700 h-full transition-colors duration-300">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 flex items-center">
            <span className="w-1.5 h-6 bg-indigo-500 rounded-full mr-3"></span>
            Transaction History
        </h3>
        <span className="text-xs font-medium text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-full">
            {transactions.length} Items
        </span>
      </div>
      
      {transactions.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mb-4 text-slate-300 dark:text-slate-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
            </div>
            <p className="text-slate-500 dark:text-slate-400 font-medium">No transactions yet</p>
            <p className="text-sm text-slate-400 mt-1">Add your first income or expense</p>
        </div>
      ) : (
        <div className="space-y-3 overflow-y-auto max-h-[500px] pr-2 custom-scrollbar">
          {transactions.map((transaction) => (
            <div 
                key={transaction.id} 
                className="group flex justify-between items-center p-4 rounded-xl border border-slate-100 dark:border-slate-600 bg-slate-50/50 dark:bg-slate-700/50 hover:bg-white dark:hover:bg-slate-700 hover:shadow-md dark:hover:shadow-slate-900/50 hover:border-indigo-100 dark:hover:border-indigo-500/30 transition-all duration-200"
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    transaction.type === 'income' ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' : 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
                }`}>
                    {transaction.type === 'income' ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" /></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 13l-5 5m0 0l-5-5m5 5V6" /></svg>
                    )}
                </div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-100">{transaction.name}</p>
                  <p className="text-xs text-slate-400 dark:text-slate-400">{transaction.date}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                  <span className={`font-bold text-base ${transaction.type === 'income' ? 'text-green-600 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}>
                    {transaction.type === 'income' ? '+' : '-'}฿{transaction.amount.toLocaleString()}
                  </span>
                  
                  <button
                    onClick={() => onDeleteTransaction(transaction.id)}
                    className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-colors opacity-0 group-hover:opacity-100"
                    title="Delete"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TransactionList;
