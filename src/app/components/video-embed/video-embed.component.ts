import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-embed',
  templateUrl: './video-embed.component.html',
  styleUrls: ['./video-embed.component.scss']
})
export class VideoEmbedComponent implements OnInit{

  @Input() key: string | null = null;
  videoUrl: SafeResourceUrl = ""

  constructor(private sanitized: DomSanitizer){}

  ngOnInit(): void {
      this.videoUrl = this.sanitized.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+this.key)
  }
}
