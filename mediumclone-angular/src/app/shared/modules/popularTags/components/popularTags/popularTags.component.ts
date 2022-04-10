import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  isErrorSelector,
  isLoadingSelector,
  popularTagsSelector,
} from 'src/app/shared/modules/popularTags/store/selectors';
import { PopularTagType } from 'src/app/shared/types/popularTag.type';
import { environment } from 'src/environments/environment';
import { getPopularTagsAction } from '../../store/actions/getPopularTags.action';
import { GetPopularTagsResponseInterface } from '../../types/getPopularTagsResponse.interface';

@Component({
  selector: 'mc-popular-tags',
  templateUrl: './popularTags.component.html',
  styleUrls: ['./popularTags.component.scss'],
})
export class PopularTagsComponent implements OnInit{
  popularTags$: Observable<PopularTagType[] | null>;
  error$: Observable<string | null>;
  isLoading$: Observable<boolean>;

  ngOnInit(): void {
    this.fetchData();
    this.initializeValues();
    console.log('PopularTags', this.popularTags$)
  }

  constructor(private store: Store, private router: Router) {}

  fetchData(): void {
    this.store.dispatch(getPopularTagsAction())
  }

  initializeValues(): void {
    this.popularTags$ = this.store.pipe(select(popularTagsSelector));
    this.error$ = this.store.pipe(select(isErrorSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
  }
}
