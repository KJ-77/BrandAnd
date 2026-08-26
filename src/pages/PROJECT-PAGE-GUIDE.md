# Project Page Template - Usage Guide

## Overview
Every project case study renders through one shared component,
`src/components/project-layout.tsx`, which owns the banner, the write-up, the
two-column masonry grid, the scroll animation and the previous/next arrows.

An individual page file (e.g. `src/pages/cortina.tsx`) therefore contains **only
data**: image imports plus a `projectData` object. `src/pages/project-template.tsx`
is the blank version to copy.

## How to Create a New Project Page

### Step 1: Add the images
Convert the source photography to WebP and drop it in its own folder:

```
src/assets/projects/<project-slug>/
├── banner.webp        # wide 5:1 strip - roughly 2500x500
├── some-image.webp    # max 1600px wide
└── ...
```

Use descriptive kebab-case filenames (`storefront-sign.webp`, not `IMG_2043.webp`).
See `local/Claude/image-format-choice.md` for the format/quality rules.

### Step 2: Copy the Template
```bash
cp src/pages/project-template.tsx src/pages/project-name.tsx
```

### Step 3: Register the project
Add an entry to the `projects` array in `src/lib/projects.ts`:

```typescript
{
  slug: "project-name",
  title: "Project Name - Country",
  path: "/projects/project-name",
  thumbnail: projectNameThumb,   // imported from the project's asset folder
  inPortfolioGrid: false,        // true only if it already has a portfolio grid tile
}
```

This single entry drives two things:
- **Previous/next arrows** - they follow the order of this array and wrap around.
- **The portfolio carousel** - every project with `inPortfolioGrid: false` is
  listed in the "More Projects" carousel at the bottom of `/portfolio`.

If the project already has a tile in the portfolio grid, set `inPortfolioGrid: true`
and point that tile's `link` at `/projects/project-name` in `src/pages/portfolio.tsx`.

### Step 4: Fill in the Project Data
```typescript
const projectData: ProjectData = {
  slug: "project-name",          // must match src/lib/projects.ts
  title: "Project Name - Country",
  description: "Single paragraph...",        // or ["Para one...", "Para two..."]
  bannerImage: banner,
  instagram: "https://www.instagram.com/handle/",  // optional
  images: [ /* see below */ ],
};
```

### Step 5: Configure Your Images
For each image, specify:
- `src`: the imported image
- `alt`: alt text for accessibility
- `rowSpan`: vertical space reserved before the image loads (2-5)
- `column`: `1` for left, `2` for right

**Picking rowSpan.** It sets a `min-height` of `rowSpan * 150px`. That is a
*floor*, not a fixed height - the image still renders at its natural aspect ratio.
So keep it at or below the height the image will actually occupy, otherwise an
empty gap appears underneath it. In a ~630px-wide column:

| Image shape        | rowSpan |
|--------------------|---------|
| landscape ~3:2     | 2       |
| landscape ~4:3     | 3       |
| square             | 4       |
| portrait 4:5 - 2:3 | 5       |

### Step 6: Rename the Export
```typescript
export function ProjectName() {
  return <ProjectLayout project={projectData} />;
}
```

### Step 7: Add the Route
In `src/App.tsx`:

```typescript
<Route path="/projects/project-name" element={<ProjectName />} />
```

## Layout Tips

### Creating Balanced Layouts
- Distribute images evenly between the columns
- Alternate between small and large images for visual interest
- Keep the total rowSpan roughly equal per column so both columns end together

### Example Balanced Layout (7 images):
```typescript
// Left column: rowSpan total = 12
{ rowSpan: 4, column: 1 },
{ rowSpan: 5, column: 1 },
{ rowSpan: 3, column: 1 },

// Right column: rowSpan total = 11
{ rowSpan: 2, column: 2 },
{ rowSpan: 3, column: 2 },
{ rowSpan: 2, column: 2 },
{ rowSpan: 4, column: 2 },
```

## Quick Checklist
- [ ] Converted and added the WebP images (banner + grid)
- [ ] Copied the template file
- [ ] Registered the project in `src/lib/projects.ts`
- [ ] Updated slug, title, description, banner and Instagram link
- [ ] Configured all project images with rowSpan and column
- [ ] Renamed the component export
- [ ] Added the route in `App.tsx`
- [ ] Linked the portfolio grid tile, if the project has one
- [ ] Tested the page

## Common Issues

**Empty gap under an image?**
- Its `rowSpan` is taller than the image itself - lower it (see the table above)

**Columns unbalanced?**
- Count the total rowSpan per column and redistribute

**Images not loading?**
- Check the import path; images live in `src/assets/projects/<slug>/`
- Filenames are case-sensitive in the production build

**Previous/next arrows point at the wrong project?**
- Reorder the entries in `src/lib/projects.ts`; the arrows follow that array

**Spacing looks off?**
- Adjust the `gap-4` class in the grid containers in `project-layout.tsx`
  (this affects every project page)
