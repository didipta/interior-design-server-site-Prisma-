"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.servicecategoryService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createservicecate = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const servicecate = yield prisma_1.default.servicecategory.findFirst({
        where: {
            categoryname: data.categoryname,
        },
    });
    if (servicecate) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'service category already exists');
    }
    const result = yield prisma_1.default.servicecategory.create({
        data,
    });
    return result;
});
const getcategory = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.servicecategory.findMany({
        include: {
            service: true,
        },
    });
    return result;
});
const getcategorybyid = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.servicecategory.findUnique({
        where: {
            id: id,
        },
    });
    return result;
});
const updatecategory = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.servicecategory.update({
        where: {
            id: id,
        },
        data,
    });
    return result;
});
const deleteservicecate = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.servicecategory.delete({
        where: {
            id: id,
        },
    });
    return result;
});
exports.servicecategoryService = {
    createservicecate,
    getcategory,
    getcategorybyid,
    updatecategory,
    deleteservicecate,
};
