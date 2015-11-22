angular.module('myApp')

.factory('student', function($http) {

    var apiRoute = 'http://localhost:8000/student/api/';
    
    return {
        
        getStudents: function(callback) {
            $http({
                method: 'GET',
                url: apiRoute + 'student/',
                cache: false
            }).success(function(data) {
                callback(data);
            });
            
        },
        
        getCourses: function(callback) {
            $http({
                method: 'GET',
                url: apiRoute + 'course/',
                cache: false
            }).success(function(data) {
                callback(data);
            });
            
        },
        
        getLectures: function(course_name, callback) {
            
            if (course_name === "Human-Computer Interaction") {
                course_id = 5;
            }
            if (course_name === "Causes and Consequences of Personality") {
                course_id = 6;
            }
            if (course_name === "Class: The Psychology of Wealth, Poverty, and Social Rank") {
                course_id = 7;
            }
            if (course_name == "Machine Learning Practical") {
                course_id = 8;
            }
            
            $http({
                mmethod: 'GET',
                url: apiRoute + 'lecture?course=' + course_id,
                cache: false
            }).success(function(data) {
               callback(data); 
            });   
        },
        
        userRegister : function(email, firstname, lastname, password) {
            $http({
                method: 'POST',
                url: apiRoute + 'register/',
                data: {
                    "email": email,
                    "password": password,
                    "forename": firstname,
                    "surname": lastname
                }
            }).success(callback);
        }
        
    }

})