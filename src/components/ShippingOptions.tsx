"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Truck, Clock, Shield, Star, Package, Zap } from 'lucide-react';
import { getShippingOptions, getEstimatedDeliveryDate } from '@/lib/shipping';
import type { ShippingOption } from '@/types';

interface ShippingOptionsProps {
  subtotal: number;
  selectedOptionId?: string;
  onSelectOption: (optionId: string) => void;
}

export function ShippingOptions({ subtotal, selectedOptionId, onSelectOption }: ShippingOptionsProps) {
  const [selectedOption, setSelectedOption] = useState(selectedOptionId || 'express');
  const shippingOptions = getShippingOptions(subtotal);

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
    onSelectOption(optionId);
  };

  const getOptionIcon = (optionId: string) => {
    switch (optionId) {
      case 'express': return Zap;
      case 'premium': return Shield;
      case 'free': return Package;
      default: return Truck;
    }
  };

  const getEstimatedDate = (optionId: string) => {
    const date = getEstimatedDeliveryDate(optionId);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Truck className="h-5 w-5 text-primary" />
          <CardTitle className="text-xl font-headline">Shipping Options</CardTitle>
        </div>
        <CardDescription>
          Choose your preferred shipping method
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup value={selectedOption} onValueChange={handleOptionSelect}>
          <div className="space-y-4">
            {shippingOptions.map((option) => {
              const Icon = getOptionIcon(option.id);
              const isRecommended = option.isRecommended;
              const isFree = option.price === 0;
              
              return (
                <Card 
                  key={option.id}
                  className={`transition-all duration-200 cursor-pointer hover:shadow-md ${
                    selectedOption === option.id 
                      ? 'ring-2 ring-primary border-primary' 
                      : 'border-gray-200'
                  }`}
                  onClick={() => handleOptionSelect(option.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <RadioGroupItem value={option.id} id={option.id} className="mt-1" />
                        
                        <div className="flex items-center gap-2">
                          <Icon className="h-5 w-5 text-primary" />
                          <div>
                            <div className="flex items-center gap-2">
                              <Label htmlFor={option.id} className="text-base font-semibold cursor-pointer">
                                {option.name}
                              </Label>
                              {isRecommended && (
                                <Badge variant="secondary" className="bg-green-100 text-green-800">
                                  <Star className="h-3 w-3 mr-1" />
                                  Recommended
                                </Badge>
                              )}
                              {isFree && (
                                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                                  FREE
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              {option.description}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-lg font-bold">
                          {isFree ? 'FREE' : `$${option.price.toFixed(2)}`}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {option.estimatedDays}
                        </div>
                      </div>
                    </div>
                    
                    <Separator className="my-3" />
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>Estimated delivery: {getEstimatedDate(option.id)}</span>
                      </div>
                      
                      {option.id === 'express' && (
                        <Badge variant="outline" className="text-xs">
                          <Zap className="h-3 w-3 mr-1" />
                          Fastest
                        </Badge>
                      )}
                      
                      {option.id === 'premium' && (
                        <Badge variant="outline" className="text-xs">
                          <Shield className="h-3 w-3 mr-1" />
                          Insured
                        </Badge>
                      )}
                      
                      {option.id === 'free' && subtotal < 50 && (
                        <div className="text-xs text-muted-foreground">
                          Add ${(50 - subtotal).toFixed(2)} more for free shipping
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </RadioGroup>
        
        {/* Shipping Info */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <div className="flex items-start gap-3">
            <Truck className="h-5 w-5 text-blue-600 mt-0.5" />
            <div className="text-sm">
              <h4 className="font-semibold text-blue-900 mb-1">Shipping Information</h4>
              <ul className="text-blue-800 space-y-1">
                <li>• All orders include tracking information</li>
                <li>• Free shipping on orders over $50</li>
                <li>• Express shipping includes priority handling</li>
                <li>• Premium shipping includes full insurance</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}


