import { RouterModule, Routes } from '@angular/router';
import { MeetupListComponent } from './components/meetup-list/meetup-list/meetup-list.component';
import { AuthComponent } from './components/auth/auth.component';
import { NgModule } from '@angular/core';
import { DescriptionComponent } from './components/description/description.component';
import { RegistrComponent } from './components/registr/registr.component';
import { userGuard } from './guards/user.guard';

export const routes: Routes = [
    {
        path: '',
        component: MeetupListComponent, canActivate: [userGuard]
    },
    {
        path: 'auth',
        component: AuthComponent
    },
    {
        path: 'description',
        component: DescriptionComponent
    },
    {
        path: 'auth/registration',
        component: RegistrComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
