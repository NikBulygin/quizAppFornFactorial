export default {
  hello: 'Bonjour le monde',
  language: {
    selectTitle: 'Sélection de langue',
    selectLanguage: 'Sélectionner la langue',
    selectDescription: 'Choisissez votre langue d\'interface préférée'
  },
  home: {
    description: 'Créez des tests engageants et vérifiez les connaissances avec une plateforme d\'apprentissage moderne',
    createTest: 'Créer un Test',
    takeTest: 'Passer un Test',
    create: {
      title: 'Créer',
      description: 'Créez facilement des tests avec différents types de questions et paramètres'
    },
    share: {
      title: 'Partager',
      description: 'Publiez des tests et partagez-les avec des collègues et des étudiants'
    },
    analyze: {
      title: 'Analyser',
      description: 'Obtenez des statistiques détaillées et des analyses des résultats'
    },
    seo: {
      title: 'QuizApp - Créer et Passer des Tests',
      description: 'Plateforme moderne pour créer et passer des tests éducatifs. Créez des tests engageants et vérifiez les connaissances.'
    },
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
      createTitle: 'Créer un Test',
      editTitle: 'Modifier le Test',
      basicSettings: 'Paramètres de Base',
      title: 'Titre du Test',
      titlePlaceholder: 'Entrez le titre du test',
      description: 'Description',
      descriptionPlaceholder: 'Description du test',
      tags: 'Tags',
      tagsPlaceholder: 'mathématiques, algèbre, équations',
      tagsHelp: 'Entrez les tags séparés par des virgules pour catégoriser le test',
      image: 'Image',
      timeSettings: 'Paramètres de Temps',
      deadline: 'Date limite',
      timeLimit: 'Limite de temps (minutes)',
      timeLimitPlaceholder: '60',
      timeLimitHelp: 'Temps autorisé pour compléter le test',
      randomizationSettings: 'Paramètres de Randomisation',
      randomizeQuestions: 'Randomiser l\'ordre des questions',
      randomizeAnswers: 'Randomiser l\'ordre des réponses',
      difficultyDistribution: 'Distribution de Difficulté',
      totalPercentage: 'Pourcentage Total',
      resetDistribution: 'Réinitialiser la Distribution',
      questionBank: 'Banque de Questions',
      addQuestion: 'Ajouter une Question',
      filterByDifficulty: 'Filtrer par difficulté',
      searchQuestions: 'Rechercher des questions',
      selectedQuestions: 'Questions sélectionnées: {count}',
      assignToSection: 'Assigner à la section',
      assign: 'Assigner',
      sections: 'Sections',
      addSection: 'Ajouter une Section',
      editSection: 'Modifier la Section',
      questions: 'questions',
      sectionTitle: 'Titre de Section',
      sectionTitlePlaceholder: 'Entrez le titre de la section',
      sectionDescription: 'Description de Section',
      sectionDescriptionPlaceholder: 'Description de la section',
      sectionQuestionCount: 'Nombre de Questions',
      sectionQuestionCountPlaceholder: '10',
      allDifficulties: 'Toutes les difficultés',
      actions: {
        cancel: 'Annuler',
        save: 'Sauvegarder',
        apply: 'Appliquer',
        delete: 'Supprimer',
        preview: 'Aperçu'
      },
      errors: {
        titleRequired: 'Le titre du test est requis',
        fileRequired: 'Veuillez sélectionner un fichier à importer',
        invalidFileType: 'Type de fichier invalide. Veuillez sélectionner un fichier JSON'
      },
      importTest: 'Importer un Test',
      importTestDescription: 'Importez un test depuis un fichier JSON ou collez la structure JSON',
      importJson: 'JSON du Test',
      importJsonPlaceholder: 'Collez la structure JSON du test...',
      importText: 'Texte',
      importFile: 'Fichier',
      selectFile: 'Sélectionner un Fichier',
      selectedFile: 'Fichier Sélectionné'
    },
    pass: {
      loading: 'Chargement du test...',
      restoring: 'Restauration du progrès...',
      error: 'Erreur lors du chargement du test',
      retry: 'Réessayer',
      backToSearch: 'Retour à la recherche',
      exit: 'Quitter',
      exitConfirmation: 'Êtes-vous sûr de vouloir quitter? Tout le progrès sera perdu.',
      noQuestion: 'Question non trouvée',
      previous: 'Précédent',
      next: 'Suivant',
      finish: 'Terminer le test',
      questionProgress: 'Question {current} sur {total}',
      answered: 'répondu',
      time: 'temps',
      testNotFound: 'Test non trouvé',
      instructions: 'Instructions',
      instruction1: 'Lisez attentivement les questions',
      instruction1Desc: 'Assurez-vous de comprendre la question avant de choisir une réponse',
      instruction2: 'Surveillez votre temps',
      instruction2Desc: 'Vous avez un temps limité pour compléter le test',
      instruction3: 'Le progrès est sauvegardé automatiquement',
      instruction3Desc: 'Vos réponses sont sauvegardées toutes les 5 minutes'
    },
    result: {
      title: 'Résultats du Test',
      loading: 'Chargement des résultats...',
      error: 'Erreur lors du chargement des résultats',
      retry: 'Réessayer',
      notFound: 'Résultats du test non trouvés',
      loadError: 'Impossible de charger les résultats',
      testLoadError: 'Impossible de charger les données du test',
      percentage: 'Pourcentage de complétion',
      score: 'Score',
      timeSpent: 'Temps passé',
      passed: 'Test réussi!',
      failed: 'Test échoué',
      congratulations: 'Félicitations! Vous avez réussi le test avec succès.',
      notEnoughPoints: 'Malheureusement, vous n\'avez pas obtenu assez de points pour réussir le test.',
      detailedAnswers: 'Réponses détaillées',
      findOtherTests: 'Trouver d\'autres tests',
      myTests: 'Mes tests',
      totalScore: 'Score total',
      status: 'Statut',
      scoreBreakdown: 'Répartition du score',
      overallProgress: 'Progrès global',
      byDifficulty: 'Par difficulté',
      timeAnalysis: 'Analyse du temps',
      completionTime: 'Temps de complétion',
      averageTimePerQuestion: 'Temps moyen par question',
      completedAt: 'Terminé à',
      timeLimit: 'Limite de temps',
      question: 'Question',
      correct: 'Correct',
      incorrect: 'Incorrect',
      selectedAnswers: 'Réponses sélectionnées',
      retakeTest: 'Repasser le test',
      shareResult: 'Partager le résultat',
      downloadCertificate: 'Télécharger le certificat'
    },
    card: {
      questions: 'questions',
      minutes: 'minutes',
      yourResult: 'Votre résultat',
      completedAt: 'Terminé à',
      totalPoints: 'Points totaux',
      estimatedTime: 'Temps estimé',
      passed: 'Réussi',
      failed: 'Échoué',
      attempts: 'tentatives',
      viewResult: 'Voir le résultat',
      retake: 'Repasser',
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
      name: 'Bulygin Nikita',
      contacts: 'Contacts de l\'Auteur',
      contactsDescription: 'Contactez-moi de la manière la plus pratique',
      copy: 'Copier'
    }
  },
  auth: {
    signIn: 'Se connecter',
    signOut: 'Se déconnecter',
    profile: 'Profil',
    myProfile: 'Mon Profil',
    userProfile: 'Profil Utilisateur',
    notAuthenticated: 'Authentification requise',
    notAuthenticatedDescription: 'Veuillez vous connecter pour continuer',
    userNotFound: 'Utilisateur non trouvé',
    userNotFoundDescription: 'L\'utilisateur avec l\'ID spécifié n\'existe pas'
  },
  user: {
    profile: {
      title: 'Profil',
      information: 'Informations du Profil',
      statistics: 'Statistiques',
      actions: 'Actions',
      editProfile: 'Modifier le Profil',
      totalQuizzes: 'Total des Quiz',
      completedQuizzes: 'Terminés',
      averageScore: 'Score Moyen',
      registeredAt: 'Inscrit',
      noName: 'Sans Nom'
    }
  }
} 