import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-upload-details',
  templateUrl: './upload-details.component.html',
  styleUrls: ['./upload-details.component.css'],
})
export class UploadDetailsComponent implements OnInit {
  @Input() response: string;
  constructor() {}

  ngOnInit(): void {}
}
