import {waitForAsync, ComponentFixture, TestBed} from "@angular/core/testing";

import {PlayerRowComponent} from "./player-row.component";

describe("PlayerRowComponent", () => {
    let component: PlayerRowComponent;
    let fixture: ComponentFixture<PlayerRowComponent>;

    beforeEach(waitForAsync(() => {
        void TestBed.configureTestingModule({
            declarations: [PlayerRowComponent]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PlayerRowComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        void expect(component).toBeTruthy();
    });
});
