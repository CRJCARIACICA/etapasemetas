const range=(a,b)=>Array.from({length:b-a+1},(_,i)=>a+i);
const ACTIVE_OP=range(2,18), ALL=range(1,18), BIM=[3,5,7,9,11,13,15,17], TRI=[4,7,10,13,16], SEM=[7,13];
const metas={
1:'Remobilização do CRJ Cariacica',2:'Executar e Gerir o CRJ Cariacica',3:'Fomentar a participação social e gestão participativa',4:'Promoção do acesso e inclusão social e produtivo de jovens',5:'Atuação como espaço de referência e encaminhamento para serviços públicos e privados',6:'Garantir o desenvolvimento dos serviços organizados em três núcleos',7:'Projeto Agente de Integração Escola — SEDU, comunidade, famílias e escolas',8:'Educação Continuada dos Profissionais atuantes',9:'Sustentabilidade, Monitoramento e Avaliação'};
const commonExec='Relatórios de Execução; Listas de Presença; Registros Fotográficos; Sistema JuventudES (em andamento/implantação).';
const stages=[];
stages.push(
{c:'1.1',m:1,t:'Conhecer o território, as juventudes e garantir a manutenção do espaço físico',r:'1 contrato de locação vigente formalizado e 1 e-mail/documento confirmando infraestrutura adequada.',i:'Nº de contrato vigente; nº de documentos confirmando infraestrutura.',v:'Contrato de locação; e-mail institucional; alvarás/licenças; registros fotográficos; planilhas de insumos; notas fiscais.',a:[1],due:[1],cad:'única',subs:['Contrato de locação vigente','Documento/e-mail de infraestrutura adequada','Registros de adequações, alvarás/licenças e insumos'],why:'Etapa de remobilização: demonstra que o equipamento possui base física e condições mínimas para execução. A justificativa deve relacionar cada evidência à disponibilidade e adequação do espaço.'},
{c:'1.2',m:1,t:'Contratação de equipe para execução dos serviços do CRJ',r:'100% da equipe mínima reintegrada ou contratada.',i:'Percentual de colaboradores da equipe mínima reintegrada ou contratada.',v:'Contratos de trabalho; registros fotográficos; exames admissionais; ASO.',a:[1,2],due:[2],cad:'implantação',subs:['Relação da equipe mínima prevista','Contratos/admissões','ASO/exames admissionais','Cálculo do percentual de cobertura'],why:'A equipe mínima é condição de execução. Registre quantitativo previsto, quantitativo em exercício e eventuais vacâncias com plano de recomposição.'},
{c:'1.3',m:1,t:'Promoção de gestão participativa',r:'1 reunião com o Grupo Gestor e 1 e-mail formalizando a conclusão da remobilização.',i:'Nº de reuniões com Grupo Gestor; nº de documentos de formalização.',v:'E-mail de formalização; atas; listas de presença; registros internos.',a:[1],due:[1],cad:'única',subs:['Reunião de remobilização/Grupo Gestor','Ata e lista de presença','Formalização da conclusão da remobilização'],why:'A gestão participativa vincula a retomada do CRJ às juventudes e ao Grupo Gestor. A ata deve registrar decisões, participantes e encaminhamentos.'},
{c:'2.1',m:2,t:'Promover 380 atendimentos mensais nas atividades diversas do CRJ, totalizando 6.840 para os 18 meses',r:'Jovens são acolhidos e atendidos dentro de suas necessidades.',i:'(Nº de jovens atendidos / Nº de jovens que buscam atendimento) × 100; referência de 380 atendimentos mensais.',v:commonExec,a:ACTIVE_OP,due:ACTIVE_OP,cad:'mensal',target:380,unit:'atendimentos',conflict:'O texto totaliza 6.840 (18×380), mas o cronograma marca M2–M18 (17 competências).',subs:['Atendimentos registrados no mês','Lista/sistema com data e tipo de atendimento','Consolidação sem dupla contagem indevida'],why:'É a medida central de execução do CRJ. O sistema deve separar número de atendimentos/participações de número de jovens únicos quando necessário.'},
{c:'2.2',m:2,t:'Garantir 100% de Acolhimento Individualizado e Coletivo',r:'Participações das juventudes nas atividades do CRJ e acolhimento conforme necessidades.',i:'Percentual de acolhimentos realizados em relação às demandas de acolhimento.',v:commonExec,a:ACTIVE_OP,due:ACTIVE_OP,cad:'mensal',target:100,unit:'%',subs:['Acolhimentos individuais','Acolhimentos coletivos','Encaminhamentos decorrentes do acolhimento'],why:'O acolhimento é porta de entrada e identificação de demandas. Justifique com registros de acolhimento e encaminhamentos, preservando dados pessoais sensíveis.'},
{c:'2.3',m:2,t:'Promover 100% de Acesso dos Jovens ao CRJ',r:'Participação e acesso das juventudes aos serviços e atividades do CRJ.',i:'Percentual de acesso/atendimento das demandas registradas.',v:commonExec,a:ACTIVE_OP,due:ACTIVE_OP,cad:'mensal',target:100,unit:'%',subs:['Registros de acesso/participação','Ações de mobilização e busca ativa quando aplicável','Barreiras identificadas e medidas adotadas'],why:'Demonstra capacidade de garantir acesso efetivo aos serviços. A justificativa deve explicar barreiras, busca ativa e como o acesso foi viabilizado.'}
);
stages.push(
{c:'3.1',m:3,t:'Desenvolver 01 Grupo Gestor Local e definir áreas, programações, horários e regras de convivência',r:'Fortalecer o Grupo Gestor Local.',i:'1 Grupo Gestor formado e atuante.',v:'Relatórios de Execução; atas de reuniões; registros fotográficos.',a:[1],due:[1],cad:'implantação',target:1,unit:'grupo gestor',subs:['Composição do Grupo Gestor','Ata de formação/reativação','Definições de programação, horário e convivência'],why:'É o mecanismo de gestão participativa previsto para incorporar demandas das juventudes nas decisões do equipamento.'},
{c:'4.1',m:4,t:'Acompanhamento de 100% do Plano de Possibilidades de Trabalhos Individuais e Coletivos (PTrampo)',r:'Acompanhamento individual e coletivo construído com participantes do TRAMPO/LABPoca.',i:'15 jovens mensais; no mínimo 8 atividades relacionadas ao PTrampo; acompanhamento individual.',v:commonExec,a:ACTIVE_OP,due:ACTIVE_OP,cad:'mensal + acumulado',subs:['15 jovens atendidos no mês','PTrampo(s) elaborado(s)/acompanhado(s)','Atividades relacionadas ao PTrampo (meta de 8 sem periodicidade textual explícita)','Registros de acompanhamento individual/coletivo'],why:'O PTrampo organiza trajetórias de trabalho e renda. O sistema trata 15 jovens como referência mensal e as 8 atividades como acumulado configurável, porque o texto não explicita periodicidade para as 8.'},
{c:'4.2',m:4,t:'Realização de 100% das atividades propostas para o Núcleo Socioafirmativo e de Acesso — Cola Aê, Fortalece Família e #FicaADica',r:'Empréstimos, salas, oficinas, circuitos formativos, atividades/eventos artístico-culturais e mostras semestrais.',i:'(Nº de atividades realizadas / Nº de atividades previstas na metodologia para cada núcleo/eixo) × 100.',v:commonExec,a:ACTIVE_OP,due:ACTIVE_OP,cad:'mensal',target:100,unit:'%',subs:['Cola Aê','Fortalece Família / PVida','FicaADica','CFDH','Eventos/programações','Mostras quando previstas'],why:'A metodologia organiza o Núcleo Socioafirmativo e de Acesso nos eixos Cola Aê, Fortalece Família e #FicaADica. O percentual deve ser sustentado pelos registros detalhados das Etapas 6.1, 6.2 e 6.3.'},
{c:'4.3',m:4,t:'Realização de 100% das atividades propostas para o Núcleo de Economia Criativa, Trabalho e Renda — Tô no Topo, Trampo Coletivo e LABPoca',r:'Execução de oficinas, atividades, circuitos/eventos e mostras previstos para o núcleo.',i:'(Nº de atividades realizadas / Nº de atividades previstas na metodologia para cada núcleo/eixo) × 100.',v:commonExec,a:ACTIVE_OP,due:ACTIVE_OP,cad:'mensal',target:100,unit:'%',subs:['Tô no Topo / PTrampo','Cursos e oficinas profissionalizantes','Trampo Coletivo','LABPoca','Mostra de Profissões quando prevista'],why:'Deve ser alimentada a partir das entregas das Etapas 6.4, 6.5 e 6.6, evitando lançamento duplicado. O sistema permite usar o mesmo conjunto de evidências.'},
{c:'4.4',m:4,t:'Realização de 100% das atividades previstas para o Núcleo de Parcerias #TamoJunto',r:'Formalização de parcerias intersetoriais e participativas.',i:'Número de parcerias firmadas e ações desenvolvidas.',v:'Documento de Parceria Formalizada; Relatório de Parceria.',a:ACTIVE_OP,due:ACTIVE_OP,cad:'mensal/contínua',subs:['Articulações realizadas','Parcerias formalizadas','Ações conjuntas realizadas'],why:'O eixo #TamoJunto materializa a articulação interinstitucional. Registre tanto encontros de articulação quanto parcerias formalizadas e resultados concretos.'},
{c:'4.5',m:4,t:'Realizar 01 Mostra de Profissões semestralmente, com até 60 participantes por edição',r:'1 Mostra de Profissões e Mercado de Trabalho por semestre, até 60 jovens.',i:'Nº de mostras realizadas; nº de participantes.',v:commonExec,a:SEM,due:SEM,cad:'semestral',target:1,unit:'mostra/semestre',subs:['Programação da mostra','Instituições/profissionais participantes','Lista de presença (até 60 por edição)','Registro fotográfico e relatório'],why:'No cronograma físico, as duas ocorrências estão posicionadas nos meses contratuais 7 e 13, correspondendo ao fechamento dos dois primeiros semestres operacionais.'}
);
stages.push(
{c:'4.6',m:4,t:'Realizar cursos e oficinas com atendimento mínimo de 120 jovens ao ano e carga horária mínima de 160 horas mensais',r:'Cursos e oficinas profissionalizantes para 120 jovens/ano e 160 horas mensais.',i:'120 jovens anuais.',v:commonExec+' Certificados.',a:ACTIVE_OP,due:ACTIVE_OP,cad:'mensal + anual',target:160,unit:'horas/mês',conflict:'A Etapa 6.4 menciona 120 horas mensais para cursos/oficinas; 4.6 e 6.1 indicam 160.',subs:['Horas de oficinas/cursos no mês','Jovens atendidos (controle anual)','Certificados quando aplicável'],why:'Monitorar mensalmente carga horária e cumulativo anual de jovens. Divergência 160h/120h deve ser tratada por critério formal registrado nas configurações.'},
{c:'5.1',m:5,t:'Identificar serviços socioassistenciais e de saúde para encaminhamento das juventudes',r:'1 mapeamento da rede socioassistencial e de saúde com unidades e serviços prestados.',i:'1 mapeamento anual.',v:'Relatório de Mapeamento.',a:ACTIVE_OP,due:[13],cad:'anual com manutenção mensal',target:1,unit:'mapeamento/ano',subs:['Cadastro de serviços da rede','Atualizações do mapeamento','Relatório anual consolidado'],why:'O cronograma mantém a etapa ativa nos meses operacionais, enquanto a entrega formal é anual. Registre atualizações mensais e gere o consolidado anual no fechamento.'},
{c:'5.2',m:5,t:'Articulação com a rede de proteção social do território por meio de 01 reunião mensal',r:'1 reunião mensal com a rede para otimizar serviços e benefícios.',i:'Nº de reuniões realizadas mensalmente.',v:commonExec,a:ALL,due:ALL,cad:'mensal',target:1,unit:'reunião/mês',subs:['Reunião/articulação de rede','Ata ou memória','Lista de presença','Encaminhamentos pactuados'],why:'Etapa mensal desde o mês 1. Reuniões devem demonstrar integração da rede e encaminhamentos, não apenas presença institucional.'},
{c:'6.1',m:6,t:'Desenvolvimento de 100% do Núcleo Socioafirmativo e de Acesso por meio do eixo Cola Aê',r:'Empréstimos/agendamentos; 1.920h anuais de oficinas/cursos (média 160h/mês, 20 jovens por oficina/curso); 120h semestrais de CFDH; até 400 passagens/mês; 1 evento/mês; até 40 participações culturais; 1 mostra semestral.',i:'Contagens de empréstimos, horas, jovens, CFDH, passagens, eventos, participações e mostras.',v:'Relatórios de Execução; ata de reuniões do Núcleo; listas de presença; registros fotográficos; Sistema JuventudES.',a:ACTIVE_OP,due:ACTIVE_OP,cad:'múltipla',subs:['Empréstimos e agendamento de salas — por demanda','Oficinas/cursos — 160h/mês; 20 jovens por oficina/curso; 1.920h/ano','CFDH — 120h por semestre','Passagens — até 400/mês (limite, não mínimo)','Evento/programação — 1/mês','Participações culturais — até 40 (limite)','Mostra geral — 1/semestral'],why:'O Cola Aê é a porta de entrada e concentra programação, oficinas e CFDH. “Até 400” e “até 40” são limites máximos, não metas mínimas. Metas semestrais devem ser avaliadas por janela, não como falha mensal.'},
{c:'6.2',m:6,t:'Desenvolvimento de 100% do Núcleo Socioafirmativo e de Acesso por meio do eixo Fortalece Família',r:'1 PVida; 4 horas mensais de atividades; participações individuais/coletivas de 45 jovens; acompanhar 100% das demandas eventuais.',i:'Nº de PVidas; horas mensais; participações; acompanhamentos de demandas.',v:commonExec+' Ata de reuniões do Núcleo.',a:ACTIVE_OP,due:ACTIVE_OP,cad:'mensal/contínua',subs:['PVida(s) desenvolvido(s)','4 horas mensais de atividades relacionadas','45 participações individuais/coletivas','100% das demandas eventuais acompanhadas/encaminhadas'],why:'Fortalece Família reúne PVida e acompanhamento de demandas. “Sem demanda” pode ser válido para demandas eventuais, mas não substitui as atividades mensais previstas.'},
{c:'6.3',m:6,t:'Desenvolvimento de 100% do Núcleo Socioafirmativo e de Acesso por meio do eixo #FicaADica',r:'Consultar e subsidiar 100% do trabalho desenvolvido no CRJ a partir do portfólio de políticas públicas voltadas à juventude.',i:'Número de consultas e subsídios desenvolvidos pelo CRJ.',v:commonExec+' Ata de reuniões do Núcleo.',a:ACTIVE_OP,due:ACTIVE_OP,cad:'mensal/contínua',subs:['Consultas ao portfólio de políticas','Orientações prestadas às juventudes','Serviços municipais/rede local adicionados/atualizados','Encaminhamentos baseados no portfólio'],why:'#FicaADica funciona como ponte de informação e acesso a políticas, programas, serviços e oportunidades. A evidência deve mostrar consulta/orientação/atualização, não apenas citar o eixo.'}
);
stages.push(
{c:'6.4',m:6,t:'Desenvolvimento de 100% do Núcleo de Economia Criativa, Trabalho e Renda por meio do eixo Tô no Topo',r:'1 PTrampo; 15 jovens/mês; 8 atividades relacionadas; cursos/oficinas com 120h/mês e 120 jovens/ano; 1 Mostra de Profissões semestral com 60 participantes.',i:'Nº de PTrampos; jovens/mês; atividades; horas; jovens em cursos; mostras e participantes.',v:commonExec+' Ata de reuniões dos Núcleos.',a:ACTIVE_OP,due:ACTIVE_OP,cad:'múltipla',conflict:'Carga horária de 120h/mês aqui diverge das 160h/mês das Etapas 4.6 e 6.1.',subs:['PTrampo — 15 jovens/mês','8 atividades relacionadas (acumulado configurável)','Cursos/oficinas — 120h/mês segundo esta etapa','120 jovens/ano','Mostra de Profissões — semestral; 60 participantes'],why:'O Tô no Topo articula PTrampo, formação profissional e mostra de profissões. O sistema apresenta a divergência de horas e não altera o texto do plano.'},
{c:'6.5',m:6,t:'Desenvolvimento de 100% do Núcleo de Economia Criativa, Trabalho e Renda por meio do eixo Trampo Coletivo e LABPoca',r:'Promover e gerir 100% do espaço coletivo de trabalho (coworking) com infraestrutura disponível.',i:'Satisfação superior a 85% dos usuários com a estrutura disponível.',v:'Relatórios de Pesquisa de Satisfação; Formulários de Pesquisa.',a:ACTIVE_OP,due:ACTIVE_OP,cad:'contínua + aferição',target:85,unit:'% satisfação',subs:['Funcionamento do coworking','Registro de usuários/uso','Condições de infraestrutura','Pesquisa de satisfação quando aplicada'],why:'A comprovação deve combinar funcionamento/uso do espaço com aferição de satisfação. Ausência de pesquisa no mês pode ser registrada como “monitoramento”, respeitando a periodicidade da pesquisa.'},
{c:'6.6',m:6,t:'Desenvolvimento de 100% do Núcleo de Economia Criativa, Trabalho e Renda por meio do eixo LABPoca',r:'Garantir 100% do funcionamento do ambiente coletivo de produção com recursos tecnológicos e materiais.',i:'Satisfação superior a 85% dos usuários com os recursos disponíveis.',v:'Relatórios de Pesquisa de Satisfação; Formulários de Pesquisa.',a:ACTIVE_OP,due:ACTIVE_OP,cad:'contínua + aferição',target:85,unit:'% satisfação',subs:['Ambiente em funcionamento','Recursos tecnológicos disponíveis','Materiais disponíveis','Pesquisa de satisfação quando aplicada'],why:'Demonstra disponibilidade real do ambiente e dos recursos. O percentual de satisfação deve ser calculado sobre avaliações válidas, com amostra identificada.'},
{c:'6.7',m:6,t:'Desenvolvimento de 100% do Núcleo de Parcerias por meio do eixo TamoJunto',r:'Articulação constante com a rede para fortalecer apoio às juventudes e integração interinstitucional.',i:'Nº de encontros/reuniões com equipamentos da rede; nº de parcerias formalizadas.',v:commonExec+' Ata de reuniões do Núcleo.',a:ACTIVE_OP,due:ACTIVE_OP,cad:'contínua',subs:['Encontros/reuniões de rede','Parcerias formalizadas','Ações interinstitucionais realizadas'],why:'#TamoJunto é o eixo de parcerias. Diferencie reunião de articulação de parceria efetivamente formalizada e registre o produto/encaminhamento de cada contato.'},
{c:'7.1',m:7,t:'01 Reunião de Alinhamento com a SEDU mensal',r:'1 reunião mensal de alinhamento com a SEDU para contribuir com acesso/permanência e redução da evasão.',i:'Nº de reuniões mensais de alinhamento com a SEDU.',v:'Relatórios; ata; listas de presença; registros fotográficos; Sistema JuventudES.',a:ACTIVE_OP,due:ACTIVE_OP,cad:'mensal',target:1,unit:'reunião/mês',subs:['Reunião SEDU','Ata/memória','Lista de presença','Encaminhamentos'],why:'Entrega mensal do projeto de integração escola. Se não houver reunião, registrar tentativa formal, motivo e reprogramação; isso não equivale automaticamente a cumprimento.'},
{c:'7.2',m:7,t:'01 Reunião periódica mensal com as coordenações do CRJ',r:'1 reunião mensal com coordenações do CRJ para alinhamento do projeto.',i:'Nº de reuniões mensais realizadas com as coordenações.',v:'Relatórios; ata; listas de presença; registros fotográficos; Sistema JuventudES.',a:ACTIVE_OP,due:ACTIVE_OP,cad:'mensal',target:1,unit:'reunião/mês',subs:['Reunião das coordenações','Ata/memória','Encaminhamentos do projeto'],why:'Comprova governança interna do projeto e integração entre unidades/coordenações.'}
);
stages.push(
{c:'7.3',m:7,t:'01 visita mensal às escolas contempladas',r:'1 visita mensal às escolas, promovendo acesso e permanência dos jovens atendidos.',i:'Nº de visitas às escolas contempladas.',v:'Relatórios; ata de reunião/visita; listas de presença; registros fotográficos; Sistema JuventudES.',a:ACTIVE_OP,due:ACTIVE_OP,cad:'mensal',target:1,unit:'visita/mês',subs:['Visita à escola','Registro da visita','Demandas/encaminhamentos','Jovens acompanhados quando aplicável'],why:'A visita deve estar vinculada ao objetivo de integração e permanência escolar; registre escola, data, pauta e resultado.'},
{c:'8.1',m:8,t:'Garantir participação regular dos profissionais em formação continuada, por meio de 01 capacitação bimestral',r:'1 capacitação bimestral para manter profissionais atualizados e capacitados.',i:'Número de atividades de formação continuada desenvolvidas.',v:'Relatórios de Execução; listas de presença; registros fotográficos; certificados.',a:ACTIVE_OP,due:BIM,cad:'bimestral',target:1,unit:'capacitação/bimestre',subs:['Capacitação realizada','Lista de presença','Conteúdo/carga horária','Certificado ou comprovação equivalente'],why:'O cronograma mantém a etapa ativa durante os meses operacionais, mas a entrega quantitativa é bimestral. Meses intermediários devem aparecer como “ativa — sem vencimento bimestral”.'},
{c:'9.1',m:9,t:'Disponibilizar Assessoria de Monitoramento e equipe da Gerência para acompanhar atividades, metas e indicadores',r:'Acompanhamento constante e aprimoramento dos serviços.',i:'Número de relatórios e pesquisas de satisfação realizados mensalmente.',v:'Relatórios de Pesquisa de Satisfação; Formulários de Pesquisa.',a:ACTIVE_OP,due:ACTIVE_OP,cad:'mensal/contínua',subs:['Registro de monitoramento no mês','Análise de metas/indicadores','Providências de melhoria','Pesquisa/relatório quando previsto'],why:'É a camada de controle de qualidade do plano. O registro deve mostrar análise e decisão, não apenas reprodução de números.'},
{c:'9.2',m:9,t:'Elaborar 01 formulário de Pesquisa de Satisfação dos Usuários',r:'1 formulário para avaliação do projeto.',i:'Nº de formulário criado.',v:'Documento final — Formulário.',a:ACTIVE_OP,due:[2],cad:'criação única + manutenção',target:1,unit:'formulário',subs:['Formulário criado','Versão/data','Atualizações posteriores quando necessárias'],why:'A entrega formal é a criação do formulário. O cronograma o mantém ativo nos meses operacionais; após a criação, registre manutenção/uso sem contar novo formulário a cada mês.'},
{c:'9.3',m:9,t:'Realizar 01 Pesquisa de Satisfação dos Usuários bimestralmente',r:'1 relatório de pesquisa com aprovação superior a 85%.',i:'(Avaliações Bom/Ótimo ÷ total de avaliações) × 100.',v:'Relatório de Pesquisa de Satisfação.',a:BIM,due:BIM,cad:'bimestral',target:85,unit:'% Bom/Ótimo',subs:['Aplicação da pesquisa','Base de respostas','Cálculo Bom/Ótimo','Relatório bimestral','Plano de melhoria quando <85%'],why:'O cronograma marca os meses contratuais 3,5,7,9,11,13,15 e 17. O indicador é percentual de avaliações “Bom” ou “Ótimo”.'},
{c:'9.4',m:9,t:'Elaborar 01 relatório de execução, monitoramento e avaliação trimestralmente',r:'1 relatório com análise e apresentação dos resultados do trimestre.',i:'Nº de relatórios de execução, monitoramento e avaliação criados no trimestre.',v:'Documento final — relatório de execução, monitoramento e avaliação.',a:TRI,due:TRI,cad:'trimestral',target:1,unit:'relatório/trimestre',subs:['Dados consolidados do trimestre','Análise de indicadores','Desvios/justificativas','Plano de ação','Documento final'],why:'O cronograma posiciona entregas nos meses 4,7,10,13 e 16. O sistema consolida automaticamente os três meses anteriores como janela do relatório.'}
);
stages.push(
{c:'9.5',m:9,t:'Elaboração de 01 Relatório de Prestação de Contas Mensal',r:'1 relatório mensal financeiro e de execução.',i:'Nº de relatórios de prestação de contas mensais entregues.',v:'Documento final — relatório de prestação de contas.',a:ALL,due:ALL,cad:'mensal',target:1,unit:'relatório/mês',subs:['Prestação de contas financeira','Prestação de contas de execução','Protocolo/comprovação de entrega'],why:'É entrega mensal em todas as 18 competências, inclusive remobilização. O sistema não deve ocultá-la no mês 1.'},
{c:'9.6',m:9,t:'Elaboração de 01 Relatório de Prestação de Contas Final',r:'1 relatório final financeiro e de execução.',i:'Nº de relatórios finais entregues.',v:'Documento final — relatório de prestação de contas final.',a:[18],due:[18],cad:'final',target:1,unit:'relatório final',subs:['Consolidação financeira','Consolidação de execução','Resultados finais','Comprovação de entrega'],why:'Entrega exclusiva do mês contratual 18, devendo consolidar todo o período de execução.'}
);
const SUPABASE_URL='https://yvkohaourbimctadwtpj.supabase.co';
const SUPABASE_PUBLISHABLE_KEY='sb_publishable_vu6I4u6TyAWBY6y9V7ui9g_lA2UKyEK';
const SUPABASE_JS='https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.117.2/+esm';
const APP_SLUG='crj-cariacica';
const DEFAULT_DB={config:{start:'2025-10-01',duration:18,unit:'CRJ Cariacica',term:'',org:'Avante Social',agency:'SEDH',strict:true,hours:'160',attendance:380,noDemand:'demand',interpretation:''},coordinators:[{name:'',start:'2025-10-01',end:''}],months:{},current:null};
let db=JSON.parse(localStorage.getItem('crjMetasDB')||'null')||structuredClone(DEFAULT_DB);
let supabase=null, authUser=null, appRole=null, cloudReady=false, cloudRevision=null, saveTimer=null;
function canEdit(){return appRole==='admin'||appRole==='coordinator'}
function save(){
  localStorage.setItem('crjMetasDB',JSON.stringify(db));
  if(cloudReady&&canEdit()){clearTimeout(saveTimer);saveTimer=setTimeout(saveCloudNow,700)}
}
function setSync(msg,cls=''){const el=document.getElementById('syncStatus');if(el){el.textContent=msg;el.className='user-chip '+cls}}
async function saveCloudNow(){
  if(!cloudReady||!canEdit()||!supabase)return;
  setSync('Banco: salvando…','sync-warn');
  let q=supabase.from('crj_app_state').update({state:db}).eq('slug',APP_SLUG);
  if(cloudRevision!==null)q=q.eq('revision',cloudRevision);
  const {data,error}=await q.select('revision,updated_at').maybeSingle();
  if(error){setSync('Banco: erro','sync-bad');console.error(error);return}
  if(!data){setSync('Banco: conflito — recarregue','sync-bad');return}
  cloudRevision=data.revision;setSync('Banco: sincronizado','sync-ok');
}
async function loadCloudState(){
  const {data,error}=await supabase.from('crj_app_state').select('state,revision,updated_at').eq('slug',APP_SLUG).single();
  if(error)throw error;
  db=data.state||structuredClone(DEFAULT_DB);cloudRevision=data.revision;
  if(!db.current)db.current=getCurrentContractMonth();
  localStorage.setItem('crjMetasDB',JSON.stringify(db));
  cloudReady=true;setSync('Banco: sincronizado','sync-ok');renderAll();
}
function authMsg(msg,kind=''){const el=document.getElementById('authMessage');if(el){el.textContent=msg;el.className='auth-msg '+kind}}
async function initSupabase(){
  try{
    const {createClient}=await import(SUPABASE_JS);
    supabase=createClient(SUPABASE_URL,SUPABASE_PUBLISHABLE_KEY,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}});
    const {data:{session}}=await supabase.auth.getSession();
    if(session?.user)await handleAuthenticated(session.user);else showLogin();
    supabase.auth.onAuthStateChange(async(_event,session)=>{if(session?.user)await handleAuthenticated(session.user);else showLogin()});
  }catch(e){console.error(e);authMsg('Não foi possível conectar ao Supabase. Verifique a internet e recarregue.','bad');setSync('Banco: indisponível','sync-bad')}
}
function showLogin(){authUser=null;appRole=null;cloudReady=false;document.getElementById('authGate').classList.remove('auth-hidden');document.getElementById('loginPanel').classList.remove('auth-hidden');document.getElementById('membershipPanel').classList.add('auth-hidden');document.getElementById('authUserBadge').textContent='Não autenticado';setSync('Banco: bloqueado','sync-warn')}
async function loginApp(){
  const email=document.getElementById('authEmail').value.trim(),password=document.getElementById('authPassword').value;
  if(!email||!password)return authMsg('Informe e-mail e senha.','bad');
  authMsg('Entrando…');const {error}=await supabase.auth.signInWithPassword({email,password});if(error)authMsg(error.message,'bad');
}
async function signupApp(){
  const email=document.getElementById('authEmail').value.trim(),password=document.getElementById('authPassword').value;
  if(!email||password.length<6)return authMsg('Informe um e-mail e uma senha com pelo menos 6 caracteres.','bad');
  const {data,error}=await supabase.auth.signUp({email,password});
  if(error)return authMsg(error.message,'bad');
  authMsg(data.session?'Conta criada e autenticada. Acesso liberado automaticamente.':'Conta criada. Confirme o e-mail enviado para você e depois entre. O acesso será liberado automaticamente.','good');
}
async function handleAuthenticated(user){
  authUser=user;
  document.getElementById('authUserBadge').textContent=user.email||'Usuário autenticado';

  let {data,error}=await supabase
    .from('crj_app_members')
    .select('role,active')
    .eq('user_id',user.id)
    .maybeSingle();

  if(error){
    console.error(error);
    return showMembership('Não foi possível verificar seu perfil de acesso.');
  }

  if(data && !data.active){
    appRole=null;
    return showMembership('Seu acesso ao Sistema de Metas está desativado. Procure a administração.');
  }

  // Após a confirmação do e-mail, o primeiro login cria automaticamente
  // o vínculo do próprio usuário como Coordenador. A RLS do Supabase
  // impede autoelevação para administrador ou cadastro de terceiros.
  if(!data){
    const created=await supabase
      .from('crj_app_members')
      .insert({
        user_id:user.id,
        role:'coordinator',
        active:true,
        created_by:null
      })
      .select('role,active')
      .single();

    if(created.error){
      console.error(created.error);
      appRole=null;
      return showMembership('Confirme seu e-mail antes de entrar. Se ele já estiver confirmado, saia e faça login novamente.');
    }
    data=created.data;
  }

  appRole=data.role;
  document.getElementById('authUserBadge').textContent=`${user.email||'Usuário'} · ${appRole}`;
  document.getElementById('authGate').classList.add('auth-hidden');

  try{
    await loadCloudState();
    applyRoleUI();
  }catch(e){
    console.error(e);
    setSync('Banco: erro ao carregar','sync-bad');
    alert('Falha ao carregar os dados do Supabase: '+e.message);
  }
}

