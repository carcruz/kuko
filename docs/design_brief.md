# KUKO - Design Brief
## Inspirado en Wired + Amama.space

**Fecha**: Enero 2025  
**Para**: Diseño UI/UX del sitio web KUKO  
**Referencias principales**: Wired.com + Amama.space

---

## 🎯 REFERENCIAS VISUALES

### Inspiración Principal: Amama.space

**Lo que nos encanta de Amama.space**:
- ✅ Layout limpio y espacioso (whitespace generoso)
- ✅ Tipografía clara y legible
- ✅ Navegación simple y directa
- ✅ Grid minimalista pero efectivo
- ✅ Animaciones sutiles y elegantes
- ✅ Colores sobrios (blanco/negro/grises + un acento)
- ✅ Énfasis en el contenido, no en decoración
- ✅ Hover states refinados
- ✅ Imágenes de calidad integradas naturalmente
- ✅ Sensación premium pero no pretenciosa

### Inspiración Secundaria: Wired.com

**Elementos de Wired que mantenemos**:
- ✅ Tipografía bold en headers
- ✅ Jerarquía visual fuerte
- ✅ Sistema de grid claro
- ✅ Enfoque editorial serio

### Dirección Final

**Combinar**: 
- **Amama.space** (minimalismo, elegancia, espacios)
- **Wired** (peso tipográfico, seriedad editorial)
- **+** Identidad propia de KUKO (datos, investigación CR)

**Resultado**: 
Un sitio que se siente **premium, confiable y moderno**, donde el diseño sirve al contenido investigativo sin competir con él.

---

## 🎨 IDENTIDAD VISUAL

### Paleta de Colores (Estilo Amama - Muy Sobria)

**Base (90% del sitio)**:
```
Blanco Puro: #FFFFFF (fondo principal)
Negro: #000000 (texto principal, headers)
Gris Oscuro: #2D2D2D (texto secundario)
Gris Medio: #7A7A7A (metadata, labels)
Gris Muy Claro: #F5F5F5 (fondos alternos sutiles)
Gris Borde: #E8E8E8 (separadores, borders)
```

**Acento Principal** (usar con MUCHA moderación - 5% máximo):
```
Turquesa Profundo: #00A896
- Uso EXCLUSIVO en:
  * Links en hover
  * CTA principal (newsletter, leer más)
  * Badge de artículo destacado
  * Iconos activos

REGLA: Si dudas si usar el acento, NO lo uses.
El sitio debe verse casi monocromático.
```

**Acentos Categorías** (SOLO en pequeños badges, 8x8px dots):
```
🚌 Movilidad: #00A896
🏥 Salud: #E85D75
🎓 Educación: #5B8DEE
💰 Economía: #F5A623
🏛️ Política: #7B68EE
🌳 Ambiente: #50C878
🏘️ Urbanismo: #FF6B35
📡 Tecnología: #9B59B6
⚖️ Justicia: #34495E

IMPORTANTE: Solo como pequeños indicadores,
NUNCA en bloques grandes de color.
```

### Tipografía (Refinada como Amama)

**Sistema Tipográfico**:

```
Font Family: "Inter" (variable font)
Pesos disponibles: 300 (light), 400 (regular), 600 (semibold), 700 (bold)

H1 (Hero/Título principal):
- Size: 56px (desktop) / 32px (mobile)
- Weight: 300 (light pero grande = impacto)
- Line-height: 1.1
- Letter-spacing: -0.02em
- Color: #000000

H2 (Secciones):
- Size: 36px (desktop) / 24px (mobile)
- Weight: 600
- Line-height: 1.2
- Color: #000000

H3 (Sub-secciones):
- Size: 24px (desktop) / 20px (mobile)
- Weight: 600
- Color: #2D2D2D

Body Text:
- Font: Inter Regular
- Size: 17px (desktop) / 16px (mobile)
- Weight: 400
- Line-height: 1.7
- Color: #2D2D2D
- Max-width: 680px (lectura óptima)

Metadata/Labels:
- Size: 13px
- Weight: 400
- Text-transform: uppercase
- Letter-spacing: 0.08em
- Color: #7A7A7A

Números/Stats:
- Font: Inter (mantener consistencia)
- Size: 48px
- Weight: 300 (light)
- Color: #000000
```

### Spacing System (Generoso como Amama)

