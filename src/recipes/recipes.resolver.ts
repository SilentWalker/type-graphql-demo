import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { NewRecipeInput } from './dto/new-recipe.input'
import { RecipesArgs } from './dto/recipes.args'
import { Recipe } from './models/recipe'
import { RecipesService } from './recipes.service'
import { Int } from 'type-graphql'

@Resolver(of => Recipe)
export class RecipesResolver {
  constructor(private readonly recipesService: RecipesService) {}

  @Query(returns => Recipe)
  recipe(
    @Args({ nullable: true, name: 'id', type: () => Int }) id: number,
    @Args({ nullable: true, name: 'tag', type: () => String }) tag: string,
  ): Recipe {
    return this.recipesService.findOne(id, tag)
  }

  @Query(returns => [Recipe])
  recipes(@Args() recipesArgs: RecipesArgs): Recipe[] {
    return this.recipesService.find(recipesArgs)
  }

  @Mutation(returns => Recipe)
  addRecipe(@Args('newRecipeData') newRecipeData: NewRecipeInput): Recipe {
    const recipe = this.recipesService.create(newRecipeData)
    return recipe
  }
}
