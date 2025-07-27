export default {
  hello: 'Hallo Welt',
  language: {
    selectTitle: 'Sprache auswählen',
    selectLanguage: 'Sprache wählen',
    selectDescription: 'Wählen Sie die bevorzugte Sprache der Benutzeroberfläche'
  },
  home: {
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
      image: 'Bild',
      timeSettings: 'Zeiteinstellungen',
      deadline: 'Deadline',
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
      questions: 'Fragen',
      sectionTitle: 'Abschnitt-Titel',
      sectionTitlePlaceholder: 'Abschnitt-Titel eingeben',
      sectionDescription: 'Abschnitt-Beschreibung',
      sectionDescriptionPlaceholder: 'Abschnitt-Beschreibung',
      allDifficulties: 'Alle Schwierigkeiten',
      actions: {
        cancel: 'Abbrechen',
        save: 'Speichern',
        apply: 'Anwenden',
        delete: 'Löschen',
        preview: 'Vorschau'
      },
      errors: {
        titleRequired: 'Test-Titel ist erforderlich'
      }
    },
    pass: {
      exit: 'Beenden',
      noQuestion: 'Frage nicht gefunden',
      previous: 'Zurück',
      next: 'Weiter',
      finish: 'Beenden',
      questionProgress: '{current} von {total}'
    },
    card: {
      questions: 'Fragen',
      minutes: 'Minuten',
      yourResult: 'Ihr Ergebnis',
      completedAt: 'Abgeschlossen am',
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
      contacts: 'Kontakte'
    }
  }
} 