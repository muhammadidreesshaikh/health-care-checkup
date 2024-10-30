import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  onlineServices = [
    {
      title: 'Find Doctor',
      image: 'https://i.ibb.co/jgBMwxM/online1.png',
      options: [
        'Please Select',
        'Cardiology',
        'Emergency Medicine',
        'Dental Surgery',
        'Neurology',
        'General Physicians',
        'Dermatology',
        'ENT',
        'Hepatology',
        'Internal Medicine',
        'Nephrologist'
      ]
    },
    {
      title: 'Book An Appointment',
      image: 'https://i.ibb.co/rH1my2Y/calendar.png',
      options: [
        'Please Select',
        'Cardiology',
        'Emergency Medicine',
        'Dental Surgery',
        'Neurology',
        'General Physicians',
        'Dermatology',
        'ENT',
        'Hepatology',
        'Internal Medicine',
        'Nephrologist'
      ]
    },
    {
      title: 'Online Pharmacy',
      image: 'https://i.ibb.co/714yWZt/medicine.png',
      options: [
        'Please Select',
        'Cardiology',
        'Emergency Medicine',
        'Dental Surgery',
        'Neurology',
        'General Physicians',
        'Dermatology',
        'ENT',
        'Hepatology',
        'Internal Medicine',
        'Nephrologist'
      ]
    }
  ];
}
