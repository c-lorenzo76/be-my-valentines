import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    CardModule,
    RouterLink,
    ToastModule, 
  ],
  providers: [MessageService],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  standalone: true,
})
export class Home {
  noGone = false;
  noPoofing = false;

  showSmoke = false;
  smokeX = 0;
  smokeY = 0;

  constructor(private messageService: MessageService) { }

  onNoHover(event: MouseEvent) {
    if (this.noGone || this.noPoofing) return;

    const el = event.currentTarget as HTMLElement;
    const rect = el.getBoundingClientRect();

    this.smokeX = rect.left + rect.width / 2;
    this.smokeY = rect.top + rect.height / 2;

    this.noPoofing = true;

    setTimeout(() => {
      this.noGone = true;

      this.messageService.add({
        severity: 'warn',
        summary: 'You can\'t click that!',
        detail: 'No is not an option! Try again 😌',
        sticky:true
      });

      this.showSmoke = true;
      setTimeout(() => {
        this.showSmoke = false;
      }, 700);
    }, 120);
  }




}
