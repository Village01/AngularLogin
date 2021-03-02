import { Component, OnInit } from '@angular/core';
import {ImageObject} from '../interfaces/image-object.interface';
import * as moment from 'moment';
import {ReplaySubject} from 'rxjs';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  private storedImages: ImageObject[] = [];
  private images: ReplaySubject<ImageObject[]> = new ReplaySubject<ImageObject[]>();

  User = {
    username: '',
    fullname: '',
    email: '',
    phone: '',
    address: ''
  };
  submitted = false;

  constructor( private userServive: UserService) { }

  ngOnInit(): void {
  }

  addImageService(name: string, date: Date, data: string): void {
    const newImage: ImageObject = {
      name,
      src: data,
      addedOn: data
    };

    this.storedImages.push(newImage);
    localStorage.setItem('images', JSON.stringify(this.storedImages));

    this.images.next(this.storedImages);
  }

  addImage(event: any): void {
    let fileData: string;
    let fileName: string;
    let fileCreatedAtDate: Date;

    if (event.target.files && event.target.files[0]) {
      fileName = event.target.files[0].name;
      fileCreatedAtDate = new Date();

      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (data: any) => {
        // called when file data has been read
        fileData = data.target.result;
        this.addImageService(fileName, fileCreatedAtDate, fileData);
      };
    }
  }

  getImgAddedDateString(addedDate: string): string {
    return `Image added ${moment(addedDate).fromNow()}`;
  }

  updateUser(): void {
    const data = {
      username: this.User.username,
      fullname: this.User.fullname,
      email: this.User.email,
      phone: this.User.phone,
      address: this.User.address
    };

    this.userServive.create(data).subscribe(response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
  }
}
