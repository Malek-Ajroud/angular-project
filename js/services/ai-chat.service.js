app.service('AIChatService', ['$q', '$timeout', function($q, $timeout) {
    
    // Predefined responses to simulate "intelligence"
    var responses = {
        'default': [
            "C'est une excellente question ! En tant qu'assistant virtuel, je vous suggère de consulter un professionnel de santé pour des conseils précis.",
            "Je comprends votre préoccupation. Chaque enfant est unique et évolue à son propre rythme.",
            "Avez-vous essayé d'en parler avec d'autres parents ? Le partage d'expérience est souvent très enrichissant.",
            "N'oubliez pas de prendre du temps pour vous aussi, c'est important pour votre bien-être et celui de votre enfant."
        ],
        'sommeil': "Le sommeil est crucial. Essayez d'instaurer une routine calme avant le coucher, comme lire une histoire ou écouter de la musique douce.",
        'alimentation': "Pour l'alimentation, la variété est la clé. Proposez régulièrement de nouveaux aliments sans forcer, cela peut prendre du temps.",
        'colère': "Les crises de colère sont normales à cet âge. Essayez de rester calme, de nommer l'émotion de l'enfant et de lui proposer un câlin une fois la crise passée.",
        'école': "L'adaptation à l'école peut être un grand changement. Parlez-en avec l'enseignant pour voir comment cela se passe en classe."
    };

    return {
        sendMessage: function(messageText) {
            var deferred = $q.defer();
            var delay = Math.floor(Math.random() * 1000) + 500; // Random delay between 500ms and 1500ms

            $timeout(function() {
                var responseText = responses['default'][Math.floor(Math.random() * responses['default'].length)];
                
                // Simple keyword matching
                var lowerMsg = messageText.toLowerCase();
                if (lowerMsg.includes('sommeil') || lowerMsg.includes('dormir') || lowerMsg.includes('nuit')) {
                    responseText = responses['sommeil'];
                } else if (lowerMsg.includes('manger') || lowerMsg.includes('repas') || lowerMsg.includes('légumes') || lowerMsg.includes('alimentation')) {
                    responseText = responses['alimentation'];
                } else if (lowerMsg.includes('colère') || lowerMsg.includes('cri') || lowerMsg.includes('caprice')) {
                    responseText = responses['colère'];
                } else if (lowerMsg.includes('école') || lowerMsg.includes('maîtresse') || lowerMsg.includes('classe')) {
                    responseText = responses['école'];
                }

                deferred.resolve({
                    text: responseText,
                    sender: 'ai',
                    timestamp: new Date()
                });
            }, delay);

            return deferred.promise;
        }
    };
}]);
