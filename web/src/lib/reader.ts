import { createReader } from '@keystatic/core/reader'
import keystaticConfig from '../../keystatic.config'

// Singleton reader — resolves content relative to project root (web/)
export const reader = createReader(process.cwd(), keystaticConfig)
