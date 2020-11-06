import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Comment} from './comment'
@Injectable({
  providedIn: 'root'
})
export class ProposalService {
  postCommentUrl="http://localhost:8080/comment/add"
  getCommentUrl="http://localhost:8080/comment/all"
  postLikeUrl="http://localhost:8080/upvotes/like"
  postDislikeUrl="http://localhost:8080/upvotes/dislike"
  getLikeUrl="http://localhost:8080/upvotes/hasUpvoted"
  deleteCommentUrl ="http://localhost:8080/comment/delete"
  constructor(private http:HttpClient) { }
  postComment(id:number,new_comment:string,userId:number):Observable<any>{
    return this.http.post(this.postCommentUrl,{'id':id,'text':new_comment,'userId':userId})
  }
  postLike(id:number,userId:number):Observable<any>{
    return this.http.post(this.postLikeUrl,{'id':id,'userId':userId})
  }
  postDislike(id:number,userId:number):Observable<any>{
    console.log({'id':id,'userId':userId})
    return this.http.post(this.postDislikeUrl,{"userId":userId,"id":id})
  }
  getLike(id:number,userId:number):Observable<any>{
    return this.http.post(this.getLikeUrl,{'id':id,'userId':userId})
  }
  getComment(id:number):Observable<Comment[]>{
    return this.http.post<Comment[]>(this.getCommentUrl,{'id':id})
  }
  deleteComment(id:number):Observable<any>
  {
    return this.http.post<String>(this.deleteCommentUrl,{'id':id})
  }
}
