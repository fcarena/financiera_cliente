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
    ADICION_FUENTE_FINANCIAMIENTO: "Adicion Fuente de Financiamiento",
    AFECTACION: "Afectación",
    AFECTACION_CONCEPTO: "Ingresar Afectación por Conceptos",
    AFECTACION_CONTABLE: "Afectación Contable",
    AFECTACION_PRESUPUESTAL: "Afectación Presupuestal",
    AGREGAR_DEPENDENCIA: "Agregar Dependencia",
    AGREGAR_REQUISITO: "Añadir Requisito",
    ALERTA_SELECCIONAR_CUENTA: "Es necesario seleccionar la cuenta contable",
    ALERTA_SELECCIONAR_CUENTA_SIN_HIJOS: "Unicamente se pueden seleccionar cuentas que no tengan hijos",
    ALERTA_SELECCIONAR_PROVEEDOR: "Es necesario selecccionar un proveedor",
    ANADIR: "Añadir",
    ANULACION_CDP_TITULO_FORM: "Anulación de CDP",
    ANULACION_PARCIAL: "Parcial",
    ANULACION_TOTAL: "Total",
    ANULAR: "Anular",
    ANULAR_PRESUPUESTO: "Anular Presupuesto",
    APELLIDOS: "Apellidos",
    APROBACION_PRESUPUESTO: "Aprobación de Presupuesto",
    APROBAR: "Aprobar",
    AVANCES: "AVANCES",
    BANCO: "Banco",
    BANCOS: "Bancos",
    BASE_UVT: "Base UVT",
    BENEFECIARIO: "Beneficiario",
    BORRAR: "Borrar",
    BTN: "[object Object]",
    CALENDARIO_TRIBUTARIO: "Calendario Tributario",
    CARNET: "Carnet",
    CDP: "CDP",
    CDP_NUMERO: "CDP No.",
    CHEQUE: "Cheque",
    CLASIFICACION: "Clasificación",
    CODIGO: "Código",
    CODIGO_ABREVIACION: "Código de Abreviación",
    CODIGO_CONVENIO: "Código de Convenio",
    CODIGO_PADRE: "Código Padre",
    CODIGO_PROYECTO: "Código del Proyecto",
    CODIGO_SUPER: "Codigo Superintendencia",
    COMPANIA: "Compañia",
    COMPROMISO: "Compromiso",
    CONCEPTO: "Concepto",
    CONCEPTOS: "Conceptos",
    CONFIGURAR: "Configurar",
    CONSECUTIVO: "#",
    CONSULTA_APROBACION_INICIAL: "Consulta de Apropiación Inicial",
    CONSULTA_INGRESOS: "Consulta Ingresos",
    CONSULTA_RUBRO: "Consulta de Rubros",
    CONTRATO: "Contrato",
    CONVENIO: "Convenio",
    CORREO_ELECTRONICO: "Correo Electrónico",
    CREACION: "Creación",
    CREAR_FUENTE: "Asignar Fuente Financiamiento",
    CREDITO: "Crédito",
    CRP: "CRP",
    CUENTA: "Cuenta",
    CUENTAS_CONTABLES: "Cuentas Contables",
    CUENTAS_SELECCIONADAS: "Cuentas Seleccionadas",
    CUENTA_BANCARIA: "Cuenta Bancaria",
    CUENTA_CONTABLE: "Cuenta Contable",
    DATOS_NECESIDAD: "Datos de la Necesidad",
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
    DURACION: "Duración",
    D_PLANES_CUENTA: "[object Object]",
    EDITAR: "Editar",
    EDITAR_PLAN_CUENTAS: "Editar plan de Cuentas",
    EDITAR_REQUISITO_AVANCE: "Editar Requisito de Avance",
    EDITAR_TIPO_AVANCE: "Editar Tipo de Avance",
    EFECTIVO: "Efectivo",
    EGRESO: "Egreso",
    ELABORADO_POR: "Elaborado Por",
    ELIMINADO: "Eliminado",
    ELIMINARA: "Se eliminará",
    ENTIDAD: "Entidad",
    ENTRADA_ALMACEN: "Entrada De Almacén",
    ERROR_OBSERVACIONES: "Debe llenar todas las observaciones",
    ERROR_REQUISITOS: "Debe seleccionar todos los requisitos",
    ESTADO: "Estado",
    ETAPA: "Etapa",
    E_0458: "Los datos enviados son erroneos",
    E_22001: "La longitud de uno de los valores ingresados excede al maximo permitido",
    E_23503: "No se encontraron algunos campos",
    E_25P02: "Este registro ya ha sido creado. ",
    E_901: "No se ha podido validar los requisitos",
    E_A02: "Debe Digitar el motivo de la anulación",
    E_A03: "Debe seleccionar el tipo de anulación a realizar",
    E_A04: "Debe digitar el valor de la anulación",
    E_A05: "Debe seleccionar el rubro afectado por el cdp a anular.",
    E_A06: "Debe seleccionar el rubro afectado por el cdp a anular.",
    E_A07: "El valor debe ser mayor a 0",
    E_A12: "Valor a anular supera el saldo de la disponibilidad en el rubro seleccionado",
    E_OPN_01_1: "Error en la estructura de datos para Crear a OP de Nomina. ",
    E_OPN_01_2: "No se obtubo Id de la liquidacion. ",
    E_OPN_01_3: "No se obtubo información del detalle de la liquidacion del modulo Titan. ",
    E_OPN_01_4: "No se se cuenta con un detalle de la liquidacion del modulo Titan. ",
    E_OPN_01_5: "Error en la comunicacion con los servicios de Kronos. ",
    E_OPN_02: "Error al intentar registrar la Orden de pago. ",
    E_OPN_02_1: "Error al obtener Valor Calculado del detalle de la liquidación. ",
    E_OPN_02_2: "Error al obtener el Id del Concepto de Titan en detalle de la liquidación. ",
    E_OPN_02_3: "Id Concepto Titan no cuenta con concepto Homologador en kornos. ",
    E_OPN_02_4: "Error al intentar registrar los concepto_orden_pago. ",
    E_OPN_02_5: "Error al intentar registrar Movimeitos Contables. ",
    E_OPP_01: "Error al intentar registrar la Orden de pago. ",
    E_OPP_02: "Error al intentar registrar la afectación por conceptos. ",
    E_OPP_03: "Error al intentar registrar los Movimientos Contables. ",
    E_OPP_UPD_01: "Error al intentar Actualizar los campos de la Orden de pago. ",
    E_OPP_UPD_02: "Error al intentar Actualizar los campos antiguos de conceptos relacionados a la Orden de pago. ",
    E_OPP_UPD_03: "Error al intentar Actualizar los campos antiguos de movimientos contables relacionados a la Orden de pago. ",
    E_OPP_UPD_04: "Error al intentar Actualizar los campos de conceptos relacionados a la Orden de pago. ",
    E_OPP_UPD_05: "Error al intentar Actualizar los campos de movimientos contables relacionados a la Orden de pago. ",
    E_RP001: "El valor solicitado supera el saldo del RP en el rubro solicitado",
    E_RP002: "No se pudo cambiar el estado de la solicitud",
    FACTURA: "Factura",
    FACULTAD: "Facultad",
    FECHA: "Fecha",
    FECHA_CONSIG: "Fecha de Consignanción",
    FECHA_CREACION: "Fecha Creación",
    FECHA_DOCUMENTO: "Fecha del Documento",
    FECHA_FIN: "Fecha final",
    FECHA_FINAL: "Fecha Final",
    FECHA_INICIO: "Fecha Inicio",
    FECHA_REGISTRO: "Fecha de Registro",
    FILTRO_NOTIFICACION: "Filtrar notificación",
    FINALIZAR: "Finalizar",
    FINANCIERO: "Financiero",
    FORMA_PAGO: "Forma Pago",
    FORMULARIO_FUENTE: "Formulario Creación Fuente de Financiamiento",
    FUENTES_FINANCIACION: "Fuentes Financiación",
    FUENTES_FINANCIAMIENTO: "Fuentes de Financiamiento",
    FUENTE_FINANCIACION_CODIGO: "Código Fuente",
    FUENTE_FINANCIAMIENTO: "Fuente de Financiamiento",
    FUENTE_FINANCIAMIENTO_DESTINO: "Fuente de Financiamiento de Destino",
    FUENTE_FINANCIAMIENTO_ORIGEN: "Fuente de Financiamiento de Origen",
    FUE_ACTUALIZADO: "ha sido actualizado",
    FUE_ELIMINADO: "ha sido eliminado",
    GENERACION_PAC: "Generar Reporte Pac",
    GIRO: "Giro",
    GIROS: "Giros",
    GUARDAR: "Guardar",
    IMPUESTOS: "Impuestos",
    IMPUESTOS_DESCUENTOS: "Impuestos y Descuentos",
    INACTIVO: "Inactivo",
    INFORMACION_TERCERO: "Información de Terceros",
    INGRESAR_MONTO: "Ingresar Monto",
    INGRESAR_VALOR_FUENTE: "Ingresar Valor Total Fuente de Financiamiento",
    INGRESE_CODIGO: "Ingrese el Código",
    INGRESE_DEPENDENCIA: "Ingrese la Dependencia",
    INGRESE_DESCRIPCION: "Ingrese la Descripción",
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
    JEFE_DEPENDENCIA: "Jefe de la Dependencia",
    JUSTIFICACION: "Justificación",
    LEGALIZACION: "Legalización",
    LIMPIAR: "Limpiar",
    LIQUIDACION: "Liquidacion",
    LISTA_AVANCES: "Listado de Tipos de Avances",
    LISTA_CDP: "Lista De Certificados De Disponibilidad Presupuestal",
    LISTA_CDP_ANULACION: "Lista De Certificados De Disponibilidad Presupuestal a Anular",
    LISTA_REQUISITOS_AVANCE: "listado de Requisitos de Avance",
    LISTA_RP: "Lista de Registros Presupuestales",
    LISTA_RP_ANULACION: "Lista de Solicitudes de Anulacón de Registros Presupuestales ",
    LISTA_SOLICITUD_ANULACION_CDP: "Lista de Solicitudes de Anulación de Disponibilidad",
    LUGAR_DOCUMENTO: "Lugar de Expedición",
    MATRICULA: "Matricula",
    MENSAJE_INICIAL: "Ahora puede comenzar con el desarrollo ...",
    MES: "Mes",
    MES_ABRIL: "Abril",
    MES_AGOSTO: "Agosto",
    MES_DICIEMBRE: "diciembre",
    MES_ENERO: "Enero",
    MES_FEBRERO: "Febrero",
    MES_JULIO: "Julio",
    MES_JUNION: "Junio",
    MES_MARZO: "Marzo",
    MES_MAYO: "Mayo",
    MES_NOBIEMBRE: "Nobiembre",
    MES_OCTUBRE: "Octubre",
    MES_SEPTIEMBRE: "Septiembre",
    MODALIDAD_DE_SELECCION: "Modalidad de Selección",
    MODIFICACIONES_PRESUPUESTALES: "Modificaciones Presupuestales",
    MODIFICACION_PRESUPUESTAL: "Modificación Presupuestal",
    MONTO_MAYOR_ADICION: "El Monto Ingresado No Corresponde al Valor de la Adición",
    MONTO_MAYOR_FUENTE_FINANCIAMIENTO: "El Monto Ingresado No Corresponde al Valor de la Fuente de Financiamiento",
    MONTO_MAYOR_TRASLADO: "El Monto Ingresado Supera el Valor de la Dependencia",
    MOTIVO_ANULACION_CDP: "Motivo de la Anulación",
    MOTIVO_RECHAZO: "Motivo del rechazo",
    MOVIMIENTO: "Movimiento",
    MOVIMIENTOS: "Movimientos",
    MSN_DEBE_CONCEPTO: "Debe Seleccionar por lo Minimo un Comcepto",
    MSN_DEBE_FORMA_PAGO_OP: "Debe Seleccionar la Forma de Pago en la Sección Detalle orden de Pago",
    MSN_DEBE_IVA: "Debe Indicar el Valor del Iva en la Sección Valor del Pago",
    MSN_DEBE_LIQUIDACION: "Debe Seleccionar una Liquidación",
    MSN_DEBE_MES_SS: "Debe Seleccionar el mes de la Seguridad Social",
    MSN_DEBE_MIN_CONCEPTO: "Debe Afectar por lo Menos un concepto",
    MSN_DEBE_PROVEEDOR: "Debe Seleccionar el Proveedor para la Orden de Pago",
    MSN_DEBE_REGISTRO: "Debe Seleccionar el Registro Presupuestal",
    MSN_DEBE_TIPO_OP: "Debe Seleccionar el Tipo de Documento en la Sección Valor del Pago",
    MSN_DEBE_TOTAL_AFECTACION: "El Valor Total de la Afectacion es Distinto al Valor de la Orden de Pago",
    MSN_DEBE_UNIDAD: "Debe Seleccionar la Unidad Ejecutora",
    MSN_DEBE_VAL_BASE: "Debe Indicar el Valor Base en la Sección Valor del Pago",
    MSN_SUPERA_SALDO: "Supera el Valor del Saldo",
    MSN_TOTAL_AECTACION: "El Total de la Afectación a los Conceptos del Rubro",
    MSN_Y: "y",
    NATURALEZA: "Naturaleza",
    NECESIDAD: "Necesidad",
    NECESIDAD_NO: "Necesidad No. ",
    NO: "No. ",
    NOMBRE: "Nombre",
    NOMBRES: "Nombres",
    NOMBRE_CONVENIO: "Nombre del Convenio",
    NOMBRE_PROYECTO: "Nombre del Proyecto",
    NOMINA: "Nomina",
    NOTA_DEVITO: "Nota Débito",
    NOTIFICACION_PENDIENTE: "Notificaciones Pendientes",
    NOTIFICACION_VISTA: "Notificaciones Vistas",
    NO_CDP: "No. CDP",
    NO_CRP: "No. CRP",
    NO_DOCUMENTO: "No. Documento",
    NO_QUINCENA: "Nro. Quincena",
    NUEVA_CUENTA: "Nueva Cuenta",
    NUEVO: "Nuevo",
    NUEVO_OP_PLANTA: "Nuevo OP Planta",
    NUEVO_OP_PROVEEDOR: "Nuevo OP Proveedor",
    NUEVO_OP_SEGURIDAD_SOCIAL: "Nuevo OP Seguridad Social",
    NUEVO_PLAN_CUENTAS: "Crear Nuevo Plan de cuentas",
    NUEVO_REQUISITO_AVANCE: "Nuevo Requisito de Avance",
    NUEVO_TIPO_AVANCE: "Nuevo Tipo de Avance",
    NUMERO_CELULAR: "Numero Celular",
    NUMERO_TELEFONICO: "Número telefónico",
    OBJETIVO: "Objetivo",
    OBJETO: "Objeto",
    OBJETO_CONTRACTUAL: "Objeto Contractual ",
    OBSERVACIONES: "Observaciones",
    OFICIO: "Oficio No.",
    OPERACION: "Operación",
    OPERAR_CONCEPTO: "Operar Concepto",
    ORDENADOR_GASTO: "Ordenador del Gasto",
    ORDEN_PAGO: "Órdenes de Pago",
    ORDEN_PAGO_ACTUALIZAR: "Actualizar Órdenes de Pago",
    ORDEN_PAGO_SELECCIOANR: "Seleccionar Orden de Pago",
    ORIGEN: "Origen",
    PAGO_REPORTADO: "Pago reportado",
    PLANES_CUENTAS: "Planes de Cuentas",
    PLANTA: "Planta",
    PLAN_CUENTAS: "Plan de Cuentas",
    PLAN_CUENTAS_MAESTRO: "Plan de Cuentas Maestro",
    PORCENTAJE: "Porcentaje",
    POR_IVA: "% IVA",
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
    REGISTRO_RUBRO: "Registro de Rubro",
    REQUISITOS: "Requisitos",
    REQUISITOS_AVANCE: "Requisitos de Avance",
    RESPONSABLE: "Responsable",
    RESPONSABLE_SELECCION_PRESUPUESTO: "Responsable Sección De Presupuesto",
    RUBRO: "Rubro",
    RUBROS: "Rubros",
    RUBROS_ASIGNADOS_FUENTE: "Rubros Asignados Fuente de Financiamiento",
    RUBRO_DESTINO: "Rubro de Destino",
    RUBRO_ORIGEN: "Rubro de Origen",
    RUBRO_SELECCIONADO: "Rubros Seleccionado",
    SALDO: "Saldo",
    SEDE: "Sede",
    SEGUDIDAD_SOCIAL: "Seguridad Social",
    SEGUNADA: "Segunda",
    SEGURO: "Seguro",
    SELECCIONAR: "Seleccionar",
    SELECCIONAR_DEPENDENCIA: "Seleccione la Dependencia",
    SELECCIONAR_DESCUENTOS: "Selecciona Impuestos y Descuentos",
    SELECCIONAR_RUBRO: "Seleccionar Rubro",
    SELECCIONAR_VIGENCIA: "Seleccione una Vigencia",
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
    SELECCIONE_TIPO: "Seleccione el tipo de Modificación Presupuestal",
    SELECCION_OPCION: "Selecciona una opción",
    SELECCION_RUBRO: "Seleccione el Rubro",
    SELECCION_UNIDAD_EJECUTORA: "Seleccionar Unidad Ejecutora",
    SIGLA: "Sigla",
    SOLICITUD: "Solicitud",
    SOLICITUD_AVANCE: "Solicitud de Avance",
    SOLICITUD_AVANCE_VALIDADA: "Esta solicitud ya fue validada",
    SOLICITUD_CDP: "Solicitud de CDP No.",
    SUCURSAL: "Sucursal",
    SUCURSALES: "Sucursales",
    S_543: "Se registro exitosamente",
    S_544: "Se Aprobo el Ingreso con el consecutivo ",
    S_545: "Se Rechazo el Ingreso con el consecutivo ",
    S_554: "Se eliminio exitosamente",
    S_588: "El registro se actualizó exitosamente",
    S_900: "Se verificaron los requisitos exitosamente",
    S_A01: "Se Rechazo la Solicitud ",
    S_A12: "Operación para Anulación Correctamente Realizada para la solicitud",
    S_OPP_01: "Orden de Pago Registrado Exitosamente con Consecutivo No. ",
    S_OPP_02: "Orden de Pago Actualizado Exitosamente con Consecutivo No. ",
    SMA_001: "Se Realizó la Solicitud de Avance con Consecutivo No. ",
    TABLA_INGRESOS_BANCO: "Lista de Consignaciones",
    TELEFONO: "Teléfono",
    TIPO: "Tipo",
    TIPO_ANULACION: "Tipo de Anulación",
    TIPO_AVANCE: "Tipo de Avance",
    TIPO_CUENTA: "Tipo Cuenta",
    TIPO_DOCUMENTO: "Tipo Documento",
    TIPO_EMPLEADO: "Tipo Empleado",
    TIPO_INGRESO: "Tipo de Ingreso",
    TIPO_MODIFICACION: "Tipo de Modificación Presupuestal",
    TIPO_PERSONA: "Tipo Persona",
    TITULO: "GENERATOR-OAS",
    TITULO_FUENTES_CONSULTAR: "Consultar Fuentes de Financiamiento",
    TITULO_FUENTES_CREAR: "Crear Fuentes de Financiamiento",
    TITULO_FUENTES_DETALLE: "Detalle Fuentes de Financiamiento",
    TITULO_SOLICITUD_CDP: "Solicitudes de Certificado de Disponibilidad Presupuestal",
    TODOS: "Todos",
    TOTAL: "Total",
    TOTAL_ANULADO: "Total Anulado",
    TOTAL_COMPROMETIDO: "Total Comprometido",
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
    VALOR_CONTRATACION: "Valor De La Contratación",
    VALOR_CRP: "Valor CRP",
    VALOR_FUENTE: "Valor Fuente Financiamiento",
    VALOR_PAGO: "Valor Pago",
    VALOR_RUBRO: "Valor Rubro",
    VALOR_TOTAL: "Valor Total",
    VALOR_TRASLADO: "Valor Traslado",
    VAL_IVA: "Valor IVA",
    VENCIMIENTO: "Vencimiento",
    VER_SOLICITUD: "Ver Solicitud",
    VIGENCIA: "Vigencia",
    VINCULACION: "Vinculacion",
    BTN: {
        AGREGAR: "Agregar",
        ANADIR: "Añadir",
        APROBAR: "Aprobar",
        BORRAR: "Borrar",
        CANCELAR: "Cancelar",
        CONFIGURAR: "Configurar",
        CONFIRMAR: "Confirmar",
        EDITAR: "Editar",
        GUARDAR: "Guardar",
        LIMPIAR: "Limpiar",
        NUEVO: "Nuevo",
        NUEVO_OP_PLANTA: "Nuevo OP Planta",
        NUEVO_OP_PROVEEDOR: "Nuevo OP Proveedor",
        NUEVO_OP_SEGURIDAD_SOCIAL: "Nuevo OP Seguridad Social",
        QUITAR: "Quitar",
        QUITAR_RUBRO: "Quitar",
        RECHAZAR: "Rechazar",
        REGISTRAR: "Registrar",
        REGRESAR: "Regresar",
        SELECCIONAR: "Seleccionar",
        SOLICITAR_RP: "Solicitar RP",
        VER: "Ver",
        VERIFICAR: "Verificar Requisitos"
    },
    D_PLANES_CUENTA: {
        LISTADO_PLAN_CUENTAS: "Listado de Planes de Cuentas",
        NO_FILAS: "Número de Filas"
    }
};

