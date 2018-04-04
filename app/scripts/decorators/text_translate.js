"use strict";

/**
 * @ngdoc function
 * @name financieraClienteApp.decorator:TextTranslate
 * @description
 * # TextTranslate
 * Decorator of the financieraClienteApp
 */
var text_es = {
    ABONO_CUENTA: "Abono en Cuenta",
    ACH: "ACH",
    ACTIVO: "Activo",
    ACTUALIZADO: "Actualizado",
    ACTUALIZAR: "Actualizar",
    ACTUALIZAR_COMPROMISO: "Actualizar Compromiso",
    ADICION_FUENTE_FINANCIAMIENTO: "Adición Fuente de Financiamiento",
    AFECTACION: "Afectación",
    AFECTACION_CONCEPTO: "Ingresar Afectación por Conceptos",
    AFECTACION_CONTABLE: "Afectación Contable",
    AFECTACION_PRESUPUESTAL: "Afectación Presupuestal",
    AGREGAR_DEPENDENCIA: "Agregar Dependencia",
    AGREGAR_REQUISITO: "Añadir Requisito",
    AGREGAR_REGISTRO_ESTUDIANTE: "Agregar registro de estudiante",
    ALERTA_SELECCIONAR_CUENTA: "Es necesario seleccionar la cuenta contable",
    ALERTA_SELECCIONAR_CUENTA_SIN_HIJOS: "Únicamente se pueden seleccionar cuentas que no tengan hijos",
    ALERTA_SELECCIONAR_PROVEEDOR: "Es necesario seleccionar un proveedor",
    ANADIR: "Añadir",
    ANULACION_CDP_TITULO_FORM: "Anulación de CDP",
    ANULACION_PARCIAL: "Parcial",
    ANULACION_TOTAL: "Total",
    ANULAR: "Anular",
    ANULAR_PRESUPUESTO: "Anular Presupuesto",
    ANO: "Año",
    APELLIDOS: "Apellidos",
    APROBACION_PRESUPUESTO: "Aprobación de Presupuesto",
    APROBACION_CONTABLE: "Aprobación de Contabilidad",
    APROBAR_AVANCE: "Aprobar Avance",
    APROBAR: "Aprobar",
    AVANCE_NO: "Avance No.",
    AVANCES: "Avances",
    BANCO: "Banco",
    BANCOS: "Bancos",
    BASE_UVT: "Base UVT",
    BENEFECIARIO: "Beneficiario",
    BORRAR: "Borrar",
    BUSCAR: "Buscar",
    CALENDARIO_TRIBUTARIO: "Calendario Tributario",
    CARGUE_MASIVO_RP: "Cargue Masivo RP",
    CARGANDO: "Cargando ...",
    CARNET: "Carné",
    CAMBIAR_PADRE: "Cambiar Padre",
    CATEGORIA: "Categoría",
    CATEGORIAS_TIPOS: "Categorías y Tipos",
    CDP: "CDP",
    CDP_NUMERO: "CDP No.",
    CHEQUE: "Cheque",
    CIERRE_PERIODO_PAC:"CIERRE PERIODO",
    CLASIFICACION: "Clasificación",
    CODIGO: "Código",
    CODIGO_ABREVIACION: "Código de Abreviación",
    CODIGO_CONVENIO: "Código de Convenio",
    CODIGO_ESTUDIANTE: "Código del estudiante",
    CODIGO_PADRE: "Código Padre",
    CODIGO_PROYECTO: "Código del Proyecto",
    CODIGO_SUPER: "Código Superintendencia",
    MSN_DEBE_FORMA_VIGENCIA: "El formato para la vigencia es AAAA",
    COMPANIA: "Compañía",
    COMPROMISO: "Compromiso",
    COMPROMISO_NO: "Compromiso No.",
    COMPROMISOS: "Compromisos",
    CONCEPTO: "Concepto",
    CONCEPTOS: "Conceptos",
    CONFIGURAR: "Configurar",
    CONSECUTIVO: "Consecutivo",
    CONSULTA_APROBACION_INICIAL: "Consulta de Apropiación Inicial",
    CONSULTA_INGRESOS: "Consulta Ingresos",
    CONSULTA_RUBRO: "Consulta de Rubros",
    CONTRATO: "Contrato",
    CONVENIO: "Convenio",
    CORREO_ELECTRONICO: "Correo Electrónico",
    COMPROBACION_APROBACION_INICIAL: "Comprobación de apropiación inicial",
    CREACION: "Creación",
    CREADO: "Creado",
    CREAR_FUENTE: "Asignar Fuente Financiamiento",
    CREDITO: "Crédito",
    CRP: "CRP",
    CUENTA: "Cuenta",
    CUENTAS_CONTABLES: "Cuentas Contables",
    CUENTA_CREDITO: "Cuenta Credito",
    CUENTA_CONTRA_CREDITO: "Cuenta Contra Credito",
    CUENTAS_SELECCIONADAS: "Cuentas Seleccionadas",
    CUENTA_BANCARIA: "Cuenta Bancaria",
    CUENTA_CONTABLE: "Cuenta Contable",
    CUENTA_PADRE: "Cuenta Padre",
    DATOS_NECESIDAD: "Datos de la Necesidad",
    DATOS_MOVIMIENTO: "Datos del Movimiento Presupuestal",
    DATOS_SOLICITUD_MODIFICACION_PRES: "Datos de la Solicitud",
    DATOS_REG_INGRESO: "Datos para este ingreso",
    DEBITO: "Débito",
    DEDUCIBLE: "Deducible",
    DENOMINACION: "Denominación",
    DEPENDENCIA: "Dependencia",
    DEPENDENCIAS: "Dependecias",
    DEPENDENCIA_DESTINO: "Dependencia Destino",
    DEPENDENCIA_SOLICITANTE: "Dependencia Solicitante",
    DESCRIPCION: "Descripción",
    DESCRIPCION_AVANCES: "Descripción de Avances",
    DESCRIPCION_COMPROMISO: "Descripción Compromiso",
    DESCRIPCION_PLAN: " Descripción del nuevo plan...",
    DESAPROBACION_CONTABLE: "Desaprobación Contable",
    DESAPROBACION_PRESUPUESTAL: "Desaprobación Presupuestal",
    DESEA_ACTUALIZAR_COMPROMISO: "Desea actualizar el Compromiso?",
    DESEA_ACTUALIZAR_DESCUENTO: "Desea actualizar el Descuento o Impuesto?",
    DESEA_ACTUALIZAR_CONCEPTO: "Desea actualizar el Concepto?",
    DESEA_ACTUALIZAR_CUENTA: "Desea actualizar la cuenta contable?",
    DESEA_CREAR_CATEGORIA: "Desea crear una nueva categoría?",
    DESEA_CREAR_COMPROMISO: "Desea crear un nuevo compromiso?",
    DESEA_CREAR_TIPO_COMPROMISO: "Desea crear un nuevo tipo de compromiso?",
    DESEA_CREAR_CONCEPTO: "Desea crear un nuevo concepto tesoral?",
    DESEA_CANCELAR_COMPROMISO: "Desea cancelar el Compromiso?",
    DESEA_CREAR_CUENTA: "Desea crear nueva cuenta contable?",
    DETALLE: "Detalle",
    DETALLE_AVANCES: "Detalle de Avances",
    DETALLE_CRP: "Detalle CRP",
    DETALLE_OP: "Detalle Orden de Pago",
    DETALLE_ORDEN_PAGO: "Detalle Orden de Pago",
    DETALLE_PROVEEDOR: "Detalle Proveedor",
    DETALLE_RP: "Registro Presupuestal No ",
    DETALLE_UNIDAD_EJECUTORA: "Detalle Unidad Ejecutora",
    DETALLE_VALOR_PAGO: "Detalle Valor Pago",
    DIFERENCIA: "Diferencia",
    DIRECCION: "Dirección",
    DISPONIBLE: "Disponible",
    DOCUMENTO: "Documento",
    DOCUMENTO_NIT: "Documento o Nit.",
    DURACION: "Duración",
    EDITAR: "Editar",
    EDITAR_PLAN_CUENTAS: "Editar plan de Cuentas",
    EDITAR_REQUISITO_AVANCE: "Editar Requisito de Avance",
    EDITAR_TIPO_AVANCE: "Editar Tipo de Avance",
    EDITAR_CUENTA: "Editar Cuenta Contable",
    EFECTIVO: "Efectivo",
    EGRESO: "Egreso",
    ELABORADO_POR: "Elaborado Por",
    ELIMINADO: "Eliminado",
    ELIMINARA: "Se eliminará",
    CANCELAR_COMPROMISO: "Cancelar Compromiso",
    EDITAR_REGISTRO_ESTUDIANTE: "Editar registro de estudiante",
    ENTIDAD: "Entidad",
    ENTRADA_ALMACEN: "Entrada de Almacén",
    ERROR_OBSERVACIONES: "Debe llenar todas las observaciones",
    ERROR_REQUISITOS: "Debe seleccionar todos los requisitos",
    ESTADO: "Estado",
    ETAPA: "Etapa",
    E_0458: "Los datos enviados son erróneos",
    E_0459: "No se pudo registrar la información",
    E_04566: "No es posible modificar el registro debido a que este ha sido usado en otras transacciones",
    E_0471: "No es posible realizar actualización debido al estado del registro",
    E_22001: "La longitud de uno de los valores ingresados excede al máximo permitido",
    E_23503: "No se puede realizar la operacion Solicitada",
    E_23505: "Ya existe un registro con uno de los parámetros únicos ingresados",
    E_25P02: "Operación No Permitida. ",
    E_901: "No se ha podido validar los requisitos",
    E_A02: "Debe digitar el motivo de la anulación",
    E_A03: "Debe seleccionar el tipo de anulación a realizar",
    E_A04: "Debe digitar el valor de la anulación",
    E_A05: "Debe seleccionar el rubro afectado por el cdp a anular.",
    E_A06: "Debe seleccionar el rubro afectado por el cdp a anular.",
    E_A07: "El valor debe ser mayor a 0",
    E_CDP001: "Expedición de CDP no aprobada, algunos valores superan el saldo de las Apropiaciones.",
    E_CDP002: "No se pudo cargar los rubros de la solicitud",
    E_MODP001: "Debe seleccionar los rubros y/o llenar los datos requeridos para esta solicitud.",
    E_MODP002: "Todos Los campos son obligatorios para agregar el rubro a la solicitud",
    E_MODP003: "El rubro destino del movimiento no tiene apropiacion para la vigerncia actual.",
    E_MODP004: "El saldo del rubro origen del movimiento no cubre el valor del movimineto",
    E_MODP005: "No se pudo obtener el saldo de la apropiación origen del movimiento",
    E_MODP006 :"No se Pudo registrar una de las disponibilidades para este movimiento",
    E_A12: "Valor a anular supera el saldo de la disponibilidad en el rubro seleccionado",
    E_MODP007: "No se pudo aprobar la solicitud de Modificación Presupuestal",
    // op masivas
    E_OPM_0001: "No se encontraron ordenes de pago relacionadas a la liquidacion",
    E_HO_CONC_TITAN: "Error al obtener conceptos de Titán",
    E_OPN_01_1: "Error en la estructura de datos para Crear a OP de Nomina. ",
    E_OPN_01_2: "No se obtuvo Id de la liquidación. ",
    E_OPN_01_3: "No se obtuvo información del detalle de la liquidación del modulo Titán. ",
    E_OPN_01_4: "No se se cuenta con un detalle de la liquidación del modulo Titán. ",
    E_OPN_01_5: "Error en la comunicación con los servicios de Kronos. ",
    E_OPN_02: "Error al intentar registrar la Orden de pago. ",
    E_OPN_02_1: "Error al obtener Valor Calculado del detalle de la liquidación. ",
    E_OPN_02_2: "Error al obtener el Id del Concepto de Titán en detalle de la liquidación. ",
    E_OPN_02_3: "Id Concepto Titán no cuenta con concepto Homologado en Kronos. ",
    E_OPN_02_4: "Error al intentar registrar los conceptos de orden de pago. ",
    E_OPN_02_5: "Error al intentar registrar Movimientos Contables. ",
    E_OPP_01: "Error al intentar registrar la Orden de pago. ",
    E_HOCO_01: "Error al intentar registrar la Homologación de concepto. ",
    E_HOCO_02: "Ya existe la Homologación. ",
    S_HOCO_01: "Homologación de Concepto registrada exitosamente. ",
    E_UPDATE_HOCO_01: "Error al intentar actualizar la Homologación de concepto. ",
    S_UPDATE_HOCO_01: "Homologación de concepto actualizada exitosamente. ",
    E_OPP_02: "Error al intentar registrar la afectación por conceptos. ",
    E_OPP_03: "Error al intentar registrar los Movimientos Contables. ",
    E_OPP_UPD_01: "Error al intentar Actualizar los campos de la Orden de pago. ",
    E_OPP_UPD_02: "Error al intentar Actualizar los campos antiguos de conceptos relacionados a la Orden de pago. ",
    E_OPP_UPD_03: "Error al intentar Actualizar los campos antiguos de movimientos contables relacionados a la Orden de pago. ",
    E_OPP_UPD_04: "Error al intentar Actualizar los campos de conceptos relacionados a la Orden de pago. ",
    E_OPP_UPD_05: "Error al intentar Actualizar los campos de movimientos contables relacionados a la Orden de pago. ",
    E_RP001: "El valor solicitado supera el saldo del RP en el rubro solicitado",
    E_RP002: "No se pudo cambiar el estado de la solicitud",
    E_AP001: "Este rubro no tiene apropiación asignada para la vigencia seleccionada.",
    E_AP002: "La Apropiación de este rubro ya ha sido aprobada y no se puede modificar.",
    E_AP003: "Las sumas de los rubros a aprobar no son iguales",
    E_C92011: "Un concepto o clasificador no puede ser creado dentro de un concepto, únicamente dentro de un clasificador diferente de si mismo",
    E_TRANS_01: "Error en la estructura de parámetros de entrada",
    E_OP_E_ESTADO: "Error al intentar registrar estado de orden de pago",
    ESTAMPILLA_UD: "Estampilla Universidad Distrital",
    ESTAMPILLA_PROCULTURA: "Estampilla Procultura",
    ESTAMPILLA_PRO_ADULTO_MAYOR: "Estampilla Adulto Mayor",
    FACTURA: "Factura",
    FACULTAD: "Facultad",
    FECHA: "Fecha",
    FECHA_COMPRA_EVENTO: "Fecha de compra o evento",
    FECHA_CONSIG: "Fecha de Consignación",
    FECHA_CREACION: "Fecha Creación",
    FECHA_DOCUMENTO: "Fecha del Documento",
    FECHA_FIN: "Fecha final",
    FECHA_FINAL: "Fecha Final",
    FECHA_INICIO: "Fecha Inicio",
    FECHA_CIERRE:"Fecha Cierre",
    FECHA_OFICIO: "Fecha del Oficio",
    FECHA_REGISTRO: "Fecha de Registro",
    FECHA_INGRESO: "Fecha Ingreso",
    FECHA_CONSIGNACION: "Fecha de consignación",
    FECHA_EXPIRACION: "Fecha de Expiración",
    FILTRO_NOTIFICACION: "Filtrar notificación",
    FECHA_MOVIMIENTO: "Fecha Movimiento",
    FUENTE:"Fuente",
    FINALIZAR: "Finalizar",
    FINANCIERO: "Financiero",
    FORMA_PAGO: "Forma Pago",
    FORMA_INGRESO: "Forma de Ingreso",
    FORMULARIO_FUENTE: "Formulario Creación Fuente de Financiamiento",
    FUENTES_FINANCIACION: "Fuentes Financiación",
    FUENTES_FINANCIAMIENTO: "Fuentes de Financiamiento",
    FUENTE_FINANCIACION_CODIGO: "Código Fuente",
    FUENTE_FINANCIAMIENTO: "Fuente de Financiamiento",
    FUENTE_FINANCIAMIENTO_DESTINO: "Fuente de Financiamiento de Destino",
    FUENTE_FINANCIAMIENTO_EXISTE: "La Fuente de Financiamiento ya existe",
    FUENTE_FINANCIAMIENTO_ORIGEN: "Fuente de Financiamiento de Origen",
    FUE_ACTUALIZADO: "ha sido actualizado",
    FUE_ELIMINADO: "ha sido eliminado",
    FUNCIONAMIENTO: "Funcionamiento",
    GENERACION_PAC: "Generar Reporte PAC",
    GIRO: "Giro",
    GIROS: "Giros",
    GUARDAR: "Guardar",
    HOMOLOGACION: "Homologación",
    IMPUESTOS: "Impuestos",
    IMPUESTOS_DESCUENTOS: "Impuestos y Descuentos",
    INACTIVO: "Inactivo",
    INFORMACION_TERCERO: "Información de Terceros",
    INGRESAR_MONTO: "Ingresar Monto",
    INGRESAR_VALOR_FUENTE: "Ingresar Valor Total Fuente de Financiamiento",
    INGRESE_CODIGO: "Ingrese el Código",
    INGRESE_DEPENDENCIA: "Ingrese la Dependencia",
    INGRESE_DESCRIPCION: "Ingrese la Descripción",
    INGRESE_OBJETO_COMPROMISO: "Ingrese el Objeto del compromiso aquí ...",
    INGRESE_FECHA_DOCUMENTO: "Ingrese Fecha del Documento",
    INGRESE_FECHA_REGISTRO: "Ingrese Fecha de Registro",
    INGRESE_NOMBRE: "Ingrese el Nombre",
    INGRESE_NOMBRE_PLAN_CUENTAS: "Ingresa el nombre del plan de cuentas",
    INGRESE_NO_DOCUMENTO: "Ingrese el No. de Documento",
    INGRESE_SIGLA: "Ingrese la Sigla",
    INGRESE_TIPO_DOCUMENTO: "Ingrese el Tipo de Documento",
    INGRESE_VALOR_ADICION: "Ingrese el Valor Total de la Adición",
    INGRESE_VALOR_DEPENDENCIA: "Ingrese el Valor de la Dependencia",
    INGRESE_VALOR_TOTAL: "Ingrese el Valor Total",
    INGRESE_VALOR_TRASLADO: "Ingrese el Valor Total del Traslado",
    INGRESO: "Ingreso",
    INGRESO_NO: "Ingreso No.",
    INICIAL: "Inicial",
    INGRESOS_EGRESOS_CUMPLE: "Las sumas de comprobación son iguales",
    INGRESOS_EGRESOS_NO_CUMPLE: "los valores de comprobación son diferentes",
    INVERSION:"Inversión",
    ITEM_NO_PUEDE_SELECCIONAR: "El item no puede ser seleccionado",
    JEFE_DEPENDENCIA: "Jefe de la Dependencia",
    JUSTIFICACION: "Justificación",
    LEGALIZACION: "Legalización",
    LIMPIAR: "Limpiar",
    LIQUIDACION: "Liquidación",
    LEGALIZACION_AVANCE: "Legalización de avances",
    LEGALIZACION_EVENTO_COMPRA: "Legalización por evento o compra",
    LEGALIZACION_PRACTICA_ACADEMICA: "Legalización por práctica académica",
    LISTA_AVANCES: "Listado de Tipos de Avances",
    LISTA_CDP: "Lista De Certificados De Disponibilidad Presupuestal",
    LISTA_CDP_ANULACION: "Lista De Certificados De Disponibilidad Presupuestal a Anular",
    LISTA_REQUISITOS_AVANCE: "listado de Requisitos de Avance",
    LISTA_RP: "Lista de Registros Presupuestales",
    LISTA_RP_ANULACION: "Lista de Solicitudes de Anulación de Registros Presupuestales ",
    LISTA_SOLICITUD_ANULACION_CDP: "Lista de Solicitudes de Anulación de Disponibilidad",
    LISTA_SOLICITUDES_MODIFICACION_PRESUPUESTAL: "Lista de Solicitudes de Movimientos Presupuestales",
    LUGAR_DOCUMENTO: "Lugar de Expedición",
    MATRICULA: "Matricula",
    MENSAJE_INICIAL: "Ahora puede comenzar con el desarrollo ...",
    MES: "Mes",
    MES_ABRIL: "Abril",
    MES_AGOSTO: "Agosto",
    MES_DICIEMBRE: "Diciembre",
    MES_ENERO: "Enero",
    MES_FEBRERO: "Febrero",
    MES_JULIO: "Julio",
    MES_JUNION: "Junio",
    MES_MARZO: "Marzo",
    MES_MAYO: "Mayo",
    MES_NOBIEMBRE: "Noviembre",
    MES_OCTUBRE: "Octubre",
    MES_SEPTIEMBRE: "Septiembre",
    MODALIDAD_DE_SELECCION: "Modalidad de Selección",
    MODIFICACIONES_PRESUPUESTALES: "Modificaciones Presupuestales",
    MODIFICACION_FUENTES_FINANCIAMIENTO: "Modificacion Fuentes de Financiamiento",
    MODIFICACION_PRESUPUESTAL: "Modificación Presupuestal",
    MONTO_MAYOR_ADICION: "El Monto Ingresado No Corresponde al Valor de la Adición",
    MONTO_MAYOR_FUENTE_FINANCIAMIENTO: "El Monto Ingresado No Corresponde al Valor de la Fuente de Financiamiento",
    MONTO_MAYOR_TRASLADO: "El Monto Ingresado Supera el Valor de la Dependencia",
    MOTIVO_ANULACION_CDP: "Motivo de la Anulación",
    MOTIVO_RECHAZO: "Motivo del rechazo",
    MOVIMIENTO: "Movimiento",
    MOVIMIENTOS: "Movimientos",
    MSN_CAMPO_REQUERIDO: "Campo requerido*",
    MSN_TAMANO_MAX: "Sobrepasa el tamaño máximo",
    MSN_TAMANO_MIN: "Es menor al tamaño mínimo",
    MSN_DEBE_CONCEPTO: "Debe seleccionar por lo mínimo un concepto",
    MSN_DEBE_OP_GIRO: "Debe seleccionar ordenes de pago",
    MSN_DEBE_NOMINA: "Debe seleccionar por lo mínimo una nomina",
    MSN_DEBE_FORMA_PAGO_OP: "Debe seleccionar la forma de pago en la sección detalle orden pago",
    MSN_DEBE_IVA: "Debe indicar el valor del iva en la sección detalle orden pago",
    MSN_DEBE_LIQUIDACION: "Debe seleccionar tipo nomina, mes y año en la sección liquidación",
    MSN_DEBE_MES_SS: "Debe seleccionar el mes de la seguridad social",
    MSN_DEBE_MIN_CONCEPTO: "Debe afectar por lo menos un concepto",
    MSN_DEBE_PROVEEDOR: "Debe seleccionar el proveedor para la orden de pago",
    MSN_DEBE_REGISTRO: "Debe seleccionar el registro presupuestal",
    MSN_DEBE_TIPO_OP: "Debe seleccionar el tipo de orden de pago en la sección detalle orden pago",
    MSN_DEBE_DOCUMENTO: "Debe seleccionar el tipo de documento en la sección detalle orden pago",
    MSN_DEBE_TOTAL_AFECTACION: "El valor total de la afectación es distinto al valor de la orden de pago",
    MSN_DEBE_UNIDAD: "Debe seleccionar la unidad ejecutora",
    MSN_DEBE_VAL_BASE: "Debe indicar el valor base en la sección detalle orden pago",
    MSN_SUPERA_SALDO: "supera el saldo disponible",
    MSN_TOTAL_AECTACION: "El total de la afectación al rubro",
    MSN_OP_PLANTA_DEBE_NECESIDAD: "Debe seleccionar una necesidad",
    MSN_OP_PLANTA_DEBE_NECESIDAD_CON_RP: "Debe seleccionar una necesidad con RP asociado",
    MSN_OP_PLANTA_DEBE_LIQUIDACION_A_NECESIDAD: "No existe liquidación Asociada a la Necesidad",
    MSN_OPP_S_HO_CONC: "Homologación de conceptos exitosa",
    MSN_Y: "y",
    NATURALEZA: "Naturaleza",
    NECESIDAD: "Necesidad",
    NECESIDAD_NO: "Necesidad No. ",
    NO: "No. ",
    NOMBRE: "Nombre",
    NOMBRES: "Nombres",
    NOMBRE_CONVENIO: "Nombre del Convenio",
    NOMBRE_PROYECTO: "Nombre del Proyecto",
    NOMINA: "Nómina",
    NOTA_DEVITO: "Nota Débito",
    NOTIFICACION_PENDIENTE: "Notificaciones Pendientes",
    NOTIFICACION_VISTA: "Notificaciones Vistas",
    NO_CDP: "No. CDP",
    NO_CRP: "No. CRP",
    NO_DIAS: "No. de días",
    NO_DOCUMENTO: "No. Documento",
    NO_FACTURA: "No. de factura",
    NO_OFICIO: "Oficio No",
    NO_QUINCENA: "Nro. Quincena",
    NO_ENCONTRADO_RESULTADOS: "No se han encontrado resultados para el",
    NUEVA_CUENTA: "Nueva Cuenta",
    NUEVA_CATEGORIA: "Nueva Categoría",
    NUEVO: "Nuevo",
    NUEVA: "Nueva",
    NUEVO_CONCEPTO: "Nuevo Concepto",
    NUEVO_OP_PROVEEDOR: "Nuevo OP Proveedor",
    HORA_CATEDRA: "Hora Cátedra",
    NUEVO_OP_SEGURIDAD_SOCIAL: "Nuevo OP Seguridad Social",
    NUEVO_PLAN_CUENTAS: "Crear Nuevo Plan de cuentas",
    NUEVO_REQUISITO_AVANCE: "Nuevo Requisito de Avance",
    NUEVO_TIPO_AVANCE: "Nuevo Tipo de Avance",
    NUEVO_COMPROMISO: "Nuevo Compromiso",
    NUEVO_TIPO_COMPROMISO: "Nuevo Tipo Compromiso",
    NUMERO: "Numero",
    NUMERO_CELULAR: "Numero Celular",
    NUMERO_TELEFONICO: "Número telefónico",
    OBJETIVO: "Objetivo",
    OBJETO: "Objeto",
    OBJETO_CONTRACTUAL: "Objeto Contractual ",
    OBSERVACIONES: "Observaciones",
    OFICIO: "Oficio No.",
    OP_TITULO: "Ordenes de Pago",
    OPERACION: "Operación",
    OPERAR_CONCEPTO: "Operar Concepto",
    ORDENADOR_GASTO: "Ordenador del Gasto",
    ORDEN_PAGO: "Ordenes de Pago",
    ORDEN_DE_PAGO: "Orden de Pago",
    ORDEN_PAGO_ACTUALIZAR: "Actualizar Ordenes de Pago",
    ORDEN_PAGO_SELECCIOANR: "Seleccionar Orden de Pago",
    ORIGEN: "Origen",
    OPM_E001: "Conceptos Homologados no coinciden con los de los rubros de RP",
    OPM_E002: "Saldo del RP es menor al valor solicitado en la liquidación",
    OPM_E003: "No se encontró RP asociado al contrato liquidado",
    OPM_E004: "No se encontró homologación de conceptos",
    PAGO_REPORTADO: "Pago reportado",
    PARA: "Para",
    PLANES_CUENTAS: "Planes de Cuentas",
    PLANTA: "Planta",
    PLAN_CUENTAS: "Plan de Cuentas",
    PLAN_CUENTAS_MAESTRO: "Plan de Cuentas Maestro",
    PORCENTAJE: "Porcentaje",
    POR_IVA: "% IVA",
    PENDIENTE_NECESIDAD: "Pendiente por Necesidad",
    PRIMERA: "Primera",
    PRINCIPIO_PARTIDA_DOBLE_ADVERTENCIA: "¡Recuerda que la suma de los montos debitados y de los montos acreditados debe ser la misma e igual al valor dado sobre el concepto!",
    PRINCIPIO_PARTIDA_DOBLE_CUMPLE: "¡El principio de la partida Doble o dualidad se cumple!",
    PROCESO_COMPLETADO: "Proceso Completado",
    PROVEEDOR: "Proveedor",
    PROYECTO_CURRICULAR: "Proyecto Curricular",
    PROYECTO_INVESTIGACION: "Proyecto de Investigación",
    QUITAR: "Quitar",
    QUITAR_FUENTE: "Quitar Fuente",
    QUITAR_RUBRO: "Quitar Rubro",
    RECHAZAR: "Rechazar",
    REFERENCIA: "Referencia",
    REGISTRO_CORRECTO: "Se Registro Correctamente",
    REGISTRO_INGRESOS: "Registro de Ingresos",
    REGISTRO_PRESUPUESTAL: "Certificado Registro Presupuestal",
    REGISTRO_PRESUPUESTAL_NO: "RP No.",
    REGISTRO_RUBRO: "Registro de Rubro",
    REGISTRO_SOLICITUD_MODIFICACION_PRES: "Solicitud de Modificación Presupuestal",
    REPORTE_PAC:"REPORTE INGRESOS Y EGRESOS",
    REQUISITOS: "Requisitos",
    REQUISITOS_AVANCE: "Requisitos de Avance",
    RESPONSABLE: "Responsable",
    RESPONSABLE_SELECCION_PRESUPUESTO: "Responsable Sección De Presupuesto",
    RESUMEN_AFECTACION_PRESUPUESTAL: "Resumen Afectación Presupuestal",
    RESUMEN: "Resumen",
    RUBRO: "Rubro",
    RUBROS: "Rubros",
    RUBROS_AFECTADOS_MOVIMIENTO: "Rubros afectados por este Movimiento",
    RUBROS_ASIGNADOS_FUENTE: "Rubros Asignados Fuente de Financiamiento",
    RUBRO_DESTINO: "Rubro de Destino",
    RUBRO_MAYOR_APROPIACION: "Uno de los Rubros Ingresados Supera el Valor de la Apropiación Inicial",
    RUBRO_ORIGEN: "Rubro de Origen",
    RUBRO_SELECCIONADO: "Rubros Seleccionado",
    RUBROS_SOLICITUD_MODIFICACION_PRES: "Datos de los Rubros de la Modificación",
    RETE_IVA: "Rete IVA",
    SALDO: "Saldo",
    SEDE: "Sede",
    SEGUDIDAD_SOCIAL: "Seguridad Social",
    SEGUNADA: "Segunda",
    SEGURO: "Seguro",
    SELECCIONAR: "Seleccionar",
    SELECCIONAR_CATEGORIA: "Seleccione la Categoría",
    SELECCIONAR_TIPO: "Seleccione el Tipo",
    SELECCIONAR_DEPENDENCIA: "Seleccione la Dependencia",
    SELECCIONAR_DESCUENTOS: "Selecciona Impuestos y Descuentos",
    SELECCIONAR_RUBRO: "Seleccionar Rubro",
    SELECCIONAR_VIGENCIA: "Seleccione una Vigencia",
    SELECCIONAR_CUENTA_CONTABLE_PADRE: "Seleccione la cuenta contable padre",
    SELECCIONAR_CUENTA_CONTABLE: "Seleccione la cuenta contable",
    SELECCIONAR_CUENTAS_CONTABLES_CONCEPTO: "Seleccione las cuentas contables asociadas al concepto",
    SELECCIONAR_UNIDAD_EJECUTORA: "Debe seleccionar la unidad ejecutora",
    SELECCIONAR_CONCEPTO_INGRESO: "Debe seleccionar el concepto que afecta este ingreso",
    SELECCIONAR_FORMA_INGRESO: "Debe seleccionar la forma de ingreso",
    SELECCIONAR_FECHA_INGRESO: "Debe seleccionar la fecha de consulta  de los ingresos",
    SELECCIONAR_FACULTAD: "Debe seleccionar una facultad",
    SELECT_MES:"Seleccionar mes",
    SELECCIONAR_PROYECTO_CURRICULAR: "Debe seleccionar Proyecto Curricular",
    SELECCIONE: "Seleccione",
    SELECCIONE_CRP: "Seleccione CRP",
    SELECCIONE_DEPENDENCIA: "Seleccione la Dependencia",
    SELECCIONE_FUENTE_FINANCIAMIENTO: "Seleccione la Fuente de Financiamiento",
    SELECCIONE_FUENTE_FINANCIAMIENTO_DESTINO: "Seleccione la Fuente de Financiamiento de Destino",
    SELECCIONE_FUENTE_FINANCIAMIENTO_ORIGEN: "Seleccione la Fuente de Financiamiento de Origen",
    SELECCIONE_PROVEEDOR: "Seleccionar Proveedor",
    SELECCIONE_RUBROS_FUENTE: "Seleccione los Rubros de la Fuente de Financiamiento",
    SELECCIONE_RUBRO_DESTINO: "Seleccione Rubro de Destino",
    SELECCIONE_RUBRO_ORIGEN: "Seleccione Rubro de Origen",
    SELECCIONE_TIPO_MODIFICACION: "Seleccione el tipo de Modificación",
    SELECCIONE_TIPO: "Seleccione el tipo",
    SELECCIONE_CARPETA_CONCEPTO: "Seleccione la carpeta en donde se ubicará el concepto",
    SELECCION_OPCION: "Selecciona una opción",
    SELECCION_RUBRO: "Seleccione el Rubro",
    SELECCION_UNIDAD_EJECUTORA: "Seleccionar Unidad Ejecutora",
    SIGLA: "Sigla",
    SOLICITUD: "Solicitud",
    SOLICITUD_AVANCE: "Solicitud de Avance",
    SOLICITUD_AVANCE_VALIDADA: "Esta solicitud ya fue validada",
    SOLICITUD_NECESIDAD: 'Solicitud Necesidad',
    SOLICITUD_CDP: "Solicitud de CDP No.",
    SUCURSAL: "Sucursal",
    SUBTOTAL: "Subtotal",
    SUCURSALES: "Sucursales",
    S_AP001: "Asignación Inicial de Presupuesto aprobada.",
    S_542: "Se Actualizo exitosamente",
    S_5412: "Se canceló el compromiso ",
    S_543: "Se registro exitosamente",
    S_544: "Se aprobó el Ingreso ",
    S_545: "Se rechazó el Ingreso con el consecutivo ",
    S_554: "Se eliminó exitosamente",
    S_588: "El registro se actualizó exitosamente",
    S_900: "Se verificaron los requisitos exitosamente",
    S_A01: "Se Rechazo la Solicitud ",
    S_CDP001: "CDP Expedido con el consecutivo:",
    S_A12: "Operación para Anulación correctamente realizada para la solicitud",
    S_M001: "Indique una justificación por el rechazo",
    SM002: "Por favor indica una justificación!",
    S_MODP001: "Se registro la solicitud del Modificación presupuestal correctamente Con el Consecutivo No. ",
    S_MODP002: "Solicitud de Modificación Presupuestal Aprobada",
    S_MODP003: "CDP para la Modificación Presupuestal Correctamente Expedido",
    S_MODP004: "Solicitud De Modificación Presupuestal Anulada",
    S_OPP_01: "Orden de pago registrado exitosamente con consecutivo No. ",
    S_GIRO_01: "Giro registrado exitosamente con consecutivo No. ",
    S_OP_ESTADO: "Estado de la orden de pago registrado",
    S_OPP_02: "Orden de Pago Actualizado Exitosamente con Consecutivo No. ",
    SMA_001: "Se realizó la solicitud de avance con consecutivo No. ",
    TABLA_INGRESOS_BANCO: "Lista de Consignaciones",
    TELEFONO: "Teléfono",
    TIPO: "Tipo",
    TIPO_ANULACION: "Tipo de Anulación",
    TIPO_AVANCE: "Tipo de Avance",
    TIPO_CUENTA: "Tipo Cuenta",
    TIPO_COMPROMISO: "Tipo Compromiso",
    TIPO_DEPENDENCIA_SOLICITANTE: "Tipo Dependencia Solicitante",
    TIPO_DOCUMENTO: "Tipo Documento",
    TIPO_EMPLEADO: "Tipo Empleado",
    TIPO_FUENTE_FINANCIAMIENTO: "Tipo de Fuente de Financiamiento",
    TIPO_INGRESO: "Tipo de Ingreso",
    TIPO_MODIFICACION: "Tipo de Modificación Presupuestal",
    TIPO_ORDEN_PAGO: "Tipo Orden Pago",
    TIPO_MOVIMIENTO: "Tipo Movimiento",
    TIPO_PERSONA: "Tipo Persona",
    TIPO_NECESIDAD: "Tipo Necesidad",
    TIPO_ICA: "ICA",
    TIPO_IVA: "IVA",
    TIPO_RENTA: "Rete Fuente",
    TITULO: "GENERATOR-OAS",
    TITULO_FUENTES_CONSULTAR: "Consultar Fuentes de Financiamiento",
    TITULO_FUENTES_CREAR: "Crear Fuentes de Financiamiento",
    TITULO_FUENTES_DETALLE: "Detalle Fuentes de Financiamiento",
    TITULO_SOLICITUD_CDP: "Solicitudes de Certificado de Disponibilidad Presupuestal",
    TRM_COMPRA: "TRM de la fecha de compra",
    TRM_COMPRA_DESCRIPCION: "** Tasa representativa de mercado del dia de la compra, para legalizaciones de gastos en moneda extranjera",
    TODOS: "Todos",
    TOTAL: "Total",
    TOTAL_ADICIONES: "Total Adiciones",
    TOTAL_ANULADO: "Total Anulado",
    TOTAL_COMPROMETIDO: "Total Comprometido",
    TOTAL_REDUCCIONES: "Total Reducciones",
    TOTAL_TRASLADOS: "Total Traslados",
    TRASLADO_FUENTE_FINANCIAMIENTO: "Traslado Fuente de Financiamiento",
    UNIDAD_EJECUTORA: "Unidad Ejecutora",
    VALOR: "Valor",
    VALOR_ADICION: "Valor Adición",
    VALOR_AFECTACION: "Valor afectación",
    VALOR_AFECTACION_FUNCIONAMIENTO: "Valor de la Afectación (Funcionamiento)",
    VALOR_APLICADO: "Valor Aplicado",
    VALOR_AVANCE: "Valor de Avance",
    VALOR_BASE: "Valor Base",
    VALOR_BASE_RETENCION: "Valor Base Retención",
    VALOR_BRUTO: "Valor Bruto",
    VALOR_CDP: "Valor CDP",
    VALOR_CONTRATACION: "Valor De La Contratación",
    VALOR_CRP: "Valor CRP",
    VALOR_DISPONIBLE: "Valor Disponible",
    VALOR_FUENTE: "Valor Fuente Financiamiento",
    VALOR_PAGO: "Valor Pago",
    VALOR_RUBRO: "Valor Rubro",
    VALOR_TOTAL: "Valor Total",
    VALOR_FACTURA_COMPRA: "Valor de la factura o compra sin IVA",
    VALOR_TRASLADO: "Valor Traslado",
    VAL_IVA: "Valor IVA",
    VENCIMIENTO: "Vencimiento",
    VIGENCIA: "Vigencia",
    VINCULACION: "Vinculación",
    APROPIACION_INICIAL: "Apropiación Inicial",
    INFORMACION_SALDO_APROPIACION: "Información Presupuestal de la apropiación",
    INFORMACION_RUBROS_MODIFICACION_PRES: "Rubros Seleccionados",
    PLANEACION_APROBACION_INICIAL: "Planeación de la apropiación inicial",
    VER_ANULACIONES:"Ver Anulaciones",
    VER_FENECIDOS:"Ver Fenecidos",
    VER_RESERVAS:"Ver Reservas",
    VER_SOLICITUD: "Ver Solicitud",
    PROCESO: "Proceso",
    VAL_EJEC:"Ejecutado",
    VAL_PROY:"Proyectado",
    BTN: {
        ACTUALIZAR: "Actualizar",
        AGREGAR: "Agregar",
        ANADIR: "Añadir",
        APROBAR: "Aprobar",
        CREAR: "Crear",
        BORRAR: "Borrar",
        CANCELAR: "Cancelar",
        CONFIGURAR: "Configurar",
        CONFIRMAR: "Confirmar",
        EDITAR: "Editar",
        GUARDAR: "Guardar",
        LIMPIAR: "Limpiar",
        NUEVO: "Nuevo",
        NUEVO_OP_PROVEEDOR: "Nuevo OP Proveedor",
        NUEVO_OP_NOMINA: "Nuevo OP De Nomina",
        NUEVO_OP_SEGURIDAD_SOCIAL: "Nuevo OP Seguridad Social",
        NUEVA_HOMOLOGACION: "Nueva Homologación",
        QUITAR: "Quitar",
        QUITAR_RUBRO: "Quitar",
        RECHAZAR: "Rechazar",
        REGISTRAR: "Registrar",
        REGRESAR: "Regresar",
        SELECCIONAR: "Seleccionar",
        SOLICITAR_RP: "Solicitar RP",
        SOLICITAR: "Solicitar",
        VER: "Ver",
        VERIFICAR: "Verificar Requisitos",
        CONSULTAR: "Consultar"
    },
    D_PLANES_CUENTA: {
        LISTADO_PLAN_CUENTAS: "Listado de Planes de Cuentas",
        NO_FILAS: "Número de Filas"
    },
    REPORTES_SPAGO: {
      REPORTES: "Reportes"
    },
    REPORTES: {
      LISTADO_APROPIACIONES: "Listado de Apropiaciones",
      FECHA_REPORTE: "Fecha del reporte"
    }
};

