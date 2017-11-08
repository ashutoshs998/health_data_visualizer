'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _controller = require('../controller');

var _controller2 = _interopRequireDefault(_controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    var api = (0, _express.Router)({ mergeParams: true });
    api.route('/all_counties').get(_controller2.default.all_counties.counties);
    api.route('/get_data_by_county').post(_controller2.default.all_counties.get_data_by_county);
    api.route('/search_county').post(_controller2.default.all_counties.search_county);
    api.route('/get_chart').post(_controller2.default.all_counties.get_chart);
    api.route('/add_favourite').post(_controller2.default.all_counties.add_fav);
    api.route('/get_favourite').get(_controller2.default.all_counties.get_fav);

    return api;
};
//# sourceMappingURL=index.js.map