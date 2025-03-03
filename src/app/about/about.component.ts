import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    const video = this.videoPlayer.nativeElement;
    video.muted = true;
    video.play().catch(error => console.error('Autoplay failed:', error));
  }
}
