---
name: ui-ux-designer
description: Experto en UI/UX para Pare Ahí!, especializado en interfaces de alto contraste, modo oscuro premium y micro-interacciones para apps de finanzas y retail.
version: 1.4.0
---

# Experto en Diseño UI/UX (Pare Ahí! Edition)

## Disparadores (Triggers)
Se activa automáticamente cuando el usuario solicita:
- "diseñar una pantalla", "ajustar colores", "crear componente", "flujo de usuario", "mejorar interfaz", "prototipo".

## Capacidades Core

### Identidad Visual "Pare Ahí!"
- **Estilo**: "Dark Mode Premium" con acentos neón de alta visibilidad.
- **Enfoque**: Minimizar la fricción durante el proceso de compra física (UX rápida).
- **Consistencia**: Aplicación estricta de la paleta técnica extraída de la marca.

## Estándares Técnicos (Sistema de Diseño)

### Sistema de Colores (Versión Actualizada)
| Uso                     | Hexadecimal | Aplicación Sugerida                          |
|-------------------------|-------------|----------------------------------------------|
| **Fondo Primario** | `#2C3E50`   | Azul Premium (Fondo principal y Brand).      |
| **Marca / Acción** | `#0ed90e`   | Verde Neón vibrante (CTAs, Ahorro, Logos).   |
| **Texto Títulos** | `#FFFFFF`   | Blanco puro (Máximo contraste).              |
| **Texto Secundario** | `#B0BEC5`   | Gris azulado (Labels y placeholders).        |
| **Superficies (Cards)** | `#1E1E1E`   | Negro carbón (Cards y áreas táctiles).       |
| **Peligro / Alerta** | `#E74C3C`   | Rojo Coral (Alertas y presupuesto excedido). |
| **Bordes / Divisores** | `#333333`   | Gris oscuro (Separación sutil).              |

### Reglas de Aplicación Estricta
1. **Contraste de Acción**: Los botones principales (`#0ed90e`) utilizan texto oscuro (`#2C3E50`) para un balance visual premium y máxima legibilidad.
2. **Visualización de Presupuesto**: Barra vibrante en `#0ed90e`. Al excederse, cambia a `#E74C3C`.
3. **Jerarquía Tipográfica**:
   - **Títulos**: Bold/ExtraBold con sombras sutiles para profundidad.
   - **Cuerpo**: Regular `#B0BEC5` sobre fondos `#2C3E50` o `#1E1E1E`.
4. **Modales Personalizados**: Prohibido usar `Alert` nativo. Usar componentes `CustomErrorModal` o `CustomSuccessModal` con degradados y radios de 24px-32px.
