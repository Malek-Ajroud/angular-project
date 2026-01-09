app.controller('ChatCtrl', ['$scope', '$timeout', 'AIChatService', function ($scope, $timeout, AIChatService) {
    $scope.messages = [
        {
            text: "Bonjour ! Je suis votre assistant parental virtuel. Comment puis-je vous aider aujourd'hui ?",
            sender: 'ai',
            timestamp: new Date()
        }
    ];
    $scope.userMessage = "";
    $scope.isTyping = false;

    // Auto-scroll to bottom
    function scrollToBottom() {
        $timeout(function () {
            var chatHistory = document.querySelector('.chat-history');
            if (chatHistory) {
                chatHistory.scrollTop = chatHistory.scrollHeight;
            }
        }, 0);
    }

    $scope.sendMessage = function () {
        if (!$scope.userMessage || $scope.userMessage.trim() === '') {
            return;
        }

        var messageText = $scope.userMessage;

        // Add user message
        $scope.messages.push({
            text: messageText,
            sender: 'user',
            timestamp: new Date()
        });

        $scope.userMessage = "";
        $scope.isTyping = true;
        scrollToBottom();

        // Call service
        AIChatService.sendMessage(messageText).then(function (response) {
            $scope.messages.push(response);
            $scope.isTyping = false;
            scrollToBottom();
        }, function (error) {
            console.error("Erreur chat:", error);
            $scope.isTyping = false;
        });
    };
}]);
