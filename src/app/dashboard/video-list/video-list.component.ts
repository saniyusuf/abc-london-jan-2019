import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  selectedVideoID;

  @Input() videos: Video;
  @Output() onVideoSelected = new EventEmitter<Video>();

  constructor() { }

  ngOnInit() {
  }

  setSelectedVideoID(video: Video) {
    this.selectedVideoID = video.id;
    this.onVideoSelected.emit(video);
  }
}

export interface Video {
  title: string;
  author: string;
  id: string;
  viewDetails: ViewDetail[];
}

interface ViewDetail {
  age: number;
  region: string;
  date: string;
}



