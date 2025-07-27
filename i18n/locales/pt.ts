export default {
  hello: 'Olá Mundo',
  language: {
    selectTitle: 'Seleção de Idioma',
    selectLanguage: 'Selecionar Idioma',
    selectDescription: 'Escolha o idioma da interface preferido'
  },
  home: {
    description: 'Crie testes envolventes e verifique conhecimentos com uma plataforma de aprendizado moderna',
    createTest: 'Criar Teste',
    takeTest: 'Fazer Teste',
    create: {
      title: 'Criar',
      description: 'Crie facilmente testes com vários tipos de perguntas e configurações'
    },
    share: {
      title: 'Compartilhar',
      description: 'Publique testes e compartilhe com colegas e estudantes'
    },
    analyze: {
      title: 'Analisar',
      description: 'Obtenha estatísticas detalhadas e análises dos resultados'
    },
    seo: {
      title: 'QuizApp - Criar e Fazer Testes',
      description: 'Plataforma moderna para criar e fazer testes educacionais. Crie testes envolventes e verifique conhecimentos.'
    },
    timerExamples: 'Exemplos de Timer',
    countdownDeadline: 'Contagem regressiva para o prazo',
    countdownTimeLimit: 'Contagem regressiva com limite de tempo',
    currentTime: 'Hora atual',
    expiredTimer: 'Timer expirado',
    warningActive: 'Aviso ativo',
    noWarning: 'Sem aviso',
    questionExamples: 'Exemplos de Perguntas',
    singleChoiceQuestion: 'Pergunta de escolha única',
    multipleChoiceQuestion: 'Pergunta de múltipla escolha',
    questionWithAnswers: 'Pergunta com respostas',
    questionWithImage: 'Pergunta com imagem',
    testCreationExample: 'Exemplo de Criação de Perguntas',
    createQuestionForm: 'Formulário de Criação de Pergunta',
    jsonPreview: 'Visualização JSON',
    copyJson: 'Copiar JSON',
    questionsJson: 'JSON das Perguntas'
  },
  question: {
    difficulties: {
      easy: 'Fácil',
      medium: 'Médio',
      hard: 'Difícil'
    },
    edit: {
      title: 'Criar Pergunta',
      editTitle: 'Editar Pergunta',
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
        title: 'Opções de Resposta',
        addAnswer: 'Adicionar Resposta',
        addPrompt: 'Adicione opções de resposta',
        answerPlaceholder: 'Resposta',
        correctLabel: 'Correta'
      },
      explanation: 'Explicação',
      explanationPlaceholder: 'Explicação da resposta correta',
      imageUpload: {
        title: 'Enviar Imagem',
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
        preview: 'Visualizar'
      }
    },
    display: {
      explanation: 'Explicação',
      points: 'pontos'
    }
  },
  navigation: {
    home: 'Início',
    findTests: 'Encontrar Testes',
    myTests: 'Meus Testes'
  },
  myTests: {
    title: 'Meus Testes',
    description: 'Gerencie seus testes e visualize resultados',
    searchPlaceholder: 'Pesquisar por título...',
    filterByStatus: 'Filtrar por status',
    clearFilters: 'Limpar filtros',
    allStatuses: 'Todos os status',
    status: {
      inProgress: 'Em andamento',
      completed: 'Concluído',
      cancelled: 'Cancelado'
    },
    noTests: 'Nenhum teste encontrado',
    noTestsDescription: 'Você ainda não tem testes concluídos. Encontre testes interessantes e comece a fazê-los!',
    findTests: 'Encontrar testes'
  },
  testSearch: {
    title: 'Pesquisa de Testes',
    description: 'Encontre testes interessantes para fazer',
    searchPlaceholder: 'Pesquisar por título, descrição ou tags...',
    filterByTags: 'Filtrar por tags',
    filterByDifficulty: 'Filtrar por dificuldade',
    allDifficulties: 'Todas as dificuldades',
    search: 'Pesquisar',
    resultsCount: 'Encontrados {found} de {count} testes',
    sortBy: 'Ordenar por',
    sort: {
      relevance: 'Por relevância',
      newest: 'Mais recentes',
      oldest: 'Mais antigos',
      title: 'Por título'
    },
    noResults: 'Nenhum teste encontrado',
    noResultsDescription: 'Tente alterar os parâmetros de pesquisa ou filtros',
    clearFilters: 'Limpar filtros'
  },
  test: {
    edit: {
      createTitle: 'Criar Teste',
      editTitle: 'Editar Teste',
      basicSettings: 'Configurações Básicas',
      title: 'Título do Teste',
      titlePlaceholder: 'Digite o título do teste',
      description: 'Descrição',
      descriptionPlaceholder: 'Descrição do teste',
      tags: 'Tags',
      tagsPlaceholder: 'matemática, álgebra, equações',
      tagsHelp: 'Digite tags separadas por vírgulas para categorizar o teste',
      image: 'Imagem',
      timeSettings: 'Configurações de Tempo',
      deadline: 'Prazo',
      timeLimit: 'Limite de Tempo (minutos)',
      timeLimitPlaceholder: '60',
      timeLimitHelp: 'Tempo permitido para completar o teste',
      randomizationSettings: 'Configurações de Randomização',
      randomizeQuestions: 'Randomizar ordem das perguntas',
      randomizeAnswers: 'Randomizar ordem das respostas',
      difficultyDistribution: 'Distribuição de Dificuldade',
      totalPercentage: 'Percentual Total',
      resetDistribution: 'Redefinir Distribuição',
      questionBank: 'Banco de Perguntas',
      addQuestion: 'Adicionar Pergunta',
      filterByDifficulty: 'Filtrar por dificuldade',
      searchQuestions: 'Pesquisar perguntas',
      selectedQuestions: 'Perguntas selecionadas: {count}',
      assignToSection: 'Atribuir à seção',
      assign: 'Atribuir',
      sections: 'Seções',
      addSection: 'Adicionar Seção',
      editSection: 'Editar Seção',
      questions: 'perguntas',
      sectionTitle: 'Título da Seção',
      sectionTitlePlaceholder: 'Digite o título da seção',
      sectionDescription: 'Descrição da Seção',
      sectionDescriptionPlaceholder: 'Descrição da seção',
      sectionQuestionCount: 'Número de Perguntas',
      sectionQuestionCountPlaceholder: '10',
      allDifficulties: 'Todas as dificuldades',
      actions: {
        cancel: 'Cancelar',
        save: 'Salvar',
        export: 'Exportar',
        import: 'Importar',
        apply: 'Aplicar',
        delete: 'Excluir',
        preview: 'Visualizar'
      },
      errors: {
        titleRequired: 'O título do teste é obrigatório',
        fileRequired: 'Selecione um arquivo para importar',
        invalidFileType: 'Tipo de arquivo inválido. Selecione um arquivo JSON'
      },
      importTest: 'Importar Teste',
      importTestDescription: 'Importe teste de arquivo JSON ou cole estrutura JSON',
      importJson: 'JSON do Teste',
      importJsonPlaceholder: 'Cole a estrutura JSON do teste...',
      importText: 'Texto',
      importFile: 'Arquivo',
      selectFile: 'Selecionar Arquivo',
      selectedFile: 'Arquivo Selecionado'
    },
    pass: {
      loading: 'Carregando teste...',
      restoring: 'Restaurando progresso...',
      error: 'Erro ao carregar teste',
      retry: 'Tentar novamente',
      backToSearch: 'Voltar à pesquisa',
      exit: 'Sair',
      exitConfirmation: 'Tem certeza de que deseja sair? Todo o progresso será perdido.',
      noQuestion: 'Pergunta não encontrada',
      previous: 'Anterior',
      next: 'Próximo',
      finish: 'Finalizar teste',
      questionProgress: 'Pergunta {current} de {total}',
      answered: 'respondidas',
      time: 'tempo',
      testNotFound: 'Teste não encontrado',
      instructions: 'Instruções',
      instruction1: 'Leia as perguntas com atenção',
      instruction1Desc: 'Certifique-se de entender a pergunta antes de escolher uma resposta',
      instruction2: 'Acompanhe seu tempo',
      instruction2Desc: 'Você tem tempo limitado para completar o teste',
      instruction3: 'O progresso é salvo automaticamente',
      instruction3Desc: 'Suas respostas são salvas a cada 5 minutos'
    },
    result: {
      title: 'Resultados do Teste',
      loading: 'Carregando resultados...',
      error: 'Erro ao carregar resultados',
      retry: 'Tentar novamente',
      notFound: 'Resultados do teste não encontrados',
      loadError: 'Falha ao carregar resultados',
      testLoadError: 'Falha ao carregar dados do teste',
      percentage: 'Percentual de conclusão',
      score: 'Pontuação',
      timeSpent: 'Tempo gasto',
      passed: 'Teste aprovado!',
      failed: 'Teste reprovado',
      congratulations: 'Parabéns! Você passou no teste com sucesso.',
      notEnoughPoints: 'Infelizmente, você não obteve pontos suficientes para passar no teste.',
      detailedAnswers: 'Respostas detalhadas',
      findOtherTests: 'Encontrar outros testes',
      myTests: 'Meus testes',
      totalScore: 'Pontuação total',
      status: 'Status',
      scoreBreakdown: 'Análise da pontuação',
      overallProgress: 'Progresso geral',
      byDifficulty: 'Por dificuldade',
      timeAnalysis: 'Análise do tempo',
      completionTime: 'Tempo de conclusão',
      averageTimePerQuestion: 'Tempo médio por pergunta',
      completedAt: 'Concluído em',
      timeLimit: 'Limite de tempo',
      question: 'Pergunta',
      correct: 'Correta',
      incorrect: 'Incorreta',
      selectedAnswers: 'Respostas selecionadas',
      retakeTest: 'Refazer teste',
      shareResult: 'Compartilhar resultado',
      downloadCertificate: 'Baixar certificado'
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
    urlLabel: 'URL da Imagem',
    urlPlaceholder: 'https://example.com/image.jpg',
    urlRequired: 'Digite a URL da imagem',
    invalidUrl: 'URL da imagem inválida',
    urlError: 'Erro ao carregar imagem da URL',
    addUrl: 'Adicionar URL',
    or: 'ou',
    fileLabel: 'Enviar arquivo',
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
    title: 'Resultado do Teste',
    totalScore: 'Pontuação Total',
    percentage: 'Percentual',
    timeSpent: 'Tempo Gasto',
    passed: 'Aprovado',
    failed: 'Reprovado',
    status: 'Status',
    scoreBreakdown: 'Análise da Pontuação',
    overallProgress: 'Progresso Geral',
    byDifficulty: 'Por Dificuldade',
    timeAnalysis: 'Análise do Tempo',
    completionTime: 'Tempo de Conclusão',
    averageTimePerQuestion: 'Tempo Médio por Pergunta',
    completedAt: 'Concluído em',
    timeLimit: 'Limite de Tempo',
    detailedAnswers: 'Respostas Detalhadas',
    question: 'Pergunta',
    correct: 'Correta',
    incorrect: 'Incorreta',
    selectedAnswers: 'Respostas Selecionadas',
    retakeTest: 'Refazer Teste',
    shareResult: 'Compartilhar Resultado',
    downloadCertificate: 'Baixar Certificado'
  },
  leaderboard: {
    title: 'Classificação',
    subtitle: 'Resultados de todos os participantes',
    sortBy: 'Ordenar por',
    search: 'Pesquisar',
    totalParticipants: 'Total de Participantes',
    passedCount: 'Aprovados',
    averageScore: 'Pontuação Média',
    averageTime: 'Tempo Médio'
  },
  timer: {
    untilDeadline: 'até o prazo',
    remaining: 'restante',
    currentTime: 'hora atual',
    timeRunningOut: 'O tempo está acabando!',
    timeExpired: 'Tempo expirado!',
    modes: {
      countdown: 'Contagem Regressiva',
      time: 'Hora Atual'
    },
    types: {
      deadline: 'Prazo',
      timeLimit: 'Limite de Tempo'
    },
    settings: {
      title: 'Configurações do Timer',
      editTitle: 'Editar Timer',
      mode: 'Modo do Timer',
      countdownType: 'Tipo de Contagem Regressiva',
      deadline: 'Prazo',
      deadlineHelp: 'Hora até a qual o teste deve ser enviado',
      timeLimit: 'Limite de Tempo (minutos)',
      timeLimitHelp: 'Quanto tempo é dado para completar o teste',
      warnings: 'Avisos',
      showWarning: 'Mostrar aviso de tempo',
      warningThreshold: 'Limite de aviso (segundos)',
      displaySettings: 'Configurações de Exibição',
      showProgress: 'Mostrar barra de progresso do tempo',
      preview: 'Visualizar',
      timeModeInfo: 'O timer mostrará a hora atual do dia no formato HH:MM:SS',
      actions: {
        cancel: 'Cancelar',
        save: 'Salvar',
        apply: 'Aplicar',
        delete: 'Excluir',
        preview: 'Visualizar'
      }
    }
  },
  common: {
    loading: 'Carregando...',
    error: 'Erro',
    retry: 'Tentar novamente'
  },
  layout: {
    author: {
      withLove: 'Com amor',
      name: 'Bulygin Nikita',
      contacts: 'Contatos do Autor',
      contactsDescription: 'Entre em contato comigo da forma mais conveniente',
      copy: 'Copiar'
    }
  },
  auth: {
    signIn: 'Entrar',
    signOut: 'Sair',
    profile: 'Perfil',
    myProfile: 'Meu Perfil',
    userProfile: 'Perfil do Usuário',
    notAuthenticated: 'Autenticação Necessária',
    notAuthenticatedDescription: 'Faça login para continuar',
    userNotFound: 'Usuário Não Encontrado',
    userNotFoundDescription: 'O usuário com o ID especificado não existe'
  },
  user: {
    profile: {
      title: 'Perfil',
      information: 'Informações do Perfil',
      statistics: 'Estatísticas',
      actions: 'Ações',
      editProfile: 'Editar Perfil',
      totalQuizzes: 'Total de Quiz',
      completedQuizzes: 'Concluídos',
      averageScore: 'Pontuação Média',
      registeredAt: 'Registrado em',
      noName: 'Sem Nome'
    }
  }
} 