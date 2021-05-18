import {TestBed, waitForAsync} from "@angular/core/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {AppComponent} from "./app.component";

describe("AppComponent", () => {
    beforeEach(waitForAsync(() => {
        void TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                AppComponent
            ]
        }).compileComponents();
    }));

    it("should create the app", () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        void expect(app).toBeTruthy();
    });

    it("should have as title 'ffm-web'", () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        void expect(app.title).toEqual("ffm-web");
    });

    it("should render title", () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const compiled = fixture.nativeElement;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
        void expect(compiled.querySelector(".content span").textContent).toContain("ffm-web app is running!");
    });
});
