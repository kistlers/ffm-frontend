import {TestBed} from "@angular/core/testing";
import {SponsorService} from "./sponsor.service";

describe("SponsorsService", () => {
    let service: SponsorService;

    beforeEach(() => {
        void TestBed.configureTestingModule({});
        service = TestBed.inject(SponsorService);
    });

    it("should be created", () => {
        void expect(service).toBeTruthy();
    });
});
