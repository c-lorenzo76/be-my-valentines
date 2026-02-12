import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ReminderCard } from '../../components/reminder-card/reminder-card';

@Component({
  selector: 'app-yes',
  standalone: true,
  imports: [
    CardModule, 
    ReminderCard,
  ],
  templateUrl: './yes.html',
  styleUrl: './yes.css'
})
export class Yes {
  constructor(private router: Router) {}
}
