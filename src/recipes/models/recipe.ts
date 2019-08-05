import { Field, ObjectType, Int } from 'type-graphql'

@ObjectType()
export class Recipe {
  @Field(type => Int)
  id: number

  @Field()
  title: string

  @Field({ nullable: true })
  description?: string

  @Field(type => [String])
  ingredients: string[]

  @Field(type => [String])
  tag: string[]
}
