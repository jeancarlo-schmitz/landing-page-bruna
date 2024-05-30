const utils = {};

utils.getIdField = function(element){
    return element.id;
};

utils.getValueField = function(element){
    return element.value;
};

utils.getSelectedOptionText = function(idElement){
    return $("#" + idElement).find(":selected").text();
};

utils.isFieldNotEmpty = function(field){
    return field !== "" && field !== undefined && field !== null;
};

utils.isFieldEmpty = function(field){
    return field === "" || field === undefined || field === null;
};

utils.isObjectEmpty = function(object){
    return $.isEmptyObject(object);
};

utils.isObjectNotEmpty = function(object){
    return !utils.isObjectEmpty(object);
};

utils.isArrayEmpty = function(array){
    return array.length === 0;
};

utils.lenghtObject = function (object) {
    return Object.keys(object).length;
};

utils.isArrayNotEmpty = function(array){
    return !utils.isArrayEmpty(array);
};

utils.hasKeyOnObject = function(object, key){
    return object.hasOwnProperty(key)
};

utils.hasNoKeyOnObject = function(object, key){
    return !utils.hasKeyOnObject(object, key);
};

utils.isNumberEqualsZero = function(number){
    return parseInt(number) === 0;
};

utils.isNumberDifferentFromZero = function(number){
    return !utils.isNumberEqualsZero(number);
};

utils.isResponseTrue = function(response){
    return utils.isBooleanEqualsTrue(response.success);
};

utils.isBooleanEqualsTrue = function(boolean){
    return boolean === true || boolean === 'true' || boolean === 1;
};

utils.isBooleanEqualsFalse = function(boolean){
    return boolean === false || boolean === 'false' || boolean === 0;
};

utils.isBooleanNotEqualsFalse = function(boolean){
    return boolean !== false && boolean !== 'false';
};

utils.isBooleanNotEqualsTrue = function(boolean){
    return boolean !== true && boolean !== 'true';
};

utils.disableButton = function(idButton){
    $("#" + idButton).prop("disabled", true);
};

utils.unDisableButton = function(idButton){
    $("#" + idButton).prop("disabled", false);
};

utils.markElementAsChecked = function(element){
    element.checked = true;
};

utils.markElementAsUnChecked = function(element){
    element.checked = false;
};

utils.isElementVisible = function(element){
    return $("#" + element).is(':visible');
};

utils.isElementNotVisible = function(element){
    return !utils.isElementVisible(element);
};

utils.stringLowerCase = function(string){
    return string.toLowerCase();
};

utils.encodeUtf8 = function(str){
    return unescape(encodeURIComponent(str));
};

utils.decode_utf8 = function(str) {
    return decodeURIComponent(escape(str));
};

utils.isValidCep = function(value) {
    return value.replace(/\D/g, "").length == 8;
};

utils.copyObject = function(object){
    return $.extend(true, {}, object);
};

utils.createPromise = function (time) {
    return new Promise( resolve => {
        setTimeout(() => {
        resolve(true);
            }, time);
    });
};

utils.applyBootstrapTooltip = function (idElemento) {
    let $elementos;
    if (idElemento) {
        $elementos = $('#' + idElemento).find('[data-bs-toggle="tooltip"]');
    } else {
        $elementos = $('[data-bs-toggle="tooltip"]');
    }

    $elementos.each(function () {
        $(this).tooltip();
    });
};

utils.removerEspacos = function (texto) {
    return texto.replace(/\s/g, '');
};

utils.inicializaConfiguracaoMultiplesSelectItens = async function() {
    $(".custom-dropdown").each(function() {
        let selected = $(this).find(".selected-item");
        let dropdown = $(this).find(".dropdown-list");
        let options  = $(this).find(".dropdown-item");

        selected.click(function() {
            dropdown.toggle();
            selected.toggleClass("bordered");
        });

        options.click(function() {
            let value = $(this).data("value");
            let text = $(this).html();
            selected.html(text).data("value", value);
            dropdown.hide();
            selected.removeClass("bordered");
            options.removeClass("selected");
            $(this).addClass("selected");
        });

        $(document).click(function(e) {
            if (dropdown.is(":visible") && !selected.is(e.target) && !dropdown.is(e.target) && dropdown.has(e.target).length === 0) {
                dropdown.hide();
                selected.removeClass("bordered");
            }
        });
    });

    return utils.createPromise(200);
}

utils.selecionaPrimeiraOpcaoDropboxFirstOptionSelected = async function () {
    $(".custom-dropdown.first-option-selected").each(function() {
        let defaultOption = $(this).find(".dropdown-item").first();
        let defaultValue = defaultOption.data("value");

        $(this).find(".selected-item").html(defaultOption.html()).data("value", defaultValue);
        defaultOption.addClass("selected");
    });

    return utils.createPromise(200);
};

export default utils;

