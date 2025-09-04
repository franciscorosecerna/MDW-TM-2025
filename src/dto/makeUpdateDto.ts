import "reflect-metadata";
import { IsOptional } from "class-validator";

type Constructor<T = {}> = new (...args: any[]) => T;

export function MakeUpdateDto<TBase extends Constructor>(Base: TBase) {
  class UpdateDto {}
  Object.getOwnPropertyNames(Base.prototype).forEach((key) => {
    if (key !== "constructor") {
      const decorators = Reflect.getMetadata("class-validator:decorators", Base.prototype, key);
      if (decorators) {
        decorators.forEach((d: any) => Reflect.decorate([d], UpdateDto.prototype, key));
      }
      Reflect.decorate([IsOptional()], UpdateDto.prototype, key);
    }
  });
  return UpdateDto as TBase;
}