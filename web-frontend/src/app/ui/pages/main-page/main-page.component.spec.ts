/*
 * ComiXed - A digital comic book library management application.
 * Copyright (C) 2017, The ComiXed Project
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.package
 * org.comixed;
 */

import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { Store, StoreModule } from "@ngrx/store";
import { AppState } from "../../../app.state";
import { libraryReducer } from "../../../reducers/library.reducer";
import { ComicService } from "../../../services/comic.service";
import { ComicServiceMock } from "../../../services/comic.service.mock";
import { AlertService } from "../../../services/alert.service";
import { AlertServiceMock } from "../../../services/alert.service.mock";
import { MainPageComponent } from "./main-page.component";

describe("MainPageComponent", () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;
  let debugElement: DebugElement;
  let alert_service: AlertService;
  let comic_service: ComicService;
  let router: Router;
  let store: Store<AppState>;

  const routes = [];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        FormsModule,
        TranslateModule.forRoot(),
        StoreModule.forRoot({ library: libraryReducer })
      ],
      declarations: [MainPageComponent],
      providers: [
        { provide: AlertService, useClass: AlertServiceMock },
        { provide: ComicService, useClass: ComicServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;

    alert_service = TestBed.get(AlertService);
    comic_service = TestBed.get(ComicService);
    router = TestBed.get(Router);

    fixture.detectChanges();
    router.initialNavigation();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
