
describe("Side Cart Controller", function(){

	var $rootScope, $compile;

	beforeEach(module("app"));
	beforeEach(module("shared/partials/modalCart.html"));

	beforeEach(inject(function(_$rootScope_, _$compile_, $document){
		$rootScope = _$rootScope_;
		$compile = _$compile_;
	}));

	describe("Directive <modalcart>", function(){
		it("renders", function(){
			//Because this directive's replace == true, 
			//wrap around div to call outerHTML below
			var element = $compile("<div><modal-cart></modal-cart></div>")($rootScope);

			$rootScope.$digest();

			expect(element[0].outerHTML).toContain("<!-- ngIf: cart.isVisible() -->");
		})
	})
})