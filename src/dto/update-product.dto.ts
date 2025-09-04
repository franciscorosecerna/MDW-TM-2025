import { CreateProductDto } from "./create-product.dto";
import { MakeUpdateDto } from "./makeUpdateDto";

export const UpdateProductDto = MakeUpdateDto(CreateProductDto);