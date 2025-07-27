export default {
  hello: 'Bonjour le monde',
  language: {
    selectTitle: 'Sélection de langue',
    selectLanguage: 'Sélectionner la langue',
    selectDescription: 'Choisissez votre langue d\'interface préférée'
  },
  home: {
    timerExamples: 'Exemples de minuteurs',
    countdownDeadline: 'Compte à rebours jusqu\'à la date limite',
    countdownTimeLimit: 'Compte à rebours avec limite de temps',
    currentTime: 'Heure actuelle',
    expiredTimer: 'Minuteur expiré',
    warningActive: 'Avertissement actif',
    noWarning: 'Aucun avertissement',
    questionExamples: 'Exemples de questions',
    singleChoiceQuestion: 'Question à choix unique',
    multipleChoiceQuestion: 'Question à choix multiples',
    questionWithAnswers: 'Question avec réponses',
    questionWithImage: 'Question avec image',
    testCreationExample: 'Exemple de création de questions',
    createQuestionForm: 'Formulaire de création de question',
    jsonPreview: 'Aperçu JSON',
    copyJson: 'Copier JSON',
    questionsJson: 'JSON des questions'
  },
  timer: {
    untilDeadline: 'jusqu\'à la date limite',
    remaining: 'restant',
    currentTime: 'heure actuelle',
    timeRunningOut: 'Le temps s\'épuise !',
    timeExpired: 'Temps expiré !',
    modes: {
      countdown: 'Compte à rebours',
      time: 'Heure actuelle'
    },
    types: {
      deadline: 'Date limite',
      timeLimit: 'Limite de temps'
    },
    settings: {
      title: 'Paramètres du minuteur',
      editTitle: 'Modifier le minuteur',
      mode: 'Mode du minuteur',
      countdownType: 'Type de compte à rebours',
      deadline: 'Date limite',
      deadlineHelp: 'Temps JUSQU\'AUQUEL le test doit être soumis',
      timeLimit: 'Temps d\'exécution (minutes)',
      timeLimitHelp: 'Combien de temps est donné pour compléter le test',
      warnings: 'Avertissements',
      showWarning: 'Afficher l\'avertissement de temps',
      warningThreshold: 'Seuil d\'avertissement (secondes)',
      displaySettings: 'Paramètres d\'affichage',
      showProgress: 'Afficher la barre de progression du temps',
      preview: 'Aperçu',
      timeModeInfo: 'Le minuteur affichera l\'heure actuelle de la journée au format HH:MM:SS',
      actions: {
        cancel: 'Annuler',
        save: 'Enregistrer',
        apply: 'Appliquer',
        delete: 'Supprimer',
        preview: 'Aperçu'
      }
    }
  },
  question: {
    difficulties: {
      easy: 'Facile',
      medium: 'Moyen',
      hard: 'Difficile'
    },
    edit: {
      title: 'Créer une question',
      editTitle: 'Modifier la question',
      questionTitle: 'Question',
      questionTitlePlaceholder: 'Entrez la question',
      description: 'Description',
      descriptionPlaceholder: 'Description supplémentaire de la question',
      difficulty: 'Difficulté',
      selectDifficulty: 'Sélectionnez la difficulté',
      points: 'Points',
      image: 'Image',
      addImageUrl: 'Ajouter URL',
      answers: {
        title: 'Options de réponse',
        addAnswer: 'Ajouter une réponse',
        addPrompt: 'Ajoutez des options de réponse',
        answerPlaceholder: 'Réponse',
        correctLabel: 'Correcte'
      },
      explanation: 'Explication',
      explanationPlaceholder: 'Explication de la bonne réponse',
      imageUpload: {
        title: 'Télécharger une image',
        or: 'ou',
        cancel: 'Annuler',
        apply: 'Appliquer'
      },
      actions: {
        cancel: 'Annuler',
        save: 'Enregistrer',
        create: 'Créer',
        apply: 'Appliquer',
        delete: 'Supprimer',
        preview: 'Aperçu'
      }
    },
    display: {
      explanation: 'Explication',
      points: 'points'
    }
  },
  navigation: {
    title: 'Navigation du Test',
    sections: 'Sections',
    questions: 'Questions',
    progress: 'Progrès',
    finishTest: 'Terminer le Test',
    finishTestEarly: 'Terminer le Test Tôt',
    finish: 'Terminer',
    cancel: 'Annuler',
    back: 'Retour',
    confirmation: {
      title: 'Confirmer la Fin du Test',
      description: 'Êtes-vous sûr de vouloir terminer le test tôt ? Les questions sans réponse seront comptées comme incorrectes.'
    },
    status: {
      notAnswered: 'Non répondu',
      answered: 'Répondu',
      correct: 'Correct',
      incorrect: 'Incorrect'
    }
  },
  test: {
    edit: {
      createTitle: 'Créer un test',
      editTitle: 'Modifier le test',
      basicSettings: 'Paramètres de base',
      title: 'Titre du test',
      titlePlaceholder: 'Entrez le titre du test',
      description: 'Description',
      descriptionPlaceholder: 'Description du test',
      image: 'Image',
      timeSettings: 'Paramètres de temps',
      deadline: 'Date limite',
      timeLimit: 'Limite de temps (minutes)',
      timeLimitPlaceholder: '60',
      timeLimitHelp: 'Temps autorisé pour compléter le test',
      randomizationSettings: 'Paramètres de randomisation',
      randomizeQuestions: 'Randomiser l\'ordre des questions',
      randomizeAnswers: 'Randomiser l\'ordre des réponses',
      difficultyDistribution: 'Distribution de difficulté',
      totalPercentage: 'Pourcentage total',
      resetDistribution: 'Réinitialiser la distribution',
      questionBank: 'Banque de questions',
      addQuestion: 'Ajouter une question',
      filterByDifficulty: 'Filtrer par difficulté',
      searchQuestions: 'Rechercher des questions',
      selectedQuestions: 'Questions sélectionnées : {count}',
      assignToSection: 'Assigner à la section',
      assign: 'Assigner',
      sections: 'Sections',
      addSection: 'Ajouter une section',
      questions: 'questions',
      sectionTitle: 'Titre de la section',
      sectionTitlePlaceholder: 'Entrez le titre de la section',
      sectionDescription: 'Description de la section',
      sectionDescriptionPlaceholder: 'Description de la section',
      allDifficulties: 'Toutes les difficultés',
      actions: {
        cancel: 'Annuler',
        save: 'Enregistrer',
        apply: 'Appliquer',
        delete: 'Supprimer',
        preview: 'Aperçu'
      },
      errors: {
        titleRequired: 'Le titre du test est requis'
      }
    },
    pass: {
      exit: 'Quitter',
      noQuestion: 'Question non trouvée',
      previous: 'Précédent',
      next: 'Suivant',
      finish: 'Terminer',
      questionProgress: '{current} sur {total}'
    },
    card: {
      questions: 'questions',
      minutes: 'minutes',
      yourResult: 'Votre résultat',
      completedAt: 'Terminé le',
      totalPoints: 'Points totaux',
      estimatedTime: 'Temps estimé',
      passed: 'Réussi',
      failed: 'Échoué',
      attempts: 'tentatives',
      viewResult: 'Voir le résultat',
      retake: 'Reprendre',
      start: 'Commencer',
      expired: 'Expiré',
      today: 'Aujourd\'hui',
      tomorrow: 'Demain',
      inDays: 'dans {days} jours'
    }
  },
  imageUpload: {
    urlLabel: 'URL de l\'image',
    urlPlaceholder: 'https://example.com/image.jpg',
    urlRequired: 'Entrez l\'URL de l\'image',
    invalidUrl: 'URL d\'image invalide',
    urlError: 'Erreur lors du chargement de l\'image depuis l\'URL',
    addUrl: 'Ajouter URL',
    or: 'ou',
    fileLabel: 'Télécharger un fichier',
    fileHelp: 'Formats supportés : JPG, PNG, GIF, WebP. Taille maximale : 5MB',
    fileRequired: 'Sélectionnez un fichier image',
    fileTooLarge: 'Fichier trop volumineux. Taille maximale : {maxSize}',
    unsupportedFormat: 'Format de fichier non supporté',
    fileError: 'Erreur lors du traitement du fichier',
    loadError: 'Erreur lors du chargement de l\'image',
    processing: 'Traitement de l\'image...',
    error: 'Erreur'
  },
  result: {
    title: 'Résultat du test',
    totalScore: 'Score total',
    percentage: 'Pourcentage',
    timeSpent: 'Temps passé',
    passed: 'Réussi',
    failed: 'Échoué',
    status: 'Statut',
    scoreBreakdown: 'Répartition du score',
    overallProgress: 'Progrès global',
    byDifficulty: 'Par difficulté',
    timeAnalysis: 'Analyse du temps',
    completionTime: 'Temps de finition',
    averageTimePerQuestion: 'Temps moyen par question',
    completedAt: 'Terminé le',
    timeLimit: 'Limite de temps',
    detailedAnswers: 'Réponses détaillées',
    question: 'Question',
    correct: 'Correct',
    incorrect: 'Incorrect',
    selectedAnswers: 'Réponses sélectionnées',
    retakeTest: 'Reprendre le test',
    shareResult: 'Partager le résultat',
    downloadCertificate: 'Télécharger le certificat'
  },
  leaderboard: {
    title: 'Tableau des scores',
    subtitle: 'Résultats de tous les participants',
    sortBy: 'Trier par',
    search: 'Rechercher',
    totalParticipants: 'Total des participants',
    passedCount: 'Réussis',
    averageScore: 'Score moyen',
    averageTime: 'Temps moyen'
  },
  common: {
    loading: 'Chargement...',
    error: 'Erreur',
    retry: 'Réessayer'
  },
  layout: {
    author: {
      withLove: 'Avec amour',
      contacts: 'Contacts'
    }
  }
} 