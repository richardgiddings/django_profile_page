# README

Based on a tutorial I have written at https://blog.richardgiddings.co.uk/building-profile-page/ on how to write a basic profile page using Django, Django Rest Framework and React-Redux. Any comments welcome on how it can be improved.

If you just want to see it running you will need to run the following Django commands:
- pip install django==1.10.5 djangorestframework==3.5.3 djangorestframework-jsonp==1.0.2 pillow==4.0.0
- ./manage.py makemigrations
- ./manage.py migrate
- ./manage.py createsuperuser
- ./manage.py runserver

Then for the React part run 'npm install' then 'npm start' in the react_front_end directory.

To see the Django Rest Framework API go to http://127.0.0.1:8000/api/

To see the React front-end go to http://localhost:8080/