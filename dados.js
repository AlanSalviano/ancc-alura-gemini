let dados = [
    {
        titulo: "Fundação do Câncer (RJ)",
        descricao: "A Fundação do Câncer é uma instituição com sede no estado do Rio de Janeiro, sem fins lucrativos, criada em 1991, que capta recursos e investe em prevenção, diagnóstico precoce, programas e projetos relacionados a transplante de medula óssea e sangue de cordão umbilical, cuidados paliativos e pesquisa.",
        link: "https://www.cancer.org.br/ajude/area-do-doador/"
    },
    {
        titulo: "Instituto Vencer o Câncer (SP)",
        descricao: "O Instituto Vencer o Câncer está sediado no estado de São Paulo e é uma Organização da Sociedade Civil de Interesse Público (OSCIP), cujo principal objetivo é informar a população sobre os fatores de risco, prevenção, diagnóstico e tratamento do câncer, além da defesa de direitos e da construção de políticas públicas eficazes para pacientes oncológicos.",
        link: "https://vencerocancer.org.br/apoie/"
    },
    {
        titulo: "GAPC – Grupo de Apoio a Pessoas com Câncer (SP)",
        descricao: "GAPC – Grupo de Apoio a Pessoas com Câncer tem sua sede principal no estado de São Paulo e é uma entidade sem fins lucrativos que tem como objetivo ajudar os portadores de câncer e suas famílias, fornecendo medicamentos, próteses, fraldas, suplementos alimentares, atendimentos psicológico, fisioterapêutico, nutricional e orientação jurídica, palestras, cursos e orientações sobre recursos e direitos. Eles tem projetos sociais que levam cuidado e informação até a população e também o Projeto Prevenir, um ônibus consultório para prevenção de câncer bucal, de pele e de mama.",
        link: "https://gapc.org.br/colabore/"
    },
    {
        titulo: "Américas Amigas (Sem sede fixa)",
        descricao: "A Américas Amigas é uma organização da sociedade civil que promove a queda da mortalidade por câncer de mama em território nacional, por meio da conscientização, informação e acesso ao diagnóstico precoce da doença.",
        link: "https://www.americasamigas.org.br/quero-doar"
    },
    {
        titulo: "GRAACC - Grupo de Apoio ao Adolescente e à Criança com Câncer (SP)",
        descricao: "O GRAACC é uma ONG de São Paulo, referência no tratamento de câncer infantojuvenil no Brasil. Além do tratamento médico, oferece apoio psicológico, social e nutricional às crianças e adolescentes com câncer e suas famílias.",
        link: "https://graacc.org.br/doador-mensal/"
    },
    {
        titulo: "Instituto Oncoguia (Sem sede fixa)",
        descricao: "O Instituto Oncoguia é uma organização sem fins lucrativos que oferece informações sobre câncer, tratamentos e direitos dos pacientes. Além disso, a instituição desenvolve projetos sociais e apoia iniciativas de combate ao câncer.",
        link: "https://www.vocenaoestasozinho.org.br/doeoncoguia/single_step"
    },
    {
        titulo: "Aspec Solídaria (MG)",
        descricao: "Com sede em Minas Gerais a Aspec Solídaria oferece diversos serviços como horta solidária, benefícios socioassistenciais e audiências públicas.",
        link: "https://pag.ae/bkk0HRV"
    },
    {
        titulo: "Instituto do Câncer Infantil (RS)",
        descricao: "O Instituto do Câncer Infantil se encontra no Rio Grande do Sul, possui 27 leitos disponibilizados à crianças e adolescentes com câncer é referência para diversas outras ONGs.",
        link: "https://ici.ong/como-ajudar/#doacao-roupas-alimentos-brinquedos"
    },
    {
        titulo: "Nacci - Núcleo de Apoio ao Combate do Câncer Infantil (BA)",
        descricao: "Situado na Bahia, e focado no apoio a crianças e adolescentes com câncer, o Nacci oferece serviços como assistência social, psicológica e nutricional.",
        link: "https://www.nacci.org.br/doe"
    },
    {
        titulo: "Associação Peter Pan (CE)",
        descricao: "A Associação Peter Pan é uma das mais conhecidas do estado, dedicada ao cuidado de crianças e adolescentes com câncer. Oferece diversos serviços como tratamento, acompanhamento psicológico, atividades recreativas e apoio às famílias.",
        link: "https://doeagora.app.org.br/doeja/single_step"
    },
    {
        titulo: "Abrace (DF)",
        descricao: "Uma das mais conhecidas do Distrito Federal, a Abrace – Associação Brasileira de Assistência às Famílias de Crianças Portadoras de Câncer e Hemopatias, oferece apoio integral a crianças e adolescentes com câncer e suas famílias.",
        link: "https://abrace.com.br/contribuicao/"
    },
    {
        titulo: "AFCC - Associação Feminina de Combate ao Câncer (ES)",
        descricao: "A Afecc é uma das mais conhecidas do estado do Espirito Santo, com atuação em diversas cidades capixabas. A associação oferece serviços como apoio psicológico, grupos de apoio, palestras e campanhas de conscientização.",
        link: "https://afecc.org.br/colabore/"
    },
    {
        titulo: "ACCG - Associação de Combate ao Câncer de Goiás (GO)",
        descricao: "A ACCG é o único Centro de Assistência de Alta Complexidade em Oncologia (CACON) de Goiás, atendendo a pacientes de todo o estado e de outros estados do país.",
        link: "https://accg.org.br/doacoes/doacao-pessoa-fisica/"
    },
    {
        titulo: "Associação de Assistência às Mulheres com Câncer de Mama de Pernambuco (PE)",
        descricao: "A associação acolhe mulheres procedentes de outras cidades de Pernambuco em tratamento de câncer de mama, oferecendo hospedagem digna, além de assistência biopsicossocial.",
        link: "https://femama.org.br/site/contribua/"
    },
    {
        titulo: "Rede Feminina de Combate ao Câncer do Piauí (PI)",
        descricao: "Uma das mais conhecidas do estado do Piauí, a Rede Feminina oferece diversos serviços como apoio psicológico, grupos de apoio, palestras e campanhas de conscientização.",
        link: "https://www.redefemininapi.org.br/como-ajudar.php"
    },
    {
        titulo: "AMUCC - Associação da Mulher Catarinense portadora de Câncer (SC)",
        descricao: "A AMUCC oferece apoio integral às mulheres com câncer de mama em Santa Catarina, incluindo grupos de apoio, palestras, atividades físicas e acompanhamento psicológico.",
        link: "https://www.nacci.org.br/doe"
    },
    {
        titulo: "GACC Amazonas – Grupo de Apoio à Criança com Câncer do Amazonas (AM)",
        descricao: "GACC Amazonas é uma instituição de apoio ao tratamento de crianças e adolescentes com câncer. Oferece serviços como alimentação, acompanhamento psicológico, hospedagem e transporte.",
        link: "https://www.nacci.org.br/doe"
    },
    {
        titulo: "Casa da Criança com Câncer (PB)",
        descricao: "Destinada ao apoio em serviços de oncologia pediátrica na Paraíba, a Casa da Criança com Câncer oferece hospedagem, alimentação e atividades para crianças e adolescentes com câncer e seus familiares.",
        link: "https://www.instagram.com/casadacriancacomcancerpb/reels/?next=%2Fportaldeprefeitura%2F"
    },
    {
        titulo: "Grupo Onça Pintada (MS)",
        descricao: " Uma das ONGs mais conhecidas do estado do Mato Grosso do Sul, o Grupo Onça Pintada se destaca na prevenção e combate ao câncer de mama, realizando campanhas de conscientização e oferecendo serviços de diagnóstico precoce.",
        link: "https://www.instagram.com/grupooncapintada"
    },
];