function showMembership(msg){
  document.getElementById('authGate').classList.remove('auth-hidden');
  document.getElementById('loginPanel').classList.add('auth-hidden');
  document.getElementById('membershipPanel').classList.remove('auth-hidden');
  document.getElementById('membershipText').textContent=msg;
  setSync('Banco: validação necessária','sync-warn');
}
async function logoutApp(){if(supabase)await supabase.auth.signOut();localStorage.removeItem('crjMetasDB');location.reload()}
function applyRoleUI(){
  const readOnly=!canEdit();
  document.querySelectorAll('#monthlyView input,#monthlyView select,#monthlyView textarea,#sheetView input,#configView input,#configView select,#configView textarea').forEach(el=>{if(!el.closest('#accessAdminCard'))el.disabled=readOnly});
}
function clearLocalCache(){localStorage.removeItem('crjMetasDB');alert('Cache local limpo. Os dados oficiais permanecem no Supabase.')}
function addMonths(dateStr,n){const d=new Date(dateStr+'T12:00:00');d.setMonth(d.getMonth()+n);return d}
function endDate(){const d=addMonths(db.config.start,db.config.duration);d.setDate(0);return d}
function fmtMonth(d){return d.toLocaleDateString('pt-BR',{month:'long',year:'numeric'}).replace(/^./,x=>x.toUpperCase())}
function monthKey(n){const d=addMonths(db.config.start,n-1);return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')}
function getCurrentContractMonth(){const now=new Date();const s=new Date(db.config.start+'T00:00:00');let diff=(now.getFullYear()-s.getFullYear())*12+(now.getMonth()-s.getMonth())+1;return Math.max(1,Math.min(db.config.duration,diff))}
if(!db.current) db.current=getCurrentContractMonth();
function monthRecord(n,c){const k=monthKey(n);db.months[k]??={};db.months[k][c]??={status:'',realized:'',evidence:'',notes:'',responsible:'',ev:{report:false,presence:false,photo:false,system:false,other:false}};return db.months[k][c]}
function coordFor(n){const d=addMonths(db.config.start,n-1);const t=d.getTime();return db.coordinators.find(x=>x.name && new Date(x.start+'T00:00:00').getTime()<=t && (!x.end||new Date(x.end+'T23:59:59').getTime()>=t))?.name||''}
function isActive(s,n){return s.a.includes(n)}function isDue(s,n){return s.due.includes(n)}
function statusClass(v){return v==='Cumprida'?'ok':v==='Não cumprida'?'bad':v==='Cumprida parcialmente'?'due':'na'}
function validateStage(s,n){if(!isActive(s,n)) return {c:'good',t:'Não prevista nesta competência pelo cronograma físico.'}; const r=monthRecord(n,s.c); if(isDue(s,n)&&!r.status)return {c:'bad',t:'Entrega prevista neste mês: informe o status.'}; if(!isDue(s,n)&&!r.status)return {c:'warn',t:'Etapa ativa, mas sem vencimento periódico neste mês. Registre monitoramento se houver.'}; if(r.status==='Cumprida'&&db.config.strict&&!r.evidence.trim()&&!Object.values(r.ev||{}).some(Boolean))return {c:'bad',t:'Marcada como cumprida, mas ainda sem meio de verificação/evidência registrado.'}; if((r.status==='Não cumprida'||r.status==='Cumprida parcialmente'||r.status==='Sem demanda')&&!r.notes.trim())return {c:'warn',t:'Inclua justificativa/encaminhamento para sustentar o status informado.'}; return {c:'good',t:'Registro com consistência básica.'}}
function renderKPIs(){let n=db.current, act=stages.filter(s=>isActive(s,n)), due=stages.filter(s=>isDue(s,n)), filled=act.filter(s=>monthRecord(n,s.c).status).length, good=due.filter(s=>monthRecord(n,s.c).status==='Cumprida').length;document.getElementById('kpis').innerHTML=[['Mês contratual',`M${n} / ${db.config.duration}`],['Etapas ativas',act.length],['Entregas com vencimento',due.length],['Preenchimento',act.length?Math.round(filled/act.length*100)+'%':'—']].map(x=>`<div class="card kpi"><div class="value">${x[1]}</div><div class="label">${x[0]}</div></div>`).join('');const pct=Math.min(100,Math.round(n/db.config.duration*100));document.getElementById('contractProgress').innerHTML=`<div><b>${fmtMonth(addMonths(db.config.start,n-1))}</b> — início ${new Date(db.config.start+'T12:00:00').toLocaleDateString('pt-BR')} / término ${endDate().toLocaleDateString('pt-BR')}</div><div class="progress" style="margin-top:10px"><span style="width:${pct}%"></span></div><div class="small" style="margin-top:6px">${pct}% das competências contratuais alcançadas no calendário.</div>`;document.getElementById('currentCompetence').innerHTML=`<b>${fmtMonth(addMonths(db.config.start,n-1))}</b><br><span class="small">Coordenador(a): ${coordFor(n)||'não configurado'} · ${due.length} entrega(s) com vencimento.</span>`;let pend=due.filter(s=>monthRecord(n,s.c).status!=='Cumprida');document.getElementById('pendingList').innerHTML=pend.length?pend.map(s=>`<div style="padding:8px;border-bottom:1px solid #edf1f5"><b>Etapa ${s.c}</b> — ${s.t} <span class="badge ${statusClass(monthRecord(n,s.c).status)}">${monthRecord(n,s.c).status||'sem preenchimento'}</span></div>`).join(''):'<span class="badge ok">Todas as entregas previstas estão marcadas como cumpridas</span>'}
function monthOptions(){const sel=document.getElementById('monthSelect');sel.innerHTML=range(1,db.config.duration).map(n=>`<option value="${n}" ${n===db.current?'selected':''}>M${n} — ${fmtMonth(addMonths(db.config.start,n-1))}</option>`).join('')}
function setMonth(n){db.current=Math.max(1,Math.min(db.config.duration,n));save();renderAll()}function shiftMonth(d){setMonth(db.current+d)}
function statusOptions(val,s,n){let opts=['','Cumprida','Cumprida parcialmente','Não cumprida','Em apuração'];let allow=db.config.noDemand==='all'||(db.config.noDemand==='demand'&&/demanda|emprést|passagens|acompanh/i.test((s.r||'')+(s.t||'')));if(allow)opts.push('Sem demanda');if(!isActive(s,n))opts=['Não prevista no mês'];return opts.map(o=>`<option ${o===val?'selected':''}>${o}</option>`).join('')}
function evidenceChecks(s,n,r){const labels={report:'Relatório',presence:'Lista de presença',photo:'Registro fotográfico',system:'Sistema JuventudES',other:'Outro documento'};return Object.entries(labels).map(([k,l])=>`<label><input type="checkbox" ${r.ev?.[k]?'checked':''} onchange="setEv('${s.c}',${n},'${k}',this.checked)">${l}</label>`).join('')}

function autoStageBlock(r){
  const a=r?.auto;
  if(!a?.indicators?.length)return '';
  const rows=a.indicators.map(x=>{
    const id=Number(x.identifiedValue||0),ag=Number(x.aggregateValue||0),uniq=Number(x.uniqueYouth||0);
    const target=x.target==null?'':` · referência ${x.target} ${x.unit||''}`;
    const window=x.windowStart&&x.windowEnd?` · janela ${x.windowStart}–${x.windowEnd}`:'';
    let value='',source='';
    if(ag>0&&id>0){
      value=`${id} identificados + ${ag} agregados`;
      source=`Não deduplicável${uniq? ` · ${uniq} jovem(ns) único(s) identificado(s)`:''}`;
    }else if(ag>0){
      value=`${ag} agregados`;
      source='Sem trajetória nominal';
    }else{
      value=`${id} ${x.unit||''}`;
      source=uniq?`${uniq} jovem(ns) único(s) identificado(s)`:'Rastreável pela origem';
    }
    return `<div class="auto-feed-row"><div><b>${esc(x.label||x.code)}</b><small>${esc(x.code||'')}${esc(target)}${esc(window)}</small></div><strong>${esc(value)}</strong><span>${esc(source)}</span></div>`;
  }).join('');
  return `<div class="auto-feed"><div class="auto-feed-head"><div><b>Alimentação automática — CRJ Trajetórias</b><small>Dados operacionais sincronizados. O preenchimento manual não é apagado.</small></div><span class="badge ${a.hasAggregate?'due':'ok'}">${a.hasAggregate?'contém agregado — conferir sobreposição':'rastreável por origem'}</span></div>${rows}<div class="auto-feed-foot">Última sincronização: ${esc(a.updatedAt?new Date(a.updatedAt).toLocaleString('pt-BR'):'—')}</div></div>`;
}

function renderMonthly(){const n=db.current;document.getElementById('monthTitle').textContent=`M${n} — ${fmtMonth(addMonths(db.config.start,n-1))}`;let show=document.getElementById('showInactive')?.checked;let html='';for(let m=1;m<=9;m++){let ss=stages.filter(s=>s.m===m&&(show||isActive(s,n)));if(!ss.length)continue;html+=`<div class="meta-group"><div class="meta-head"><div><b>Meta ${m}</b> — ${metas[m]}</div><small>${ss.filter(s=>isDue(s,n)).length} vencimento(s) nesta competência</small></div>`;for(const s of ss){const r=monthRecord(n,s.c),val=validateStage(s,n);html+=`<div class="stage"><div class="stage-top"><div><span class="stage-code">Etapa ${s.c}</span><span class="stage-name">${s.t}</span><span class="explain">?<span class="tip"><b>Como justificar:</b> ${s.why}<br><br><b>Periodicidade:</b> ${s.cad}.${s.conflict?'<br><br><b>Atenção documental:</b> '+s.conflict:''}</span></span><div style="margin-top:7px">${isActive(s,n)?'<span class="badge active">ativa no cronograma</span>':'<span class="badge na">fora do cronograma</span>'} ${isDue(s,n)?'<span class="badge due">entrega vencendo</span>':''} <span class="badge na">${s.cad}</span></div></div><div class="small"><b>Responsável vigente:</b><br>${coordFor(n)||'Coordenação não configurada'}</div><div>${s.conflict?'<span class="badge bad">conflito documental</span>':''}</div></div><div class="stage-details"><div class="detail"><b>Resultado esperado</b>${s.r}</div><div class="detail"><b>Indicador</b>${s.i}</div><div class="detail"><b>Meio de verificação oficial</b>${s.v}</div></div><div class="subitems"><b style="font-size:12px">Itens/subitens que o sistema recomenda comprovar</b><ul>${s.subs.map(x=>`<li>${x}</li>`).join('')}</ul></div>${autoStageBlock(r)}<div class="form-grid"><div class="field"><label>Status da etapa no mês</label><select onchange="setField('${s.c}',${n},'status',this.value)" ${!isActive(s,n)?'disabled':''}>${statusOptions(r.status,s,n)}</select></div><div class="field"><label>Realizado / valor do indicador</label><input value="${esc(r.realized)}" onchange="setField('${s.c}',${n},'realized',this.value)" placeholder="Ex.: 380; 100%; 1 reunião"></div><div class="field wide"><label>Meios de verificação disponíveis</label><div class="evidence-row">${evidenceChecks(s,n,r)}</div></div><div class="field full"><label>Evidências / documentos / links / nomes de arquivos</label><textarea onchange="setField('${s.c}',${n},'evidence',this.value)" placeholder="Ex.: Ata_28-09.pdf; Lista_Presenca.xlsx; pasta Drive...">${esc(r.evidence)}</textarea></div><div class="field full"><label>Justificativa técnica, resultado e encaminhamento</label><textarea onchange="setField('${s.c}',${n},'notes',this.value)" placeholder="Explique o que foi realizado, como o indicador foi obtido e, se parcial/não cumprido/sem demanda, o motivo e a providência.">${esc(r.notes)}</textarea></div></div><div class="validation ${val.c}">${val.t}</div></div>`}html+='</div>'}document.getElementById('monthlyContent').innerHTML=html}
function esc(v){return String(v??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
function setField(c,n,k,v){if(!canEdit())return alert('Seu perfil é somente leitura.');monthRecord(n,c)[k]=v;save();renderKPIs();renderSheet();renderMonthly()}
function setEv(c,n,k,v){if(!canEdit())return alert('Seu perfil é somente leitura.');monthRecord(n,c).ev??={};monthRecord(n,c).ev[k]=v;save();renderKPIs();renderSheet()}
function displayValue(s,n){const r=monthRecord(n,s.c);if(!isActive(s,n))return '—';if(r.realized)return r.realized;if(r.status==='Cumprida')return '1';if(r.status==='Não cumprida')return '0';if(r.status==='Sem demanda')return '0 — sem demanda';return ''}
function renderSheet(){let months=range(1,db.config.duration),html=`<thead><tr><th style="min-width:90px">META</th><th class="desc">INDICADORES CONTRATUAIS</th><th class="indicator">INDICADOR</th>${months.map(n=>`<th class="monthcell">M${n}<br>${fmtMonth(addMonths(db.config.start,n-1)).replace(' de ','/')}</th>`).join('')}<th class="notes">OBSERVAÇÕES / JUSTIFICATIVAS</th></tr></thead><tbody>`;for(let m=1;m<=9;m++){html+=`<tr class="section"><td>Meta ${m}</td><td colspan="${months.length+3}">${metas[m]}</td></tr>`;for(const s of stages.filter(x=>x.m===m)){html+=`<tr><td>Etapa ${s.c}</td><td class="desc">${s.t}</td><td class="indicator">${s.target!==undefined?s.target+' '+(s.unit||''):s.i}</td>${months.map(n=>`<td class="monthcell">${isActive(s,n)?`<input value="${esc(displayValue(s,n))}" title="${esc(monthRecord(n,s.c).status||'Sem status')}" onchange="setField('${s.c}',${n},'realized',this.value)">`:'—'}</td>`).join('')}<td class="notes">${months.map(n=>monthRecord(n,s.c).notes).filter(Boolean).slice(-2).map(esc).join('<hr>')}</td></tr>`}}html+='</tbody>';document.getElementById('contractSheet').innerHTML=html}
function switchView(id){document.querySelectorAll('.view').forEach(x=>x.classList.toggle('active',x.id===id));document.querySelectorAll('.tab').forEach(x=>x.classList.toggle('active',x.dataset.view===id));if(id==='sheetView')renderSheet();if(id==='monthlyView')renderMonthly()}
document.querySelectorAll('.tab').forEach(b=>b.onclick=()=>switchView(b.dataset.view));
function renderConfig(){document.getElementById('cfgStart').value=db.config.start;document.getElementById('cfgDuration').value=db.config.duration;document.getElementById('cfgUnit').value=db.config.unit;document.getElementById('cfgTerm').value=db.config.term;document.getElementById('cfgOrg').value=db.config.org;document.getElementById('cfgAgency').value=db.config.agency;document.getElementById('cfgInterpretation').value=db.config.interpretation||'';document.getElementById('cfgStrict').checked=!!db.config.strict;document.getElementById('cfgHours').value=['120','160'].includes(String(db.config.hours))?String(db.config.hours):'custom';document.getElementById('cfgAttendance').value=db.config.attendance||380;document.getElementById('cfgNoDemand').value=db.config.noDemand||'demand';renderCoordinators()}
function saveConfig(){if(!canEdit())return alert('Seu perfil é somente leitura.');db.config={...db.config,start:document.getElementById('cfgStart').value,duration:+document.getElementById('cfgDuration').value||18,unit:document.getElementById('cfgUnit').value,term:document.getElementById('cfgTerm').value,org:document.getElementById('cfgOrg').value,agency:document.getElementById('cfgAgency').value,interpretation:document.getElementById('cfgInterpretation').value,strict:document.getElementById('cfgStrict').checked,hours:document.getElementById('cfgHours').value==='custom'?db.config.hours:document.getElementById('cfgHours').value,attendance:+document.getElementById('cfgAttendance').value||380,noDemand:document.getElementById('cfgNoDemand').value};db.current=Math.min(db.current,db.config.duration);save();renderAll();alert('Configurações salvas.')}
function renderCoordinators(){document.getElementById('coordinatorList').innerHTML=db.coordinators.map((x,i)=>`<div class="coordinator-row"><input value="${esc(x.name)}" placeholder="Nome do(a) coordenador(a)" data-ci="${i}" data-k="name"><input type="date" value="${x.start||''}" data-ci="${i}" data-k="start"><input type="date" value="${x.end||''}" data-ci="${i}" data-k="end"><button class="btn-danger" onclick="removeCoordinator(${i})">Excluir</button></div>`).join('')}
function addCoordinator(){if(!canEdit())return alert('Seu perfil é somente leitura.');db.coordinators.push({name:'',start:monthKey(db.current)+'-01',end:''});renderCoordinators()}function removeCoordinator(i){if(!canEdit())return alert('Seu perfil é somente leitura.');db.coordinators.splice(i,1);renderCoordinators()}function saveCoordinators(){if(!canEdit())return alert('Seu perfil é somente leitura.');document.querySelectorAll('[data-ci]').forEach(el=>db.coordinators[+el.dataset.ci][el.dataset.k]=el.value);save();renderAll();alert('Histórico de coordenação salvo.')}
function backupJSON(){const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(db,null,2)],{type:'application/json'}));a.download=`backup_metas_crj_${monthKey(db.current)}.json`;a.click();URL.revokeObjectURL(a.href)}
function restoreJSON(e){if(!canEdit())return alert('Seu perfil é somente leitura.');const f=e.target.files[0];if(!f)return;const rd=new FileReader();rd.onload=()=>{try{db=JSON.parse(rd.result);save();renderAll();alert('Backup restaurado.')}catch{alert('Arquivo JSON inválido.')}};rd.readAsText(f)}

