import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { Counter } from '../../../components/counter/counter/counter';

@Component({
  selector: 'app-home',
  imports: [LucideAngularModule, RouterLink, Counter],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