var text_en = {
    ACTUALIZAR: "Update",
    AFECTACION: "Affectation",
    AFECTACION_CONCEPTO: "Enter Affection for Concept",
    APROBACION_PRESUPUESTO: "Aprobación de Presupuesto",
    CARGANDO: "Loading ...",
    CIERRE_PERIODO_PAC:"CLOSING",
    CLASIFICACION: "Classification",
    CODIGO: "Code",
    CODIGO_PADRE: "Father Code",
    COMPANIA: "Company",
    COMPROMISO: "Commitment",
    CONCEPTO: "Concept",
    CONCEPTOS: "Concepts",
    CONSULTA_APROBACION_INICIAL: "Consulta de Apropiación Inicial",
    CONSULTA_RUBRO: "Consulta de Rubros",
    CREDITO: "Credit",
    CUENTA: "Account",
    CUENTAS_CONTABLES: "Accounting Accounts",
    CUENTA_BANCARIA: "Bank Account",
    DEBITO: "Debit",
    DESCRIPCION: "Description",
    DESCRIPCION_COMPROMISO: "Description Commitment",
    DESCRIPCION_PLAN: " Descripción del nuevo plan...",
    DETALLE_CRP: "Detail CRP",
    DETALLE_OP: "Detail Payment Orders",
    DETALLE_ORDEN_PAGO: "Detail Payment Orders",
    DETALLE_PROVEEDOR: "Detail Provider",
    DETALLE_UNIDAD_EJECUTORA: "Detail Executing Unit",
    DETALLE_VALOR_PAGO: "Detail Value Paid",
    DIRECCION: "Address",
    DISPONIBLE: "Disponible",
    EDITAR_PLAN_CUENTAS: "Editar plan de Cuentas",
    ELABORADO_POR: "Elaborated By",
    ENTIDAD: "Entity",
    ENTRADA_ALMACEN: "Warehouse Entryss",
    ESTADO: "State",
    FACTURA: "Bill",
    FECHA_CREACION: "Creation Date",
    FECHA_CIERRE:"Closing Date",
    FILTRO_NOTIFICACION: "Filtrar notificación",
    FUENTE:"Source",
    FUENTES_FINANCIACION: "Sources of funding",
    FUENTE_FINANCIACION_CODIGO: "Code Sources of funding",
    INGRESE_NOMBRE_PLAN_CUENTAS: "Ingresa el nombre del plan de cuentas",
    LIQUIDACION: "Liquidation",
    MENSAJE_INICIAL: "Now get to start to develop",
    MES: "Month",
    MES_ABRIL: "April",
    MES_AGOSTO: "August",
    MES_DICIEMBRE: "December",
    MES_ENERO: "January",
    MES_FEBRERO: "February",
    MES_JULIO: "July",
    MES_JUNION: "June",
    MES_MARZO: "March",
    MES_MAYO: "May",
    MES_NOBIEMBRE: "November",
    MES_OCTUBRE: "October",
    MES_SEPTIEMBRE: "september",
    SELECT_MES:"Select Month",
    MOVIMIENTOS_APROPIACION: "Movimientos De la Apropiación",
    MSN_DEBE_CONCEPTO: "You must select at least one Concept",
    MSN_DEBE_IVA: "You must indicate the value of the IVA in the Payment Value Section",
    MSN_DEBE_LIQUIDACION: "You must select a liquidation",
    MSN_DEBE_MIN_CONCEPTO: "Must affect at least one concept",
    MSN_DEBE_PROVEEDOR: "You must select Supplier for the Payment Order",
    MSN_DEBE_REGISTRO: "You must select Certificate Registry Budget",
    MSN_DEBE_TIPO_OP: "You must select el tipo de Documento en la in Payment Amount Section",
    MSN_DEBE_TOTAL_AFECTACION: "The total value of the assignment is different from the value of the payment order",
    MSN_DEBE_UNIDAD: "You must select Executing Unit",
    MSN_DEBE_VAL_BASE: "You must indicate the Base Value in the Payment Value Section",
    MSN_SUPERA_SALDO: "exceeds the value of the balance",
    MSN_TOTAL_AECTACION: "The total of the affectation to the Concepts of the Rubro",
    MSN_Y: "and",
    NATURALEZA: "Nature",
    NOMBRE: "Name",
    NOMINA: "Roster",
    NOTIFICACION_PENDIENTE: "Notificaciones Pendientes",
    NOTIFICACION_VISTA: "Notificaciones Vistas",
    NO_CDP: "No. CDP",
    NO_CRP: "No. CRP",
    NO_DOCUMENTO: "No. Document",
    NO_QUINCENA: "Nro. Fortnight",
    NUEVA_CUENTA: "Nueva Cuenta",
    NUEVA_CATEGORIA: "Nueva Categoria",
    NUEVO_OP_PROVEEDOR: "New PO Supplier",
    NUEVO_PLAN_CUENTAS: "Crear Nuevo Plan de cuentas",
    NUEVO_COMPROMISO: "Nuevo Compromiso",
    NUEVO_TIPO_COMPROMISO: "Nuevo Tipo Compromiso",
    OPERACION: "Operation",
    OPERAR_CONCEPTO: "Operate Concept",
    ORDEN_PAGO: "Payment Orders",
    ORDEN_PAGO_ACTUALIZAR: "Update Payment Orders",
    ORDEN_PAGO_SELECCIOANR: "Select Payment Order",
    PLANES_CUENTAS: "Planes de Cuentas",
    PLANTA: "Floor",
    PLAN_CUENTAS_MAESTRO: "Plan de Cuentas Maestro",
    POR_IVA: "% IVA",
    PRIMERA: "Frist",
    PROVEEDOR: "Provider",
    REGISTRO_PRESUPUESTAL: "Certificate Registry Budget",
    REGISTRO_RUBRO: "Registro de Rubro",
    REPORTE_PAC:"REPORT INCOME AND OUTCOME",
    RESPONSABLE: "Responsible",
    RUBRO: "Rubro",
    SALDO: "Balance",
    SEDE: "Headquarters",
    SEGUNADA: "Second",
    SELECCIONAR: "Select",
    SELECCIONAR_RUBRO: "Select Item",
    SELECCIONE_CRP: "Select CRP",
    SELECCIONE_PROVEEDOR: "Select Provider",
    SELECCION_UNIDAD_EJECUTORA: "Select Executing Unit",
    SUCURSAL: "Branch Office",
    TELEFONO: "Phone",
    TIPO: "Type",
    TIPO_CUENTA: "Account Type",
    TIPO_DOCUMENTO: "Document Type",
    TIPO_EMPLEADO: "Employee Type",
    TIPO_PERSONA: "Type Person",
    TITULO: "GENERATOR-OAS",
    UNIDAD_EJECUTORA: "Executing Unit",
    VALOR: "Value",
    VALOR_BASE_RETENCION: "Base Value Withholding",
    VALOR_BRUTO: "Gross Value",
    VALOR_CRP: "Value CRP",
    VALOR_PAGO: "Amount Paid",
    VAL_EJEC:"Executed",
    VAL_PROY:"Planned",
    VAL_IVA: "Value IVA",
    VIGENCIA: "Validity",
    VINCULACION: "Bonding",
    D_PLANES_CUENTA: {
        LISTADO_PLAN_CUENTAS: "Listado de Planes de Cuentas",
        NO_FILAS: "Número de Filas"
    },
    BTN: {
        AGREGAR: "Agregar",
        ANULAR: "Anular",
        APROBAR: "Aprobar",
        CANCELAR: "Cancelar",
        CONFIRMAR: "Confirmar",
        QUITAR_RUBRO: "Quitar",
        REGISTRAR: "Registrar",
        SELECCIONAR: "Select",
        SOLICITAR_RP: "Solicitar RP",
        VER: "Ver",
        CONSULTAR: "Consult"
    },
    REPORTES: {
      LISTADO_APROPIACIONES: "Apropiations List",
      FECHA_REPORTE: "Reporte date"
    }
};

//
function ordenar(p_objeto) {
    var keys = [],
        k, i, len;
    for (k in p_objeto) {
        if (p_objeto.hasOwnProperty(k)) {
            keys.push(k);
        }
    }
    keys.sort();
    len = keys.length;

    for (i = 0; i < len; i++) {
        k = keys[i];
        console.log(k + ':' + ' "' + p_objeto[k] + '",');
    }
}

function comparar(p_objeto1, p_objeto2) {
    for (var key in p_objeto1) {
        var esta_key = false;
        if (p_objeto1.hasOwnProperty(key)) {
            console.log(key);
            //correr dos
            for (var key_2 in p_objeto2) {
                if (p_objeto2.hasOwnProperty(key_2) && key_2 == key) {
                    console.log("      Esta");
                }
            }
            // --
        }
    }
}
//
angular.module('financieraClienteApp')
    .config(function($translateProvider) {
        $translateProvider
            .translations("es", text_es)
            .translations("en", text_en);
        $translateProvider.preferredLanguage("es");
        $translateProvider.useSanitizeValueStrategy("sanitizeParameters");
    });

//ordenar(text_en)
//comparar(text_es.BTN, text_en.BTN)
