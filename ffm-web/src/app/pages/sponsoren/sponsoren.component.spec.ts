import {ComponentFixture, TestBed, waitForAsync} from "@angular/core/testing";

import {SponsorenComponent} from "./sponsoren.component";

describe("SponsorenComponent", () => {
    let component: SponsorenComponent;
    let fixture: ComponentFixture<SponsorenComponent>;

    beforeEach(waitForAsync(() => {
        void TestBed.configureTestingModule({
            declarations: [SponsorenComponent]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SponsorenComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        void expect(component).toBeTruthy();
    });
});
