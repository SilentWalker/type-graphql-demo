import { IsOptional, Length, MaxLength } from 'class-validator'
import { Field, InputType } from 'type-graphql'

@InputType()
export class NewRecipeInput {
  @Field()
  @MaxLength(30)
  title: string

  @Field({ nullable: true })
  @IsOptional()
  @Length(1, 255)
  description?: string

  @Field(type => [String])
  ingredients: string[]

  @Field(type => [String])
  tag: string[]
}
