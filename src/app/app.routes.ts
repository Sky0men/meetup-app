import { RouterModule, Routes } from '@angular/router';
import { MeetupListComponent } from './components/meetup-list/meetup-list/meetup-list.component';
import { AuthComponent } from './components/auth/auth.component';
import { NgModule } from '@angular/core';
import { DescriptionComponent } from './components/description/description.component';
import { RegistrComponent } from './components/registr/registr.component';
import { userGuard } from './guards/user.guard';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { adminGuard } from './guards/admin.guard';
import { UsersListComponent } from './components/users-list/users-list.component';
import { CreateMeetupComponent } from './components/create-meetup/create-meetup.component';

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
    },
    {
        path: 'adminPage',
        component: AdminPanelComponent, canActivate: [adminGuard]
    },
    {
        path: 'usersList',
        component: UsersListComponent, canActivate: [adminGuard]
    },
    {
        path: 'createMeetup',
        component: CreateMeetupComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
