export default {
  hello: 'Ciao Mondo',
  language: {
    selectTitle: 'Selezione Lingua',
    selectLanguage: 'Seleziona Lingua',
    selectDescription: 'Scegli la lingua dell\'interfaccia preferita'
  },
  home: {
    description: 'Crea test coinvolgenti e verifica le conoscenze con una piattaforma di apprendimento moderna',
    createTest: 'Crea Test',
    takeTest: 'Svolgi Test',
    create: {
      title: 'Crea',
      description: 'Crea facilmente test con vari tipi di domande e impostazioni'
    },
    share: {
      title: 'Condividi',
      description: 'Pubblica test e condividili con colleghi e studenti'
    },
    analyze: {
      title: 'Analizza',
      description: 'Ottieni statistiche dettagliate e analisi dei risultati'
    },
    seo: {
      title: 'QuizApp - Crea e Svolgi Test',
      description: 'Piattaforma moderna per creare e svolgere test educativi. Crea test coinvolgenti e verifica le conoscenze.'
    },
    timerExamples: 'Esempi di Timer',
    countdownDeadline: 'Conto alla rovescia alla scadenza',
    countdownTimeLimit: 'Conto alla rovescia con limite di tempo',
    currentTime: 'Ora corrente',
    expiredTimer: 'Timer scaduto',
    warningActive: 'Avviso attivo',
    noWarning: 'Nessun avviso',
    questionExamples: 'Esempi di Domande',
    singleChoiceQuestion: 'Domanda a scelta singola',
    multipleChoiceQuestion: 'Domanda a scelta multipla',
    questionWithAnswers: 'Domanda con risposte',
    questionWithImage: 'Domanda con immagine',
    testCreationExample: 'Esempio di Creazione Domande',
    createQuestionForm: 'Modulo di Creazione Domanda',
    jsonPreview: 'Anteprima JSON',
    copyJson: 'Copia JSON',
    questionsJson: 'JSON Domande'
  },
  question: {
    difficulties: {
      easy: 'Facile',
      medium: 'Medio',
      hard: 'Difficile'
    },
    edit: {
      title: 'Crea Domanda',
      editTitle: 'Modifica Domanda',
      questionTitle: 'Domanda',
      questionTitlePlaceholder: 'Inserisci domanda',
      description: 'Descrizione',
      descriptionPlaceholder: 'Descrizione aggiuntiva della domanda',
      difficulty: 'Difficoltà',
      selectDifficulty: 'Seleziona difficoltà',
      points: 'Punti',
      image: 'Immagine',
      addImageUrl: 'Aggiungi URL',
      answers: {
        title: 'Opzioni di Risposta',
        addAnswer: 'Aggiungi Risposta',
        addPrompt: 'Aggiungi opzioni di risposta',
        answerPlaceholder: 'Risposta',
        correctLabel: 'Corretta'
      },
      explanation: 'Spiegazione',
      explanationPlaceholder: 'Spiegazione della risposta corretta',
      imageUpload: {
        title: 'Carica Immagine',
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
    home: 'Home',
    findTests: 'Trova Test',
    myTests: 'I Miei Test'
  },
  myTests: {
    title: 'I Miei Test',
    description: 'Gestisci i tuoi test e visualizza i risultati',
    searchPlaceholder: 'Cerca per titolo...',
    filterByStatus: 'Filtra per stato',
    clearFilters: 'Cancella filtri',
    allStatuses: 'Tutti gli stati',
    status: {
      inProgress: 'In corso',
      completed: 'Completato',
      cancelled: 'Annullato'
    },
    noTests: 'Nessun test trovato',
    noTestsDescription: 'Non hai ancora completato nessun test. Trova test interessanti e inizia a svolgerli!',
    findTests: 'Trova test'
  },
  testSearch: {
    title: 'Ricerca Test',
    description: 'Trova test interessanti da svolgere',
    searchPlaceholder: 'Cerca per titolo, descrizione o tag...',
    filterByTags: 'Filtra per tag',
    filterByDifficulty: 'Filtra per difficoltà',
    allDifficulties: 'Tutte le difficoltà',
    search: 'Cerca',
    resultsCount: 'Trovati {found} di {count} test',
    sortBy: 'Ordina per',
    sort: {
      relevance: 'Per rilevanza',
      newest: 'Più recenti',
      oldest: 'Più vecchi',
      title: 'Per titolo'
    },
    noResults: 'Nessun test trovato',
    noResultsDescription: 'Prova a cambiare i parametri di ricerca o i filtri',
    clearFilters: 'Cancella filtri'
  },
  test: {
    edit: {
      createTitle: 'Crea Test',
      editTitle: 'Modifica Test',
      basicSettings: 'Impostazioni Base',
      title: 'Titolo Test',
      titlePlaceholder: 'Inserisci titolo test',
      description: 'Descrizione',
      descriptionPlaceholder: 'Descrizione del test',
      tags: 'Tag',
      tagsPlaceholder: 'matematica, algebra, equazioni',
      tagsHelp: 'Inserisci tag separati da virgole per categorizzare il test',
      image: 'Immagine',
      timeSettings: 'Impostazioni Tempo',
      deadline: 'Scadenza',
      timeLimit: 'Limite di Tempo (minuti)',
      timeLimitPlaceholder: '60',
      timeLimitHelp: 'Tempo consentito per completare il test',
      randomizationSettings: 'Impostazioni Randomizzazione',
      randomizeQuestions: 'Randomizza ordine domande',
      randomizeAnswers: 'Randomizza ordine risposte',
      difficultyDistribution: 'Distribuzione Difficoltà',
      totalPercentage: 'Percentuale Totale',
      resetDistribution: 'Ripristina Distribuzione',
      questionBank: 'Banca Domande',
      addQuestion: 'Aggiungi Domanda',
      filterByDifficulty: 'Filtra per difficoltà',
      searchQuestions: 'Cerca domande',
      selectedQuestions: 'Domande selezionate: {count}',
      assignToSection: 'Assegna alla sezione',
      assign: 'Assegna',
      sections: 'Sezioni',
      addSection: 'Aggiungi Sezione',
      editSection: 'Modifica Sezione',
      questions: 'domande',
      sectionTitle: 'Titolo Sezione',
      sectionTitlePlaceholder: 'Inserisci titolo sezione',
      sectionDescription: 'Descrizione Sezione',
      sectionDescriptionPlaceholder: 'Descrizione della sezione',
      sectionQuestionCount: 'Numero Domande',
      sectionQuestionCountPlaceholder: '10',
      allDifficulties: 'Tutte le difficoltà',
      actions: {
        cancel: 'Annulla',
        save: 'Salva',
        export: 'Esporta',
        import: 'Importa',
        apply: 'Applica',
        delete: 'Elimina',
        preview: 'Anteprima'
      },
      errors: {
        titleRequired: 'Il titolo del test è obbligatorio',
        fileRequired: 'Seleziona un file da importare',
        invalidFileType: 'Tipo di file non valido. Seleziona un file JSON'
      },
      importTest: 'Importa Test',
      importTestDescription: 'Importa test da file JSON o incolla struttura JSON',
      importJson: 'JSON Test',
      importJsonPlaceholder: 'Incolla struttura JSON del test...',
      importText: 'Testo',
      importFile: 'File',
      selectFile: 'Seleziona File',
      selectedFile: 'File Selezionato'
    },
    pass: {
      loading: 'Caricamento test...',
      restoring: 'Ripristino progresso...',
      error: 'Errore caricamento test',
      retry: 'Riprova',
      backToSearch: 'Torna alla ricerca',
      exit: 'Esci',
      exitConfirmation: 'Sei sicuro di voler uscire? Tutto il progresso andrà perso.',
      noQuestion: 'Domanda non trovata',
      previous: 'Precedente',
      next: 'Successivo',
      finish: 'Termina test',
      questionProgress: 'Domanda {current} di {total}',
      answered: 'risposte',
      time: 'tempo',
      testNotFound: 'Test non trovato',
      instructions: 'Istruzioni',
      instruction1: 'Leggi attentamente le domande',
      instruction1Desc: 'Assicurati di capire la domanda prima di scegliere una risposta',
      instruction2: 'Controlla il tuo tempo',
      instruction2Desc: 'Hai tempo limitato per completare il test',
      instruction3: 'Il progresso viene salvato automaticamente',
      instruction3Desc: 'Le tue risposte vengono salvate ogni 5 minuti'
    },
    result: {
      title: 'Risultati Test',
      loading: 'Caricamento risultati...',
      error: 'Errore caricamento risultati',
      retry: 'Riprova',
      notFound: 'Risultati test non trovati',
      loadError: 'Impossibile caricare i risultati',
      testLoadError: 'Impossibile caricare i dati del test',
      percentage: 'Percentuale completamento',
      score: 'Punteggio',
      timeSpent: 'Tempo impiegato',
      passed: 'Test superato!',
      failed: 'Test fallito',
      congratulations: 'Congratulazioni! Hai superato con successo il test.',
      notEnoughPoints: 'Sfortunatamente, non hai ottenuto abbastanza punti per superare il test.',
      detailedAnswers: 'Risposte dettagliate',
      findOtherTests: 'Trova altri test',
      myTests: 'I miei test',
      totalScore: 'Punteggio totale',
      status: 'Stato',
      scoreBreakdown: 'Analisi punteggio',
      overallProgress: 'Progresso generale',
      byDifficulty: 'Per difficoltà',
      timeAnalysis: 'Analisi tempo',
      completionTime: 'Tempo di completamento',
      averageTimePerQuestion: 'Tempo medio per domanda',
      completedAt: 'Completato alle',
      timeLimit: 'Limite di tempo',
      question: 'Domanda',
      correct: 'Corretta',
      incorrect: 'Incorretta',
      selectedAnswers: 'Risposte selezionate',
      retakeTest: 'Ripeti test',
      shareResult: 'Condividi risultato',
      downloadCertificate: 'Scarica certificato'
    },
    card: {
      questions: 'domande',
      minutes: 'minuti',
      yourResult: 'Il tuo risultato',
      completedAt: 'Completato alle',
      totalPoints: 'Punti totali',
      estimatedTime: 'Tempo stimato',
      passed: 'Superato',
      failed: 'Fallito',
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
    urlLabel: 'URL Immagine',
    urlPlaceholder: 'https://example.com/image.jpg',
    urlRequired: 'Inserisci URL immagine',
    invalidUrl: 'URL immagine non valido',
    urlError: 'Errore caricamento immagine da URL',
    addUrl: 'Aggiungi URL',
    or: 'o',
    fileLabel: 'Carica file',
    fileHelp: 'Formati supportati: JPG, PNG, GIF, WebP. Dimensione massima: 5MB',
    fileRequired: 'Seleziona file immagine',
    fileTooLarge: 'File troppo grande. Dimensione massima: {maxSize}',
    unsupportedFormat: 'Formato file non supportato',
    fileError: 'Errore elaborazione file',
    loadError: 'Errore caricamento immagine',
    processing: 'Elaborazione immagine...',
    error: 'Errore'
  },
  result: {
    title: 'Risultato Test',
    totalScore: 'Punteggio Totale',
    percentage: 'Percentuale',
    timeSpent: 'Tempo Impiegato',
    passed: 'Superato',
    failed: 'Fallito',
    status: 'Stato',
    scoreBreakdown: 'Analisi Punteggio',
    overallProgress: 'Progresso Generale',
    byDifficulty: 'Per Difficoltà',
    timeAnalysis: 'Analisi Tempo',
    completionTime: 'Tempo di Completamento',
    averageTimePerQuestion: 'Tempo Medio per Domanda',
    completedAt: 'Completato alle',
    timeLimit: 'Limite di Tempo',
    detailedAnswers: 'Risposte Dettagliate',
    question: 'Domanda',
    correct: 'Corretta',
    incorrect: 'Incorretta',
    selectedAnswers: 'Risposte Selezionate',
    retakeTest: 'Ripeti Test',
    shareResult: 'Condividi Risultato',
    downloadCertificate: 'Scarica Certificato'
  },
  leaderboard: {
    title: 'Classifica',
    subtitle: 'Risultati di tutti i partecipanti',
    sortBy: 'Ordina per',
    search: 'Cerca',
    totalParticipants: 'Totale Partecipanti',
    passedCount: 'Superati',
    averageScore: 'Punteggio Medio',
    averageTime: 'Tempo Medio'
  },
  timer: {
    untilDeadline: 'fino alla scadenza',
    remaining: 'rimanente',
    currentTime: 'ora corrente',
    timeRunningOut: 'Il tempo sta per scadere!',
    timeExpired: 'Tempo scaduto!',
    modes: {
      countdown: 'Conto alla rovescia',
      time: 'Ora Corrente'
    },
    types: {
      deadline: 'Scadenza',
      timeLimit: 'Limite di Tempo'
    },
    settings: {
      title: 'Impostazioni Timer',
      editTitle: 'Modifica Timer',
      mode: 'Modalità Timer',
      countdownType: 'Tipo Conto alla Rovescia',
      deadline: 'Scadenza',
      deadlineHelp: 'Ora entro cui il test deve essere consegnato',
      timeLimit: 'Limite di Tempo (minuti)',
      timeLimitHelp: 'Quanto tempo viene dato per completare il test',
      warnings: 'Avvisi',
      showWarning: 'Mostra avviso tempo',
      warningThreshold: 'Soglia avviso (secondi)',
      displaySettings: 'Impostazioni Visualizzazione',
      showProgress: 'Mostra barra progresso tempo',
      preview: 'Anteprima',
      timeModeInfo: 'Il timer mostrerà l\'ora corrente del giorno nel formato HH:MM:SS',
      actions: {
        cancel: 'Annulla',
        save: 'Salva',
        apply: 'Applica',
        delete: 'Elimina',
        preview: 'Anteprima'
      }
    }
  },
  common: {
    loading: 'Caricamento...',
    error: 'Errore',
    retry: 'Riprova'
  },
  layout: {
    author: {
      withLove: 'Con amore',
      name: 'Bulygin Nikita',
      contacts: 'Contatti Autore',
      contactsDescription: 'Contattami nel modo più conveniente',
      copy: 'Copia'
    }
  },
  auth: {
    signIn: 'Accedi',
    signOut: 'Esci',
    profile: 'Profilo',
    myProfile: 'Il Mio Profilo',
    userProfile: 'Profilo Utente',
    notAuthenticated: 'Autenticazione Richiesta',
    notAuthenticatedDescription: 'Accedi per continuare',
    userNotFound: 'Utente Non Trovato',
    userNotFoundDescription: 'L\'utente con l\'ID specificato non esiste'
  },
  user: {
    profile: {
      title: 'Profilo',
      information: 'Informazioni Profilo',
      statistics: 'Statistiche',
      actions: 'Azioni',
      editProfile: 'Modifica Profilo',
      totalQuizzes: 'Totale Quiz',
      completedQuizzes: 'Completati',
      averageScore: 'Punteggio Medio',
      registeredAt: 'Registrato',
      noName: 'Nessun Nome'
    }
  }
} 