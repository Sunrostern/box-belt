import { sort } from "./index";

describe("Package Sorting Tests", () => {
  it("Should classify as STANDARD when not bulky or heavy.", () => {
    expect(sort(50, 50, 50, 5)).toBe("STANDARD");
  });

  it("Should classify as SPECIAL when bulky but not heavy.", () => {
    expect(sort(200, 50, 50, 5)).toBe("SPECIAL");
  });

  it("Should classify as SPECIAL when heavy but not bulky.", () => {
    expect(sort(50, 50, 50, 25)).toBe("SPECIAL");
  });

  it("Should classify as REJECTED when both bulky and heavy.", () => {
    expect(sort(200, 200, 200, 25)).toBe("REJECTED");
  });

  it("Should classify as SPECIAL when only one dimension is bulky.", () => {
    expect(sort(151, 50, 50, 5)).toBe("SPECIAL");
  });

  it("Should classify as SPECIAL when volume is exactly 1,000,000 square centimeters.", () => {
    expect(sort(100, 100, 100, 5)).toBe("SPECIAL");
  });

  it("Should classify as REJECTED when volume is greater than 1,000,000 square centimeters and mass is heavy.", () => {
    expect(sort(500, 500, 10, 30)).toBe("REJECTED");
  });
});
