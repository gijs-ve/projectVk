# Events System

This project uses a centralized event management system with dynamic routing.

## How to Add a New Event

### 1. Add Event Data

Edit `/app/content/events.ts` and add a new event object to the `events` array:

```typescript
{
  id: "event2", // Unique ID - matches the image filename
  slug: "event-name", // URL-friendly slug
  date: "2026-02-20", // Format: YYYY-MM-DD
  title: {
    en: "English Title",
    nl: "Nederlandse Titel",
  },
  blurb: {
    en: "Short English description...",
    nl: "Korte Nederlandse beschrijving...",
  },
  description: {
    en: "Full English description with multiple paragraphs...",
    nl: "Volledige Nederlandse beschrijving met meerdere alinea's...",
  },
  location: "Venlo",
  startTime: "20:00",
  tags: ["Tag 1", "Tag 2"],
  venue: "Cafe Vader Klaassens",
}
```

### 2. Add Event Image

Place the event image in `/public/events/` with the filename matching the event ID:
- Example: `/public/events/event2.jpg`

### 3. Update Homepage (Optional)

To feature the event on the homepage, add it to `/app/content/site.ts`:

```typescript
events: [
  {
    id: "event2",
    slug: "event-name",
    date: "Fri 20 Feb", // Human-readable format
    title: "Event Title",
    blurb: "Short description...",
    location: "Venlo",
    startTime: "20:00",
    tags: ["Tag 1", "Tag 2"],
    venue: "Cafe Vader Klaassens",
  },
]
```

## URL Structure

Events are accessible at: `/events/[slug]/[date]`

Example: `/events/curated-by-flujas/2026-01-15`

## Event Properties

- **id**: Unique identifier (matches image filename)
- **slug**: URL-friendly name
- **date**: ISO format (YYYY-MM-DD) for sorting and routing
- **title**: Localized event titles
- **blurb**: Short description (shown in lists)
- **description**: Full description (shown on detail page)
- **location**: City/venue location
- **startTime**: Event start time (optional)
- **tags**: Array of tags to display (optional)
- **venue**: Venue name (optional)

## Helper Functions

- `getEventBySlugAndDate(slug, date)`: Find specific event
- `getAllEvents()`: Get all events, sorted by date (newest first)
- `getUpcomingEvents()`: Get future events only
- `formatEventDate(date, locale)`: Format date for display
