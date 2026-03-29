const CMS_API_BASE_URL = import.meta.env.VITE_CMS_API_BASE_URL ?? '';

function buildUrl(path) {
  const trimmedBase = CMS_API_BASE_URL.replace(/\/+$/, '');

  // `path` should be full like `/api/v1/projects` or `/api/v1/blog-posts?...`
  if (trimmedBase) return `${trimmedBase}${path}`;
  return path;
}

function getLocaleFromNavigator() {
  if (typeof navigator === 'undefined') return 'en';
  const lang = navigator.language?.toLowerCase?.() ?? 'en';
  return lang.startsWith('id') ? 'id' : 'en';
}

async function cmsFetchJson(path) {
  const res = await fetch(buildUrl(path), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });

  let payload = null;
  try {
    payload = await res.json();
  } catch {
    // ignore non-JSON payloads
  }

  if (!res.ok) {
    const message = payload?.error?.message ?? `CMS request failed (${res.status}).`;
    throw new Error(message);
  }

  return payload;
}

/**
 * GET /api/v1/projects — list projects + category filters from CMS.
 * @returns {Promise<{ projects: object[], categories: string[] }>}
 */
export async function listProjects() {
  const json = await cmsFetchJson('/api/v1/projects');
  const data = json?.data ?? {};
  return {
    projects: Array.isArray(data.projects) ? data.projects : [],
    categories: Array.isArray(data.categories) ? data.categories : [],
  };
}

/**
 * GET /api/v1/blog-posts — list published posts for a locale.
 * @param {string} [locale] — `en` | `id`; defaults from navigator
 * @returns {Promise<object[]>}
 */
export async function listBlogPosts(locale = getLocaleFromNavigator()) {
  const loc = locale === 'id' ? 'id' : 'en';
  const json = await cmsFetchJson(`/api/v1/blog-posts?locale=${encodeURIComponent(loc)}`);
  return Array.isArray(json?.data) ? json.data : [];
}

/**
 * GET /api/v1/blog-posts/{slug} — single published post.
 */
export async function getBlogPost(slug, locale = getLocaleFromNavigator()) {
  const loc = locale === 'id' ? 'id' : 'en';
  return cmsFetchJson(
    `/api/v1/blog-posts/${encodeURIComponent(slug)}?locale=${encodeURIComponent(loc)}`,
  );
}

/**
 * GET /api/v1/contact — singleton contact settings.
 * @returns {Promise<object|null>} parsed `data` or null if missing
 */
export async function getContactInfo() {
  const json = await cmsFetchJson('/api/v1/contact');
  return json?.data ?? null;
}

/** Raw JSON (same as list helpers’ underlying response shape when needed). */
export async function getProjects() {
  return cmsFetchJson('/api/v1/projects');
}

export async function getBlogPosts(locale = getLocaleFromNavigator()) {
  const loc = locale === 'id' ? 'id' : 'en';
  return cmsFetchJson(`/api/v1/blog-posts?locale=${encodeURIComponent(loc)}`);
}

export async function getContact() {
  return cmsFetchJson('/api/v1/contact');
}
