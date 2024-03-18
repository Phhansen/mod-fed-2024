import {Component, inject, OnInit, signal} from '@angular/core';
import {WalletLibService} from 'wallet-lib';
import {PluginOptions} from "../plugins/plugin";
import {LookupService} from "../plugins/lookup.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  #walletService = inject(WalletLibService);
  #lookupService = inject(LookupService);

  balance = this.#walletService.balance;
  plugins: PluginOptions[] = [];
  graphs: PluginOptions[] = [];

  async ngOnInit() {
    this.plugins = await this.#lookupService.lookup();
  }

  handleClick(graph: PluginOptions): void {
    this.graphs.push(graph);
  }
}
