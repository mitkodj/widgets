function EditableFieldController($scope, $element, $attrs) {
	var ctrl = this;
	this.editMode = false;

	this.handleModeChange = function() {
		console.log('handleModeChange');
		if (ctrl.editMode) {
			ctrl.onUpdate({value: ctrl.fieldValue});
			ctrl.fieldValueCopy = ctrl.fieldValue;
		}
		ctrl.editMode = !ctrl.editMode;
	};

	this.reset = function() {
		console.log('reset');
		ctrl.fieldValue = this.fieldValueCopy;
	};

	this.$onInit = function() {
		console.log('$onInit');
		this.fieldValueCopy = this.fieldValue;

		if (!this.fieldType) {
			this.fieldType = 'text';
		}
	};
}

widgetsApp.directive('editableField', function () {
	return {
		templateUrl: '../../html/editableField.html',
		controller: EditableFieldController,
		scope: {
			fieldValue: '@',
			fieldType: '@',
			onUpdate: '&'
		}
	};
});