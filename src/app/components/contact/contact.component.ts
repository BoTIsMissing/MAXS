import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// ─── Credenciais EmailJS ───────────────────────────────────────────────────
// 1. Crie uma conta gratuita em https://www.emailjs.com
// 2. Adicione um "Email Service" (Gmail, Outlook, etc.) → copie o SERVICE_ID
// 3. Crie um "Email Template" com as variáveis abaixo → copie o TEMPLATE_ID
// 4. Em "Account" → copie a PUBLIC_KEY
const EMAILJS_SERVICE_ID  = 'service_yj0pu6b';
const EMAILJS_TEMPLATE_ID = 'template_y786vpn';
const EMAILJS_PUBLIC_KEY  = 'cAKwnrsM7yy8SdMXw';
// ──────────────────────────────────────────────────────────────────────────

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  form: ContactForm = { name: '', email: '', subject: '', message: '' };

  status: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  async onSubmit() {
    if (!this.form.name || !this.form.email || !this.form.message) return;

    this.status = 'loading';

    try {
      const emailjs = (window as any).emailjs;

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    this.form.name,
          from_email:   this.form.email,
          subject:      this.form.subject || 'Contato pelo site',
          message:      this.form.message,
          to_email:     'diego.papai@maxs.com.br',
        },
        EMAILJS_PUBLIC_KEY
      );

      this.status = 'success';
      this.form = { name: '', email: '', subject: '', message: '' };
      setTimeout(() => (this.status = 'idle'), 5000);

    } catch (err) {
      console.error('EmailJS error:', err);
      this.status = 'error';
      setTimeout(() => (this.status = 'idle'), 5000);
    }
  }
}
