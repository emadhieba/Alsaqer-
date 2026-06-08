import { Component, OnInit, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Navbar } from './app/components/navbar/navbar/navbar';
import { Footer } from './app/components/footer/footer/footer';
import { WhatsappButton } from './app/components/whatsapp-button/whatsapp-button/whatsapp-button';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, Navbar, Footer, WhatsappButton],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  showBackToTop = false;

  ngOnInit(): void {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.showBackToTop = window.scrollY > 400;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
