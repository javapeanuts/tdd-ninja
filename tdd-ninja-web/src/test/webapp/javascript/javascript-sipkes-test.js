describe('ApplicationDescriptor tests', function () {  
    it('== comparison', function () {  
        expect(1 == '1').toBe(true);
    });
        
    it('=== comparison', function() {
            expect(1 === '1').not.toBe(true);
    });
});