```
Base unit: 8px

Spacing scale:
xs:   8px
s:    16px
m:    24px
l:    40px
xl:   64px
xxl:  96px
xxxl: 128px

Aplicación:
- Entre secciones principales: 128px (desktop) / 80px (mobile)
- Entre elementos relacionados: 40px
- Padding de contenedores: 24px
- Margin de párrafos: 24px
- Gap en grids: 40px
```

### Layout System

**Desktop (>1200px)**:
```
Max-width contenedor: 1280px
Grid: 12 columnas
Gap: 32px
Margins laterales: 80px
```

**Tablet (768-1199px)**:
```
Max-width: 100%
Grid: 8 columnas
Gap: 24px
Margins: 40px
```

**Mobile (<768px)**:
```
Grid: 4 columnas
Gap: 16px
Margins: 24px
```

---

## 📐 COMPONENTES UI DETALLADOS

### Navigation (Estilo Amama - Minimal)

```
┌────────────────────────────────────────────────────────┐
│                                                        │
│  KUKO    Investigaciones  Datos  Propuestas  Acerca  🔍│
│                                                        │
└────────────────────────────────────────────────────────┘

Specs completas:
- Height: 80px
- Fondo: Blanco con backdrop-filter: blur(10px) (si sticky)
- Border-bottom: 1px solid #E8E8E8
- Logo: 
  * Tipográfico "KUKO"
  * Font: Inter Semibold
  * Size: 18px
  * Color: Negro
  * Hover: Sin efecto
- Nav items: 
  * Font: Inter Regular
  * Size: 15px
  * Color: Negro
  * Spacing entre items: 32px
  * Hover: Color turquesa (#00A896)
  * Underline animado en hover (width: 0 → 100%, left to right, 0.3s ease)
- Search icon:
  * Size: 20px
  * Line style
  * Color: Negro, hover turquesa
- Position: Sticky top
- Z-index: 100
- Shadow en scroll: 0 2px 8px rgba(0,0,0,0.04)
- Mobile: 
  * Hamburger icon (3 líneas horizontales, 2px grosor)
  * Menu overlay full screen
  * Animación slide-in from right
```

### Hero Section - Opción A (Minimalista - PREFERIDA)

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│          (espaciado generoso - 120px top)               │
│                                                         │
│              PENSAMIENTO CRÍTICO                        │
│              PARA COSTA RICA                            │
│                                                         │
│     Investigación basada en datos para entender        │
│     los desafíos de Costa Rica                         │
│                                                         │
│          [Explorar Investigaciones →]                   │
│                                                         │
│          (espaciado generoso - 120px bottom)            │
│                                                         │
└─────────────────────────────────────────────────────────┘

Specs completas:
- Container:
  * Max-width: 800px
  * Centrado horizontalmente
  * Padding vertical: 160px total (80px top + 80px bottom)
