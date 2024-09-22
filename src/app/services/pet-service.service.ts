import { Injectable } from '@angular/core';
import { PetInterface } from '../interface/pet-interface';

@Injectable({
  providedIn: 'root',
})
export class PetServiceService {
  petList: PetInterface[] = [
    {
      id: 1,
      name: 'Fofinho',
      img: 'https://cdn2.thecatapi.com/images/m4.jpg',
      description: 'Um gato muito fofo e brincalhão!',
    },
    {
      id: 2,
      name: 'Bichano',
      img: 'https://cdn2.thecatapi.com/images/1u3.jpg',
      description: 'Este gato adora caçar ratos e explorar a vizinhança.',
    },
    {
      id: 3,
      name: 'Peludinho',
      img: 'https://cdn2.thecatapi.com/images/5gu.jpg',
      description: 'Um gato carinhoso e peludo.',
    },
    {
      id: 4,
      name: 'Mingau',
      img: 'https://cdn2.thecatapi.com/images/7ds.jpg',
      description: 'Mingau é um gato preguiçoso que adora dormir o dia todo.',
    },
    {
      id: 5,
      name: 'Tigrão',
      img: 'https://cdn2.thecatapi.com/images/8jb.jpg',
      description: 'Tigrão é forte e ágil, sempre pronto para uma aventura.',
    },
    {
      id: 6,
      name: 'Nina',
      img: 'https://cdn2.thecatapi.com/images/a5b.jpg',
      description: 'Nina é uma gata elegante e cheia de estilo.',
    },
    {
      id: 7,
      name: 'Simba',
      img: 'https://cdn2.thecatapi.com/images/dlc.jpg',
      description: 'Simba é o rei da casa, sempre com uma pose majestosa.',
    },
    {
      id: 8,
      name: 'Bola de Neve',
      img: 'https://cdn2.thecatapi.com/images/e7c.jpg',
      description: 'Este gatinho é branquinho como a neve.',
    },
    {
      id: 9,
      name: 'Zorro',
      img: 'https://cdn2.thecatapi.com/images/MjA3OTE1MA.jpg',
      description: 'Zorro tem um olhar misterioso e adora caçar à noite.',
    },
    {
      id: 10,
      name: 'Leãozinho',
      img: 'https://cdn2.thecatapi.com/images/UrYSVFQZo.jpg',
      description: 'Leãozinho é pequeno, mas corajoso como um leão.',
    },
  ];
  constructor() {}

  getAllPet(): PetInterface[] {
    return this.petList;
  }
}
