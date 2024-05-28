import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.scss']
})
export class ViewAllComponent {


  // api ke response ko store karne ke liye variable
  allPosts:any;

  // PostService :- api's ko call karne ke liye 
  // MatSnackBar :- users ko messages show karne ke liye
  constructor(private postService:PostService,
    private snackBar:MatSnackBar,
  ){}


  // method to getAllPosts
  getAllPosts(){
    this.postService.getAllPosts().subscribe(res =>{
      console.log(res);
      // api ke response ko store kiya
      this.allPosts = res;
    },error =>{
      this.snackBar.open("something went wrong!!!","ok");
    })
  }

  // ab iss getAllPosts ke method ko page ke load event par call karne ke liye 
  // hum ngOnInit method ko create karenge
  ngOnInit(){
    this.getAllPosts();
  }
}
