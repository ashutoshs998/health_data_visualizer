# health data visualizer node api

## start: 

```
npm install 
npm run build
npm start
```

#### to import postman collection: 
import following file in postman

```health_data_visualizer.postman_collection.json```

## routes:

## 1. get all county list:

### route: 
https://mysterious-refuge-38097.herokuapp.com/all_counties

### type:
GET


## 2. get data of one coounty:

### route: 
https://mysterious-refuge-38097.herokuapp.com/get_data_by_county

### type:
POST

### headers: 
Content-Type: application/x-www-form-urlencoded

### body: 
county:Autauga County


## 3. search county :

### route: 
ttps://mysterious-refuge-38097.herokuapp.com/search_county

### type:
POST

### headers: 
Content-Type: application/x-www-form-urlencoded

### body: 
county:Autauga County


## 4. get data of one county in all years (for chart):

### route:
https://mysterious-refuge-38097.herokuapp.com/get_chart

### type:
POST

### headers: 
Content-Type: application/x-www-form-urlencoded

### body: 
county:Autauga County


## 5. add a county to favourite list:

### route:
https://mysterious-refuge-38097.herokuapp.com/add_favourite

### type:
POST

### headers: 
Content-Type: application/x-www-form-urlencoded

### body: 
county:Autauga County


## 6. get all favourite counties list:

### route:
https://mysterious-refuge-38097.herokuapp.com/add_favourite

### type:
GET .


# deployment on heroku:


#### Install heroku and signup on heroku official site.
#### heroku login email: ashutosh_m@excellencetechnologies.in

##### commands: 

```
heroku login
git clone https://github.com/nodeexcel/health_data_visualizer.git 
cd health_data_visualizer
npm install    //(install all modules)
npm run build
heroku create
git push heroku master
heroku ps:scale web=1
heroku open

for checking the logs errors run command: heroku logs --tail
```

## for updating the code:

make changes in code and push on https://github.com/nodeexcel/health_data_visualizer.git 

#### then commands:
```
heroku login
cd health_data_visualizer
git pull origin master
npm run build
git push heroku master
heroku restart

```

### heroku app link: https://mysterious-refuge-38097.herokuapp.com/
