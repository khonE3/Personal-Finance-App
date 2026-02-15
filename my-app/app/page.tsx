
"use client";

import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import ThemeToggle from './components/ThemeToggle';
import AnimatedLogo from './components/AnimatedLogo';

type Transaction = {
  id: number;
  name: string;
  amount: number;
  type: 'income' | 'expense';
  date: string;
};

export default function Home() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // Load from LocalStorage
  useEffect(() => {
    const saved = localStorage.getItem('transactions');
    if (saved) {
      setTransactions(JSON.parse(saved));
    }
  }, []);

  // Save to LocalStorage
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction: { name: string; amount: number; type: 'income' | 'expense' }) => {
    const newTransaction: Transaction = {
      id: Date.now(),
      ...transaction,
      date: new Date().toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' }),
    };
    setTransactions([newTransaction, ...transactions]);
  };

  const deleteTransaction = (id: number) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const income = transactions
    .filter((t) => t.type === 'income')
    .reduce((acc, item) => acc + item.amount, 0);

  const expense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, item) => acc + item.amount, 0);

  const total = income - expense;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans selection:bg-pink-100 selection:text-pink-600 transition-colors duration-300">
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-indigo-100/40 dark:bg-indigo-900/10 blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-lighten filter"></div>
        <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-pink-100/40 dark:bg-pink-900/10 blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-lighten filter"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <header className="mb-10 flex flex-col items-center">
            <div className="w-full flex justify-end mb-4">
                <ThemeToggle />
            </div>
            
            <AnimatedLogo />
            
            <div className="inline-block p-2 px-4 bg-white dark:bg-slate-900 rounded-full shadow-sm border border-slate-100 dark:border-slate-800 mb-4">
                <span className="text-xs font-bold tracking-widest text-indigo-900 dark:text-indigo-300 uppercase">Nong Bua Lamphu Finance</span>
            </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-800 dark:text-slate-100 mb-3 tracking-tight text-center">
            Manage your <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-700 to-pink-600 dark:from-indigo-400 dark:to-pink-400">Wealth</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Simple, clean, and modern expense tracking inspired by the serenity of nature.
          </p>
        </header>

        <Dashboard income={income} expense={expense} total={total} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <TransactionForm onAddTransaction={addTransaction} />
          </div>
          <div className="lg:col-span-7">
            <TransactionList transactions={transactions} onDeleteTransaction={deleteTransaction} />
          </div>
        </div>
        
        <footer className="mt-16 text-center text-slate-400 text-sm pb-8">
          <p>&copy; {new Date().getFullYear()} Nong Bua Lamphu Finance. Crafted with care.</p>
        </footer>
      </div>
    </div>
  );
}
