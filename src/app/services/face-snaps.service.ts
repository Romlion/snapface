import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { SnapType } from "../models/snap-type.type";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService { 
  private faceSnaps: FaceSnap[] = [
    new FaceSnap(
      'Captaine América',
      'Le premier Avenger',
      'https://cdn.pixabay.com/photo/2023/06/29/08/22/ai-generated-8095915_960_720.png',
      new Date(),
      10
    ),
    new FaceSnap(
      'Three Rock Mountain',
      'Un endroit magnifique pour les randonnées.',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      new Date(),
      6,
    ).withLocation('a la montagne'),
    new FaceSnap(
      'Un bon repas',
      'Mmmh, que c\'est bon !',
      'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      new Date(),
      156
    )
  ];

    getFaceSnaps(): FaceSnap[] {
      return [...this.faceSnaps]
    }
  
  getFaceSnapById(faceSnapid: string): FaceSnap {
    const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapid)
    if (!foundFaceSnap) {
      throw new Error('FaceSnap not found!');
    }
    return foundFaceSnap
  }
    
    snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
      const facesnap: FaceSnap = this.getFaceSnapById(faceSnapId)
      facesnap.snap(snapType)
    }
}