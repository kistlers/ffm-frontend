import {TestBed} from "@angular/core/testing";
import {NewsService} from "./news.service";

describe("NewsService", () => {
    let service: NewsService;

    beforeEach(() => {
        void TestBed.configureTestingModule({});
        service = TestBed.inject(NewsService);
    });

    it("should be created", () => {
        void expect(service).toBeTruthy();
    });
});
