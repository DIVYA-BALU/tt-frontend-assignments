import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import {
  StatusMessage,
  SubscriptionPlan,
  SubscriptionTransaction,
} from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private authService: AuthService, private http: HttpClient) {}

  createOrder(amount: number) {
    return this.http.get(
      `${environment.baseUrl}transaction/createTransaction/${amount}`
    );
  }

  getPlANS() {
    return this.http.get<SubscriptionPlan[]>(
      `${environment.baseUrl}subscription-plans`
    );
  }

  addSubscription(subscriptionTransaction: SubscriptionTransaction) {
    return this.http.post<StatusMessage>(
      `${environment.baseUrl}subscription`,
      subscriptionTransaction
    );
  }

  getSubscription(id: string) {
    return this.http.get<SubscriptionTransaction>(
      `${environment.baseUrl}subscription?subscriberId=${id}`
    );
  }

  isExpired(id: string) {
    return this.http.get<boolean>(
      `${environment.baseUrl}subscription/expired?subscriberId=${id}`
    );
  }
}
