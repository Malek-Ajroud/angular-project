app.controller('CalendrierCtrl', ['$scope', 'EventService', function ($scope, EventService) {
    $scope.loading = true;
    $scope.events = [];
    $scope.calendarWeeks = [];
    $scope.currentDate = moment();

    // Modal state
    $scope.showModal = false;
    $scope.newEvent = {};
    $scope.isSaving = false;

    // init from service
    var loadEvents = function () {
        EventService.getEvents().then(function (data) {
            $scope.events = data;
            generateCalendar();
            $scope.loading = false;
        });
    };

    // Calendar generation
    var generateCalendar = function () {
        var startOfMonth = $scope.currentDate.clone().startOf('month');
        var endOfMonth = $scope.currentDate.clone().endOf('month');

        var startDate = startOfMonth.clone().startOf('week'); // Start from previous month's days if needed
        var endDate = endOfMonth.clone().endOf('week'); // End at next month's days if needed

        var weeks = [];
        var week = [];
        var day = startDate.clone();

        // French locale set in index.html, so startOf('week') should be Monday usually, 
        // but moment default is Sunday. Let's fix locale just in case in init if needed, 
        // but assuming moment-with-locales handles it.

        while (day <= endDate) {
            // Find events for this day
            var dayEvents = $scope.events.filter(function (e) {
                return moment(e.date).isSame(day, 'day');
            });

            week.push({
                date: day.clone(),
                dayNum: day.format('D'),
                isCurrentMonth: day.month() === $scope.currentDate.month(),
                isToday: day.isSame(moment(), 'day'),
                events: dayEvents
            });

            if (week.length === 7) {
                weeks.push(week);
                week = [];
            }
            day.add(1, 'd');
        }
        $scope.calendarWeeks = weeks;
    };

    $scope.prevMonth = function () {
        $scope.currentDate.subtract(1, 'months');
        generateCalendar();
    };

    $scope.nextMonth = function () {
        $scope.currentDate.add(1, 'months');
        generateCalendar();
    };

    $scope.openAddModal = function () {
        $scope.newEvent = { date: new Date() }; // Default to today
        $scope.showModal = true;
    };

    $scope.closeModal = function () {
        $scope.showModal = false;
        $scope.newEvent = {};
    };

    $scope.saveEvent = function () {
        if ($scope.eventForm.$valid) {
            $scope.isSaving = true;
            EventService.addEvent($scope.newEvent).then(function () {
                $scope.isSaving = false;
                $scope.closeModal();
                loadEvents(); // Reload and regenerate
            }, function (error) {
                console.error(error);
                $scope.isSaving = false;
            });
        }
    };

    $scope.deleteEvent = function (id) {
        if (confirm('Supprimer cet événement ?')) {
            EventService.deleteEvent(id).then(function () {
                loadEvents();
            });
        }
    };

    loadEvents();
}]);
