import {
    IsString,
    MaxLength,
    MinLength,
    IsNotEmpty,
    IsNumber,
    Min,
    IsOptional,
} from "class-validator";

export class CreateProductDto {
    @IsString({ message: "El nombre debe ser un texto" })
    @MinLength(3, { message: "El nombre debe tener al menos 3 caracteres" })
    @MaxLength(50, { message: "El nombre debe tener como máximo 50 caracteres" })
    @IsNotEmpty({ message: "El nombre es obligatorio" })
    name!: string;

    @IsNumber({}, { message: "El precio debe ser un número" })
    @Min(0, { message: "El precio no puede ser negativo" })
    price!: number;

    @IsString({ message: "La descripción debe ser un texto" })
    @IsOptional()
    description?: string;

    @IsNumber({}, { message: "El stock debe ser un número" })
    @Min(0, { message: "El stock no puede ser negativo" })
    @IsOptional()
    stock?: number;
    
    category!: string;
}
