import { Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ServicesComponent } from './components/services/services.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { OnlinePharmacyComponent } from './components/online-pharmacy/online-pharmacy.component';
import { OnlineAppointmentComponent } from './components/online-appointment/online-appointment.component';

export const routes: Routes = [
    {
        path: '',
        component: HomepageComponent
    },
    {
        path: 'homepage',
        component: HomepageComponent
    },
    {
        path: 'about-us',
        component: AboutUsComponent
    },
    {
        path: 'services',
        component: ServicesComponent
    },
    {
        path: 'departments',
        component: DepartmentsComponent
    },
    {
        path: 'doctors',
        component: DoctorsComponent
    },
    {
        path: 'contact-us',
        component: ContactUsComponent
    },
    {
        path: 'online-appointment',
        component: OnlineAppointmentComponent
    },
    {
        path: 'online-pharmacy',
        component: OnlinePharmacyComponent
    }
];
