import {TestBed} from "@angular/core/testing";
import {TeamService} from "./team.service";

describe("TeamService", () => {
    let service: TeamService;

    beforeEach(() => {
        void TestBed.configureTestingModule({});
        service = TestBed.inject(TeamService);
    });

    it("should be created", () => {
        void expect(service).toBeTruthy();
    });
});
