# Project Page Template - Usage Guide

## Overview
The `project-template.tsx` file is a reusable template for creating individual project pages. Each project page displays a banner image, project details, and a custom masonry-style image grid.

## How to Create a New Project Page

### Step 1: Copy the Template
```bash
# Copy the template file
cp src/pages/project-template.tsx src/pages/project-name.tsx
```

### Step 2: Update the Project Data
Open your new file and update the `projectData` object (lines ~18-35):

```typescript
const projectData: ProjectData = {
  title: "Your Project Name",
  description: "Brief description of your project...",
  bannerImage: "/path/to/your/banner.jpg",
  images: [
    // Add your images here...
  ],
};
```

### Step 3: Configure Your Images
For each image, specify:
- `src`: Path to the image file
- `alt`: Alt text for accessibility
- `rowSpan`: How tall the image should be (2-5 recommended)
- `column`: Which column (1 for left, 2 for right)

**rowSpan Guide:**
- `rowSpan: 2` = Small image (~300px height)
- `rowSpan: 3` = Medium image (~450px height)
- `rowSpan: 4` = Large image (~600px height)
- `rowSpan: 5` = Extra large image (~750px height)

**Example:**
```typescript
images: [
  { src: "/assets/project/img1.jpg", alt: "Main view", rowSpan: 4, column: 1 },
  { src: "/assets/project/img2.jpg", alt: "Detail", rowSpan: 2, column: 2 },
  { src: "/assets/project/img3.jpg", alt: "Close-up", rowSpan: 5, column: 1 },
  // ... more images
]
```

### Step 4: Add Route
In `src/App.tsx`, add a route for your new project:

```typescript
<Route path="/projects/your-project-name" element={<YourProjectName />} />
```

### Step 5: Rename the Export
Change the component name from `ProjectTemplate` to match your project:

```typescript
export function YourProjectName() {
  // ... component code
}
```

## Layout Tips

### Creating Balanced Layouts
- Distribute images evenly between columns
- Alternate between small and large images for visual interest
- Keep total rowSpans roughly equal per column for balance

### Example Balanced Layout (7 images):
```typescript
// Left column: rowSpan total = 12
{ rowSpan: 4, column: 1 },  // Image 1
{ rowSpan: 5, column: 1 },  // Image 3
{ rowSpan: 3, column: 1 },  // Image 6

// Right column: rowSpan total = 11
{ rowSpan: 2, column: 2 },  // Image 2
{ rowSpan: 3, column: 2 },  // Image 4
{ rowSpan: 2, column: 2 },  // Image 5
{ rowSpan: 4, column: 2 },  // Image 7
```

### Adjusting Image Heights
If images don't look right, adjust the multiplier in the code:
- Find: `minHeight: ${image.rowSpan * 150}px`
- Change `150` to a different value (e.g., 120, 180)

## Transparent Navigation
The template is designed to work with a transparent navbar that overlaps the banner. Make sure your Navigation component supports a transparent variant or passes through the banner image.

## File Naming Convention
- Use kebab-case: `my-project-name.tsx`
- Match the file name to the project title (lowercase, hyphenated)
- Export name should be PascalCase: `MyProjectName`

## Quick Checklist
- [ ] Copied template file
- [ ] Updated project title
- [ ] Updated description
- [ ] Set banner image path
- [ ] Configured all project images with rowSpan and column
- [ ] Renamed component export
- [ ] Added route in App.tsx
- [ ] Tested the page

## Common Issues

**Images too tall/short?**
- Adjust the rowSpan values (2-5 range works best)
- Modify the multiplier (default: 150px per rowSpan)

**Columns unbalanced?**
- Count total rowSpans per column
- Redistribute images to balance the totals

**Images not loading?**
- Check file paths are correct
- Ensure images are in the public folder or properly imported

**Spacing looks off?**
- Adjust the `gap-4` class in the grid containers
- Gap is consistent for all images automatically