var text_en = {
    ACTUALIZAR: "Update",
    AFECTACION: "Affectation",
    AFECTACION_CONCEPTO: "Enter Affection for Concept",
    APROBACION_PRESUPUESTO: "Aprobación de Presupuesto",
    BTN: "[object Object]",
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
    D_PLANES_CUENTA: "[object Object]",
    EDITAR_PLAN_CUENTAS: "Editar plan de Cuentas",
    ELABORADO_POR: "Elaborated By",
    ENTIDAD: "Entity",
    ENTRADA_ALMACEN: "Warehouse Entryss",
    ESTADO: "State",
    FACTURA: "Bill",
    FECHA_CREACION: "Creation Date",
    FILTRO_NOTIFICACION: "Filtrar notificación",
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
    NUEVO_OP_PLANTA: "New PO Floor",
    NUEVO_OP_PROVEEDOR: "New PO Supplier",
    NUEVO_PLAN_CUENTAS: "Crear Nuevo Plan de cuentas",
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
    },
};

//
var keys = [],
    k, i, len;
for (k in text_en.BTN) {
    if (text_en.BTN.hasOwnProperty(k)) {
        keys.push(k);
    }
}
keys.sort();
len = keys.length;

for (i = 0; i < len; i++) {
    k = keys[i];
    console.log(k + ':' + ' "' + text_en.BTN[k] + '",');
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