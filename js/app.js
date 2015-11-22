angular.module('myApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'templates/home.html',
            controller: 'HomeCtrl'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'templates/about.html',
        })
        .state('courses', {
            url: '/courses',
            templateUrl: 'templates/course.html',
            controller: 'CourseCtrl'
        })
        .state('course-lectures', {
            url: '/{coursename}/lectures',
            templateUrl: 'templates/course-lecture.html',
            controller: 'CourseLectureCtrl'
        })
        .state('register', {
            url: '/register',
            templateUrl: 'templates/register.html',
        })
})

.controller('HomeCtrl', function($scope, student) {

        student.getStudents(function(students) {
            $scope.students = students;
            console.log($scope.students);
        });
    })
    .controller('CourseCtrl', function($scope, student) {
        student.getCourses(function(courses) {
            $scope.courses = courses;
            console.log($scope.courses)
        })
    })
    .controller('CourseLectureCtrl', function($scope, $stateParams, student) {

        $scope.hoverIn = function() {
            this.hoverEdit = false;
            this.lectureDisplayed = true;
        };

        $scope.hoverOut = function() {
            this.hoverEdit = true;
            this.lectureDisplayed = false;
        };
    
        student.getLectures($stateParams.coursename, function(lectures) {
            $scope.lectures = lectures;

            for (i = 0; i < lectures.length; i++) {
                var lectureLink = lectures[i].youtubeLink;
                var sublink = lectureLink.substr(32, lectureLink.length - 1);
                // to get youtube thumbnail - http://img.youtube.com/vi/<insert youtube video id here>/1.jpg
                $scope.lectures[i].thumbnail = ("http://img.youtube.com/vi/" + sublink + "/1.jpg");
            }

            console.log($scope.lectures);

        });

    });