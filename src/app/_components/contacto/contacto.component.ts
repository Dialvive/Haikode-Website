import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm, ReactiveFormsModule, FormsModule } from '@angular/forms'
import { ContactoService } from '../../_services/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  FormData: FormGroup;
  constructor(private builder: FormBuilder, private contact: ContactoService) { }
  
  fileToUpload: File = null;

  ngOnInit() {
    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      Position: new FormControl(''),
      Company: new FormControl(''),
      Country: new FormControl(''),
      File: new FormControl(''),
      Comment: new FormControl('', [Validators.required])
    });

  }

  onSubmit(FormData) {
    FormData.append('File', this.fileToUpload, this.fileToUpload.name);
    console.log(FormData)
    this.contact.PostMessage(FormData)
      .subscribe(response => {
        location.href = 'https://mailthis.to/confirm'
        console.log(response)
      }, error => {
        console.warn(error.responseText)
        console.log({ error })
      })
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
 }
}
