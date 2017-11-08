# health_data_visualizer

## start: 

npm install 

npm run build

node dist

## 1. get all county list ---

#### route:

http://localhost:3000/all_counties

#### type:

GET


## 2. get data of one coounty ---

#### route:

http://localhost:3000/get_data_by_county

#### type:

POST

#### headers: 

Content-Type:application/x-www-form-urlencoded

#### body: 

county:Autauga County



## 3. search county ---

#### route:

http://localhost:3000/search_county

#### type:

POST

#### headers: 

Content-Type:application/x-www-form-urlencoded

#### body: 

county:Autauga County




## 4. get data of one coounty in all years (for chart)---

#### route:

http://localhost:3000/get_chart

#### type:

POST

#### headers: 

Content-Type:application/x-www-form-urlencoded

#### body: 

county:Autauga County



## 5. add a county to favourite list---

#### route:

http://localhost:3000/add_favourite

#### type:

POST

#### headers: 

Content-Type:application/x-www-form-urlencoded

#### body: 

county:Autauga County


## 6. get all favourite counties list---

#### route:

http://localhost:3000/add_favourite

#### type:

GET

