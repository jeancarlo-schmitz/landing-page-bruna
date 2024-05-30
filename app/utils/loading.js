import utils from './utils.js'

export function showLoading(time = 0) {
    $(".opacity-dark").show();

    return utils.createPromise(time);
}

export function hideLoading(time = 0) {
    $(".opacity-dark").hide();

    return utils.createPromise(time);
}
