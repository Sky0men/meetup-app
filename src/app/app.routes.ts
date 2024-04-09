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
import { UpdateMeetupComponent } from './components/update-meetup/update-meetup.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { updateGuard } from './guards/update.guard';
import { MyMeetupsComponent } from './components/my-meetups/my-meetups.component';

export const itemRoutes: Routes = [
    {
        path: 'updateUser/:id',
        component: UpdateUserComponent,
    }
]

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
        component: UsersListComponent, canActivate: [adminGuard],
        children: itemRoutes
    },
    {
        path: 'createMeetup',
        component: CreateMeetupComponent
    },
    {
        path: 'updateMeetup/:id',
        component: UpdateMeetupComponent, 
        
    },
    {
        path: 'myMeetups',
        component: MyMeetupsComponent, 
        
    },
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
