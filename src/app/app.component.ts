import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ShowMoreModalComponent } from './show-more-modal/show-more-modal.component';
import { PostService } from './service/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {

  postsArray:any [] = [];
 
  constructor(private http:HttpClient, private dialog:MatDialog, private service:PostService){

  }
  ngOnInit(): void {
    this.loadData();
  }

  private loadData(){
    this.service.findAll()
    .subscribe(response=>{
      //@ts-ignore
      this.postsArray=response;
    })
  }

  showData(post:any){
      this.dialog.open(ShowMoreModalComponent,{
        data:{title:post.title,body:post.body},
        width:'500px'
      });
  }

}
