import { CreateUserDto } from "./create-user.dto";
import { MakeUpdateDto } from "./makeUpdateDto";

export const UpdateUserDto = MakeUpdateDto(CreateUserDto);