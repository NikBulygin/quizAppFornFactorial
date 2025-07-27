export default {
  hello: 'Hallo Welt',
  language: {
    selectTitle: 'Sprache auswählen',
    selectLanguage: 'Sprache wählen',
    selectDescription: 'Wählen Sie die bevorzugte Sprache der Benutzeroberfläche'
  },
  home: {
    description: 'Erstellen Sie fesselnde Tests und überprüfen Sie Wissen mit einer modernen Lernplattform',
    createTest: 'Test erstellen',
    takeTest: 'Test machen',
    create: {
      title: 'Erstellen',
      description: 'Erstellen Sie einfach Tests mit verschiedenen Fragetypen und Einstellungen'
    },
    share: {
      title: 'Teilen',
      description: 'Veröffentlichen Sie Tests und teilen Sie sie mit Kollegen und Studenten'
    },
    analyze: {
      title: 'Analysieren',
      description: 'Erhalten Sie detaillierte Statistiken und Analysen der Ergebnisse'
    },
    seo: {
      title: 'QuizApp - Tests erstellen und machen',
      description: 'Moderne Plattform zum Erstellen und Durchführen von Bildungstests. Erstellen Sie fesselnde Tests und überprüfen Sie Wissen.'
    },
    timerExamples: 'Timer-Beispiele',
    countdownDeadline: 'Countdown bis zur Deadline',
    countdownTimeLimit: 'Countdown mit Zeitlimit',
    currentTime: 'Aktuelle Zeit',
    expiredTimer: 'Abgelaufener Timer',
    warningActive: 'Aktive Warnung',
    noWarning: 'Keine Warnung',
    questionExamples: 'Fragenbeispiele',
    singleChoiceQuestion: 'Einzelauswahl-Frage',
    multipleChoiceQuestion: 'Mehrfachauswahl-Frage',
    questionWithAnswers: 'Frage mit Antworten',
    questionWithImage: 'Frage mit Bild',
    testCreationExample: 'Beispiel für Fragenerstellung',
    createQuestionForm: 'Fragen-Erstellungsformular',
    jsonPreview: 'JSON-Vorschau',
    copyJson: 'JSON kopieren',
    questionsJson: 'Fragen-JSON'
  },
  timer: {
    untilDeadline: 'bis zur Deadline',
    remaining: 'verbleibend',
    currentTime: 'aktuelle Zeit',
    timeRunningOut: 'Zeit läuft ab!',
    timeExpired: 'Zeit abgelaufen!',
    modes: {
      countdown: 'Countdown',
      time: 'Aktuelle Zeit'
    },
    types: {
      deadline: 'Deadline',
      timeLimit: 'Zeitlimit'
    },
    settings: {
      title: 'Timer-Einstellungen',
      editTitle: 'Timer bearbeiten',
      mode: 'Timer-Modus',
      countdownType: 'Countdown-Typ',
      deadline: 'Deadline',
      deadlineHelp: 'Zeit BIS zu der der Test abgegeben werden muss',
      timeLimit: 'Ausführungszeit (Minuten)',
      timeLimitHelp: 'Wie viel Zeit wird zum Abschließen des Tests gegeben',
      warnings: 'Warnungen',
      showWarning: 'Zeitwarnung anzeigen',
      warningThreshold: 'Warnschwelle (Sekunden)',
      displaySettings: 'Anzeigeeinstellungen',
      showProgress: 'Zeit-Fortschrittsbalken anzeigen',
      preview: 'Vorschau',
      timeModeInfo: 'Der Timer zeigt die aktuelle Tageszeit im Format HH:MM:SS an',
      actions: {
        cancel: 'Abbrechen',
        save: 'Speichern',
        apply: 'Anwenden',
        delete: 'Löschen',
        preview: 'Vorschau'
      }
    }
  },
  question: {
    difficulties: {
      easy: 'Einfach',
      medium: 'Mittel',
      hard: 'Schwer'
    },
    edit: {
      title: 'Frage erstellen',
      editTitle: 'Frage bearbeiten',
      questionTitle: 'Frage',
      questionTitlePlaceholder: 'Frage eingeben',
      description: 'Beschreibung',
      descriptionPlaceholder: 'Zusätzliche Fragenbeschreibung',
      difficulty: 'Schwierigkeit',
      selectDifficulty: 'Schwierigkeit auswählen',
      points: 'Punkte',
      image: 'Bild',
      addImageUrl: 'URL hinzufügen',
      answers: {
        title: 'Antwortoptionen',
        addAnswer: 'Antwort hinzufügen',
        addPrompt: 'Antwortoptionen hinzufügen',
        answerPlaceholder: 'Antwort',
        correctLabel: 'Richtig'
      },
      explanation: 'Erklärung',
      explanationPlaceholder: 'Erklärung der richtigen Antwort',
      imageUpload: {
        title: 'Bild hochladen',
        or: 'oder',
        cancel: 'Abbrechen',
        apply: 'Anwenden'
      },
      actions: {
        cancel: 'Abbrechen',
        save: 'Speichern',
        create: 'Erstellen',
        apply: 'Anwenden',
        delete: 'Löschen',
        preview: 'Vorschau'
      }
    },
    display: {
      explanation: 'Erklärung',
      points: 'Punkte'
    }
  },
  navigation: {
    title: 'Test-Navigation',
    sections: 'Abschnitte',
    questions: 'Fragen',
    progress: 'Fortschritt',
    finishTest: 'Test Beenden',
    finishTestEarly: 'Test Früher Beenden',
    finish: 'Beenden',
    cancel: 'Abbrechen',
    back: 'Zurück',
    confirmation: {
      title: 'Test-Beendigung Bestätigen',
      description: 'Sind Sie sicher, dass Sie den Test früher beenden möchten? Unbeantwortete Fragen werden als falsch gewertet.'
    },
    status: {
      notAnswered: 'Nicht beantwortet',
      answered: 'Beantwortet',
      correct: 'Richtig',
      incorrect: 'Falsch'
    }
  },
  test: {
    edit: {
      createTitle: 'Test erstellen',
      editTitle: 'Test bearbeiten',
      basicSettings: 'Grundeinstellungen',
      title: 'Test-Titel',
      titlePlaceholder: 'Test-Titel eingeben',
      description: 'Beschreibung',
      descriptionPlaceholder: 'Test-Beschreibung',
      tags: 'Tags',
      tagsPlaceholder: 'Mathematik, Algebra, Gleichungen',
      tagsHelp: 'Geben Sie Tags durch Kommas getrennt ein, um den Test zu kategorisieren',
      image: 'Bild',
      timeSettings: 'Zeiteinstellungen',
      deadline: 'Frist',
      timeLimit: 'Zeitlimit (Minuten)',
      timeLimitPlaceholder: '60',
      timeLimitHelp: 'Zeit, die zum Abschließen des Tests erlaubt ist',
      randomizationSettings: 'Randomisierungseinstellungen',
      randomizeQuestions: 'Fragenreihenfolge randomisieren',
      randomizeAnswers: 'Antwortreihenfolge randomisieren',
      difficultyDistribution: 'Schwierigkeitsverteilung',
      totalPercentage: 'Gesamtprozentsatz',
      resetDistribution: 'Verteilung zurücksetzen',
      questionBank: 'Fragenbank',
      addQuestion: 'Frage hinzufügen',
      filterByDifficulty: 'Nach Schwierigkeit filtern',
      searchQuestions: 'Fragen suchen',
      selectedQuestions: 'Ausgewählte Fragen: {count}',
      assignToSection: 'Abschnitt zuweisen',
      assign: 'Zuweisen',
      sections: 'Abschnitte',
      addSection: 'Abschnitt hinzufügen',
      editSection: 'Abschnitt bearbeiten',
      questions: 'Fragen',
      sectionTitle: 'Abschnittstitel',
      sectionTitlePlaceholder: 'Abschnittstitel eingeben',
      sectionDescription: 'Abschnittsbeschreibung',
      sectionDescriptionPlaceholder: 'Abschnittsbeschreibung',
      sectionQuestionCount: 'Anzahl der Fragen',
      sectionQuestionCountPlaceholder: '10',
      allDifficulties: 'Alle Schwierigkeiten',
      actions: {
        cancel: 'Abbrechen',
        save: 'Speichern',
        apply: 'Anwenden',
        delete: 'Löschen',
        preview: 'Vorschau'
      },
      errors: {
        titleRequired: 'Test-Titel ist erforderlich',
        fileRequired: 'Bitte wählen Sie eine Datei zum Importieren aus',
        invalidFileType: 'Ungültiger Dateityp. Bitte wählen Sie eine JSON-Datei'
      },
      importTest: 'Test importieren',
      importTestDescription: 'Importieren Sie einen Test aus einer JSON-Datei oder fügen Sie die JSON-Struktur ein',
      importJson: 'Test JSON',
      importJsonPlaceholder: 'JSON-Struktur des Tests einfügen...',
      importText: 'Text',
      importFile: 'Datei',
      selectFile: 'Datei auswählen',
      selectedFile: 'Ausgewählte Datei'
    },
    pass: {
      loading: 'Test wird geladen...',
      restoring: 'Fortschritt wird wiederhergestellt...',
      error: 'Fehler beim Laden des Tests',
      retry: 'Erneut versuchen',
      backToSearch: 'Zurück zur Suche',
      exit: 'Beenden',
      exitConfirmation: 'Sind Sie sicher, dass Sie beenden möchten? Der gesamte Fortschritt geht verloren.',
      noQuestion: 'Frage nicht gefunden',
      previous: 'Zurück',
      next: 'Weiter',
      finish: 'Test beenden',
      questionProgress: 'Frage {current} von {total}',
      answered: 'beantwortet',
      time: 'Zeit',
      testNotFound: 'Test nicht gefunden',
      instructions: 'Anweisungen',
      instruction1: 'Lesen Sie die Fragen sorgfältig',
      instruction1Desc: 'Stellen Sie sicher, dass Sie die Frage verstehen, bevor Sie eine Antwort wählen',
      instruction2: 'Achten Sie auf Ihre Zeit',
      instruction2Desc: 'Sie haben begrenzte Zeit, um den Test abzuschließen',
      instruction3: 'Der Fortschritt wird automatisch gespeichert',
      instruction3Desc: 'Ihre Antworten werden alle 5 Minuten gespeichert'
    },
    result: {
      title: 'Testergebnisse',
      loading: 'Ergebnisse werden geladen...',
      error: 'Fehler beim Laden der Ergebnisse',
      retry: 'Erneut versuchen',
      notFound: 'Testergebnisse nicht gefunden',
      loadError: 'Ergebnisse konnten nicht geladen werden',
      testLoadError: 'Testdaten konnten nicht geladen werden',
      percentage: 'Abschlussprozentsatz',
      score: 'Punktzahl',
      timeSpent: 'Verbrachte Zeit',
      passed: 'Test bestanden!',
      failed: 'Test nicht bestanden',
      congratulations: 'Glückwunsch! Sie haben den Test erfolgreich bestanden.',
      notEnoughPoints: 'Leider haben Sie nicht genügend Punkte gesammelt, um den Test zu bestehen.',
      detailedAnswers: 'Detaillierte Antworten',
      findOtherTests: 'Andere Tests finden',
      myTests: 'Meine Tests',
      totalScore: 'Gesamtpunktzahl',
      status: 'Status',
      scoreBreakdown: 'Punktzahlaufschlüsselung',
      overallProgress: 'Gesamtfortschritt',
      byDifficulty: 'Nach Schwierigkeit',
      timeAnalysis: 'Zeitanalyse',
      completionTime: 'Abschlusszeit',
      averageTimePerQuestion: 'Durchschnittliche Zeit pro Frage',
      completedAt: 'Abgeschlossen um',
      timeLimit: 'Zeitlimit',
      question: 'Frage',
      correct: 'Richtig',
      incorrect: 'Falsch',
      selectedAnswers: 'Ausgewählte Antworten',
      retakeTest: 'Test wiederholen',
      shareResult: 'Ergebnis teilen',
      downloadCertificate: 'Zertifikat herunterladen'
    },
    card: {
      questions: 'Fragen',
      minutes: 'Minuten',
      yourResult: 'Ihr Ergebnis',
      completedAt: 'Abgeschlossen um',
      totalPoints: 'Gesamtpunkte',
      estimatedTime: 'Geschätzte Zeit',
      passed: 'Bestanden',
      failed: 'Nicht bestanden',
      attempts: 'Versuche',
      viewResult: 'Ergebnis anzeigen',
      retake: 'Wiederholen',
      start: 'Starten',
      expired: 'Abgelaufen',
      today: 'Heute',
      tomorrow: 'Morgen',
      inDays: 'in {days} Tagen'
    }
  },
  imageUpload: {
    urlLabel: 'Bild-URL',
    urlPlaceholder: 'https://example.com/image.jpg',
    urlRequired: 'Bild-URL eingeben',
    invalidUrl: 'Ungültige Bild-URL',
    urlError: 'Fehler beim Laden des Bildes von URL',
    addUrl: 'URL hinzufügen',
    or: 'oder',
    fileLabel: 'Datei hochladen',
    fileHelp: 'Unterstützte Formate: JPG, PNG, GIF, WebP. Maximale Größe: 5MB',
    fileRequired: 'Bilddatei auswählen',
    fileTooLarge: 'Datei zu groß. Maximale Größe: {maxSize}',
    unsupportedFormat: 'Nicht unterstütztes Dateiformat',
    fileError: 'Fehler bei der Dateiverarbeitung',
    loadError: 'Fehler beim Laden des Bildes',
    processing: 'Bild wird verarbeitet...',
    error: 'Fehler'
  },
  result: {
    title: 'Testergebnis',
    totalScore: 'Gesamtpunktzahl',
    percentage: 'Prozentsatz',
    timeSpent: 'Verbrachte Zeit',
    passed: 'Bestanden',
    failed: 'Nicht bestanden',
    status: 'Status',
    scoreBreakdown: 'Punktzahl-Aufschlüsselung',
    overallProgress: 'Gesamtfortschritt',
    byDifficulty: 'Nach Schwierigkeit',
    timeAnalysis: 'Zeitanalyse',
    completionTime: 'Abschlusszeit',
    averageTimePerQuestion: 'Durchschnittliche Zeit pro Frage',
    completedAt: 'Abgeschlossen am',
    timeLimit: 'Zeitlimit',
    detailedAnswers: 'Detaillierte Antworten',
    question: 'Frage',
    correct: 'Richtig',
    incorrect: 'Falsch',
    selectedAnswers: 'Ausgewählte Antworten',
    retakeTest: 'Test wiederholen',
    shareResult: 'Ergebnis teilen',
    downloadCertificate: 'Zertifikat herunterladen'
  },
  leaderboard: {
    title: 'Bestenliste',
    subtitle: 'Ergebnisse aller Teilnehmer',
    sortBy: 'Sortieren nach',
    search: 'Suchen',
    totalParticipants: 'Gesamte Teilnehmer',
    passedCount: 'Bestanden',
    averageScore: 'Durchschnittspunktzahl',
    averageTime: 'Durchschnittszeit'
  },
  common: {
    loading: 'Laden...',
    error: 'Fehler',
    retry: 'Wiederholen'
  },
  layout: {
    author: {
      withLove: 'Mit Liebe',
      name: 'Bulygin Nikita',
      contacts: 'Autor-Kontakte',
      contactsDescription: 'Kontaktieren Sie mich auf bequeme Weise',
      copy: 'Kopieren'
    }
  },
  auth: {
    signIn: 'Anmelden',
    signOut: 'Abmelden',
    profile: 'Profil',
    myProfile: 'Mein Profil',
    userProfile: 'Benutzerprofil',
    notAuthenticated: 'Authentifizierung erforderlich',
    notAuthenticatedDescription: 'Bitte melden Sie sich an, um fortzufahren',
    userNotFound: 'Benutzer nicht gefunden',
    userNotFoundDescription: 'Benutzer mit der angegebenen ID existiert nicht'
  },
  user: {
    profile: {
      title: 'Profil',
      information: 'Profilinformationen',
      statistics: 'Statistiken',
      actions: 'Aktionen',
      editProfile: 'Profil bearbeiten',
      totalQuizzes: 'Gesamte Quiz',
      completedQuizzes: 'Abgeschlossen',
      averageScore: 'Durchschnittspunktzahl',
      registeredAt: 'Registriert',
      noName: 'Kein Name'
    }
  }
} 