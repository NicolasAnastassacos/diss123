angular.module('myApp')

.factory('student', function($http) {

  var apiRoute = 'http://127.0.0.1:8000/student/api/';

  return {

    userRegister: function(email, firstname, lastname, password) {
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
    },

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

    getLectures: function(course_id, callback) {

      $http({
        method: 'GET',
        url: apiRoute + 'lecture?course=' + course_id,
        cache: false
      }).success(function(data) {
        callback(data);
      });
    },

    getLecture: function(lecture_id, callback) {
      $http({
        mmethod: 'GET',
        url: apiRoute + 'lecture/' + lecture_id,
        cache: false
      }).success(function(data) {
        callback(data);
      });
    },

    getNotes: function(lecture_id, callback) {
      $http({
        method: 'GET',
        url: apiRoute + 'notes?lecture=' + lecture_id,
        cache: false
      }).success(function(data) {
        callback(data)
      });
    },
    
    saveNotes: function(notes, lecture_id, lecture_no, lecture_title, youtubeLink, course, keywords, callback) {
        
      // console.log(notes, lecture_id)
      $http({
        method: 'POST',
        url: apiRoute + 'notes/',
        data: {
          "notes": notes,
          "lecture": {
              "id": lecture_id,
              "lecture_no": lecture_no,
              "title": lecture_title,
              "youtubeLink": youtubeLink,
              "course": course,
              "keywords": keywords
            }
        }
      }).success(callback);
    }
    
    
    /*
    saveNotes: function(notes, lecture_id, callback) {
        
      $http({
        method: 'POST',
        url: apiRoute + 'notes/',
        data: {
          "notes": notes,
          "lecture": lecture_id
        }
      }).success(callback);
    }
    
    */

  }

})
