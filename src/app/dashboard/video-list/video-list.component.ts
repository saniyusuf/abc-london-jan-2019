import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  selectedVideoID;

  @Input() videos;

  constructor() { }

  ngOnInit() {
  }

  setSelectedVideoID(id: string) {
    this.selectedVideoID = id;
  }
}



