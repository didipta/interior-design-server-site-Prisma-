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
exports.contentService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const insertcontent = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.content.create({
        data,
    });
    return result;
});
const getcontent = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.content.findMany();
});
const deletecontent = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.content.delete({
        where: {
            id: id,
        },
    });
});
const fivetypewish = () => __awaiter(void 0, void 0, void 0, function* () {
    const faq = yield prisma_1.default.content.findMany({
        where: {
            type: 'faq',
        },
        take: 5,
        orderBy: {
            id: 'desc',
        },
    });
    const blog = yield prisma_1.default.content.findMany({
        where: {
            type: 'blog',
        },
        take: 5,
        orderBy: {
            id: 'desc',
        },
    });
    return {
        faq: faq,
        blog: blog,
    };
});
exports.contentService = {
    insertcontent,
    getcontent,
    deletecontent,
    fivetypewish,
};
