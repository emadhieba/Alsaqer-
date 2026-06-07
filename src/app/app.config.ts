import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { LucideAngularModule, Trophy, BadgeCheck, Zap, Phone, FileText, Handshake, Star, Target, Eye, ShieldCheck, MapPin, Clock, Mail, Check, Facebook } from 'lucide-angular';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    importProvidersFrom(
      LucideAngularModule.pick({
        Trophy,
        BadgeCheck,
        Zap,
        Phone,
        FileText,
        Handshake,
        Star,
        Target,
        Eye,
        ShieldCheck,
        MapPin,
        Clock,
        Mail,
        Check,
        Facebook,
      }),
    ),
  ],
};
