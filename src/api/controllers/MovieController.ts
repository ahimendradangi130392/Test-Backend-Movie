import { Body, Delete, Get, JsonController, Param, Patch, Post, QueryParams, Req, UseBefore } from "routing-controllers";
import { OpenAPI, ResponseSchema } from "routing-controllers-openapi";
import { Service } from "typedi";
import {  MovieService } from "../services/MovieService";
import { AdminModel } from "../models/AdminModel";
import { env } from '../../env';
import multer from 'multer';
import { fileUploadOptions } from "../fileUpload";
import { MovieRequest, UpdateMovieRequest } from "./requests/Movie";
import { Pagination } from "nestjs-typeorm-paginate";

@OpenAPI({ security: [{ bearerAuth: [] }] })
@JsonController('/movie')

export class MovieController {
    constructor(
        @Service() private MovieService: MovieService,
    ) {
    }

    @Get('/:id')
    @ResponseSchema('', {
        description: 'add Movie info by id',
    })
    public async MovieInfoById(@Param('id') id: number): Promise<AdminModel>{
        return await this.MovieService.MovieInfoById(id);
    }

    /*  ------------------ Movie list ---------------  */
    @Get('/')
    @ResponseSchema(MovieRequest, { description: 'Get all Movie Details' })
    public async index(@QueryParams() param: any): Promise<Pagination<AdminModel[]>> {
        return await this.MovieService.getAllMovieInformation(param);
    }

    /*  ------------------create Movie ---------------  */
    @Post('/')
    @UseBefore(multer(fileUploadOptions).fields([
        { maxCount: 1, name: 'file' },
    ]))
    @ResponseSchema('', {
        contentType: 'multipart/form-data',
        description: 'add Movie',
    })
    public async registration(@Body() body: MovieRequest,  @Req() req: MovieRequest|any): Promise<AdminModel> {
        let fileUrl = '';
        if (req?.files?.file) {
            fileUrl = env.app.schema + '://' + req.headers.host + env.uploads + req.files.file[0].filename;
        } else if (body?.file) {
            fileUrl = body?.file;
        }
        body.file = fileUrl;
        return await this.MovieService.registration(body);
    }

    /*  ------------------update Movie ---------------  */
    @Patch('/')
    @UseBefore(multer(fileUploadOptions).fields([
        { maxCount: 1, name: 'file' },
    ]))
    @ResponseSchema('', {
        contentType: 'multipart/form-data',
        description: 'update Movie',
    })
    public async updateMovie(@Body() body: UpdateMovieRequest,@Req() req:any): Promise<AdminModel> {
        if (req?.files?.file) {
            body.file = env.app.schema + '://' + req.headers.host + env.uploads + req.files.file[0].filename;
        }
        return await this.MovieService.updateMovie(body);
    }

    /*  ------------------delete Movie---------------  */
    @Delete('/:id')
    @ResponseSchema('', {
        description: 'delete Movie by user',
    })
    public async deleteMovie(@Param('id') id: number): Promise<AdminModel> {
        return await this.MovieService.deleteMovie(id);
    }

}
