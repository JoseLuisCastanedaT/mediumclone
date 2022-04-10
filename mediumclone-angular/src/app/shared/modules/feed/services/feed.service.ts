import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { GetFeedResponseInterface } from "src/app/shared/modules/feed/types/getFeedResponse.interface";
import { environment } from "src/environments/environment";

@Injectable()
export class FeedService{

    constructor( private httpClient: HttpClient){}

    getFeed(url: string): Observable<GetFeedResponseInterface> {
        const fullUrl = environment.apiURL + url
        return this.httpClient.get<GetFeedResponseInterface>(fullUrl)
    }
}