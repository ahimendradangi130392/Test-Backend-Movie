import { IsNotEmpty, IsOptional } from 'class-validator';

export class MovieRequest {
    @IsNotEmpty()
    public title: string

    @IsNotEmpty()
    public publishingYear: string;

    @IsNotEmpty()
    public file: string;

    @IsOptional()
    headers?: string

}

export class UpdateMovieRequest {
    @IsOptional()
    public id: number;
  
    @IsOptional()
    public title: string

    @IsOptional()
    public publishingYear: string;

    @IsOptional()
    public file: string;

    @IsOptional()
    headers?: string
}
