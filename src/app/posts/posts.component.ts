import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  entredTitle = '';
  entredContent = '';

  onAddPost(form: NgForm) {
     if (form.invalid) {
      return;
    }
    this.postsService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }


  constructor(public postsService: PostService) { }

  ngOnInit() {
  }

}
