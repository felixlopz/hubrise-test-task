import { Image, ImageSharpFluid } from './image'
import { IMeta } from './base'

export interface AppsContext {
  id: string
  lang: string
  category?: string
}

export interface AppsCreatePageGQL {
  absolutePath: string
  id: string
  childYaml: {
    parsedContent: IApps
  }
}

export interface AppsQueryGQL {
  file: {
    childYaml: {
      parsedContent: IApps
    }
  }
  logos: {
    nodes: Array<Image<ImageSharpFluid>>
  }
}

export interface IApp {
  website: string
  documentation: string
  logo: string
  title: string
  description: string
  additional_info: string
}

export interface ICategory {
  title: string
  has_suggest_app: boolean
  apps: Array<IApp>
}

export interface IHero {
  title: string
  description: {
    paragraph_1_text: string
    paragraph_1_link_text: string
    paragraph_2_text: string
    paragraph_2_link_text: string
    paragraph_2_link_to: string
  }
}

export interface IAdditionalSections {
  suggest_app: {
    description: string
  }
}

export interface IDevelopers {
  title: string
  description: {
    paragraph_1: string
    paragraph_2: {
      chunk_1: string
      chunk_2: string
    }
  }
}

export interface IApps {
  path: string
  meta: IMeta
  content: {
    hero: IHero
    all_apps: string
    categories: Array<ICategory>
    additional_sections: IAdditionalSections
    developers: IDevelopers
  }
}
