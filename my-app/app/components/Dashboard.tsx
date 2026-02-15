
import React from 'react';

type DashboardProps = {
  income: number;
  expense: number;
  total: number;
};

const Dashboard: React.FC<DashboardProps> = ({ income, expense, total }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Total Balance Card */}
      <div className="relative overflow-hidden bg-linear-to-br from-indigo-900 to-indigo-700 dark:from-indigo-950 dark:to-indigo-800 rounded-2xl p-6 text-white shadow-lg shadow-indigo-900/20 dark:shadow-indigo-900/40 transform transition hover:scale-105 duration-300">
        <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-white opacity-5"></div>
        <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-24 h-24 rounded-full bg-white opacity-5"></div>
        
        <div className="relative z-10">
          <p className="text-indigo-200 text-sm font-medium uppercase tracking-wider mb-1">Total Balance</p>
          <h3 className="text-3xl font-bold tracking-tight">
            ฿{total.toLocaleString()}
          </h3>
          <div className="mt-4 flex items-center text-xs text-indigo-200 bg-indigo-800/50 w-fit px-2 py-1 rounded-lg backdrop-blur-sm">
            <span>Current Net Worth</span>
          </div>
        </div>
      </div>

      {/* Income Card */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-16 h-16 bg-green-50 dark:bg-green-900/20 rounded-bl-full -mr-2 -mt-2 transition-transform group-hover:scale-110"></div>
        <div>
           <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">Income</p>
           <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">
             +฿{income.toLocaleString()}
           </h3>
        </div>
        <div className="mt-4">
            <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center text-green-600 dark:text-green-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            </div>
        </div>
      </div>

      {/* Expense Card */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between relative overflow-hidden group">
         <div className="absolute top-0 right-0 w-16 h-16 bg-red-50 dark:bg-red-900/20 rounded-bl-full -mr-2 -mt-2 transition-transform group-hover:scale-110"></div>
         <div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">Expense</p>
            <h3 className="text-2xl font-bold text-red-600 dark:text-red-400">
              -฿{expense.toLocaleString()}
            </h3>
         </div>
         <div className="mt-4">
             <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/40 flex items-center justify-center text-red-600 dark:text-red-400">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                     <path strokeLinecap="round" strokeLinejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                 </svg>
             </div>
         </div>
      </div>
    </div>
  );
};

export default Dashboard;
