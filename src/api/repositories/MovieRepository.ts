import { EntityRepository, Repository } from "typeorm";
import { AdminModel } from "../models/AdminModel";
import { Pagination, paginate } from "nestjs-typeorm-paginate";

@EntityRepository(AdminModel)
export class MovieRepository extends Repository<AdminModel>{
    

    public async allMovieInfo(filter: any): Promise<Pagination<AdminModel[] |any>> {
        const qb = this.createQueryBuilder('admin')
        .andWhere('admin.id !=:id',{id:1})
        if (filter.qb) {
            qb.andWhere(`admin.name LIKE:name`, { name: `${filter.qb}%` });
             qb.orWhere(`admin.email LIKe:email`, { email: `${filter.qb}%` })
             qb.orWhere(`admin.mobile_number LIKE:mobileNumber`, { mobileNumber: `${filter.qb}%` })
        }
        if (filter?.sortField && filter?.sortValue) {
            qb.orderBy(`admin.${filter.sortField}`, filter.sortValue);
        } else {
            qb.orderBy('admin.created_at', 'DESC');
        }
        const page = !filter.page ? 1 : Number(filter.page);
        const limit = !filter.limit ? 10 : Number(filter.limit);
        return paginate(qb, { page, limit });
    }

}