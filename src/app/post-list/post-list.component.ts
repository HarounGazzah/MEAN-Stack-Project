import { PostService } from './../post.service';
import { Post } from './../posts/post.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   { title: 'First Post', content: 'This is the first post\'s content' },
  //   { title: 'Second Post', content: 'This is the second post\'s content' },
  //   { title: 'Third Post', content: 'This is the third post\'s content' },
  // ];
 posts: Post[] = [];
 private postsSub: Subscription;


  constructor(public postService: PostService) {}



  ngOnInit() {
    this.postService.getPosts();
    this.postsSub = this.postService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }
  ngOnDestroy(): void {
    this.postsSub.unsubscribe();
  }
}
