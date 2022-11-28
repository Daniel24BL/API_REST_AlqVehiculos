"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const controllers_1 = require("../controllers");
const middlewares_1 = __importDefault(require("../middlewares"));
const { obtenerVehiculos, obtenerVehiculo, obtenerVehiculoIdUsuario, crearVehiculo, actualizarVehiculo, borrarVehiculo, } = controllers_1.Vehiculo;
const { validarCampos } = middlewares_1.default;
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', obtenerVehiculos);
router.get('/obtenerVehiculo/:id', (0, express_validator_1.check)('id', 'El ID de Mongo no es Valido').isMongoId(), validarCampos, obtenerVehiculo);
router.get('/obtenerVehiculoIdUsuario/:idU', (0, express_validator_1.check)('idU', 'El Id de usuario ingresado no esta registrado').isMongoId(), validarCampos, obtenerVehiculoIdUsuario);
router.post('/crearVehiculo', (0, express_validator_1.check)('placaVehiculo', 'La Placa del Vehiculo es Obligatoria').not().isEmpty(), validarCampos, crearVehiculo);
router.put('/actualizarVehiculo/:idV', (0, express_validator_1.check)('idV', 'El Vehiculo con ese ID no esta registrado').isMongoId(), validarCampos, actualizarVehiculo);
router.delete('/borrarVehiculo/:idV', (0, express_validator_1.check)('idV', 'El Vehiculo con ese ID no esta registrado').isMongoId(), validarCampos, borrarVehiculo);
