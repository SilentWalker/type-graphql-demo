import { Max, Min } from 'class-validator'
import { ArgsType, Field, Int } from 'type-graphql'

@ArgsType()
export class RecipesArgs {
  @Field({ nullable: true })
  title: string

  @Field({ nullable: true })
  tag: string

  @Field(type => Int)
  @Min(0)
  skip: number = 0

  @Field(type => Int)
  @Min(1)
  @Max(50)
  limit: number = 25
}
