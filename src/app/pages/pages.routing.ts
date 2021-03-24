import { Routes } from '@angular/router';
import { RetroBrainstormComponent } from './retro-brainstorm/retro-brainstorm.component';
import { RetroCategorizeComponent } from './retro-categorize/retro-categorize.component';
import { RetroCommentComponent } from './retro-comment/retro-comment.component';


import { RetroStartComponent } from './retro-start/retro-start.component';
import { RetroSubjectComponent } from './retro-subject/retro-subject.component';
import { RetroTemplateComponent } from './retro-template/retro-template.component';
import { RetroVoteComponent } from './retro-vote/retro-vote.component';

export const PagesRoutes: Routes = [{
    path: '',
    children: [ {
        path: 'start',
        component: RetroStartComponent
    },
    {
        path: 'subject',
        component: RetroSubjectComponent
    },
    {
        path: 'template',
        component: RetroTemplateComponent
    },
    {
        path: 'brainstorm',
        component: RetroBrainstormComponent
    },
    {
        path: 'categorize',
        component: RetroCategorizeComponent
    },
    {
        path: 'comment',
        component: RetroCommentComponent
    },
    {
        path: 'vote',
        component: RetroVoteComponent
    },
    {
        path: 'report',
        component: RetroVoteComponent
    }
]
}];
