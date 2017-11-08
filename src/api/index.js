import { Router } from 'express';
import controller from "../controller";
export default () => {
    let api = Router({ mergeParams: true });
    api.route('/all_counties').get(controller.all_counties.counties);
    api.route('/get_data_by_county').post(controller.all_counties.get_data_by_county);
    api.route('/search_county').post(controller.all_counties.search_county);
    api.route('/get_chart').post(controller.all_counties.get_chart);
    api.route('/add_favourite').post(controller.all_counties.add_fav);
    api.route('/get_favourite').get(controller.all_counties.get_fav);

    return api;
}