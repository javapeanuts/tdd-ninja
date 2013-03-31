describe('ApplicationDescriptor tests', function () {  
    it('window.tddninja not null', function () {  
        expect(window.tddninja).not.toBeUndefined();
    });
        
    it('window.tddninja.applicationDescriptor not null', function() {
            expect(window.tddninja.applicationDescriptor).not.toBeUndefined();
    });
    
    it('check applicationName', function() {
            expect(tddninja.applicationDescriptor.applicationName).toEqual('tdd-ninja');
    });
});