import { config, collection, fields, component } from '@keystatic/core'

// In production (Cloudflare Pages), switch storage to 'github' and configure
// a GitHub OAuth App so the /keystatic editor can commit content changes.
// For now, 'local' works for all local development.
const storage =
  process.env.NODE_ENV === 'production'
    ? ({ kind: 'local' } as const) // swap to { kind: 'github', repo: 'owner/kuko' }
    : ({ kind: 'local' } as const)

export default config({
  storage,
  ui: {
    brand: { name: 'KUKO' },
  },

  collections: {
    // ── Articles ────────────────────────────────────────────────────────────
    articles: collection({
      label: 'Investigaciones',
      slugField: 'title',
      path: 'content/articles/*',
      entryLayout: 'content',
      format: { contentField: 'body' },
      schema: {
        title: fields.slug({
          name: { label: 'Título', validation: { isRequired: true } },
        }),
        status: fields.select({
          label: 'Estado',
          options: [
            { label: 'Borrador', value: 'draft' },
            { label: 'Publicado', value: 'published' },
            { label: 'Archivado', value: 'archived' },
          ],
          defaultValue: 'draft',
        }),
        contentType: fields.select({
          label: 'Tipo de contenido',
          options: [
            { label: 'Investigación', value: 'investigacion' },
            { label: 'Análisis', value: 'analisis' },
            { label: 'Contexto', value: 'contexto' },
            { label: 'Datos', value: 'datos' },
            { label: 'Propuesta', value: 'propuesta' },
          ],
          defaultValue: 'investigacion',
        }),
        excerpt: fields.text({ label: 'Resumen', multiline: true }),
        publishedAt: fields.date({ label: 'Fecha de publicación' }),
        coverImage: fields.image({
          label: 'Imagen de portada',
          directory: 'public/images/articles',
          publicPath: '/images/articles/',
        }),
        coverImageAlt: fields.text({ label: 'Alt text de la portada' }),
        category: fields.relationship({
          label: 'Categoría',
          collection: 'categories',
        }),
        authors: fields.array(
          fields.relationship({ label: 'Autor', collection: 'authors' }),
          { label: 'Autores', itemLabel: (props) => props.value ?? 'Autor' },
        ),
        readingTimeMinutes: fields.number({ label: 'Tiempo de lectura (min)' }),

        body: fields.document({
          label: 'Cuerpo del artículo',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/images/articles',
            publicPath: '/images/articles/',
          },
          componentBlocks: {
            pullQuote: component({
              label: 'Pull Quote',
              preview: () => null,
              schema: {
                text: fields.text({
                  label: 'Texto',
                  multiline: true,
                  validation: { isRequired: true },
                }),
                attribution: fields.text({ label: 'Atribución (opcional)' }),
              },
            }),
            statCallout: component({
              label: 'Stat Callout',
              preview: () => null,
              schema: {
                stats: fields.array(
                  fields.object({
                    value: fields.text({ label: 'Valor (e.g. "68%")' }),
                    label: fields.text({ label: 'Etiqueta' }),
                  }),
                  {
                    label: 'Stats (1–3)',
                    itemLabel: (props) => props.fields.value.value ?? 'Stat',
                    validation: { length: { min: 1, max: 3 } },
                  },
                ),
              },
            }),
            optionsList: component({
              label: 'Options List',
              preview: () => null,
              schema: {
                items: fields.array(
                  fields.object({
                    title: fields.text({ label: 'Título (e.g. "Opción A")' }),
                    body: fields.text({ label: 'Descripción', multiline: true }),
                  }),
                  {
                    label: 'Opciones',
                    itemLabel: (props) => props.fields.title.value ?? 'Opción',
                    validation: { length: { min: 2, max: 6 } },
                  },
                ),
              },
            }),
          },
        }),

        // SEO overrides
        seoTitle: fields.text({ label: 'SEO Title (opcional, max 60 chars)' }),
        seoDescription: fields.text({
          label: 'SEO Description (opcional, max 160 chars)',
          multiline: true,
        }),
        noIndex: fields.checkbox({ label: 'No indexar', defaultValue: false }),
      },
    }),

    // ── Authors ──────────────────────────────────────────────────────────────
    authors: collection({
      label: 'Autores',
      slugField: 'name',
      path: 'content/authors/*',
      schema: {
        name: fields.slug({ name: { label: 'Nombre completo' } }),
        role: fields.text({ label: 'Rol / cargo' }),
        bio: fields.text({ label: 'Biografía corta', multiline: true }),
        photo: fields.image({
          label: 'Foto',
          directory: 'public/images/authors',
          publicPath: '/images/authors/',
        }),
        email: fields.text({ label: 'Email público (opcional)' }),
        twitter: fields.text({ label: 'Twitter/X handle (sin @)' }),
        linkedin: fields.url({ label: 'LinkedIn URL' }),
      },
    }),

    // ── Categories ───────────────────────────────────────────────────────────
    categories: collection({
      label: 'Categorías',
      slugField: 'title',
      path: 'content/categories/*',
      schema: {
        title: fields.slug({ name: { label: 'Nombre' } }),
        color: fields.text({
          label: 'Color (hex)',
          defaultValue: '#6B6B6B',
          description: 'Used for category badge dots, e.g. "#E85D75"',
        }),
        description: fields.text({ label: 'Descripción', multiline: true }),
      },
    }),

    // ── Datasets ─────────────────────────────────────────────────────────────
    datasets: collection({
      label: 'Datasets',
      slugField: 'title',
      path: 'content/datasets/*',
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        description: fields.text({ label: 'Descripción', multiline: true }),
        source: fields.text({
          label: 'Fuente',
          description: 'e.g. "CTP — SAIP #2024-0341"',
        }),
        lastUpdated: fields.date({ label: 'Última actualización' }),
        category: fields.relationship({ label: 'Categoría', collection: 'categories' }),
        tags: fields.array(fields.text({ label: 'Etiqueta' }), {
          label: 'Etiquetas',
          itemLabel: (props) => props.value ?? '',
        }),
        downloadUrl: fields.url({ label: 'URL de descarga (CSV, XLSX, etc.)' }),
      },
    }),
  },
})
