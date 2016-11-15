import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestorePetInfo } from '../../providers/restore-pet-info';

@Component({
  selector: 'page-puppy',
  templateUrl: 'puppy.html'
})

export class PuppyPage {
   slides = [
    {
      title: "Buddah -- American Pit Bull Terrier/Mix",
      description: `Why I am the one for you: My Personality Color Code is Blue,
      meaning I am Bashful...Shy...Introverted...Timid...and Coy! I am
      known to be sweet, loving, and such a great companion to have
      around. I would do best in a breed savvy home.
      Older respectful children please because sometimes little ones make
      me nervous. Come meet me and fall in love!`,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLAlCknhHCbckz82qPQ-PtM7SGr7h4gZjdQQrqlsbFmRrReVNU"
    },
    {
      title: "Buttercup -- American Staffordshire Terrier/Mix",
      description: `Hello! I'm a sweet girl who loves getting pet.
      Given the chance I am sure we can cuddle on the
      couch and watch movies!My Personality Color Code
      is Purple; meaning  am  Happy - Go - Lucky...Carefree...
      Engaging...Adaptive...and Cheerful!`,
      image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTCr4q5qu9MnTHmQJrc_O8N5WJ6iPI_Y3nHCccLc8Qxie9SLYz4"
    },
    {
      title: "Ciroc -- American Staffordshire Terrier",
      description: `Why I am the one for you, I am not going to lie...
      I am a bit of a show-off. The staff and volunteers
      here have taught me how to sit and down and play
      a cool eye contact game. I am Potty trained! I am sometimes a little slow to warm up to
      people. But a little bit of patience and a few treats go a long way!`,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU3c994fnVecBAA1gvBy8A4DJlLz3Sf-vDRKX9X8311VPK0IQfHw"
    },
    {
      title: "Coco -- Scottish Terrier / Scottie/Mix",
      description: `Why I am the one for you, I love playing with Buddy Boy.
      My Personality Color Code is Blue; meaning I am Bashful...
      Shy...Introverted...Timid...and Coy! Once I warm up to you
      I will be your best pal. I am mellow, sweet, and easy going.`,
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQN2H-D9x7JIIyP6t38WjT6ThiS9dSXZQ57R8cugWtNXMVi2i8L"
    },
    {
      title: "Luis -- German Shepherd/Mix",
      description: `Why I am the one for you, My Personality Color Code is Orange
        meaning I am Vivacious... enthusiastic... bubbly... vibrant...
        and cheerful!! When I first arrived I was not feeling well, but
        the doctors here have been taking such good care of me. I could benefit from continued
        positive reinforcement training to help make me the best companion
        next to you. I also can be a little mouthy so a home with older children
        may be best.`,
      image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ5r_0iWYPUXGECPjgbwWXyWL9D_sMPnP7U9cZvEsOZGuokKM8w"
    }
  ];

//   constructor(public navCtrl: NavController) {
    
// }
} 