import { Loadable, BaseLoader, PixivIconLoadError } from './BaseLoader'
import icons from './icons'

/**
 * オブジェクトプール。Loader のインスタンスは作り次第ここに入れる
 *
 * 同じアイコンへの複数回のリクエストが起きないためには、Loader がこの中でユニークでないと行けない
 */
const pool = new Map<string, Loadable>()

export function findLoader(name: string) {
  return pool.get(name)
}

export function registerUrlLoader(name: string, url: string) {
  const loader = new UrlLoader(name, url)

  pool.set(name, loader)
}

export function findLoaderOrRegisterBundled(name: string) {
  const registeredLoader = findLoader(name)
  if (registeredLoader) {
    return registeredLoader
  }

  const iconUrl = (icons as Record<string, string | undefined>)[name]

  const newLoader =
    iconUrl !== undefined
      ? new UrlLoader(name, iconUrl)
      : new NotRegisteredLoader(name)
  pool.set(name, newLoader)

  return newLoader
}

/**
 * アイコンを特定の URL から取得する Loader
 */
export class UrlLoader implements Loadable {
  private fetcher: BaseLoader

  public constructor(name: string, url: string) {
    this.fetcher = new BaseLoader(name, url)
  }

  fetch(): Promise<string> {
    return this.fetcher.fetch()
  }

  isLoading() {
    return this.fetcher.isLoading()
  }
}

/**
 * アイコンが登録されていない場合に利用する Loader
 */
export class NotRegisteredLoader implements Loadable {
  private _name: string

  public constructor(name: string) {
    this._name = name
  }

  fetch(): Promise<string> {
    return Promise.reject(
      new PixivIconLoadError(`pixiv-icon "${this._name}" is not registered`)
    )
  }

  isLoading() {
    return false
  }
}
