import reject from 'lodash/reject';

export default class RepoCache {
  static cacheKey = 'starredReposLocalCache';

  /**
   * Add starred repo to local cache.
   * Create localStorage if key doesn't exist.
   * @param repo
   */
  static add(repo) {
    const cachedStarredRepos = localStorage.getItem(this.cacheKey);

    if (cachedStarredRepos) {
      const cachedRepos = JSON.parse(cachedStarredRepos);
      cachedRepos.push(repo);
      localStorage.setItem(this.cacheKey, JSON.stringify(cachedRepos));
    } else {
      localStorage.setItem(this.cacheKey, JSON.stringify([repo]));
    }
  }

  /**
   * Return locally cached starred repos.
   * If localStorage with key doesn't exist, create it and return empty [].
   * Otherwise, return cached [repos].
   * @returns {*[]|any}
   */
  static getCache() {
    const cachedStarredRepos = localStorage.getItem(this.cacheKey);

    if (cachedStarredRepos) {
      return JSON.parse(cachedStarredRepos);
    }

    localStorage.setItem(this.cacheKey, JSON.stringify([]));
    return [];
  }

  /**
   * Remove starred repo from local cache.
   * Removes repo with supplied 'id' from cache.
   * @param id
   */
  static remove(id) {
    if (isNaN(id)) {
      throw new Error('Argument "id" must be a number.')
    }

    const cachedStarredRepos = localStorage.getItem(this.cacheKey);

    if (cachedStarredRepos) {
      const cachedRepos = JSON.parse(cachedStarredRepos);
      const updatedCache = reject(cachedRepos, {id});
      localStorage.setItem(this.cacheKey, JSON.stringify(updatedCache));
    }
  }
}
