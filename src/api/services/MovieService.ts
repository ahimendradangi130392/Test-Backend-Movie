import { Logger } from "../../decorators/Logger";
import { LoggerInterface } from "../../lib/logger";
import { Service } from "typedi";
import { OrmRepository } from "typeorm-typedi-extensions";
import { MovieRepository } from "../repositories/MovieRepository";
import { AdminModel } from "../models/AdminModel";
import { Pagination } from "nestjs-typeorm-paginate";
import { MovieRequest, UpdateMovieRequest } from "../controllers/requests/Movie";

@Service()
export class MovieService {

    constructor(
        @Logger(__filename) private log: LoggerInterface,
        @OrmRepository() private MovieRepository: MovieRepository,

    ) { }

    public async MovieInfoById(id: number): Promise<AdminModel> {
        this.log.info(`Movie info by id `);
        return await this.MovieRepository.findOne(id);
    }

    /*  ------------------add Movie by user---------------  */
    public async registration(body: MovieRequest): Promise<AdminModel> {
        this.log.info(`update Movie by user`);
        try {
            return await this.MovieRepository.save(body);
        } catch (error) {
            throw error;
        }
    }

    /*  ------------------ Movie list---------------  */
    public async getAllMovieInformation(filters: any): Promise<Pagination<AdminModel[]>> {
        this.log.info(`get all Role information `);
        return await this.MovieRepository.allMovieInfo(filters);
    }
    /*  ------------------delete Movie by  user ---------------  */
    public async deleteMovie(id: number): Promise<AdminModel | any> {
        this.log.info(`Delete Movie Information By Id`);
        try {
            return await this.MovieRepository.softDelete(id);
        } catch (error) {
            throw error
        }
    }

    /*  ------------------update category by admin ---------------  */
    public async updateMovie(updateBody: UpdateMovieRequest): Promise<AdminModel | any> {
        this.log.info(`Update category by admin`);
        try {
            const MovieData = await this.MovieRepository.findOne(updateBody?.id);
            if (MovieData) {
                MovieData.title = updateBody.title;
                MovieData.publishingYear=updateBody.publishingYear;
                MovieData.file=updateBody.file;
                return await this.MovieRepository.save(MovieData)
            }
        } catch (error) {
            throw error;
        }
    }

}
