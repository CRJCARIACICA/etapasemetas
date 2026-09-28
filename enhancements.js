/* CRJ Metas v2 — interpretação documental, evidências e plano mensal de responsabilidades */
(function(){
  const DEFAULT_ACTORS=[
    {name:'Coordenação-geral',start:'',end:'',note:'Gestão, orientação, acompanhamento da execução e entregas mensais de metas.'},
    {name:'Coordenação de Articulação',start:'',end:'',note:'Território, mobilização, rede, Grupo Gestor, atividades externas e LABPoca.'},
    {name:'Articuladores locais',start:'',end:'',note:'Mobilização, busca ativa, registros territoriais e aproximação com juventudes.'},
    {name:'Educadores Sociais',start:'',end:'',note:'Acolhimento cotidiano, registros de participação/atendimento, oficinas e CFDH.'},
    {name:'Equipe Técnica (AS/Psicologia/TO)',start:'',end:'',note:'Acompanhamentos, encaminhamentos, PVida/PTrampo e público prioritário.'},
    {name:'Auxiliar Administrativo',start:'',end:'',note:'Documentos, listas, arquivos, planilhas, frequência, apoio financeiro e compras.'},
    {name:'Oficineiros',start:'',end:'',note:'Execução técnica das oficinas e produção dos registros próprios das atividades.'},
    {name:'Assessoria de Monitoramento / Gerência de Projetos',start:'',end:'',note:'Monitoramento, avaliação, pesquisa de satisfação e análise dos resultados.'},
    {name:'Administrativo/Financeiro da OSC',start:'',end:'',note:'Prestação de contas financeira e documentação correlata.'},
    {name:'Projeto Agente de Integração Escola / SEDU',start:'',end:'',note:'Ações específicas de integração escola, reuniões e visitas.'},
    {name:'Equipe CRJ em conjunto',start:'',end:'',note:'Responsabilidade compartilhada quando a entrega depende de diferentes funções.'}
  ];

  const SUGGESTIONS={
    '1.1':{p:'Coordenação-geral',s:'Auxiliar Administrativo; Coordenação de Articulação',b:'A coordenação-geral zela pela manutenção do espaço; o administrativo apoia documentos, compras e arquivos.'},
    '1.2':{p:'Coordenação-geral',s:'Auxiliar Administrativo',b:'A coordenação-geral participa da seleção e gere a equipe; o administrativo organiza contratos e documentos.'},
    '1.3':{p:'Coordenação-geral',s:'Coordenação de Articulação; Articuladores locais',b:'A coordenação-geral garante o Grupo Gestor e a Coordenação de Articulação também responde por sua efetivação e reuniões.'},
    '2.1':{p:'Educadores Sociais',s:'Auxiliar Administrativo; Articuladores locais; Equipe Técnica (AS/Psicologia/TO)',b:'Educadores são responsáveis pelos registros de participação e atendimentos; o administrativo organiza os registros consolidados.'},
    '2.2':{p:'Educadores Sociais',s:'Equipe Técnica (AS/Psicologia/TO)',b:'Educadores são referência cotidiana das juventudes; a equipe técnica apoia acompanhamentos e encaminhamentos.'},
    '2.3':{p:'Coordenação de Articulação',s:'Articuladores locais; Educadores Sociais',b:'A articulação mobiliza e aproxima o CRJ das juventudes; articuladores realizam busca ativa e mobilização.'},
    '3.1':{p:'Coordenação-geral',s:'Coordenação de Articulação; Equipe CRJ em conjunto',b:'Grupo Gestor é atribuição expressa das duas coordenações, com participação da equipe.'},
    '4.1':{p:'Equipe Técnica (AS/Psicologia/TO)',s:'Educadores Sociais; Coordenação-geral',b:'A equipe técnica constrói Planejamentos de Vida e Trabalho e acompanha demandas; educadores mantêm vínculo e registros.'},
    '4.2':{p:'Coordenação-geral',s:'Educadores Sociais; Equipe Técnica (AS/Psicologia/TO); Coordenação de Articulação; Oficineiros',b:'É uma entrega agregada do Núcleo Socioafirmativo; demanda coordenação da execução e registros das várias funções.'},
    '4.3':{p:'Coordenação-geral',s:'Equipe Técnica (AS/Psicologia/TO); Educadores Sociais; Coordenação de Articulação; Oficineiros',b:'É uma entrega agregada do Núcleo de Economia Criativa, Trabalho e Renda.'},
    '4.4':{p:'Coordenação de Articulação',s:'Coordenação-geral; Equipe Técnica (AS/Psicologia/TO)',b:'A Coordenação de Articulação articula a rede pública/privada e fortalece trabalho interinstitucional.'},
    '4.5':{p:'Coordenação de Articulação',s:'Equipe Técnica (AS/Psicologia/TO); Educadores Sociais',b:'Mostras dependem de articulação com rede, profissionais e instituições; equipe técnica/educadores apoiam jovens.'},
    '4.6':{p:'Coordenação-geral',s:'Educadores Sociais; Oficineiros; Coordenação de Articulação; Auxiliar Administrativo',b:'A coordenação-geral acompanha a execução; educadores acompanham oficinas; administrativo consolida frequência e documentos.'},
    '5.1':{p:'Coordenação de Articulação',s:'Equipe Técnica (AS/Psicologia/TO); Articuladores locais',b:'Mapeamento de serviços e rede é aderente às atribuições de articulação territorial e interlocução com políticas públicas.'},
    '5.2':{p:'Coordenação de Articulação',s:'Equipe Técnica (AS/Psicologia/TO); Coordenação-geral',b:'A articulação com a rede local é atribuição expressa da Coordenação de Articulação e também envolve equipe técnica.'},
    '6.1':{p:'Educadores Sociais',s:'Coordenação-geral; Oficineiros; Auxiliar Administrativo; Coordenação de Articulação',b:'Cola Aê envolve acolhimento, oficinas, registros e CFDH; educadores são referência direta e acompanham oficineiros.'},
    '6.2':{p:'Equipe Técnica (AS/Psicologia/TO)',s:'Educadores Sociais; Coordenação-geral',b:'PVida e acompanhamentos individuais/coletivos estão diretamente ligados à equipe técnica, com apoio dos educadores.'},
    '6.3':{p:'Coordenação de Articulação',s:'Equipe Técnica (AS/Psicologia/TO); Educadores Sociais',b:'#FicaADica exige atualização de políticas/serviços e conexão com a rede local; articulação e equipe técnica sustentam essa ponte.'},
    '6.4':{p:'Equipe Técnica (AS/Psicologia/TO)',s:'Educadores Sociais; Coordenação de Articulação; Coordenação-geral; Oficineiros',b:'PTrampo/Planejamentos de Trabalho envolvem equipe técnica; cursos e oportunidades exigem apoio de educadores/articulação.'},
    '6.5':{p:'Educadores Sociais',s:'Coordenação-geral; Coordenação de Articulação; Auxiliar Administrativo',b:'Educadores acompanham Trampo Coletivo/LABPoca; coordenações garantem gestão e articulação; administrativo apoia controle.'},
    '6.6':{p:'Coordenação de Articulação',s:'Equipe Técnica (AS/Psicologia/TO); Educadores Sociais; Coordenação-geral',b:'A metodologia atribui à Coordenação de Articulação a efetivação do LABPoca junto à equipe técnica.'},
    '6.7':{p:'Coordenação de Articulação',s:'Coordenação-geral; Articuladores locais; Equipe Técnica (AS/Psicologia/TO)',b:'#TamoJunto é articulação constante com a rede e integração interinstitucional.'},
    '7.1':{p:'Coordenação de Articulação',s:'Projeto Agente de Integração Escola / SEDU; Coordenação-geral',b:'Alinhamento com SEDU é articulação interinstitucional e deve envolver a governança do CRJ.'},
    '7.2':{p:'Coordenação-geral',s:'Coordenação de Articulação; Projeto Agente de Integração Escola / SEDU',b:'Reunião entre coordenações demanda condução da coordenação-geral e integração do projeto.'},
    '7.3':{p:'Coordenação de Articulação',s:'Articuladores locais; Equipe Técnica (AS/Psicologia/TO); Projeto Agente de Integração Escola / SEDU',b:'Visitas externas, território e integração escolar se alinham à Coordenação de Articulação, com apoio da rede/equipe.'},
    '8.1':{p:'Coordenação-geral',s:'Equipe CRJ em conjunto',b:'A coordenação-geral organiza formações frequentes dos membros da equipe.'},
    '9.1':{p:'Assessoria de Monitoramento / Gerência de Projetos',s:'Coordenação-geral; Auxiliar Administrativo',b:'O próprio Plano atribui o acompanhamento à Assessoria de Monitoramento e Gerência de Projetos.'},
    '9.2':{p:'Assessoria de Monitoramento / Gerência de Projetos',s:'Coordenação-geral',b:'A etapa integra o sistema de monitoramento e avaliação e produz o instrumento de pesquisa.'},
    '9.3':{p:'Assessoria de Monitoramento / Gerência de Projetos',s:'Coordenação-geral; Auxiliar Administrativo',b:'Pesquisa e relatório de satisfação pertencem ao monitoramento; administrativo apoia organização dos instrumentos.'},
    '9.4':{p:'Coordenação-geral',s:'Assessoria de Monitoramento / Gerência de Projetos; Auxiliar Administrativo',b:'A coordenação-geral elabora junto à equipe as entregas de acompanhamento; monitoramento consolida análise dos resultados.'},
    '9.5':{p:'Administrativo/Financeiro da OSC',s:'Coordenação-geral; Auxiliar Administrativo; Assessoria de Monitoramento / Gerência de Projetos',b:'Prestação de contas combina execução e financeiro; o administrativo apoia controle financeiro/documental.'},
    '9.6':{p:'Administrativo/Financeiro da OSC',s:'Coordenação-geral; Assessoria de Monitoramento / Gerência de Projetos; Auxiliar Administrativo',b:'Relatório final deve consolidar execução, monitoramento e financeiro.'}
  };

  const EXPLICIT_METRICS={
    '1.1':'1 contrato de locação vigente + 1 documento/e-mail confirmando infraestrutura adequada.',
    '1.2':'100% da equipe mínima reintegrada/contratada.',
    '1.3':'No mínimo 1 reunião do Grupo Gestor + 1 e-mail de conclusão da remobilização.',
    '2.1':'380 atendimentos por mês; a Etapa registra 6.840 em 18 meses, mas há conflito com outra referência do Termo e com o cronograma.',
    '2.2':'100% de acolhimento individualizado e coletivo, conforme redação da etapa.',
    '2.3':'100% de acesso dos jovens ao CRJ, conforme redação da etapa.',
    '3.1':'1 Grupo Gestor Local formado/atuante.',
    '4.1':'Acompanhamento de 100% do PTrampo; 15 jovens mensais; mínimo de 8 atividades relacionadas (periodicidade das 8 não deve ser inventada).',
    '4.2':'100% das atividades propostas para o Núcleo Socioafirmativo e de Acesso.',
    '4.3':'100% das atividades propostas para o Núcleo de Economia Criativa, Trabalho e Renda.',
    '4.4':'100% das atividades previstas para o Núcleo de Parcerias. O documento não fixa quantidade mínima de parcerias.',
    '4.5':'1 Mostra de Profissões por semestre; até 60 participantes é limite da edição, não mínimo.',
    '4.6':'Mínimo de 120 jovens ao ano + mínimo de 160 horas mensais; há conflito com 120 horas na Etapa 6.4.',
    '5.1':'1 mapeamento anual.',
    '5.2':'1 reunião mensal com a rede de proteção social.',
    '6.1':'1.920h/ano; média 160h/mês; 20 jovens por oficina/curso; 120h de CFDH/semestre; até 400 passagens/mês (limite); 1 evento/mês; até 40 participações culturais (limite); 1 mostra/semestre.',
    '6.2':'1 PVida; 4 horas mensais de atividades; 45 participações individuais/coletivas; acompanhar 100% das demandas eventuais.',
    '6.3':'Subsidiar 100% do trabalho com o portfólio. Não há quantidade mínima explícita de consultas/subsídios.',
    '6.4':'1 PTrampo; 15 jovens/mês; 8 atividades relacionadas; tabela registra 120h/mês; 120 jovens/ano; 1 mostra/semestre com 60 participantes/edição. Há conflito de horas.',
    '6.5':'100% da promoção/gestão do coworking; satisfação superior a 85%.',
    '6.6':'100% do funcionamento do LABPoca; satisfação superior a 85%.',
    '6.7':'100% do desenvolvimento do Núcleo de Parcerias. Não há mínimo explícito de encontros/parcerias; não inventar quantidade.',
    '7.1':'1 reunião mensal com a SEDU.',
    '7.2':'1 reunião mensal com as coordenações do CRJ.',
    '7.3':'1 visita mensal às escolas. Referência “até 70%” não deve ser convertida em mínimo.',
    '8.1':'1 capacitação bimestral.',
    '9.1':'Acompanhamento constante; indicador conta relatórios/pesquisas mensais, mas o documento não fixa quantidade mínima adicional.',
    '9.2':'1 formulário de pesquisa de satisfação.',
    '9.3':'1 pesquisa/relatório bimestral; aprovação superior a 85%.',
    '9.4':'1 relatório trimestral.',
    '9.5':'1 relatório de prestação de contas mensal.',
    '9.6':'1 relatório de prestação de contas final.'
  };

  const CONFLICTS={
    '2.1':{
      title:'Atendimentos — 4.560 x 6.840 x cronograma M2–M18',
      why:'O texto geral da Meta 2 fala em 4.560 atendimentos ao longo de 18 meses; a Etapa 2.1 determina 380 por mês e totaliza 6.840; já o cronograma físico marca a execução de M2 a M18, ou seja, 17 competências operacionais. As três referências não podem ser conciliadas por simples cálculo sem escolher uma redação em detrimento de outra.',
      how:'Não corrigir nem redistribuir silenciosamente. Manter as três referências visíveis e registrar orientação formal da SEDH/Avante no campo de critério oficial. Para o mês, registrar o realizado real e a evidência; não criar quantidade para compensar outro período.'
    },
    '4.6':{
      title:'Cursos/oficinas — 160h x 120h mensais',
      why:'A Etapa 4.6 e a parte descritiva do Núcleo de Economia Criativa/Tô no Topo usam carga mínima de 160 horas mensais, enquanto a tabela da Etapa 6.4 registra 120 horas mensais.',
      how:'Preservar os dois números. A coordenação deve registrar qual critério foi formalmente confirmado pelo contratante e anexar e-mail, despacho, ata ou documento equivalente. Sem orientação, o sistema apenas sinaliza a divergência.'
    },
    '6.4':{
      title:'Cursos/oficinas — 120h na Etapa 6.4 x 160h em outras partes do Plano',
      why:'A própria Etapa 6.4, na tabela de metas, registra 120 horas mensais, enquanto a Etapa 4.6 e o texto descritivo do eixo Tô no Topo registram 160 horas mensais.',
      how:'Não alterar a redação de nenhuma etapa. Registrar o critério oficial adotado e a fonte dessa decisão; o relatório deve mencionar a divergência quando ela impactar a aferição.'
    },
    '8.1':{
      title:'Formação continuada — cronograma recorrente x entrega bimestral',
      why:'O cronograma mantém a etapa ativa ao longo das competências operacionais, enquanto a redação da entrega fixa uma capacitação bimestral.',
      how:'Tratar os meses intermediários como acompanhamento/planejamento e cobrar a comprovação quantitativa apenas no fechamento bimestral. Não inventar uma capacitação mensal.'
    },
    '9.2':{
      title:'Formulário de satisfação — cronograma recorrente x criação unitária',
      why:'O cronograma mantém a etapa recorrente, mas a obrigação descrita é elaborar 1 formulário. Repetir “1 formulário” em cada mês criaria entregas que o texto não estabeleceu.',
      how:'Cobrar a criação uma única vez; nos meses seguintes registrar uso, manutenção ou atualização, quando houver, sem contar novo formulário.'
    }
  };

  const baseMonthRecord=window.monthRecord;
  const baseRenderConfig=window.renderConfig;
  const baseSaveConfig=window.saveConfig;
  const baseApplyRoleUI=window.applyRoleUI;
  const baseRenderAll=window.renderAll;
  const baseSwitchView=window.switchView;

  function ensureV2(){
    db.config ||= {};
    if(!db.config.term) db.config.term='Termo de Colaboração nº 005/2025';
    db.responsibilityActors ||= structuredClone(DEFAULT_ACTORS);
    if(!Array.isArray(db.responsibilityActors)||!db.responsibilityActors.length) db.responsibilityActors=structuredClone(DEFAULT_ACTORS);
    db.responsibilityVersion ||= 1;
  }
  window.ensureV2=ensureV2;

  window.monthRecord=function(n,c){
    const r=baseMonthRecord(n,c);
    const sug=SUGGESTIONS[c]||{p:'Equipe CRJ em conjunto',s:'',b:''};
    r.conflictResolution ??='';
    r.resp ??={primary:sug.p,support:sug.s,order:'',deadline:'',status:'Planejada',expectedEvidence:'',notes:''};
    r.resp.primary ||= sug.p;
    if(r.resp.support===undefined)r.resp.support=sug.s;
    if(r.resp.status===undefined)r.resp.status='Planejada';
    return r;
  };

  function metricText(s){return EXPLICIT_METRICS[s.c]||'Sem meta numérica adicional identificada. Aferir o resultado esperado e o indicador descritos no Plano.'}
  window.metricText=metricText;
  function suggestion(s){return SUGGESTIONS[s.c]||{p:'Equipe CRJ em conjunto',s:'',b:'Responsabilidade sugerida por aderência geral à execução do CRJ.'}}

  function evidenceInstruction(s){
    const src=(s.v||'').toLowerCase();
    const tips=[];
    tips.push(`<b>Meio oficial:</b> ${esc(s.v||'Não especificado no quadro; use somente documento institucional vinculado à execução.')}`);
    if(/lista|presen|frequ/.test(src))tips.push('A lista deve identificar atividade, data/competência e permitir conferir o quantitativo; consolide o total sem depender apenas de fotografia.');
    if(/foto|fotogr/.test(src))tips.push('Identifique data, atividade e contexto. Foto isolada comprova realização visual, mas não substitui lista/sistema para demonstrar quantitativos.');
    if(/ata|reuni/.test(src))tips.push('A ata/memória deve registrar data, participantes, pauta, decisões e encaminhamentos.');
    if(/sistema juventud/.test(src))tips.push('Registre o relatório, tela, protocolo ou extração do Sistema JuventudES referente à competência, quando disponível.');
    if(/contrato|aso|admission/.test(src))tips.push('Use documento vigente/assinado e informe a referência que permite conferir validade e vínculo com a etapa.');
    if(/mapeamento/.test(src))tips.push('O relatório deve conter data de atualização, serviços/unidades identificados e responsável pela consolidação.');
    if(/parceria/.test(src))tips.push('Diferencie articulação de parceria formalizada: identifique instituição, objeto, período e documento de formalização quando exigido.');
    if(/satisfa|formulário|formulario|pesquisa/.test(src))tips.push('Preserve o instrumento/base e apresente o cálculo do indicador quando houver percentual; guarde o relatório consolidado.');
    if(/prestação|prestacao|documento final/.test(src))tips.push('Guarde a versão final e também o comprovante/protocolo de entrega quando existir.');
    if(/certific/.test(src))tips.push('Relacionar certificado/comprovante à formação, participante e período, quando aplicável.');
    if(/atendimento|acolh|encaminh/.test((s.t+' '+s.r+' '+s.i).toLowerCase()))tips.push('Evite expor dados pessoais sensíveis no relatório geral; use identificação mínima, código ou registro protegido quando necessário.');
    tips.push('No campo “Evidências”, informe nomes dos arquivos, links institucionais, protocolos ou local de arquivamento; no campo “Justificativa”, explique como a evidência demonstra o resultado.');
    return tips.map(x=>`<li>${x}</li>`).join('');
  }
  window.evidenceInstruction=evidenceInstruction;

  function conflictInfo(s){return CONFLICTS[s.c]||null}

  window.validateStage=function(s,n){
    if(!isActive(s,n)) return {c:'good',t:'Não prevista nesta competência pelo cronograma físico.'};
    const r=monthRecord(n,s.c);
    if(isDue(s,n)&&!r.status)return {c:'bad',t:'Entrega prevista neste mês: informe o status.'};
    if(!isDue(s,n)&&!r.status)return {c:'warn',t:'Etapa ativa, mas sem vencimento quantitativo nesta competência. Registre acompanhamento quando houver; não invente entrega mensal.'};
    if(r.status==='Cumprida'&&db.config.strict&&!r.evidence.trim()&&!Object.values(r.ev||{}).some(Boolean))return {c:'bad',t:'Marcada como cumprida, mas ainda sem meio de verificação/evidência registrado.'};
    if((r.status==='Não cumprida'||r.status==='Cumprida parcialmente'||r.status==='Sem demanda')&&!r.notes.trim())return {c:'warn',t:'Inclua justificativa e encaminhamento para sustentar o status informado.'};
    if(conflictInfo(s)&&!String(r.conflictResolution||db.config.interpretation||'').trim())return {c:'warn',t:'Há conflito/divergência documental nesta etapa. Registre o critério formal adotado ou a pendência de orientação.'};
    return {c:'good',t:'Registro com consistência básica. Valores numéricos só devem refletir metas/indicadores expressos no documento ou realizado comprovado.'};
  };

  window.displayValue=function(s,n){
    const r=monthRecord(n,s.c);
    if(!isActive(s,n))return '—';
    if(String(r.realized||'').trim())return r.realized;
    return r.status||'';
  };

  window.renderMonthly=function(){
    ensureV2();
    const n=db.current;
    document.getElementById('monthTitle').textContent=`M${n} — ${fmtMonth(addMonths(db.config.start,n-1))}`;
    const show=document.getElementById('showInactive')?.checked;
    let html='';
    for(let m=1;m<=9;m++){
      const ss=stages.filter(s=>s.m===m&&(show||isActive(s,n)));if(!ss.length)continue;
      html+=`<div class="meta-group"><div class="meta-head"><div><b>Meta ${m}</b> — ${metas[m]}</div><small>${ss.filter(s=>isDue(s,n)).length} vencimento(s) nesta competência</small></div>`;
      for(const s of ss){
        const r=monthRecord(n,s.c),val=validateStage(s,n),ci=conflictInfo(s),sg=suggestion(s);
        html+=`<div class="stage">
          <div class="stage-top"><div><span class="stage-code">Etapa ${s.c}</span><span class="stage-name">${s.t}</span><span class="explain">?<span class="tip"><b>Como justificar:</b> ${s.why}<br><br><b>Periodicidade:</b> ${s.cad}.<br><br><b>Regra anti-invenção:</b> registre número apenas quando estiver expresso no Plano/Termo ou quando for o valor efetivamente realizado.</span></span><div style="margin-top:7px">${isActive(s,n)?'<span class="badge active">ativa no cronograma</span>':'<span class="badge na">fora do cronograma</span>'} ${isDue(s,n)?'<span class="badge due">entrega vencendo</span>':''} <span class="badge na">${s.cad}</span></div></div><div class="small"><b>Coordenação vigente:</b><br>${esc(coordFor(n)||'não configurada')}</div><div>${ci?'<span class="badge bad">conflito/divergência documental</span>':''}</div></div>
          <div class="stage-details"><div class="detail"><b>Resultado esperado</b>${s.r}</div><div class="detail"><b>Indicador oficial</b>${s.i}</div><div class="detail"><b>Meio de verificação oficial</b>${s.v}</div></div>
          <div class="document-rule"><b>Parâmetro documental — sem inventar meta</b><div>${esc(metricText(s))}</div></div>
          ${ci?`<div class="conflict-box"><b>${esc(ci.title)}</b><p><strong>Por que há conflito:</strong> ${esc(ci.why)}</p><p><strong>Como proceder:</strong> ${esc(ci.how)}</p><div class="field"><label>Critério/orientação aplicada nesta competência</label><textarea onchange="setField('${s.c}',${n},'conflictResolution',this.value)" placeholder="Ex.: orientação formal da SEDH/Avante, e-mail, despacho, ata ou registrar que aguarda definição.">${esc(r.conflictResolution)}</textarea></div></div>`:''}
          <div class="responsibility-hint"><b>Responsabilidade sugerida</b><div><strong>Principal:</strong> ${esc(sg.p)} · <strong>Apoio:</strong> ${esc(sg.s||'—')}</div><div class="small">${esc(sg.b)} <button class="btn-link" onclick="switchView('responsibilityView')">Configurar ordem mensal</button></div></div>
          <div class="subitems"><b style="font-size:12px">O que comprovar</b><ul>${s.subs.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>
          <div class="evidence-guide"><b>Como preencher a evidência</b><ul>${evidenceInstruction(s)}</ul></div>
          <div class="form-grid"><div class="field"><label>Status da etapa no mês</label><select onchange="setField('${s.c}',${n},'status',this.value)" ${!isActive(s,n)?'disabled':''}>${statusOptions(r.status,s,n)}</select></div><div class="field"><label>Realizado / valor efetivamente apurado</label><input value="${esc(r.realized)}" onchange="setField('${s.c}',${n},'realized',this.value)" placeholder="Preencha somente valor real apurado; não invente meta"></div><div class="field wide"><label>Tipos de evidência disponíveis</label><div class="evidence-row">${evidenceChecks(s,n,r)}</div></div><div class="field full"><label>Evidências / documentos / links / nomes de arquivos</label><textarea onchange="setField('${s.c}',${n},'evidence',this.value)" placeholder="Ex.: Ata_28-09.pdf; Lista_Presenca.xlsx; relatório JuventudES; protocolo...">${esc(r.evidence)}</textarea></div><div class="field full"><label>Justificativa técnica, resultado e encaminhamento</label><textarea onchange="setField('${s.c}',${n},'notes',this.value)" placeholder="Explique o realizado e a relação com o indicador. Se não houver meta numérica explícita, descreva o resultado esperado alcançado, sem criar quantidade.">${esc(r.notes)}</textarea></div></div>
          <div class="validation ${val.c}">${val.t}</div>
        </div>`;
      }
      html+='</div>';
    }
    document.getElementById('monthlyContent').innerHTML=html;
    applyRoleUI();
  };

  window.renderSheet=function(){
    ensureV2();
    const months=range(1,db.config.duration);
    let html=`<thead><tr><th style="min-width:90px">META</th><th class="desc">INDICADORES CONTRATUAIS</th><th class="indicator">PARÂMETRO / RESULTADO</th>${months.map(n=>`<th class="monthcell">M${n}<br>${fmtMonth(addMonths(db.config.start,n-1)).replace(' de ','/')}</th>`).join('')}<th class="notes">OBSERVAÇÕES / JUSTIFICATIVAS</th></tr></thead><tbody>`;
    for(let m=1;m<=9;m++){
      html+=`<tr class="section"><td>Meta ${m}</td><td colspan="${months.length+3}">${metas[m]}</td></tr>`;
      for(const s of stages.filter(x=>x.m===m)){
        html+=`<tr><td>Etapa ${s.c}</td><td class="desc">${s.t}${conflictInfo(s)?'<br><span class="badge bad">ver conflito documental</span>':''}</td><td class="indicator">${esc(metricText(s))}</td>${months.map(n=>`<td class="monthcell">${isActive(s,n)?`<input value="${esc(displayValue(s,n))}" title="${esc(monthRecord(n,s.c).status||'Sem status')}" onchange="setField('${s.c}',${n},'realized',this.value)">`:'—'}</td>`).join('')}<td class="notes">${months.map(n=>monthRecord(n,s.c).notes).filter(Boolean).slice(-2).map(esc).join('<hr>')}</td></tr>`;
      }
    }
    document.getElementById('contractSheet').innerHTML=html+'</tbody>';
    applyRoleUI();
  };

  function actorsForMonth(n){
    ensureV2();
    const t=addMonths(db.config.start,n-1).getTime();
    return db.responsibilityActors.filter(a=>{
      const st=a.start?new Date(a.start+'T00:00:00').getTime():-Infinity;
      const en=a.end?new Date(a.end+'T23:59:59').getTime():Infinity;
      return t>=st&&t<=en;
    });
  }
  function respRec(n,c){return monthRecord(n,c).resp}
  function defaultOrder(s){
    const base=`Executar/acompanhar a Etapa ${s.c} — ${s.t} — conforme a competência e reunir os meios de verificação previstos.`;
    return `${base} Parâmetro documental: ${metricText(s)}`;
  }
  window.setRespField=function(c,n,k,v){if(!canEdit())return alert('Seu perfil é somente leitura.');const r=respRec(n,c);r[k]=v;save();renderResponsibilityPlan();renderMonthly()};

  window.renderResponsibilityPlan=function(){
    ensureV2();
    const root=document.getElementById('responsibilityContent');if(!root)return;
    const n=db.current, active=stages.filter(s=>isActive(s,n)), actors=actorsForMonth(n);
    const sel=document.getElementById('respMonthSelect');if(sel)sel.innerHTML=range(1,db.config.duration).map(x=>`<option value="${x}" ${x===n?'selected':''}>M${x} — ${fmtMonth(addMonths(db.config.start,x-1))}</option>`).join('');
    const datalist=`<datalist id="respActors">${actors.map(a=>`<option value="${esc(a.name)}"></option>`).join('')}</datalist>`;
    const by={};active.forEach(s=>{const rr=respRec(n,s.c),p=rr.primary||suggestion(s).p;(by[p]??=[]).push(`Etapa ${s.c}`)});
    const summary=Object.entries(by).map(([p,items])=>`<div class="team-summary"><b>${esc(p)}</b><span>${items.join(', ')}</span></div>`).join('');
    let html=`${datalist}<div class="card"><h3>Distribuição da competência</h3><p class="small">As sugestões vêm das atribuições da metodologia. A coordenação pode alterar o responsável em cada mês sem modificar o histórico dos meses anteriores.</p><div class="team-summary-grid">${summary||'<span class="small">Sem etapas ativas.</span>'}</div></div>`;
    for(const s of active){
      const rr=respRec(n,s.c),sg=suggestion(s),ci=conflictInfo(s);
      if(!rr.order)rr.order=defaultOrder(s);
      if(!rr.expectedEvidence)rr.expectedEvidence=s.v;
      html+=`<div class="responsibility-card"><div class="responsibility-head"><div><span class="stage-code">Etapa ${s.c}</span><b>${esc(s.t)}</b><div class="small">Meta ${s.m} · ${esc(metas[s.m])}</div></div><div>${ci?'<span class="badge bad">conflito documental</span>':''}</div></div>
        <div class="responsibility-source"><b>Sugestão metodológica:</b> ${esc(sg.p)}${sg.s?' · apoio: '+esc(sg.s):''}<br><span class="small">${esc(sg.b)}</span></div>
        <div class="document-rule"><b>Parâmetro da ordem</b>${esc(metricText(s))}</div>
        <div class="form-grid">
          <div class="field"><label>Responsável principal</label><input list="respActors" value="${esc(rr.primary)}" onchange="setRespField('${s.c}',${n},'primary',this.value)" placeholder="Selecione ou digite"></div>
          <div class="field"><label>Equipe de apoio / corresponsáveis</label><input list="respActors" value="${esc(rr.support)}" onchange="setRespField('${s.c}',${n},'support',this.value)" placeholder="Pode informar mais de uma equipe"></div>
          <div class="field full"><label>Ordem / entrega mensal</label><textarea onchange="setRespField('${s.c}',${n},'order',this.value)">${esc(rr.order)}</textarea></div>
          <div class="field"><label>Prazo interno (opcional)</label><input type="date" value="${esc(rr.deadline)}" onchange="setRespField('${s.c}',${n},'deadline',this.value)"><span class="small">O sistema não inventa prazo contratual; este campo é de gestão interna.</span></div>
          <div class="field"><label>Status da ordem</label><select onchange="setRespField('${s.c}',${n},'status',this.value)">${['Planejada','Em andamento','Concluída','Pendente','Reprogramada'].map(x=>`<option ${x===rr.status?'selected':''}>${x}</option>`).join('')}</select></div>
          <div class="field full"><label>Evidência esperada para entrega</label><textarea onchange="setRespField('${s.c}',${n},'expectedEvidence',this.value)">${esc(rr.expectedEvidence)}</textarea></div>
          <div class="field full"><label>Observação / alinhamento da coordenação</label><textarea onchange="setRespField('${s.c}',${n},'notes',this.value)" placeholder="Orientações específicas, divisão interna, dependências, retorno da SEDH/Avante...">${esc(rr.notes)}</textarea></div>
        </div>
      </div>`;
    }
    root.innerHTML=html;applyRoleUI();
  };

  function actorRows(){
    const box=document.getElementById('responsibilityActorsList');if(!box)return;
    box.innerHTML=db.responsibilityActors.map((a,i)=>`<div class="actor-row"><input value="${esc(a.name)}" data-ai="${i}" data-ak="name" placeholder="Equipe/função ou nome"><input type="date" value="${esc(a.start||'')}" data-ai="${i}" data-ak="start"><input type="date" value="${esc(a.end||'')}" data-ai="${i}" data-ak="end"><button class="btn-danger" onclick="removeResponsibilityActor(${i})">Excluir</button><div class="small actor-note">${esc(a.note||'')}</div></div>`).join('');
  }
  window.addResponsibilityActor=function(){if(!canEdit())return alert('Seu perfil é somente leitura.');db.responsibilityActors.push({name:'',start:'',end:'',note:''});actorRows();applyRoleUI()};
  window.removeResponsibilityActor=function(i){if(!canEdit())return alert('Seu perfil é somente leitura.');db.responsibilityActors.splice(i,1);actorRows()};
  window.saveResponsibilityActors=function(){if(!canEdit())return alert('Seu perfil é somente leitura.');document.querySelectorAll('[data-ai]').forEach(el=>db.responsibilityActors[+el.dataset.ai][el.dataset.ak]=el.value);save();renderResponsibilityPlan();alert('Equipes/responsáveis disponíveis salvos.')};

  function renderConflictDashboard(){
    const box=document.getElementById('documentConflictAlerts');if(!box)return;
    box.innerHTML=`<div class="alert"><strong>Regra geral de leitura</strong>O sistema separa <b>meta quantitativa explícita</b>, <b>resultado esperado</b>, <b>indicador</b> e <b>limite máximo (“até”)</b>. Quando o documento não fixa número mínimo, nenhuma quantidade será criada pelo sistema.</div>`+Object.values(CONFLICTS).map(x=>`<div class="alert bad"><strong>${esc(x.title)}</strong><b>Por que:</b> ${esc(x.why)}<br><b>Tratamento:</b> ${esc(x.how)}</div>`).join('');
  }

  window.renderConfig=function(){ensureV2();baseRenderConfig();document.getElementById('cfgAttendance').value='380';document.getElementById('cfgAttendance').readOnly=true;actorRows();};
  window.saveConfig=function(){document.getElementById('cfgAttendance').value='380';baseSaveConfig();};
  window.applyRoleUI=function(){baseApplyRoleUI();const ro=!canEdit();document.querySelectorAll('#responsibilityView input,#responsibilityView select,#responsibilityView textarea').forEach(el=>el.disabled=ro);};

  window.switchView=function(id){baseSwitchView(id);if(id==='responsibilityView')renderResponsibilityPlan();};

  function responsibilityRows(n){
    return stages.filter(s=>isActive(s,n)).map(s=>{const r=respRec(n,s.c);return [`Meta ${s.m}`,`Etapa ${s.c}`,s.t,metricText(s),r.order||defaultOrder(s),r.primary||suggestion(s).p,r.support||suggestion(s).s,r.deadline||'',r.expectedEvidence||s.v,r.status||'Planejada',r.notes||'',conflictInfo(s)?(monthRecord(n,s.c).conflictResolution||db.config.interpretation||'Pendente de critério formal'):''];});
  }
  window.exportResponsibilityXLSX=function(){
    if(typeof XLSX==='undefined')return alert('Biblioteca de Excel indisponível. Use Documento HTML ou Imprimir/PDF.');
    const n=db.current,wb=XLSX.utils.book_new();
    const head=[['PLANO MENSAL DE RESPONSABILIDADES — CRJ'],['Competência',`M${n} — ${fmtMonth(addMonths(db.config.start,n-1))}`],['Unidade',db.config.unit],['Coordenação vigente',coordFor(n)],['Termo',db.config.term],[],['Meta','Etapa','Etapa/entrega','Parâmetro documental','Ordem mensal','Responsável principal','Apoio/corresponsáveis','Prazo interno','Evidência esperada','Status','Observações','Critério de conflito']];
    const rows=responsibilityRows(n);XLSX.utils.book_append_sheet(wb,XLSX.utils.aoa_to_sheet([...head,...rows]),`RESP_M${String(n).padStart(2,'0')}`);
    const groups={};rows.forEach(r=>{(groups[r[5]]??=[]).push(r)});let g=[['PLANO POR EQUIPE'],['Competência',`M${n} — ${fmtMonth(addMonths(db.config.start,n-1))}`],[],['Responsável','Etapa','Ordem','Prazo','Evidência','Status']];Object.entries(groups).forEach(([p,items])=>items.forEach(r=>g.push([p,r[1],r[4],r[7],r[8],r[9]])));XLSX.utils.book_append_sheet(wb,XLSX.utils.aoa_to_sheet(g),'POR_EQUIPE');
    XLSX.writeFile(wb,`Plano_Responsabilidades_CRJ_M${String(n).padStart(2,'0')}_${monthKey(n)}.xlsx`);
  };

  function planHtml(n){
    const rows=responsibilityRows(n);return `<!doctype html><html lang="pt-BR"><meta charset="utf-8"><title>Plano de Responsabilidades M${n}</title><style>body{font-family:Arial,sans-serif;margin:28px;color:#1f2937}h1{font-size:22px}table{border-collapse:collapse;width:100%;font-size:11px}th,td{border:1px solid #bbb;padding:6px;vertical-align:top}th{background:#eee}.small{color:#555}</style><h1>Plano Mensal de Responsabilidades — CRJ</h1><p><b>Competência:</b> M${n} — ${fmtMonth(addMonths(db.config.start,n-1))}<br><b>Unidade:</b> ${esc(db.config.unit)}<br><b>Coordenação:</b> ${esc(coordFor(n)||'não configurada')}<br><b>Termo:</b> ${esc(db.config.term||'')}</p><table><thead><tr><th>Meta/Etapa</th><th>Ordem mensal</th><th>Parâmetro documental</th><th>Responsável</th><th>Apoio</th><th>Prazo</th><th>Evidência esperada</th><th>Status</th></tr></thead><tbody>${rows.map(r=>`<tr><td>${esc(r[0])}<br>${esc(r[1])}<br><span class="small">${esc(r[2])}</span></td><td>${esc(r[4])}</td><td>${esc(r[3])}</td><td>${esc(r[5])}</td><td>${esc(r[6])}</td><td>${esc(r[7])}</td><td>${esc(r[8])}</td><td>${esc(r[9])}</td></tr>`).join('')}</tbody></table><p class="small">Documento gerado pelo Sistema de Metas CRJ. Prazos internos configurados pela coordenação não substituem prazos contratuais.</p></html>`;}
  window.downloadResponsibilityHTML=function(){const n=db.current,a=document.createElement('a');a.href=URL.createObjectURL(new Blob([planHtml(n)],{type:'text/html'}));a.download=`Plano_Responsabilidades_CRJ_M${String(n).padStart(2,'0')}_${monthKey(n)}.html`;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)};
  function planText(n){
    const rows=responsibilityRows(n);return `PLANO MENSAL DE RESPONSABILIDADES — CRJ\nCompetência: M${n} — ${fmtMonth(addMonths(db.config.start,n-1))}\nUnidade: ${db.config.unit}\nCoordenação: ${coordFor(n)||'não configurada'}\n\n`+rows.map(r=>`${r[1]} — ${r[2]}\nResponsável: ${r[5]}\nApoio: ${r[6]||'—'}\nOrdem: ${r[4]}\nPrazo interno: ${r[7]||'não definido'}\nEvidência: ${r[8]}\nStatus: ${r[9]}\n`).join('\n');
  }
  window.shareResponsibilityPlan=async function(){
    const n=db.current,text=planText(n),html=planHtml(n),file=new File([html],`Plano_Responsabilidades_M${String(n).padStart(2,'0')}.html`,{type:'text/html'});
    try{
      if(navigator.share){if(navigator.canShare?.({files:[file]}))await navigator.share({title:`Plano de Responsabilidades CRJ M${n}`,text,files:[file]});else await navigator.share({title:`Plano de Responsabilidades CRJ M${n}`,text});return;}
      await navigator.clipboard.writeText(text);alert('Seu navegador não oferece compartilhamento direto. O plano foi copiado para a área de transferência.');
    }catch(e){if(e?.name!=='AbortError'){try{await navigator.clipboard.writeText(text);alert('Não foi possível abrir o compartilhamento. O plano foi copiado para a área de transferência.')}catch{alert('Não foi possível compartilhar neste navegador. Exporte o Excel ou documento HTML.')}}}
  };
  window.printResponsibilityPlan=function(){switchView('responsibilityView');setTimeout(()=>window.print(),120)};

  window.exportXLSX=function(){
    if(typeof XLSX==='undefined'){alert('A biblioteca de Excel não carregou. Verifique a conexão e tente novamente.');return}
    ensureV2();const out=XLSX.utils.book_new();
    let cfg=[['SISTEMA DE METAS CRJ — CONFIGURAÇÕES'],['Unidade',db.config.unit],['OSC',db.config.org],['Órgão',db.config.agency],['Termo',db.config.term],['Início',db.config.start],['Duração (meses)',db.config.duration],['Término',endDate().toLocaleDateString('pt-BR')],['Critério/Interpretação',db.config.interpretation],[],['COORDENADORES'],['Nome','Início','Fim'],...db.coordinators.map(x=>[x.name,x.start,x.end]),[],['EQUIPES/RESPONSÁVEIS DISPONÍVEIS'],['Nome/Função','Início','Fim'],...db.responsibilityActors.map(x=>[x.name,x.start,x.end])];XLSX.utils.book_append_sheet(out,XLSX.utils.aoa_to_sheet(cfg),'CONFIG');
    let cons=[['META','ETAPA','INDICADOR CONTRATUAL','PARÂMETRO / RESULTADO DOCUMENTAL',...range(1,db.config.duration).map(n=>`M${n} ${fmtMonth(addMonths(db.config.start,n-1))}`),'OBSERVAÇÕES']];stages.forEach(s=>cons.push([`Meta ${s.m}`,`Etapa ${s.c}`,s.t,metricText(s),...range(1,db.config.duration).map(n=>displayValue(s,n)),range(1,db.config.duration).map(n=>monthRecord(n,s.c).notes).filter(Boolean).join(' | ')]));XLSX.utils.book_append_sheet(out,XLSX.utils.ao_to_sheet?XLSX.utils.ao_to_sheet(cons):XLSX.utils.aoa_to_sheet(cons),'QUANTITATIVO');
    for(const n of range(1,db.config.duration)){
      let rows=[['RELATÓRIO MENSAL DE METAS — CRJ'],['Competência',`M${n} — ${fmtMonth(addMonths(db.config.start,n-1))}`],['Coordenador(a)',coordFor(n)],[],['Meta','Etapa','Detalhamento / Especificação','Resultado esperado','Indicador','Parâmetro documental','Meio de verificação','Status','Realizado','Evidências','Justificativa / Encaminhamento','Critério de conflito']];stages.filter(s=>isActive(s,n)).forEach(s=>{let r=monthRecord(n,s.c);rows.push([`Meta ${s.m}`,s.c,s.t,s.r,s.i,metricText(s),s.v,r.status,r.realized,r.evidence,r.notes,r.conflictResolution||''])});let name=`M${String(n).padStart(2,'0')}-${monthKey(n).replace('-','')}`.slice(0,31);XLSX.utils.book_append_sheet(out,XLSX.utils.aoa_to_sheet(rows),name);
      const rr=[['PLANO DE RESPONSABILIDADES'],['Competência',`M${n} — ${fmtMonth(addMonths(db.config.start,n-1))}`],[],['Meta','Etapa','Etapa/entrega','Parâmetro documental','Ordem mensal','Responsável principal','Apoio','Prazo interno','Evidência esperada','Status','Observação','Critério de conflito'],...responsibilityRows(n)];XLSX.utils.book_append_sheet(out,XLSX.utils.aoa_to_sheet(rr),`RESP_M${String(n).padStart(2,'0')}`.slice(0,31));
    }
    XLSX.writeFile(out,`Metas_CRJ_${db.config.unit.replace(/[^a-z0-9]/gi,'_')}_${monthKey(db.current)}.xlsx`);
  };

  window.renderAll=function(){ensureV2();baseRenderAll();renderConflictDashboard();renderResponsibilityPlan();actorRows();};

  ensureV2();
  renderConflictDashboard();
  renderResponsibilityPlan();
  actorRows();
  applyRoleUI();
})();