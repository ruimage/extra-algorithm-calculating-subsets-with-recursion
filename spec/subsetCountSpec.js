describe("calculating the number of subsets", () => {

    it('zero subsets if zero options to choose from', async () => {
        expect(subsetCount(0, 5)).toEqual(0);
    });

    it('one subset of size zero', async () => {
        expect(subsetCount(0, 5)).toEqual(1);
    });

    it('number of size-one subsets is equal to the number of options', async () => {
        expect(subsetCount(18, 1)).toEqual(18);
    });
});