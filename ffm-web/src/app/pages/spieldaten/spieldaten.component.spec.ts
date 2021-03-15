import {waitForAsync, ComponentFixture, TestBed} from "@angular/core/testing";
import {SpieldatenComponent} from "./spieldaten.component";

describe("SpieldatenComponent", () => {
    let component: SpieldatenComponent;
    let fixture: ComponentFixture<SpieldatenComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [SpieldatenComponent]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SpieldatenComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
