import { Injectable } from '@nestjs/common'
import { RecipesArgs } from './dto/recipes.args'
import { NewRecipeInput } from './dto/new-recipe.input'
import { Recipe } from './models/recipe'

@Injectable()
export class RecipesService {
  private readonly recipes: Recipe[] = []

  create(data: NewRecipeInput): Recipe {
    const _last = this.recipes[this.recipes.length - 1]
    const id = (_last && _last.id + 1) || 1
    const _data: Recipe = { ...data, id }
    this.recipes.push(_data)
    return _data
  }

  findOne(id: number, tag: string): Recipe {
    if (id) return this.recipes.find(i => i.id === id)
    if (tag) return this.recipes.find(i => i.tag && i.tag.indexOf(tag) > -1)
    return new Recipe()
  }

  find(recipesArgs: RecipesArgs): Recipe[] {
    const { title, tag, skip, limit } = recipesArgs
    console.log(this.recipes)
    let result = this.recipes
    if (title) result = result.filter(p => p.title.indexOf(title) > -1)
    if (tag) result = result.filter(p => p.tag && p.tag.indexOf(tag) > -1)
    return result.slice(skip, skip + limit)
  }
}
