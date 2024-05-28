import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {

  // creating a formGroup (form ko create kar rahe hai )
  postForm!: FormGroup;

  // field for tag
  tags:string[] = [];

  // creating a constructor
  /* 
   Injecting fields in constructor:-
   1. FormBuilder :- hamare reactive form ko build karne ke liye
   2. Router:- user ko navigate karne ke liye (ek page se dusre page jaane ke liye)
   3. MatSnackBar :- users ko messages show karne ke liye
  */
  constructor(private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private postService: PostService         // is method ko humne services ke postService.ts mein likha hai, usko hum yaha inject kar rahe hai , taaki yaha use kar sake
  ){}




  /*ngOnInit is a lifecycle hook method in Angular 
  that is called once after the component is initialized and Angular has set up the component's input properties. 
  It's commonly used to perform initialization tasks such as fetching data from a server, 
  initializing variables, or subscribing to observables. 
  */
  ngOnInit(){
    // form ko build karne ke liye call karnege formBuilder ko 
    // group ke method mein controls ko mention kar denge
    this.postForm = this.fb.group({
      name : [null,Validators.required],    // first conrol hogae name , jisme by default null value set ki hai , or isme validator bhi set kar diya hai 
      content: [null,[Validators.required,Validators.maxLength(5000)]],
      img: [null,Validators.required],
      postedBy: [null,Validators.required]
    })
  }


  // method to add the tag
  add(event:any){
    // initializing the value (local vairable)
    const value = (event.value || '').trim();
    // agar value true hai , toh hum value ko tags ke array mein store kar lenge
    if(value){
      this.tags.push(value);
    }

    // uske baad hume input ko clear karna hai 
    event.chipInput!.clear();
  }

  // method to remove the tag
  remove(tag : any){
    // get the index of the tag
    const index = this.tags.indexOf(tag);

    if(index >= 0){
      this.tags.splice(index,1);
    }
  }


  createPost(){
    // getting the post form value, which we are going to create
    const data = this.postForm.value;
    // set the tags
    data.tags = this.tags;

    // calling the api, and after that we are going to subscribe the response
    this.postService.createNewPost(data).subscribe(res=>{
      this.snackBar.open("Post Created Successfully !!!", "ok");
      // ab user ko  dashboard par navigate kar denge
      this.router.navigateByUrl("/");
    },error=>{
      this.snackBar.open("Something Went Wrong!!!","ok");
    })
  }

  


}
