export default {
  hello: 'Ciao mondo',
  language: {
    selectTitle: 'Selezione lingua',
    selectLanguage: 'Seleziona lingua',
    selectDescription: 'Scegli la lingua dell\'interfaccia preferita'
  },
  home: {
    timerExamples: 'Esempi di timer',
    countdownDeadline: 'Conto alla rovescia fino alla scadenza',
    countdownTimeLimit: 'Conto alla rovescia con limite di tempo',
    currentTime: 'Ora attuale',
    expiredTimer: 'Timer scaduto',
    warningActive: 'Avviso attivo',
    noWarning: 'Nessun avviso',
    questionExamples: 'Esempi di domande',
    singleChoiceQuestion: 'Domanda a scelta singola',
    multipleChoiceQuestion: 'Domanda a scelta multipla',
    questionWithAnswers: 'Domanda con risposte',
    questionWithImage: 'Domanda con immagine',
    testCreationExample: 'Esempio di creazione domande',
    createQuestionForm: 'Modulo di creazione domanda',
    jsonPreview: 'Anteprima JSON',
    copyJson: 'Copia JSON',
    questionsJson: 'JSON delle domande'
  },
  timer: {
    untilDeadline: 'fino alla scadenza',
    remaining: 'rimanente',
    currentTime: 'ora attuale',
    timeRunningOut: 'Il tempo sta per scadere!',
    timeExpired: 'Tempo scaduto!',
    modes: {
      countdown: 'Conto alla rovescia',
      time: 'Ora attuale'
    },
    types: {
      deadline: 'Scadenza',
      timeLimit: 'Limite di tempo'
    },
    settings: {
      title: 'Impostazioni timer',
      editTitle: 'Modifica timer',
      mode: 'Modalità timer',
      countdownType: 'Tipo di conto alla rovescia',
      deadline: 'Scadenza',
      deadlineHelp: 'Tempo FINO al quale il test deve essere consegnato',
      timeLimit: 'Tempo di esecuzione (minuti)',
      timeLimitHelp: 'Quanto tempo viene dato per completare il test',
      warnings: 'Avvisi',
      showWarning: 'Mostra avviso di tempo',
      warningThreshold: 'Soglia di avviso (secondi)',
      displaySettings: 'Impostazioni di visualizzazione',
      showProgress: 'Mostra barra di progresso del tempo',
      preview: 'Anteprima',
      timeModeInfo: 'Il timer mostrerà l\'ora attuale del giorno nel formato HH:MM:SS',
      actions: {
        cancel: 'Annulla',
        save: 'Salva',
        apply: 'Applica',
        delete: 'Elimina',
        preview: 'Anteprima'
      }
    }
  },
  question: {
    difficulties: {
      easy: 'Facile',
      medium: 'Medio',
      hard: 'Difficile'
    },
    edit: {
      title: 'Crea domanda',
      editTitle: 'Modifica domanda',
      questionTitle: 'Domanda',
      questionTitlePlaceholder: 'Inserisci la domanda',
      description: 'Descrizione',
      descriptionPlaceholder: 'Descrizione aggiuntiva della domanda',
      difficulty: 'Difficoltà',
      selectDifficulty: 'Seleziona difficoltà',
      points: 'Punti',
      image: 'Immagine',
      addImageUrl: 'Aggiungi URL',
      answers: {
        title: 'Opzioni di risposta',
        addAnswer: 'Aggiungi risposta',
        addPrompt: 'Aggiungi opzioni di risposta',
        answerPlaceholder: 'Risposta',
        correctLabel: 'Corretta'
      },
      explanation: 'Spiegazione',
      explanationPlaceholder: 'Spiegazione della risposta corretta',
      imageUpload: {
        title: 'Carica immagine',
        or: 'o',
        cancel: 'Annulla',
        apply: 'Applica'
      },
      actions: {
        cancel: 'Annulla',
        save: 'Salva',
        create: 'Crea',
        apply: 'Applica',
        delete: 'Elimina',
        preview: 'Anteprima'
      }
    },
    display: {
      explanation: 'Spiegazione',
      points: 'punti'
    }
  },
  navigation: {
    title: 'Navigazione del Test',
    sections: 'Sezioni',
    questions: 'Domande',
    progress: 'Progresso',
    finishTest: 'Termina Test',
    finishTestEarly: 'Termina Test Prima',
    finish: 'Termina',
    cancel: 'Annulla',
    back: 'Indietro',
    confirmation: {
      title: 'Conferma Fine Test',
      description: 'Sei sicuro di voler terminare il test prima? Le domande senza risposta saranno contate come sbagliate.'
    },
    status: {
      notAnswered: 'Non risposta',
      answered: 'Risposta',
      correct: 'Corretta',
      incorrect: 'Sbagliata'
    }
  },
  test: {
    edit: {
      createTitle: 'Crea test',
      editTitle: 'Modifica test',
      basicSettings: 'Impostazioni di base',
      title: 'Titolo del test',
      titlePlaceholder: 'Inserisci il titolo del test',
      description: 'Descrizione',
      descriptionPlaceholder: 'Descrizione del test',
      image: 'Immagine',
      timeSettings: 'Impostazioni tempo',
      deadline: 'Scadenza',
      timeLimit: 'Limite di tempo (minuti)',
      timeLimitPlaceholder: '60',
      timeLimitHelp: 'Tempo consentito per completare il test',
      randomizationSettings: 'Impostazioni randomizzazione',
      randomizeQuestions: 'Randomizza ordine domande',
      randomizeAnswers: 'Randomizza ordine risposte',
      difficultyDistribution: 'Distribuzione difficoltà',
      totalPercentage: 'Percentuale totale',
      resetDistribution: 'Ripristina distribuzione',
      questionBank: 'Banca domande',
      addQuestion: 'Aggiungi domanda',
      filterByDifficulty: 'Filtra per difficoltà',
      searchQuestions: 'Cerca domande',
      selectedQuestions: 'Domande selezionate: {count}',
      assignToSection: 'Assegna alla sezione',
      assign: 'Assegna',
      sections: 'Sezioni',
      addSection: 'Aggiungi sezione',
      questions: 'domande',
      sectionTitle: 'Titolo sezione',
      sectionTitlePlaceholder: 'Inserisci il titolo della sezione',
      sectionDescription: 'Descrizione sezione',
      sectionDescriptionPlaceholder: 'Descrizione della sezione',
      allDifficulties: 'Tutte le difficoltà',
      actions: {
        cancel: 'Annulla',
        save: 'Salva',
        apply: 'Applica',
        delete: 'Elimina',
        preview: 'Anteprima'
      },
      errors: {
        titleRequired: 'Il titolo del test è obbligatorio'
      }
    },
    pass: {
      exit: 'Esci',
      noQuestion: 'Domanda non trovata',
      previous: 'Precedente',
      next: 'Successiva',
      finish: 'Termina',
      questionProgress: '{current} di {total}'
    },
    card: {
      questions: 'domande',
      minutes: 'minuti',
      yourResult: 'Il tuo risultato',
      completedAt: 'Completato il',
      totalPoints: 'Punti totali',
      estimatedTime: 'Tempo stimato',
      passed: 'Superato',
      failed: 'Non superato',
      attempts: 'tentativi',
      viewResult: 'Visualizza risultato',
      retake: 'Ripeti',
      start: 'Inizia',
      expired: 'Scaduto',
      today: 'Oggi',
      tomorrow: 'Domani',
      inDays: 'tra {days} giorni'
    }
  },
  imageUpload: {
    urlLabel: 'URL immagine',
    urlPlaceholder: 'https://example.com/image.jpg',
    urlRequired: 'Inserisci URL dell\'immagine',
    invalidUrl: 'URL immagine non valido',
    urlError: 'Errore nel caricamento dell\'immagine da URL',
    addUrl: 'Aggiungi URL',
    or: 'o',
    fileLabel: 'Carica file',
    fileHelp: 'Formati supportati: JPG, PNG, GIF, WebP. Dimensione massima: 5MB',
    fileRequired: 'Seleziona file immagine',
    fileTooLarge: 'File troppo grande. Dimensione massima: {maxSize}',
    unsupportedFormat: 'Formato file non supportato',
    fileError: 'Errore nell\'elaborazione del file',
    loadError: 'Errore nel caricamento dell\'immagine',
    processing: 'Elaborazione immagine...',
    error: 'Errore'
  },
  result: {
    title: 'Risultato test',
    totalScore: 'Punteggio totale',
    percentage: 'Percentuale',
    timeSpent: 'Tempo impiegato',
    passed: 'Superato',
    failed: 'Non superato',
    status: 'Stato',
    scoreBreakdown: 'Ripartizione punteggio',
    overallProgress: 'Progresso generale',
    byDifficulty: 'Per difficoltà',
    timeAnalysis: 'Analisi tempo',
    completionTime: 'Tempo di completamento',
    averageTimePerQuestion: 'Tempo medio per domanda',
    completedAt: 'Completato il',
    timeLimit: 'Limite di tempo',
    detailedAnswers: 'Risposte dettagliate',
    question: 'Domanda',
    correct: 'Corretta',
    incorrect: 'Errata',
    selectedAnswers: 'Risposte selezionate',
    retakeTest: 'Ripeti test',
    shareResult: 'Condividi risultato',
    downloadCertificate: 'Scarica certificato'
  },
  leaderboard: {
    title: 'Classifica',
    subtitle: 'Risultati di tutti i partecipanti',
    sortBy: 'Ordina per',
    search: 'Cerca',
    totalParticipants: 'Totale partecipanti',
    passedCount: 'Superati',
    averageScore: 'Punteggio medio',
    averageTime: 'Tempo medio'
  },
  common: {
    loading: 'Caricamento...',
    error: 'Errore',
    retry: 'Riprova'
  },
  layout: {
    author: {
      withLove: 'Con amore',
      contacts: 'Contatti'
    }
  }
} 