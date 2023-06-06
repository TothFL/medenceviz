describe('Számítás tesztelése', () => {
    it('Normál1: t: 80, m: 1.8: i: 24.69', () => {
        let actual = calcBodyVolume(1000, 1000, 1000);
        let expected = 990;
        expect(actual).toBeCloseTo(expected, 0.9);
    });
});
