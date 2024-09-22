import { Component, inject } from '@angular/core';
import { PetComponent } from '../../pages/pet/pet.component';
import { CommonModule } from '@angular/common';
import { PetInterface } from '../../interface/pet-interface';
import { PetServiceService } from '../../services/pet-service.service';

@Component({
  selector: 'app-adocao',
  standalone: true,
  imports: [PetComponent, CommonModule],
  templateUrl: './adocao.component.html',
  styleUrl: './adocao.component.css',
})
export class AdocaoComponent {
  petList: PetInterface[] = [];
  petService: PetServiceService = inject(PetServiceService);

  constructor() {
    this.petList = this.petService.getAllPet();
  }
}
