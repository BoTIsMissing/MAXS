import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

interface Service {
  icon: string;
  title: string;
  description: string;
  tags: string[];
  anchor: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  services: Service[] = [
    {
      icon: 'database',
      title: 'Banco de Dados',
      description:
        'Especialistas técnicos certificados garantindo performance, segurança e disponibilidade dos seus dados.',
      tags: ['Performance', 'Monitoramento', 'NoSQL', 'Auditoria'],
      anchor: 'banco-de-dados',
    },
    {
      icon: 'cloud',
      title: 'Cloud Solutions',
      description:
        'Infraestrutura escalável e segura com PaaS, SaaS, backup, recuperação de desastres e otimização de custo.',
      tags: ['PaaS / SaaS', 'Segurança', 'Backup', 'Monitoramento 24/7'],
      anchor: 'cloud-solutions',
    },
    {
      icon: 'monitor-cog',
      title: 'Desenvolvimento de Sistemas',
      description:
        'Sistemas personalizados com tecnologia Microsoft®. Web, mobile, inteligência artificial e visão computacional.',
      tags: ['Web', 'Mobile', 'IA', 'Front & Back-End'],
      anchor: 'desenvolvimento',
    },
    {
      icon: 'laptop',
      title: 'Business Intelligence',
      description:
        'Dados brutos transformados em relatórios precisos e insights estratégicos para decisões mais inteligentes.',
      tags: ['Analytics', 'Data Mining', 'BI em Tempo Real', 'Governança'],
      anchor: 'business-intelligence',
    },
  ];
}
