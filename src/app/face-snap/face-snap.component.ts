import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageUrl!: string;
  snapButtonText!: string;
  userHasSnapped!: boolean;

  ngOnInit(): void {
    this.title = 'Captaine América';
    this.description = 'Le premier Avenger';
    this.createdAt = new Date();
    this.snaps = 0;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2023/06/29/08/22/ai-generated-8095915_960_720.png';
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

  onSnap(): void {
    if (this.userHasSnapped) {
      this.unSnap();
    } else {
      this.snap();
    }
  }

  unSnap() {
    this.snaps--;
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

  snap() {
    this.snaps++;
    this.snapButtonText = 'Oops, unSnap!';
    this.userHasSnapped = true;
  }
}
