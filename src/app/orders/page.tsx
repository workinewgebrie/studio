"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Package, ArrowLeft, Calendar, DollarSign, ShoppingBag } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getTodayTransactions, getTodayTotalSales, getTodayOrderCount } from '@/lib/transactions';
import { useState, useEffect } from 'react';
import type { Transaction } from '@/types';

export default function OrdersPage() {
  const [todayTransactions, setTodayTransactions] = useState<Transaction[]>([]);
  const [todayTotalSales, setTodayTotalSales] = useState(0);
  const [todayOrderCount, setTodayOrderCount] = useState(0);

  useEffect(() => {
    setTodayTransactions(getTodayTransactions());
    setTodayTotalSales(getTodayTotalSales());
    setTodayOrderCount(getTodayOrderCount());
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-3xl font-headline">Today's Transactions</h1>
        </div>

        {/* Today's Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Today's Orders</CardTitle>
              <ShoppingBag className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{todayOrderCount}</div>
              <p className="text-xs text-muted-foreground">Total orders today</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Today's Sales</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${todayTotalSales.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground">Total revenue today</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Date</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{new Date().toLocaleDateString()}</div>
              <p className="text-xs text-muted-foreground">Current date</p>
            </CardContent>
          </Card>
        </div>

        {/* Transactions List */}
        {todayTransactions.length > 0 ? (
          <div className="space-y-4">
            <h2 className="text-xl font-headline">Today's Orders</h2>
            {todayTransactions.map((transaction) => (
              <Card key={transaction.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">Order #{transaction.orderNumber}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {new Date(transaction.date).toLocaleDateString()} at {new Date(transaction.id).toLocaleTimeString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold">${transaction.totalAmount.toFixed(2)}</div>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        {transaction.status}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {transaction.items.map((item) => (
                      <div key={item.id} className="flex justify-between items-center">
                        <span>{item.name} x{item.quantity}</span>
                        <span className="text-muted-foreground">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Package className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
            <h2 className="text-2xl font-headline mb-2">No Orders Today</h2>
            <p className="text-muted-foreground mb-6">
              No transactions have been made today. Start shopping to see your order history here.
            </p>
            <Button asChild>
              <Link href="/#products">Start Shopping</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
