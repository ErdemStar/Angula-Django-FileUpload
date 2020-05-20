import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UploadService } from './upload.service'

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
 
  DJANGO_SERVER = 'http://127.0.0.1:8000'
  form: FormGroup;
  file_name:string = ""
  response = [];

  onChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.file_name = file.name;
      this.form.get('profile').setValue(file);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.form.get('profile').value);
    console.log(this.response.length)
    this.uploadService.upload(formData).subscribe(
      (res) => {
        this.response.push(res);
        console.log(this.response);
      },
      (err) => {  
        alert("There is a error while file uploading")
      }
    );
  }

  constructor(private formBuilder: FormBuilder, private uploadService: UploadService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      profile: ['']
    });
  }

}
