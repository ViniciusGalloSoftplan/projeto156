(function () {
    //Secretarias
    var SECRETARIAS = {
        ADMGOV:   "Secretaria Municipal de Administração e Governo",
        AGRIMA:   "Secretaria Municipal de Agricultura, Abastecimento e Meio Ambiente",
        ASOCIAL:  "Secretaria Municipal de Assistência, Desenvolvimento Social e Família",
        CGMP:     "Corregedoria Geral do Município",
        CIDADANIA:"Secretaria Municipal de Cidadania e Parcerias",
        CULTURA:  "Secretaria Municipal de Cultura",
        EDUCACAO: "Secretaria Municipal de Educação",
        FINANCAS: "Secretaria Municipal de Finanças",
        GABINETE: "Gabinete do Prefeito",
        GCMP:     "Guarda Civil do Município de Piracicaba",
        HABITACAO:"Secretaria Municipal de Habitação e Regularização Fundiária",
        OBRAS:    "Secretaria Municipal de Obras, Infraestrutura e Serviços Públicos",
        PGM:      "Procuradoria Geral do Município",
        SAUDE:    "Secretaria Municipal de Saúde",
        SEGTRANS: "Secretaria Municipal de Segurança Pública, Trânsito e Transportes",
        SELAM:    "Secretaria Municipal de Esportes, Lazer e Atividades Motoras",
        SEMDEC:   "Secretaria Municipal de Desenvolvimento Econômico, Indústria e Comércio",
        SEMTRE:   "Secretaria Municipal de Trabalho, Emprego e Renda",
        TURISMO:  "Secretaria Municipal de Turismo"
    };

  // Utilitários
    function getFormScope() {
        try { return angular.element(document.body).scope(); } catch (e) { return null; }
    }

    function forceDigest() {
        var scope = getFormScope();
        if (scope && !scope.$$phase) {
            scope.$applyAsync();
        }
    }

    //Usuário
    function getLoginEl() {
        return document.getElementById('usuarioAlteracao');
    }

    function getLoginNg() {
        var el = getLoginEl();
        if (!el) return { el: null, ngEl: null, ctrl: null, scope: null };
        var ngEl  = angular.element(el);
        var ctrl  = ngEl.controller('ngModel');
        var scope = ngEl.scope();
        return { el: el, ngEl: ngEl, ctrl: ctrl, scope: scope };
    }

    function setCampoLoginViaNgModel(novoLogin) {
        var ref   = getLoginNg();
        var scope = ref.scope || getFormScope();
        if (!ref.ctrl || !scope) return false;

        scope.$applyAsync(function () {
            ref.ctrl.$setViewValue(novoLogin);
            ref.ctrl.$render();
        });
        return true;
    }

    function dispararEventosCampoLogin(valorAtual) {
        var ref = getLoginNg();
        if (!ref.el) return;

        var el = ref.el;
        var estavaDesabilitado = el.hasAttribute('disabled');

        if (estavaDesabilitado) el.removeAttribute('disabled');
        el.value = valorAtual != null ? String(valorAtual) : '';

        try {
            el.dispatchEvent(new Event('input',  { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
        } catch (e) {
            var ev1 = document.createEvent('Event'); ev1.initEvent('input',  true, true);  el.dispatchEvent(ev1);
            var ev2 = document.createEvent('Event'); ev2.initEvent('change', true, true);  el.dispatchEvent(ev2);
        }

        if (estavaDesabilitado) el.setAttribute('disabled', 'disabled');
    }

    //Setor
    function getSiglaEl() {
        return document.getElementById('siglaSetorPadraoAtual');
    }

    function getSiglaNg() {
        var el = getSiglaEl();
        if (!el) return { el: null, ngEl: null, ctrl: null, scope: null };
        var ngEl  = angular.element(el);
        var ctrl  = ngEl.controller('ngModel');
        var scope = ngEl.scope();
        return { el: el, ngEl: ngEl, ctrl: ctrl, scope: scope };
    }

    function setCampoSiglaViaNgModel(novoSigla) {
        var ref   = getSiglaNg();
        var scope = ref.scope || getFormScope();
        if (!ref.ctrl || !scope) return false;

        scope.$applyAsync(function () {
            ref.ctrl.$setViewValue(novoSigla);
            ref.ctrl.$render();
        });
        return true;
    }

    function dispararEventosCampoSigla(valorAtual) {
        var ref = getSiglaNg();
        if (!ref.el) return;

        var el = ref.el;
        var estavaDesabilitado = el.hasAttribute('disabled');

        if (estavaDesabilitado) el.removeAttribute('disabled');
        el.value = valorAtual != null ? String(valorAtual) : '';

        try {
            el.dispatchEvent(new Event('input',  { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
        } catch (e) {
            var ev1 = document.createEvent('Event'); ev1.initEvent('input',  true, true);  el.dispatchEvent(ev1);
            var ev2 = document.createEvent('Event'); ev2.initEvent('change', true, true);  el.dispatchEvent(ev2);
        }

        if (estavaDesabilitado) el.setAttribute('disabled', 'disabled');
    }

    function verificaDescricaoSetor() {
        var arr = model.setoresUsuario;
        if (!Array.isArray(arr) || arr.length === 0) {
            if (ultimaDescricaoSetor !== null) {
                ultimaDescricaoSetor = null;
                model.descricaoSetorPadraoAtual = "";
                forceDigest();
            }
            return;
        }

        var item = arr[0];
        var nm = item && item.nmOrgaoSetor ? String(item.nmOrgaoSetor) : "";

        if (nm && nm !== ultimaDescricaoSetor) {
            ultimaDescricaoSetor = nm;
            model.descricaoSetorPadraoAtual = nm;
            forceDigest();
        }
    }

    var ultimoUsuarioId = null;
    var ultimaUnidadeSigla = null;
    var ultimaDescricaoSetor = null;


    // Limpeza Campos
    function limparUsuario() {
        model.usuarioAlteracao = "";
        model.nomeUsuario = "";
        model.emailUsuario = "";
        model.cdUsuarios = [];

        limparUnidade();

        ultimoUsuarioId = null;

        forceDigest();
    }

    function limparUnidade() {
        model.siglaSetorPadraoAtual = "";
        model.secretariaAtual = "";
        model.descricaoSetorPadraoAtual = "";
        model.setoresUsuario = [];
        model.setorPadraoUsuario = [];
        ultimaUnidadeSigla   = null;
        ultimaDescricaoSetor = null;

        forceDigest();
    }

    // Usuário
    function verificaUsuario() {
        var f = model.consultaUsuario;

        if (!f || !f.cdUsuario) {
            if (ultimoUsuarioId !== null) limparUsuario();
            return;
        }

        if (f.cdUsuario !== ultimoUsuarioId) {
            ultimoUsuarioId = f.cdUsuario;

            model.usuarioAlteracao = f.cdUsuario;
            model.nomeUsuario = f.nmUsuario;
            model.emailUsuario = f.deEmail;
            model.cdUsuarios = [ String(model.usuarioAlteracao) ];

            setCampoLoginViaNgModel(f.cdUsuario);
            dispararEventosCampoLogin(f.cdUsuario);

            forceDigest();
        }
    }

    // Unidade
    function verificaUnidade() {
        var lista = model.setorPadraoUsuario;

        if (!Array.isArray(lista) || lista.length === 0 || !lista[0] || !lista[0].unidadePadrao || !lista[0].unidadePadrao.sgUnidade) {
            if (ultimaUnidadeSigla !== null) limparUnidade();
        return;
        }

        var sgUnidade = String(lista[0].unidadePadrao.sgUnidade);

        if (sgUnidade !== ultimaUnidadeSigla) {
            ultimaUnidadeSigla = sgUnidade;
            model.siglaSetorPadraoAtual = sgUnidade;
            
            var siglaSecretaria = sgUnidade.split('/')[0];
            model.secretariaAtual = SECRETARIAS[siglaSecretaria] || siglaSecretaria || "Secretaria Municipal";

            setCampoSiglaViaNgModel(sgUnidade);
            dispararEventosCampoSigla(sgUnidade);
            forceDigest();
        }
    }

    setInterval(function () {
        try {
            verificaUsuario();
            verificaUnidade();
            verificaDescricaoSetor();
        } catch (e) {
            if (console && console.error) console.error('Loop verificação erro:', e);
        }
    }, 200);

    try {
        verificaUsuario();
        verificaUnidade();
        verificaDescricaoSetor();
    } catch (e) {}

})();