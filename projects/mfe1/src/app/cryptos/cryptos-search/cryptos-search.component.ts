import {Component, inject, signal} from '@angular/core';
import {WalletLibService} from "wallet-lib";

@Component({
  selector: 'app-cryptos-search',
  templateUrl: './cryptos-search.component.html',
})
export class CryptosSearchComponent {
  #walletService = inject(WalletLibService);
  active = signal(false);
  balance = this.#walletService.balance;

  search(): void {
    this.active.set(true);
  }

  reset(): void {
    this.active.set(false);
  }

  purchase(): void {
    this.#walletService.purchase(100);
    this.balance = this.#walletService.balance;
  }
}
