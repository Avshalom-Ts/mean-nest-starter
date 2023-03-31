import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { AuthModule } from '@coco/auth';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, AuthModule],
  selector: 'coco-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'coco-fe';
}
