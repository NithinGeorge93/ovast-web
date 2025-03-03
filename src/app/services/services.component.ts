import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-services',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services = [
    { id: 'modal1', name: 'Restaurant Consultation', image: './assets/images/service-1.png' },
    { id: 'modal2', name: 'Operational Management Support', image: './assets/images/service-2.png' },
    { id: 'modal3', name: 'Human Resources & Headhunting', image: './assets/images/service-3.png' },
    { id: 'modal4', name: 'Pre-Opening Marketing', image: './assets/images/service-4.png' },
    { id: 'modal5', name: 'International Franchising', image: './assets/images/service-5.png' },
    { id: 'modal6', name: 'Business & Project Management', image: './assets/images/service-6.png' },
    { id: 'modal7', name: 'Coaching, Mentoring & Advising', image: './assets/images/service-7.png' },
    { id: 'modal8', name: 'Accounts & Financial Support', image: './assets/images/service-8.png' },
    { id: 'modal9', name: 'Real Estate Services', image: './assets/images/service-9.png' },
    { id: 'modal10', name: 'Customer Service Training', image: './assets/images/service-10.png' }
  ];

  @Input() isModalOpen = false;
  @Output() modalClose = new EventEmitter<void>();

  contactForm: FormGroup;
  
    constructor(private fb: FormBuilder) {
      this.contactForm = this.fb.group({
        flexRadioDefault: ['', Validators.required],
        name: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
        message: ['', Validators.required]
      });
    }
  
    onSubmit() {
      if (this.contactForm.valid) {
        console.log('Form Submitted:', this.contactForm.value);
      } else {
        console.log('Form is invalid');
      }
    }
}
