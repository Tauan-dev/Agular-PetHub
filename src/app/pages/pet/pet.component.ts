import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PetInterface } from '../../interface/pet-interface';

@Component({
  selector: 'app-pet',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './pet.component.html',
  styleUrl: './pet.component.css',
})
export class PetComponent {
  @Input() petData!: PetInterface;
}
