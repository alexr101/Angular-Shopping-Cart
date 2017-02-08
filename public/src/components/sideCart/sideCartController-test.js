
describe("Side Cart Controller", function(){

	var $rootScope, $compile;

	beforeEach(module("app"));
	beforeEach(module("shared/partials/modalCart.html"));

	beforeEach(inject(function(_$rootScope_, _$compile_){
		$rootScope = _$rootScope_;
		$compile = _$compile_;
	}));

	describe("view", function(){
		it("renders", function(){
			var element = $compile("<modal-cart></modal-cart>")($rootScope);
			//$rootScope.$digest();
			
			console.log(element)


			expect(element.html()).toContain("Your cart");
		})
	})
})