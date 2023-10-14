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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceService = void 0;
const paginationHelper_1 = require("../../../helpers/paginationHelper");
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const service_interface_1 = require("./service.interface");
const createservice = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const service = yield prisma_1.default.service.findFirst({
        where: {
            name: data.name,
        },
    });
    if (service) {
        throw new Error('service already exists');
    }
    const result = yield prisma_1.default.service.create({
        data,
    });
    return result;
});
const getservice = (filter, options) => __awaiter(void 0, void 0, void 0, function* () {
    const { limit, page, skip } = paginationHelper_1.paginationHelpers.calculatePagination(options);
    const { searchTerm, minPrice, maxPrice } = filter, filterData = __rest(filter, ["searchTerm", "minPrice", "maxPrice"]);
    const andConditions = [];
    if (searchTerm) {
        andConditions.push({
            OR: service_interface_1.serviceSearchableFields.map(field => {
                const condition = {};
                if (field === 'price' || field === 'Available' || field === 'status') {
                    // Handle numeric fields with appropriate filters
                    condition[field] = {
                        equals: parseInt(searchTerm) || 0, // Assuming searchTerm is a numeric string
                    };
                }
                else {
                    // Handle string fields with contains filter
                    condition[field] = {
                        contains: searchTerm,
                        mode: 'insensitive',
                    };
                }
                return condition;
            }),
        });
    }
    if (minPrice !== undefined) {
        andConditions.push({
            price: {
                gte: parseFloat(minPrice.toString()),
            },
        });
    }
    if (maxPrice !== undefined) {
        andConditions.push({
            price: {
                lte: parseFloat(maxPrice.toString()),
            },
        });
    }
    if (Object.keys(filterData).length > 0) {
        andConditions.push({
            AND: Object.keys(filterData).map(key => ({
                [key]: {
                    equals: filterData[key],
                },
            })),
        });
    }
    const whereConditions = andConditions.length > 0 ? { AND: andConditions } : {};
    const result = yield prisma_1.default.service.findMany({
        include: {
            servicecategory: true,
            review: true,
        },
        where: whereConditions,
        skip,
        take: limit,
        orderBy: options.sortBy && options.sortOrder
            ? { [options.sortBy]: options.sortOrder }
            : {
                createdAt: 'desc',
            },
    });
    const total = yield prisma_1.default.service.count({
        where: whereConditions,
    });
    return {
        meta: {
            total,
            page,
            limit,
        },
        data: result,
    };
});
const getservicebyid = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.service.findUnique({
        where: {
            id: id,
        },
    });
    return result;
});
const updateservice = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.service.update({
        where: {
            id: id,
        },
        data,
    });
    return result;
});
const deleteservice = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.service.delete({
        where: {
            id: id,
        },
    });
    return result;
});
exports.serviceService = {
    createservice,
    getservice,
    getservicebyid,
    updateservice,
    deleteservice,
};
