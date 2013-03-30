describe('foo-bar javascript library', function () {  
    it('window.foobar not null', function () {  
        expect(window.foobar).not.toBeUndefined();
    });
        
    it('says Hello to default target', function() {
            expect(foobar.sayHello()).toEqual('Hello, World!');
    });
    
    it('says Hello to custom target', function() {
            expect(foobar.sayHelloTo('Pietro')).toEqual('Hello, Pietro!');
    });
    
    it('Specify custom greeting', function() {
            expect(new foobar.Foobar('Hi').sayHelloTo('Pietro')).toEqual('Hi, Pietro!');
    });
});