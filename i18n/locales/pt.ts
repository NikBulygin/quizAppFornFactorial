export default {
  hello: 'Olá mundo',
  language: {
    selectTitle: 'Seleção de idioma',
    selectLanguage: 'Selecionar idioma',
    selectDescription: 'Escolha o idioma preferido da interface'
  },
  home: {
    timerExamples: 'Exemplos de temporizadores',
    countdownDeadline: 'Contagem regressiva até o prazo',
    countdownTimeLimit: 'Contagem regressiva com limite de tempo',
    currentTime: 'Hora atual',
    expiredTimer: 'Temporizador expirado',
    warningActive: 'Aviso ativo',
    noWarning: 'Sem aviso',
    questionExamples: 'Exemplos de perguntas',
    singleChoiceQuestion: 'Pergunta de escolha única',
    multipleChoiceQuestion: 'Pergunta de múltipla escolha',
    questionWithAnswers: 'Pergunta com respostas',
    questionWithImage: 'Pergunta com imagem',
    testCreationExample: 'Exemplo de criação de perguntas',
    createQuestionForm: 'Formulário de criação de pergunta',
    jsonPreview: 'Visualização JSON',
    copyJson: 'Copiar JSON',
    questionsJson: 'JSON das perguntas'
  },
  timer: {
    untilDeadline: 'até o prazo',
    remaining: 'restante',
    currentTime: 'hora atual',
    timeRunningOut: 'O tempo está acabando!',
    timeExpired: 'Tempo expirado!',
    modes: {
      countdown: 'Contagem regressiva',
      time: 'Hora atual'
    },
    types: {
      deadline: 'Prazo',
      timeLimit: 'Limite de tempo'
    },
    settings: {
      title: 'Configurações do temporizador',
      editTitle: 'Editar temporizador',
      mode: 'Modo do temporizador',
      countdownType: 'Tipo de contagem regressiva',
      deadline: 'Prazo',
      deadlineHelp: 'Tempo ATÉ o qual o teste deve ser entregue',
      timeLimit: 'Tempo de execução (minutos)',
      timeLimitHelp: 'Quanto tempo é dado para completar o teste',
      warnings: 'Avisos',
      showWarning: 'Mostrar aviso de tempo',
      warningThreshold: 'Limite de aviso (segundos)',
      displaySettings: 'Configurações de exibição',
      showProgress: 'Mostrar barra de progresso do tempo',
      preview: 'Visualização',
      timeModeInfo: 'O temporizador mostrará a hora atual do dia no formato HH:MM:SS',
      actions: {
        cancel: 'Cancelar',
        save: 'Salvar',
        apply: 'Aplicar',
        delete: 'Excluir',
        preview: 'Visualização'
      }
    }
  },
  question: {
    difficulties: {
      easy: 'Fácil',
      medium: 'Médio',
      hard: 'Difícil'
    },
    edit: {
      title: 'Criar pergunta',
      editTitle: 'Editar pergunta',
      questionTitle: 'Pergunta',
      questionTitlePlaceholder: 'Digite a pergunta',
      description: 'Descrição',
      descriptionPlaceholder: 'Descrição adicional da pergunta',
      difficulty: 'Dificuldade',
      selectDifficulty: 'Selecionar dificuldade',
      points: 'Pontos',
      image: 'Imagem',
      addImageUrl: 'Adicionar URL',
      answers: {
        title: 'Opções de resposta',
        addAnswer: 'Adicionar resposta',
        addPrompt: 'Adicione opções de resposta',
        answerPlaceholder: 'Resposta',
        correctLabel: 'Correta'
      },
      explanation: 'Explicação',
      explanationPlaceholder: 'Explicação da resposta correta',
      imageUpload: {
        title: 'Fazer upload de imagem',
        or: 'ou',
        cancel: 'Cancelar',
        apply: 'Aplicar'
      },
      actions: {
        cancel: 'Cancelar',
        save: 'Salvar',
        create: 'Criar',
        apply: 'Aplicar',
        delete: 'Excluir',
        preview: 'Visualização'
      }
    },
    display: {
      explanation: 'Explicação',
      points: 'pontos'
    }
  },
  navigation: {
    title: 'Navegação do Teste',
    sections: 'Seções',
    questions: 'Perguntas',
    progress: 'Progresso',
    finishTest: 'Finalizar Teste',
    finishTestEarly: 'Finalizar Teste Antes',
    finish: 'Finalizar',
    cancel: 'Cancelar',
    back: 'Voltar',
    confirmation: {
      title: 'Confirmar Finalização do Teste',
      description: 'Tem certeza de que deseja finalizar o teste antes? Perguntas não respondidas serão contadas como incorretas.'
    },
    status: {
      notAnswered: 'Não respondida',
      answered: 'Respondida',
      correct: 'Correta',
      incorrect: 'Incorreta'
    }
  },
  test: {
    edit: {
      createTitle: 'Criar teste',
      editTitle: 'Editar teste',
      basicSettings: 'Configurações básicas',
      title: 'Título do teste',
      titlePlaceholder: 'Digite o título do teste',
      description: 'Descrição',
      descriptionPlaceholder: 'Descrição do teste',
      image: 'Imagem',
      timeSettings: 'Configurações de tempo',
      deadline: 'Prazo',
      timeLimit: 'Limite de tempo (minutos)',
      timeLimitPlaceholder: '60',
      timeLimitHelp: 'Tempo permitido para completar o teste',
      randomizationSettings: 'Configurações de randomização',
      randomizeQuestions: 'Randomizar ordem das perguntas',
      randomizeAnswers: 'Randomizar ordem das respostas',
      difficultyDistribution: 'Distribuição de dificuldade',
      totalPercentage: 'Percentual total',
      resetDistribution: 'Redefinir distribuição',
      questionBank: 'Banco de perguntas',
      addQuestion: 'Adicionar pergunta',
      filterByDifficulty: 'Filtrar por dificuldade',
      searchQuestions: 'Pesquisar perguntas',
      selectedQuestions: 'Perguntas selecionadas: {count}',
      assignToSection: 'Atribuir à seção',
      assign: 'Atribuir',
      sections: 'Seções',
      addSection: 'Adicionar seção',
      questions: 'perguntas',
      sectionTitle: 'Título da seção',
      sectionTitlePlaceholder: 'Digite o título da seção',
      sectionDescription: 'Descrição da seção',
      sectionDescriptionPlaceholder: 'Descrição da seção',
      allDifficulties: 'Todas as dificuldades',
      actions: {
        cancel: 'Cancelar',
        save: 'Salvar',
        apply: 'Aplicar',
        delete: 'Excluir',
        preview: 'Visualização'
      },
      errors: {
        titleRequired: 'O título do teste é obrigatório'
      }
    },
    pass: {
      exit: 'Sair',
      noQuestion: 'Pergunta não encontrada',
      previous: 'Anterior',
      next: 'Próxima',
      finish: 'Finalizar',
      questionProgress: '{current} de {total}'
    },
    card: {
      questions: 'perguntas',
      minutes: 'minutos',
      yourResult: 'Seu resultado',
      completedAt: 'Concluído em',
      totalPoints: 'Pontos totais',
      estimatedTime: 'Tempo estimado',
      passed: 'Aprovado',
      failed: 'Reprovado',
      attempts: 'tentativas',
      viewResult: 'Ver resultado',
      retake: 'Refazer',
      start: 'Iniciar',
      expired: 'Expirado',
      today: 'Hoje',
      tomorrow: 'Amanhã',
      inDays: 'em {days} dias'
    }
  },
  imageUpload: {
    urlLabel: 'URL da imagem',
    urlPlaceholder: 'https://example.com/image.jpg',
    urlRequired: 'Digite a URL da imagem',
    invalidUrl: 'URL da imagem inválida',
    urlError: 'Erro ao carregar imagem da URL',
    addUrl: 'Adicionar URL',
    or: 'ou',
    fileLabel: 'Fazer upload de arquivo',
    fileHelp: 'Formatos suportados: JPG, PNG, GIF, WebP. Tamanho máximo: 5MB',
    fileRequired: 'Selecione arquivo de imagem',
    fileTooLarge: 'Arquivo muito grande. Tamanho máximo: {maxSize}',
    unsupportedFormat: 'Formato de arquivo não suportado',
    fileError: 'Erro ao processar arquivo',
    loadError: 'Erro ao carregar imagem',
    processing: 'Processando imagem...',
    error: 'Erro'
  },
  result: {
    title: 'Resultado do teste',
    totalScore: 'Pontuação total',
    percentage: 'Porcentagem',
    timeSpent: 'Tempo gasto',
    passed: 'Aprovado',
    failed: 'Reprovado',
    status: 'Status',
    scoreBreakdown: 'Detalhamento da pontuação',
    overallProgress: 'Progresso geral',
    byDifficulty: 'Por dificuldade',
    timeAnalysis: 'Análise do tempo',
    completionTime: 'Tempo de conclusão',
    averageTimePerQuestion: 'Tempo médio por pergunta',
    completedAt: 'Concluído em',
    timeLimit: 'Limite de tempo',
    detailedAnswers: 'Respostas detalhadas',
    question: 'Pergunta',
    correct: 'Correta',
    incorrect: 'Incorreta',
    selectedAnswers: 'Respostas selecionadas',
    retakeTest: 'Refazer teste',
    shareResult: 'Compartilhar resultado',
    downloadCertificate: 'Baixar certificado'
  },
  leaderboard: {
    title: 'Tabela de classificação',
    subtitle: 'Resultados de todos os participantes',
    sortBy: 'Ordenar por',
    search: 'Pesquisar',
    totalParticipants: 'Total de participantes',
    passedCount: 'Aprovados',
    averageScore: 'Pontuação média',
    averageTime: 'Tempo médio'
  },
  common: {
    loading: 'Carregando...',
    error: 'Erro',
    retry: 'Tentar novamente'
  },
  layout: {
    author: {
      withLove: 'Com amor',
      contacts: 'Contatos'
    }
  }
} 