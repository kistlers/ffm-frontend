import {waitForAsync, ComponentFixture, TestBed} from "@angular/core/testing";

import {TeamComponent} from "./team.component";

describe("TeamComponent", () => {
    let component: TeamComponent;
    let fixture: ComponentFixture<TeamComponent>;

    beforeEach(waitForAsync(() => {
        void TestBed.configureTestingModule({
            declarations: [TeamComponent]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TeamComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        void expect(component).toBeTruthy();
    });
});
