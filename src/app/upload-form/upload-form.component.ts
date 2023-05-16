import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})
export class UploadFormComponent {
  selectedFile: null = null;

  constructor(private http: HttpClient) { }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  onSubmit() {
    const fd = new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name);
    this.http.post('http://localhost:3000/upload', fd)
      .subscribe(res => {
        console.log(res);
      });
  }
}