function exportXLSX(){if(typeof XLSX==='undefined'){alert('A biblioteca de Excel não carregou. Verifique a conexão e tente novamente. Você ainda pode usar Imprimir/PDF e Backup JSON.');return}const out=XLSX.utils.book_new();let cfg=[['SISTEMA DE METAS CRJ — CONFIGURAÇÕES'],['Unidade',db.config.unit],['OSC',db.config.org],['Órgão',db.config.agency],['Termo',db.config.term],['Início',db.config.start],['Duração (meses)',db.config.duration],['Término',endDate().toLocaleDateString('pt-BR')],['Critério/Interpretação',db.config.interpretation],[],['COORDENADORES'],['Nome','Início','Fim'],...db.coordinators.map(x=>[x.name,x.start,x.end])];XLSX.utils.book_append_sheet(out,XLSX.utils.aoa_to_sheet(cfg),'CONFIG');
let cons=[['META','ETAPA','INDICADOR CONTRATUAL','INDICADOR/REFERÊNCIA',...range(1,db.config.duration).map(n=>`M${n} ${fmtMonth(addMonths(db.config.start,n-1))}`),'OBSERVAÇÕES']];stages.forEach(s=>cons.push([`Meta ${s.m}`,`Etapa ${s.c}`,s.t,s.target!==undefined?`${s.target} ${s.unit||''}`:s.i,...range(1,db.config.duration).map(n=>displayValue(s,n)),range(1,db.config.duration).map(n=>monthRecord(n,s.c).notes).filter(Boolean).join(' | ')]));XLSX.utils.book_append_sheet(out,XLSX.utils.aoa_to_sheet(cons),'QUANTITATIVO');
for(const n of range(1,db.config.duration)){let rows=[['RELATÓRIO MENSAL DE METAS — CRJ'],['Competência',`M${n} — ${fmtMonth(addMonths(db.config.start,n-1))}`],['Coordenador(a)',coordFor(n)],[],['Meta','Etapa','Detalhamento / Especificação','Resultado esperado','Indicador','Meio de verificação','Status','Realizado','Evidências','Justificativa / Encaminhamento']];stages.filter(s=>isActive(s,n)).forEach(s=>{let r=monthRecord(n,s.c);rows.push([`Meta ${s.m}`,s.c,s.t,s.r,s.i,s.v,r.status,r.realized,r.evidence,r.notes])});let name=`M${String(n).padStart(2,'0')}-${monthKey(n).replace('-','')}`.slice(0,31);XLSX.utils.book_append_sheet(out,XLSX.utils.aoa_to_sheet(rows),name)}XLSX.writeFile(out,`Metas_CRJ_${db.config.unit.replace(/[^a-z0-9]/gi,'_')}_${monthKey(db.current)}.xlsx`)}
function renderAll(){monthOptions();renderKPIs();renderMonthly();renderSheet();renderConfig();if(appRole)applyRoleUI()}
renderAll();
initSupabase();