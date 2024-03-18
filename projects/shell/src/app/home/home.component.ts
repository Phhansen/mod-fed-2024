import {Component, inject, OnInit, signal} from '@angular/core';
import {WalletLibService} from 'wallet-lib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  #walletService = inject(WalletLibService);
  balance = this.#walletService.balance;
}