- Fondo: Blanco puro (#FFFFFF)
- Título: 
  * "PENSAMIENTO CRÍTICO PARA COSTA RICA"
  * Font: Inter Light (weight 300)
  * Size: 56px
  * Line-height: 1.1
  * Letter-spacing: -0.02em
  * Text-align: center
  * Color: #000000
  * Margin-bottom: 24px
- Subtítulo:
  * Font: Inter Regular
  * Size: 17px
  * Line-height: 1.6
  * Text-align: center
  * Color: #2D2D2D
  * Max-width: 600px
  * Centrado
  * Margin-bottom: 40px
- CTA Button:
  * Text: "Explorar Investigaciones →"
  * Padding: 16px 32px
  * Border: 1px solid #000000
  * Border-radius: 0
  * Background: transparent
  * Color: #000000
  * Font: Inter Medium, 15px
  * Hover state:
    - Background: #000000
    - Color: #FFFFFF
    - Transition: all 0.3s ease
  * Focus state:
    - Outline: 2px solid #00A896
    - Outline-offset: 2px
- Animación de entrada:
  * Fade-in + translateY
  * Duration: 0.8s
  * Delay: 0.2s
  * Easing: ease-out
```

### Hero Section - Opción B (Con Featured Article)

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  [INVESTIGACIÓN DESTACADA]                              │
│                                                         │
│  Sistema de Numeración para                             │
│  el Transporte Público de                               │
│  Costa Rica                                             │
│                                                         │
│  Un análisis de 30 años de desorden y una              │
│  propuesta basada en experiencias internacionales       │
│                                                         │
│  [Leer Análisis Completo →]                             │
│                                                         │
│  Por Carlos Cruz • 15 Enero 2025 • 18 min              │
│                                                         │
└─────────────────────────────────────────────────────────┘

Specs completas:
- Container:
  * Max-width: 900px
  * Centrado
  * Padding: 96px vertical, 40px horizontal
- Fondo: #FAFAFA (gris muy claro)
- Badge "INVESTIGACIÓN DESTACADA":
  * Font: Inter Regular
  * Size: 12px
  * Text-transform: uppercase
  * Letter-spacing: 0.1em
  * Color: #00A896 (turquesa)
  * Margin-bottom: 24px
- Título del artículo:
  * Font: Inter Semibold
  * Size: 48px
  * Line-height: 1.15
  * Color: #000000
  * Margin-bottom: 20px
- Descripción:
  * Font: Inter Regular
  * Size: 20px
  * Line-height: 1.5
  * Color: #2D2D2D
  * Margin-bottom: 32px
- CTA:
  * Similar a Opción A
  * Margin-bottom: 24px
- Metadata:
  * Font: Inter Regular
  * Size: 13px
  * Text-transform: uppercase
  * Letter-spacing: 0.05em
  * Color: #7A7A7A
  * Separador: " • " entre items
```

### Article Card (Minimalista como Amama)

```
Card Layout:

┌────────────────────────────┐
│                            │
│    Imagen (ratio 3:2)      │
│    Sin border-radius       │
│                            │
├────────────────────────────┤
│                            │
│ • MOVILIDAD                │ ← dot + categoría
│                            │
│ Título del Artículo        │
│ En Una o Dos Líneas        │
│                            │
│ 15 Ene • 12 min           │
│                            │
└────────────────────────────┘

Specs completas:
- Container:
  * Width: 100% (responsive dentro del grid)
  * Background: #FFFFFF
  * Border: none (default state)
  * Border-radius: 0
  * Overflow: hidden
- Imagen:
  * Aspect ratio: 3:2
  * Object-fit: cover
  * Width: 100%
  * Transition: transform 0.4s ease-out
  * Hover: transform scale(1.02)
- Text Container:
  * Padding: 20px
  * Gap entre elementos: 12px
- Categoría:
  * Layout: flex, align-items center, gap 8px
  * Dot:
    - Width: 8px
    - Height: 8px
    - Border-radius: 50%
    - Background: Color de categoría
  * Texto:
    - Font: Inter Regular
    - Size: 12px
    - Text-transform: uppercase
    - Letter-spacing: 0.08em
    - Color: #000000
- Título:
  * Font: Inter Semibold
  * Size: 20px
  * Line-height: 1.3
  * Color: #000000
  * Display: -webkit-box
  * -webkit-line-clamp: 2
  * -webkit-box-orient: vertical
  * Overflow: hidden
- Metadata:
  * Font: Inter Regular
  * Size: 13px
  * Color: #7A7A7A
  * Separador: " • "
- Hover State:
  * Border aparece: 1px solid #E8E8E8
  * Imagen: scale(1.02)
  * Cursor: pointer
  * Transition: all 0.4s ease-out
- Focus State (accessibility):
  * Outline: 2px solid #00A896
  * Outline-offset: 4px
```

### Grid de Artículos

```
Desktop Layout (3 columnas):

┌─────────┬─────────┬─────────┐
│         │         │         │
│ Article │ Article │ Article │
│         │         │         │
├─────────┼─────────┼─────────┤
│         │         │         │
│ Article │ Article │ Article │
│         │         │         │
├─────────┼─────────┼─────────┤
│         │         │         │
│ Article │ Article │ Article │
│         │         │         │
└─────────┴─────────┴─────────┘

Specs:
- Display: grid
- Grid-template-columns: 
  * Desktop: repeat(3, 1fr)
  * Tablet: repeat(2, 1fr)
  * Mobile: 1fr
- Gap: 40px (horizontal y vertical)
- Align-items: start
- Margin-bottom: 64px
```

### Stats Section

```
EN NÚMEROS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

┌─────────────────────────────────────────────┐
│                                             │
│    1,247        ₡45,320         2.5         │
│                                             │
│    Rutas de     Canasta         Horas       │
│    Buses        Básica          Promedio    │
│                                  de Viaje   │
│                                             │
└─────────────────────────────────────────────┘

Specs completas:
- Section Container:
  * Background: #FAFAFA o #FFFFFF
  * Padding: 80px vertical
  * Border-top: 1px solid #E8E8E8 (opcional)
- Título "EN NÚMEROS":
  * Font: Inter Regular
  * Size: 13px
  * Text-transform: uppercase
  * Letter-spacing: 0.1em
  * Color: #7A7A7A
  * Text-align: center
  * Margin-bottom: 8px
- Separador:
  * Width: 100%
  * Height: 1px
  * Background: #E8E8E8
  * Margin-bottom: 48px
- Stats Container:
  * Display: flex
  * Justify-content: space-evenly
  * Align-items: center
  * Max-width: 900px
  * Margin: 0 auto
- Stat Individual:
  * Text-align: center
  * Separador vertical entre stats:
    - Width: 1px
    - Height: 80px
    - Background: #E8E8E8
- Número:
  * Font: Inter Light (weight 300)
  * Size: 48px
  * Line-height: 1
  * Color: #000000
  * Margin-bottom: 12px
- Label:
  * Font: Inter Regular
  * Size: 15px
  * Line-height: 1.4
  * Color: #2D2D2D
  * Max-width: 120px
  * Margin: 0 auto
- Mobile:
  * Stack vertical
  * Gap: 40px entre stats
  * Sin separadores verticales
```

### Categorías Grid

```
┌────────┬────────┬────────┬────────┐
│        │        │        │        │
│   🚌   │   🏥   │   🎓   │   💰   │
│        │        │        │        │
│ Movil  │ Salud  │  Edu   │  Eco   │
│                                   │
├────────┼────────┼────────┼────────┤
│        │        │        │        │
│   🏛️   │   🌳   │   🏘️   │   📡   │
│        │        │        │        │
│ Polít  │ Ambie  │ Urban  │  Tech  │
│                                   │
└────────┴────────┴────────┴────────┘

Specs por card:
- Container:
  * Width: 200px
  * Height: 200px
  * Background: #FFFFFF
  * Border: 1px solid #E8E8E8
  * Border-radius: 0
  * Display: flex
  * Flex-direction: column
  * Align-items: center
  * Justify-content: center
  * Gap: 16px
  * Cursor: pointer
- Ícono:
  * Size: 32px
  * Stroke-width: 1.5px
  * Color: #000000 (default)
  * Transition: color 0.3s ease
- Título:
  * Font: Inter Medium
  * Size: 15px
  * Color: #000000
  * Text-align: center
- Hover State:
  * Border-color: Color de categoría
  * Icon color: Color de categoría
  * Background: Color de categoría at 2% opacity
  * Transition: all 0.3s ease
- Grid Container:
  * Display: grid
  * Grid-template-columns: repeat(4, 200px)
  * Gap: 24px
  * Justify-content: center
- Mobile:
  * Grid-template-columns: repeat(2, 1fr)
  * Card width: 100%
```

### Newsletter Section

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│           ANÁLISIS EN TU CORREO                     │
│                                                     │
│     Recibe investigaciones profundas cada semana    │
│                                                     │
│     [_____________________] [Suscribir →]          │
│                                                     │
└─────────────────────────────────────────────────────┘

Specs completas:
- Section Container:
  * Background: #FAFAFA
  * Padding: 80px vertical, 40px horizontal
  * Border-top: 1px solid #E8E8E8
  * Border-bottom: 1px solid #E8E8E8
- Content Container:
  * Max-width: 600px
  * Margin: 0 auto
  * Text-align: center
- Título:
  * Font: Inter Semibold
  * Size: 28px
  * Color: #000000
  * Margin-bottom: 16px
- Descripción:
  * Font: Inter Regular
  * Size: 16px
  * Color: #2D2D2D
  * Margin-bottom: 32px
- Form Container:
  * Display: flex
  * Gap: 0 (unidos)
  * Max-width: 500px
  * Margin: 0 auto
- Input:
  * Flex: 1
  * Height: 52px
  * Padding: 0 20px
  * Font: Inter Regular, 15px
  * Color: #000000
  * Background: #FFFFFF
  * Border: 1px solid #E8E8E8
  * Border-right: none
  * Border-radius: 0
  * Placeholder-color: #7A7A7A
  * Focus:
    - Border-color: #00A896
    - Outline: none
    - Box-shadow: inset 0 0 0 1px #00A896
- Button:
  * Height: 52px
  * Padding: 0 32px
  * Font: Inter Medium, 15px
  * Background: #000000
  * Color: #FFFFFF
  * Border: 1px solid #000000
  * Border-radius: 0
  * Cursor: pointer
  * White-space: nowrap
  * Hover:
    - Background: #00A896
    - Border-color: #00A896
    - Transition: all 0.3s ease
- Mobile:
  * Form stack vertical
  * Input width: 100%
  * Button width: 100%
  * Gap: 12px
```

### Footer

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│ KUKO                                                │
│ Pensamiento crítico para Costa Rica                │
│                                                     │
│ Investigaciones • Datos • Propuestas • Acerca de   │
│ Metodología • Transparencia • Contacto             │
│                                                     │
│ [Twitter] [Instagram] [LinkedIn]                    │
│                                                     │
│ © 2025 KUKO. Hecho en Costa Rica                   │
│                                                     │
└─────────────────────────────────────────────────────┘

Specs completas:
- Container:
  * Background: #FFFFFF
  * Border-top: 1px solid #E8E8E8
  * Padding: 60px vertical, 40px horizontal
  * Text-align: center
- Logo:
  * Font: Inter Semibold
  * Size: 15px
  * Color: #000000
  * Margin-bottom: 8px
- Tagline:
  * Font: Inter Regular
  * Size: 14px
  * Color: #7A7A7A
  * Margin-bottom: 32px
- Links Container:
  * Display: flex
  * Flex-wrap: wrap
  * Justify-content: center
  * Gap: 8px 16px
  * Margin-bottom: 32px
- Link Individual:
  * Font: Inter Regular
  * Size: 14px
  * Color: #2D2D2D
  * Text-decoration: none
  * Hover: color #00A896
  * Transition: color 0.3s ease
  * Separador " • " entre links
- Social Icons:
  * Display: flex
  * Justify-content: center
  * Gap: 24px
  * Margin-bottom: 32px
- Social Icon:
  * Size: 20px
  * Stroke-width: 1.5px
  * Color: #000000
  * Hover: color #00A896
  * Transition: color 0.3s ease
- Copyright:
  * Font: Inter Regular
  * Size: 13px
  * Color: #7A7A7A
```

---

## 📄 PÁGINA DE ARTÍCULO

### Header del Artículo

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│ • MOVILIDAD                                        │
│                                                     │
│ Sistema de Numeración para el                       │
│ Transporte Público de Costa Rica                    │
│                                                     │
│ Un análisis de 30 años de desorden en el          │
│ sistema y una propuesta basada en las              │
│ mejores prácticas internacionales                   │
│                                                     │
│ Por Carlos Cruz • 15 Enero 2025 • 18 min          │
│                                                     │
└─────────────────────────────────────────────────────┘

[Imagen Hero - Full Width, max 700px height]

Specs completas:
- Container:
  * Max-width: 760px
  * Margin: 0 auto
  * Padding: 60px 40px 40px
- Categoría Badge:
  * Display: flex
  * Align-items: center
  * Gap: 8px
  * Margin-bottom: 24px
  * Dot:
    - Size: 8px
    - Border-radius: 50%
    - Background: Color categoría
  * Text:
    - Font: Inter Regular
    - Size: 13px
    - Text-transform: uppercase
    - Letter-spacing: 0.08em
    - Color: #000000
- H1 Título:
  * Font: Inter Semibold
  * Size: 48px
  * Line-height: 1.1
  * Letter-spacing: -0.01em
  * Color: #000000
  * Margin-bottom: 20px
- Deck/Subtítulo:
  * Font: Inter Regular
  * Size: 20px
  * Line-height: 1.5
  * Color: #2D2D2D
  * Margin-bottom: 24px
- Metadata:
  * Font: Inter Regular
  * Size: 14px
  * Color: #7A7A7A
  * Separador: " • "
  * Margin-bottom: 48px
- Imagen Hero:
  * Width: 100vw (full viewport)
  * Max-height: 700px
  * Object-fit: cover
  * Margin-left: calc(-50vw + 50%)
  * Margin-bottom: 16px
- Image Caption:
  * Font: Inter Regular
  * Size: 13px
  * Color: #7A7A7A
  * Text-align: center
  * Max-width: 760px
  * Margin: 0 auto 48px
```

### Cuerpo del Artículo

```
Specs de texto base:
- Container:
  * Max-width: 680px
  * Margin: 0 auto
  * Padding: 0 40px
- Párrafo:
  * Font: Inter Regular
  * Size: 17px
  * Line-height: 1.7
  * Color: #2D2D2D
  * Margin-bottom: 24px

ELEMENTOS ESPECIALES:

1. TL;DR Box:
┌──────────────────────────────┐
│ EN RESUMEN                   │
│                              │
│ • Punto clave 1              │
│ • Punto clave 2              │
│ • Punto clave 3              │
└──────────────────────────────┘

Specs:
- Background: #FAFAFA
- Border-left: 3px solid #00A896
- Padding: 24px
- Margin: 40px 0
- Border-radius: 0
- Título "EN RESUMEN":
  * Font: Inter Semibold
  * Size: 14px
  * Text-transform: uppercase
  * Letter-spacing: 0.05em
  * Color: #000000
  * Margin-bottom: 16px
- Items:
  * Font: Inter Regular
  * Size: 16px
  * Line-height: 1.6
  * Color: #2D2D2D
  * Bullet: Small circle turquesa
  * Gap: 12px entre items

2. Headers dentro artículo:

H2:
- Font: Inter Semibold
- Size: 32px
- Line-height: 1.2
- Color: #000000
- Margin-top: 64px
- Margin-bottom: 24px

H3:
- Font: Inter Semibold
- Size: 24px
- Line-height: 1.3
- Color: #2D2D2D
- Margin-top: 48px
- Margin-bottom: 20px

3. Pull Quote:

"Texto de la cita que destaca
un punto importante del artículo"

Specs:
- Font: Inter Light (weight 300)
- Size: 24px
- Line-height: 1.4
- Font-style: normal (NO italic)
- Color: #000000
- Border-left: 3px solid #E8E8E8
- Padding-left: 32px
- Margin: 48px 0
- Max-width: 600px

4. Listas:

• Item uno con buen spacing
• Item dos con buen spacing
• Item tres

Specs:
- Bullet style: circle
- Bullet color: #00A896
- Font: Inter Regular, 17px
- Line-height: 1.7
- Color: #2D2D2D
- Margin entre items: 12px
- Padding-left: 24px

5. Visualizaciones de datos:

Specs:
- Max-width: 900px (rompe el container de texto)
- Margin: 64px auto
- Background: #FAFAFA (si necesario)
- Padding: 32px (si tiene fondo)
- Caption:
  * Font: Inter Regular
  * Size: 14px
  * Color: #7A7A7A
  * Text-align: center
  * Margin-top: 16px

6. Imágenes inline:

Specs:
- Max-width: 680px (como texto)
- Border-radius: 0
- Margin: 48px 0
- Caption:
  * Font: Inter Regular
  * Size: 14px
  * Color: #7A7A7A
  * Text-align: center
  * Margin-top: 12px

7. Blockquote/Nota:

Specs:
- Background: #FAFAFA
- Border: 1px solid #E8E8E8
- Border-radius: 0
- Padding: 20px
- Margin: 32px 0
- Font: Inter Regular (puede ser italic)
- Size: 16px
- Color: #2D2D2D
```

### Sección Fuentes

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FUENTES Y METODOLOGÍA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Datos Utilizados:
1. INEC - Censo Nacional 2022
2. ARESEP - Base de datos de rutas
3. Banco Mundial - Indicadores de transporte

Estudios Consultados:
• Autor, A. (2020). Título del estudio. Revista.
• Autor, B. (2022). Título del paper. Editorial.

[📥 Descargar Datos]  [💻 Ver en GitHub]

Specs completas:
- Section Container:
  * Background: #FAFAFA
  * Padding: 48px
  * Border-top: 1px solid #E8E8E8
  * Margin-top: 80px
- Título:
  * Font: Inter Semibold
  * Size: 18px
  * Text-transform: uppercase
  * Letter-spacing: 0.05em
  * Color: #000000
  * Margin-bottom: 8px
- Separador:
  * Width: 100%
  * Height: 1px
  * Background: #E8E8E8
  * Margin-bottom: 32px
- Subsecciones:
  * Font: Inter Semibold
  * Size: 15px
  * Color: #000000
  * Margin: 24px 0 12px
- Listas:
  * Font: Inter Regular
  * Size: 15px
  * Line-height: 1.6
  * Color: #2D2D2D
  * Margin-bottom: 8px per item
- Links en fuentes:
  * Color: #00A896
  * Text-decoration: underline
  * Hover: opacity 0.7
- Botones:
  * Display: inline-flex
  * Align-items: center
  * Gap: 8px
  * Padding: 12px 24px
  * Border: 1px solid #000000
  * Background: transparent
  * Color: #000000
  * Font: Inter Medium, 14px
  * Margin-top: 32px
  * Margin-right: 12px
  * Hover:
    - Background: #00A896
    - Border-color: #00A896
    - Color: #FFFFFF
  * Icon: 16px, same color as text
```

---

## 🎬 MICROINTERACCIONES Y ANIMACIONES

### Hover States Detallados

```css
/* Links */
a {
  color: #000000;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
}

a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: #00A896;
  transition: width 0.3s ease;
}

a:hover {
  color: #00A896;
}

a:hover::after {
  width: 100%;
}

/* Article Cards */
.article-card {
  border: 1px solid transparent;
  transition: border-color 0.4s ease-out;
}

.article-card:hover {
  border-color: #E8E8E8;
}

.article-card img {
  transition: transform 0.4s ease-out;
}

.article-card:hover img {
  transform: scale(1.02);
}

/* Buttons Primary */
.button-primary {
  background: #000000;
  color: #FFFFFF;
  transition: all 0.3s ease;
}

.button-primary:hover {
  background: #00A896;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 168, 150, 0.2);
}

/* Buttons Outline */
.button-outline {
  background: transparent;
  border: 1px solid #000000;
  color: #000000;
  transition: all 0.3s ease;
}

.button-outline:hover {
  background: #000000;
  color: #FFFFFF;
}
```

### Animaciones de Entrada

```css
/* Fade-in con translateY */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero {
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

/* Staggered animation para cards */
.article-card:nth-child(1) {
  animation: fadeInUp 0.6s ease-out 0.1s both;
}

.article-card:nth-child(2) {
  animation: fadeInUp 0.6s ease-out 0.2s both;
}

.article-card:nth-child(3) {
  animation: fadeInUp 0.6s ease-out 0.3s both;
}

/* Etc... */
```

### Scroll Behavior

```css
html {
  scroll-behavior: smooth;
}

/* Sticky nav con shadow */
.nav.scrolled {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}
```

---

## 🚫 QUÉ NO HACER

```
❌ Colores saturados o brillantes
❌ Múltiples colores simultáneos
❌ Gradientes (mantener sólidos)
❌ Sombras prominentes (solo muy sutiles)
❌ Border-radius grandes (mantener 0px o máx 4px)
❌ Animaciones complejas, rebotes, o excesivas
❌ Texturas o patterns de fondo
❌ Stock photos genéricas con gente sonriendo
❌ Iconos filled/solid (solo outline/line)
❌ Layouts cluttered o sobrecargados
❌ Tipografía decorativa o script
❌ Efectos 3D o skeuomorfismo
❌ Auto-play de videos o audio
❌ Popups o modales invasivos
❌ Carousels automáticos
❌ Parallax complejo
```

## ✅ QUÉ SÍ HACER

```
✅ Whitespace generoso (respirar)
✅ Tipografía clara, legible, con jerarquía fuerte
✅ Grid limpio y ordenado
✅ UN color de acento usado estratégicamente (<5%)
✅ Borders delgados (1px)
✅ Transiciones suaves (0.3-0.4s)
✅ Imágenes editoriales de calidad
✅ Mobile-first responsive design
✅ Performance optimizado (<3s LCP)
✅ Accesibilidad WCAG AA mínimo
✅ Contraste adecuado (4.5:1 texto, 3:1 UI)
✅ Keyboard navigation funcional
✅ Focus states visibles
✅ Alt text descriptivo en imágenes
✅ Semantic HTML5
```

---

## 📱 RESPONSIVE BREAKPOINTS

```
Mobile Small: 320-374px
Mobile: 375-767px
Tablet: 768-1199px
Desktop: 1200-1599px
Desktop Large: 1600px+

Enfoque: Mobile-first
Progressive enhancement hacia desktop
```

### Mobile Adjustments

```
Navigation:
- Hamburger icon (3 líneas, 24x24px hit area)
- Full-screen overlay menu
- Slide-in animation from right

Hero:
- Título: 32px (reducido de 56px)
- Subtítulo: 16px
- Padding vertical: 60px (reducido de 160px)

Article Cards:
- Full width (1 columna)
- Imagen ratio mantiene 3:2
- Padding texto: 16px

Stats:
- Stack vertical
- Gap: 32px
- Sin separadores verticales

Typography Scale:
- H1: 32px
- H2: 24px
- H3: 20px
- Body: 16px
- Metadata: 12px

Touch Targets:
- Mínimo 44x44px
- Links con padding generoso
- Botones fáciles de presionar
```

---

## 🎨 MOOD BOARD FINAL

**Palabras clave**:
- Limpio
- Espacioso  
- Elegante
- Minimalista
- Refinado
- Confiable
- Moderno
- Editorial
- Sobrio
- Premium
- Profesional
- Accesible

**Sensación objetivo**:
- "Esto respeta mi tiempo y atención"
- "Se siente profesional sin ser pretencioso"
- "El diseño ayuda, no distrae"
- "Es un placer leer aquí"
- "Se nota atención al detalle"
- "Confío en este contenido"

**Balance tonal**:
- 60% Minimalista/Limpio (Amama.space)
- 25% Serio/Editorial (Wired)
- 15% Único/Memorable (KUKO)

---

## 🛠️ ASSETS Y HERRAMIENTAS

### Iconografía

```
Set recomendado: Lucide Icons o Feather Icons
Estilo: Line/outline (stroke)
Grosor de línea: 1.5px
Tamaño base: 24px
Color default: #000000
Color hover/activo: #00A896
Ejemplos:
- Search: magnifying glass
- Menu: hamburger (3 lines)
- Arrow: right arrow
- Social: brand icons (Twitter, IG, LinkedIn)
- Category: relevant icons per category
```

### Tipografía

```
Font: Inter (variable font)
Fuente: Google Fonts
Weights necesarios: 300, 400, 600
URL: https://fonts.google.com/specimen/Inter

Código de importación:
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap');

Fallback stack:
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
```

### Imágenes

```
Formato preferido: WebP con JPG fallback
Compresión: ~80% quality, optimizada
Aspect ratios:
- Article hero: 16:9 o 3:2
- Article cards: 3:2
- In-article: Flexible, optimizado

Tamaños:
- Card thumbnail: 600x400px
- Hero image: 1600x900px
- In-article: Max 1200px width

Optimización:
- Lazy loading para below-fold
- Responsive srcset
- Alt text siempre presente
```

### Performance Targets

```
Core Web Vitals:
- LCP (Largest Contentful Paint): <2.5s
- FID (First Input Delay): <100ms
- CLS (Cumulative Layout Shift): <0.1

Otros:
- First Contentful Paint: <1.5s
- Time to Interactive: <3.5s
- Speed Index: <3.0s

Técnicas:
- Critical CSS inline
- Defer non-critical CSS/JS
- Font preload
- Image optimization
- Code splitting
- CDN para assets estáticos
```

---

## 📦 ENTREGABLES SOLICITADOS

1. **Homepage Desktop** (1440px width)
   - Navigation completa
   - Hero section (Opción A preferida)
   - Grid de 6-9 artículos
   - Stats section
   - Grid de 8 categorías
   - Newsletter section
   - Footer

2. **Homepage Mobile** (375px width)
   - Mismo contenido, layout adaptado
   - Hamburger menu
   - Stack vertical

3. **Página de Artículo Desktop**
   - Header completo
   - Imagen hero
   - Cuerpo con todos los elementos especiales
   - Sección fuentes al final

4. **Component Library**:
   - Article card (default, hover, focus states)
   - Stat component
   - Category card
   - Button primary
   - Button outline
   - Newsletter form
   - Navigation
   - Typography scale showcase

5. **Style Guide** (1 página):
   - Paleta completa con hex codes
   - Typography scale con ejemplos
   - Spacing system visual
   - Grid system diagram
   - Icons set completo
   - Component states (default, hover, focus, active)

---

## 💬 NOTAS FINALES

**Filosofía de diseño**:
El diseño de KUKO debe ser invisible. El usuario no debería notar el diseño, solo experimentar claridad, facilidad de lectura, y confianza en el contenido. Cada decisión de diseño debe servir al contenido investigativo.

**Inspiración final**:
Imagina que Amama.space y Wired tuvieran un hijo dedicado a investigación de datos para Costa Rica. Minimalista como Amama, serio como Wired, pero con identidad propia centrada en datos, análisis, y rigor investigativo.

**Checklist pre-launch**:
- [ ] Contraste de colores pasa WCAG AA
- [ ] Navegación funciona con teclado
- [ ] Focus states son visibles
- [ ] Alt text en todas las imágenes
- [ ] Semantic HTML implementado
- [ ] Performance targets alcanzados
- [ ] Responsive en todos los breakpoints
- [ ] No hay layout shift (CLS bajo)

---

**Fin del Design Brief Completo**

---

**Metadata del documento**:
- Versión: 1.0
- Fecha: Enero 2025
- Autor: Carlos Cruz / Claude
- Para: Proyecto KUKO
- Referencias: Wired.com + Amama.space
