import {Component, OnInit} from '@angular/core';
// import {ImageUploaderOptions} from 'ngx-image-uploader';
import * as moment from 'moment';

import {ImageObject} from '../interfaces/image-object.interface';
import {ReplaySubject} from 'rxjs';
import {User} from '../interfaces/user.interface';
import {UserService} from '../services/user.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  private storedImages: ImageObject[] = [];
  private images: ReplaySubject<ImageObject[]> = new ReplaySubject<ImageObject[]>();

  currentUser = null;

  // imageOptions: ImageUploaderOptions = {
  //   uploadUrl: 'https://fancy-image-uploader-demo.azurewebsites.net/api/demo/upload',
  //   cropEnabled: false,
  //   thumbnailResizeMode: 'fill',
  //   autoUpload: true,
  //   resizeOnLoad: false,
  //   thumbnailWidth: 320,
  //   thumbnailHeight: 200,
  // };
  constructor(private userServive: UserService) {}
  ngOnInit(): void {}

  // addImageService(name: string, date: Date, data: string): void {
  //   const newImage: ImageObject = {
  //     name,
  //     src: data,
  //     addedOn: data
  //   };
  //
  //   this.storedImages.push(newImage);
  //   localStorage.setItem('images', JSON.stringify(this.storedImages));
  //
  //   this.images.next(this.storedImages);
  // }
  //
  // addImage(event: any): void {
  //   let fileData: string;
  //   let fileName: string;
  //   let fileCreatedAtDate: Date;
  //
  //   if (event.target.files && event.target.files[0]) {
  //     fileName = event.target.files[0].name;
  //     fileCreatedAtDate = new Date();
  //
  //     const reader = new FileReader();
  //     reader.readAsDataURL(event.target.files[0]); // read file as data url
  //
  //     reader.onload = (data: any) => {
  //       // called when file data has been read
  //       fileData = data.target.result;
  //       this.addImageService(fileName, fileCreatedAtDate, fileData);
  //     };
  //   }
  // }
  //
  // // imgClick(name: string, index: number): void {
  // //   this.service.imgClicked(name, index);
  // // }
  //
  // getImgAddedDateString(addedDate: string): string {
  //   return `Image added ${moment(addedDate).fromNow()}`;
  // }

  updatePublished(): void {
    const data = {
      username: this.currentUser,
      description: this.currentUser,
      published: status
    };

    this.userServive.update(this.currentUser, data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }
}
